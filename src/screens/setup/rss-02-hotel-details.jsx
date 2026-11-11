// GENERATED from public/setup/rss-02-hotel-details/index.html by scripts/convert_legacy.py.
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
    "href": "/setup/rss-02-hotel-details/rss-02-hotel-details.css",
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

export default function SetupRss02HotelDetails() {
  return (
    <ScreenShell title="Hotel Details" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RSS-02" data-code="RSS-02" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="RSS-02" tabIndex="-1">
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
                        <span aria-current="page">{"Hotel Details"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Hotel Details"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RSS-02"}</span>
                  <div className="page-header__actions">
                    <Link className="btn pb-back" data-leads-to="RSS-01" to={"/setup/rss-01-setup-home-checklist"}>{"Back to Setup Home"}</Link>
                    <a className="btn btn--primary" href="#flow-done">{"Save changes"}</a>
                  </div>
                </div>
              </header>
              <p className="s-note" data-flow="own-hotel">
                {"This screen owns the details of this hotel: name, address, contacts, check-in and check-out times. GST numbers are on "}
                <Link data-leads-to="TXS-01" to={"/tax-setup/txs-01-gst-registrations"}>{"TXS-01"}</Link>
                {"; time zone, currency and financial year on "}
                <Link data-leads-to="AD-03" to={"/property-administration/ad-03-property-parameters"}>{"AD-03"}</Link>
                {"."}
              </p>
              <form id="rss02-form" className="stack" action="#" noValidate={true}>
                <div className="stabs">
                  <input type="radio" name="h2" id="h2-1" aria-label="Identity" defaultChecked={true} />
                  <input type="radio" name="h2" id="h2-2" aria-label="Location" />
                  <input type="radio" name="h2" id="h2-3" aria-label="Operations" />
                  <input type="radio" name="h2" id="h2-4" aria-label="Spaces" />
                  <input type="radio" name="h2" id="h2-5" aria-label="People" />
                  <input type="radio" name="h2" id="h2-6" aria-label="Finance" />
                  <input type="radio" name="h2" id="h2-7" aria-label="Guests" />
                  <input type="radio" name="h2" id="h2-8" aria-label="Systems" />
                  <input type="radio" name="h2" id="h2-r" aria-label="Rates & distribution" />
                  <input type="radio" name="h2" id="h2-9" aria-label="Review" />
                  <div className="stabs__list" role="tablist">
                    <label htmlFor="h2-1">{"Identity"}</label>
                    <label htmlFor="h2-2">{"Location"}</label>
                    <label htmlFor="h2-3">{"Operations"}</label>
                    <label htmlFor="h2-4">{"Spaces"}</label>
                    <label htmlFor="h2-5">{"People"}</label>
                    <label htmlFor="h2-6">{"Finance"}</label>
                    <label htmlFor="h2-7">{"Guests"}</label>
                    <label htmlFor="h2-8">{"Systems"}</label>
                    <label htmlFor="h2-r">{"Rates & distribution"}</label>
                    <label htmlFor="h2-9">{"Review"}</label>
                  </div>
                  <div className="stabs__panels">
                    <section className="stabs__panel" data-code="RSS-02-T1" aria-label="Identity">
                      <section className="card" data-code="RSS-02-50">
                        <h2 className="s-card-title">{"Hotel identity"}</h2>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label" htmlFor="f1">
                              {"Hotel name "}
                              <span className="field__req">{"*"}</span>
                            </label>
                            <input className="field__input" id="f1" type="text" required={true} defaultValue={"The Aviv Kochi"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f2">
                              {"Short name "}
                              <span className="field__req">{"*"}</span>
                            </label>
                            <input className="field__input" id="f2" type="text" required={true} defaultValue={"The Aviv Kochi"} />
                            <span className="field__hint">{"Shown in the top bar and on SMS"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f3">{"Property code"}</label>
                            <input className="field__input" id="f3" type="text" defaultValue={""} />
                            <span className="field__hint">{"Internal code, e.g. FKC. Not yet confirmed by the hotel"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f4">{"Property type"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f4" defaultValue={"Hotel"}>
                                <option>{"Hotel"}</option>
                                <option>{"Resort"}</option>
                                <option>{"Serviced apartments"}</option>
                                <option>{"Boutique hotel"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f5">{"Legal entity name"}</label>
                            <input className="field__input" id="f5" type="text" defaultValue={""} />
                            <span className="field__hint">{"As on the GST certificate"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f6">{"Owning group"}</label>
                            <input className="field__input" id="f6" type="text" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f7">{"Brand"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f7" defaultValue={"Aviv Hotels"}>
                                <option>{"Aviv Hotels"}</option>
                                <option>{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f8">{"Other brand name"}</label>
                            <input className="field__input" id="f8" type="text" defaultValue={""} />
                            <span className="field__hint">{"Only if Brand is Other"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f9">{"Brand code"}</label>
                            <input className="field__input" id="f9" type="text" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f10">{"Operating model"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f10" defaultValue={"Select…"}>
                                <option>{"Select…"}</option>
                                <option>{"Owned and operated"}</option>
                                <option>{"Franchise"}</option>
                                <option>{"Management contract"}</option>
                                <option>{"Lease"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f11">{"Service positioning"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f11" defaultValue={"Select…"}>
                                <option>{"Select…"}</option>
                                <option>{"Luxury"}</option>
                                <option>{"Upper upscale"}</option>
                                <option>{"Upscale"}</option>
                                <option>{"Select service"}</option>
                                <option>{"Economy"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f12">{"Total rooms"}</label>
                            <input className="field__input num" id="f12" type="number" readOnly={true} defaultValue={"92"} />
                            <span className="field__hint">{"Counted from Rooms (RSS-04)"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f13">{"Official classification"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f13" defaultValue={"Not classified"}>
                                <option>{"Not classified"}</option>
                                <option>{"3 star"}</option>
                                <option>{"4 star"}</option>
                                <option>{"5 star"}</option>
                                <option>{"5 star deluxe"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f14">{"Classification authority"}</label>
                            <input className="field__input" id="f14" type="text" defaultValue={""} />
                            <span className="field__hint">{"e.g. Ministry of Tourism"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f15">{"Classification evidence reference"}</label>
                            <input className="field__input" id="f15" type="text" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f16">{"Classification expiry"}</label>
                            <div className="dpk">
                              <button type="button" className="dpk-f field__input" id="f16" aria-haspopup="dialog">
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
                                  <select className="dpk-m" name="f16-month" aria-label="Month" defaultValue={"10"}>
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
                                  <select className="dpk-y" name="f16-year" aria-label="Year" defaultValue={"2026"}>
                                    <option value="2024" className="lp">{"2024"}</option>
                                    <option value="2025">{"2025"}</option>
                                    <option value="2026">{"2026"}</option>
                                    <option value="2027">{"2027"}</option>
                                    <option value="2028" className="lp">{"2028"}</option>
                                    <option value="2029">{"2029"}</option>
                                    <option value="2030">{"2030"}</option>
                                    <option value="2031">{"2031"}</option>
                                    <option value="2032" className="lp">{"2032"}</option>
                                    <option value="2033">{"2033"}</option>
                                    <option value="2034">{"2034"}</option>
                                    <option value="2035">{"2035"}</option>
                                    <option value="2036" className="lp">{"2036"}</option>
                                    <option value="2037">{"2037"}</option>
                                    <option value="2038">{"2038"}</option>
                                    <option value="2039">{"2039"}</option>
                                    <option value="2040" className="lp">{"2040"}</option>
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
                                    <input type="radio" name="f16" value="01" />
                                    {"1"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="02" />
                                    {"2"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="03" />
                                    {"3"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="04" />
                                    {"4"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="05" />
                                    {"5"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="06" />
                                    {"6"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="07" />
                                    {"7"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="08" />
                                    {"8"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="09" />
                                    {"9"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="10" />
                                    {"10"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="11" />
                                    {"11"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="12" />
                                    {"12"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="13" />
                                    {"13"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="14" />
                                    {"14"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="15" />
                                    {"15"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="16" />
                                    {"16"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="17" />
                                    {"17"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="18" />
                                    {"18"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="19" />
                                    {"19"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="20" />
                                    {"20"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="21" />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="22" />
                                    {"22"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="23" />
                                    {"23"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="24" />
                                    {"24"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="25" />
                                    {"25"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="26" />
                                    {"26"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="27" />
                                    {"27"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="28" />
                                    {"28"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="29" />
                                    {"29"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="30" />
                                    {"30"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f16" value="31" />
                                    {"31"}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f17">{"Website"}</label>
                            <input className="field__input" id="f17" type="url" defaultValue={"https://avivkochi.example"} />
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f18">{"Guest-facing description"}</label>
                          <textarea className="field__input field__input--area" id="f18" defaultValue={""} />
                          <span className="field__hint">{"Shown on confirmations and the booking engine"}</span>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-68">
                        <h2 className="s-card-title">{"Owner and operator"}</h2>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label" htmlFor="f19">
                              {"Owner name "}
                              <span className="field__req">{"*"}</span>
                            </label>
                            <input className="field__input" id="f19" type="text" required={true} defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f20">{"Owning company / entity"}</label>
                            <input className="field__input" id="f20" type="text" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f21">{"Designation"}</label>
                            <input className="field__input" id="f21" type="text" defaultValue={"Managing Director"} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f22">{"Owner mobile"}</label>
                            <input className="field__input num" id="f22" type="tel" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f23">{"Owner email"}</label>
                            <input className="field__input" id="f23" type="email" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f24">{"Owner PAN"}</label>
                            <input className="field__input" id="f24" type="text" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f25">{"Property owner entity"}</label>
                            <input className="field__input" id="f25" type="text" defaultValue={""} />
                            <span className="field__hint">{"Entity that owns the building"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f26">{"Operator entity"}</label>
                            <input className="field__input" id="f26" type="text" defaultValue={""} />
                            <span className="field__hint">{"Entity that runs the hotel"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-73">
                        <h2 className="s-card-title">{"Loyalty & distribution"}</h2>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label" htmlFor="f27">{"Central system property code"}</label>
                            <input className="field__input" id="f27" type="text" defaultValue={""} />
                            <span className="field__hint">{"Needed for the Aviv connection. Not yet confirmed by the hotel"}</span>
                          </div>
                          <div className="field">
                            <span className="field__label">{"Aviv Club bookings"}</span>
                            <label className="sw">
                              <input type="checkbox" role="switch" defaultChecked={true} />
                              <span className="sw__track" />
                              {"Accept Aviv Club members"}
                            </label>
                          </div>
                        </div>
                      </section>
                    </section>
                    <section className="stabs__panel" data-code="RSS-02-T2" aria-label="Location">
                      <section className="card" data-code="RSS-02-51">
                        <h2 className="s-card-title">{"Address and location"}</h2>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label" htmlFor="f28">
                              {"Street address "}
                              <span className="field__req">{"*"}</span>
                            </label>
                            <input className="field__input" id="f28" type="text" required={true} defaultValue={"Bristow Road, Willingdon Island"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f29">
                              {"City "}
                              <span className="field__req">{"*"}</span>
                            </label>
                            <input className="field__input" id="f29" type="text" required={true} defaultValue={"Kochi"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f30">{"District"}</label>
                            <input className="field__input" id="f30" type="text" defaultValue={"Ernakulam"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f31">
                              {"State "}
                              <span className="field__req">{"*"}</span>
                            </label>
                            <input className="field__input" id="f31" type="text" required={true} defaultValue={"Kerala"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f32">
                              {"Postal code "}
                              <span className="field__req">{"*"}</span>
                            </label>
                            <input className="field__input" id="f32" type="text" required={true} defaultValue={"682003"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f33">{"Country"}</label>
                            <input className="field__input" id="f33" type="text" defaultValue={"India"} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f34">{"Latitude"}</label>
                            <input className="field__input num" id="f34" type="number" defaultValue={"9.9672"} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f35">{"Longitude"}</label>
                            <input className="field__input num" id="f35" type="number" defaultValue={"76.2685"} />
                          </div>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-74">
                        <h2 className="s-card-title">{"Getting here"}</h2>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label" htmlFor="f36">{"Nearest airport"}</label>
                            <input className="field__input" id="f36" type="text" defaultValue={"Cochin International Airport"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f37">{"Airport IATA code"}</label>
                            <input className="field__input" id="f37" type="text" defaultValue={"COK"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f38">{"Airport distance"}</label>
                            <input className="field__input" id="f38" type="text" defaultValue={""} />
                            <span className="field__hint">{"in km"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f39">{"Transfer time"}</label>
                            <input className="field__input" id="f39" type="text" defaultValue={""} />
                            <span className="field__hint">{"by road, in minutes"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f40">{"Rail / metro station"}</label>
                            <input className="field__input" id="f40" type="text" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f41">{"Airport transfer"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f41" defaultValue={"Available"}>
                                <option>{"Available"}</option>
                                <option>{"On request"}</option>
                                <option>{"Not available"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"One way ₹1,940, see Add-ons"}</span>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f42">{"Arrival directions"}</label>
                          <textarea className="field__input field__input--area" id="f42" defaultValue={""} />
                          <span className="field__hint">{"Shown on the confirmation and voucher"}</span>
                        </div>
                      </section>
                    </section>
                    <section className="stabs__panel" data-code="RSS-02-T3" aria-label="Operations">
                      <section className="card" data-code="RSS-02-72">
                        <h2 className="s-card-title">{"Operations"}</h2>
                        <div className="s-grid3">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f43">{"Check-in time"}</label>
                            <input className="field__input num" id="f43" type="time" defaultValue={"15:00"} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f44">{"Check-out time"}</label>
                            <input className="field__input num" id="f44" type="time" defaultValue={"12:00"} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f45">{"Night audit time"}</label>
                            <input className="field__input num" id="f45" type="time" defaultValue={"02:00"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f46">{"Time zone"}</label>
                            <input className="field__input" id="f46" type="text" readOnly={true} defaultValue={"Asia/Kolkata"} />
                            <span className="field__hint" data-flow="owner">
                              {"Set in Property Parameters (AD-03). "}
                              <Link data-leads-to="AD-03" to={"/property-administration/ad-03-property-parameters"}>{"Change it there"}</Link>
                            </span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f47">{"Base currency"}</label>
                            <input className="field__input" id="f47" type="text" readOnly={true} defaultValue={"INR – Indian rupee (₹)"} />
                            <span className="field__hint" data-flow="owner">
                              {"Set in Property Parameters (AD-03). "}
                              <Link data-leads-to="AD-03" to={"/property-administration/ad-03-property-parameters"}>{"Change it there"}</Link>
                            </span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f48">{"Initial business date"}</label>
                            <div className="dpk">
                              <button type="button" className="dpk-f field__input" id="f48" aria-haspopup="dialog">
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
                                  <select className="dpk-m" name="f48-month" aria-label="Month" defaultValue={"10"}>
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
                                  <select className="dpk-y" name="f48-year" aria-label="Year" defaultValue={"2026"}>
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
                                    <input type="radio" name="f48" value="01" />
                                    {"1"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="02" />
                                    {"2"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="03" />
                                    {"3"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="04" />
                                    {"4"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="05" />
                                    {"5"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="06" />
                                    {"6"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="07" />
                                    {"7"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="08" />
                                    {"8"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="09" />
                                    {"9"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="10" />
                                    {"10"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="11" />
                                    {"11"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="12" />
                                    {"12"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="13" />
                                    {"13"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="14" />
                                    {"14"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="15" />
                                    {"15"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="16" />
                                    {"16"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="17" />
                                    {"17"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="18" />
                                    {"18"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="19" />
                                    {"19"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="20" />
                                    {"20"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="21" />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="22" defaultChecked={true} />
                                    {"22"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="23" />
                                    {"23"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="24" />
                                    {"24"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="25" />
                                    {"25"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="26" />
                                    {"26"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="27" />
                                    {"27"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="28" />
                                    {"28"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="29" />
                                    {"29"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="30" />
                                    {"30"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f48" value="31" />
                                    {"31"}
                                  </label>
                                </div>
                              </div>
                            </div>
                            <span className="field__hint">{"The date the system starts from"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f49">{"Business-day rollover"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f49" defaultValue={"After night audit"}>
                                <option>{"After night audit"}</option>
                                <option>{"At midnight"}</option>
                                <option>{"Manual"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f50">{"Early check-in handling"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f50" defaultValue={"Subject to availability"}>
                                <option>{"Subject to availability"}</option>
                                <option>{"Charged as extra night"}</option>
                                <option>{"Not offered"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f51">{"Late check-out handling"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f51" defaultValue={"Subject to availability"}>
                                <option>{"Subject to availability"}</option>
                                <option>{"Half-day charge"}</option>
                                <option>{"Full-day charge"}</option>
                                <option>{"Not offered"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f52">{"Primary language"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f52" defaultValue={"English"}>
                                <option>{"English"}</option>
                                <option>{"Hindi"}</option>
                                <option>{"Malayalam"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f53">{"Additional languages"}</label>
                            <input className="field__input" id="f53" type="text" defaultValue={"Hindi, Malayalam"} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f54">{"Front desk coverage"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f54" defaultValue={"24 hours"}>
                                <option>{"24 hours"}</option>
                                <option>{"Limited hours"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-92">
                        <h2 className="s-card-title">{"Start page after sign-in"}</h2>
                        <p className="field__hint rss02-lead">{"What every user sees right after signing in. Information stays inside the screens that need it, so the start page can stay calm."}</p>
                        <div className="rss02-opts">
                          <label className="rss02-opt">
                            <input type="radio" name="start-page" defaultChecked={true} />
                            <span className="rss02-opt__b">
                              <b>{"Welcome page"}</b>
                              <span>{"A greeting and the module menu in sections – no figures, no lists (recommended)"}</span>
                            </span>
                          </label>
                          <label className="rss02-opt">
                            <input type="radio" name="start-page" />
                            <span className="rss02-opt__b">
                              <b>{"Blank page"}</b>
                              <span>{"Only the top bar and the side menu"}</span>
                            </span>
                          </label>
                          <label className="rss02-opt">
                            <input type="radio" name="start-page" />
                            <span className="rss02-opt__b">
                              <b>{"Reservation dashboard"}</b>
                              <span>{"Arrivals, departures and in-house figures (RS-01)"}</span>
                            </span>
                          </label>
                          <label className="rss02-opt">
                            <input type="radio" name="start-page" />
                            <span className="rss02-opt__b">
                              <b>{"The screen the user used last"}</b>
                              <span>{"Opens where the user stopped yesterday"}</span>
                            </span>
                          </label>
                        </div>
                        <div className="rss02-sws">
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Let each user choose their own start page in My Profile"}
                          </label>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Show a greeting with the user's name"}
                          </label>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-75">
                        <h2 className="s-card-title">{"Property lifecycle"}</h2>
                        <div className="s-grid3">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f55">{"Property lifecycle"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f55" defaultValue={"Operating"}>
                                <option>{"Pre-opening"}</option>
                                <option>{"Operating"}</option>
                                <option>{"Under renovation"}</option>
                                <option>{"Temporarily closed"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f56">{"Opening date"}</label>
                            <div className="dpk">
                              <button type="button" className="dpk-f field__input" id="f56" aria-haspopup="dialog">
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
                                  <select className="dpk-m" name="f56-month" aria-label="Month" defaultValue={"10"}>
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
                                  <select className="dpk-y" name="f56-year" aria-label="Year" defaultValue={"2026"}>
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
                                    <input type="radio" name="f56" value="01" />
                                    {"1"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="02" />
                                    {"2"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="03" />
                                    {"3"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="04" />
                                    {"4"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="05" />
                                    {"5"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="06" />
                                    {"6"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="07" />
                                    {"7"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="08" />
                                    {"8"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="09" />
                                    {"9"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="10" />
                                    {"10"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="11" />
                                    {"11"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="12" />
                                    {"12"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="13" />
                                    {"13"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="14" />
                                    {"14"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="15" />
                                    {"15"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="16" />
                                    {"16"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="17" />
                                    {"17"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="18" />
                                    {"18"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="19" />
                                    {"19"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="20" />
                                    {"20"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="21" />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="22" />
                                    {"22"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="23" />
                                    {"23"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="24" />
                                    {"24"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="25" />
                                    {"25"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="26" />
                                    {"26"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="27" />
                                    {"27"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="28" />
                                    {"28"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="29" />
                                    {"29"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="30" />
                                    {"30"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f56" value="31" />
                                    {"31"}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f57">{"Renovation date"}</label>
                            <div className="dpk">
                              <button type="button" className="dpk-f field__input" id="f57" aria-haspopup="dialog">
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
                                  <select className="dpk-m" name="f57-month" aria-label="Month" defaultValue={"10"}>
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
                                  <select className="dpk-y" name="f57-year" aria-label="Year" defaultValue={"2026"}>
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
                                    <input type="radio" name="f57" value="01" />
                                    {"1"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="02" />
                                    {"2"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="03" />
                                    {"3"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="04" />
                                    {"4"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="05" />
                                    {"5"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="06" />
                                    {"6"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="07" />
                                    {"7"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="08" />
                                    {"8"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="09" />
                                    {"9"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="10" />
                                    {"10"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="11" />
                                    {"11"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="12" />
                                    {"12"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="13" />
                                    {"13"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="14" />
                                    {"14"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="15" />
                                    {"15"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="16" />
                                    {"16"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="17" />
                                    {"17"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="18" />
                                    {"18"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="19" />
                                    {"19"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="20" />
                                    {"20"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="21" />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="22" />
                                    {"22"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="23" />
                                    {"23"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="24" />
                                    {"24"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="25" />
                                    {"25"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="26" />
                                    {"26"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="27" />
                                    {"27"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="28" />
                                    {"28"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="29" />
                                    {"29"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="30" />
                                    {"30"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f57" value="31" />
                                    {"31"}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f58">{"Operating notes"}</label>
                          <textarea className="field__input field__input--area" id="f58" defaultValue={""} />
                        </div>
                      </section>
                    </section>
                    <section className="stabs__panel" data-code="RSS-02-T4" aria-label="Spaces">
                      <section className="card" data-code="RSS-02-76">
                        <h2 className="s-card-title">{"Inventory and spaces"}</h2>
                        <div className="s-grid3">
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f59">{"Declared physical keys"}</label>
                            <input className="field__input num" id="f59" type="number" defaultValue={"92"} />
                            <span className="field__hint">{"Must match the room count"}</span>
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f60">{"Buildings"}</label>
                            <input className="field__input num" id="f60" type="number" defaultValue={"1"} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f61">{"Guest floors"}</label>
                            <input className="field__input num" id="f61" type="number" defaultValue={"5"} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f62">{"Accessible rooms"}</label>
                            <input className="field__input num" id="f62" type="number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f63">{"Connecting pairs"}</label>
                            <input className="field__input num" id="f63" type="number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f64">{"Elevators"}</label>
                            <input className="field__input num" id="f64" type="number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f65">{"Meeting rooms"}</label>
                            <input className="field__input num" id="f65" type="number" defaultValue={"2"} />
                            <span className="field__hint">{"Periyar, Meenachil"}</span>
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f66">{"Largest event capacity"}</label>
                            <input className="field__input num" id="f66" type="number" defaultValue={""} />
                            <span className="field__hint">{"guests"}</span>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f67">{"Reconciliation note"}</label>
                          <textarea className="field__input field__input--area" id="f67" defaultValue={""} />
                          <span className="field__hint">{"Explain any difference between declared keys and the room list"}</span>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-77">
                        <h2 className="s-card-title">{"Facilities register"}</h2>
                        <div className="pgw">
                          <div className="s-scroll">
                            <table className="srt dt__table dt--hug" style={{"--srt-cols": "auto auto auto auto auto"}} data-mc="">
                              <caption className="sr-only">{"Facilities"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">
                                    <input className="srt-i srt-a0" type="radio" name="strss020" id="strss020-0a" aria-label="Sort by Name, lowest or A first" />
                                    <input className="srt-i srt-d0" type="radio" name="strss020" id="strss020-0d" aria-label="Sort by Name, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss020-0a">{"Name"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss020-0d" aria-hidden="true">{"Name"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a1" type="radio" name="strss020" id="strss020-1a" aria-label="Sort by Category, lowest or A first" />
                                    <input className="srt-i srt-d1" type="radio" name="strss020" id="strss020-1d" aria-label="Sort by Category, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss020-1a">{"Category"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss020-1d" aria-hidden="true">{"Category"}</label>
                                  </th>
                                  <th scope="col">{"Location"}</th>
                                  <th scope="col">
                                    <input className="srt-i srt-a3" type="radio" name="strss020" id="strss020-3a" aria-label="Sort by Hours, lowest or A first" />
                                    <input className="srt-i srt-d3" type="radio" name="strss020" id="strss020-3d" aria-label="Sort by Hours, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss020-3a">{"Hours"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss020-3d" aria-hidden="true">{"Hours"}</label>
                                  </th>
                                  <th scope="col">{"Owner"}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{"--k0": "6", "--k1": "1", "--k3": "2"}}>
                                  <td className="dt__td" data-label="Name" data-w2="" data-t="">{"Travancore Restaurant"}</td>
                                  <td className="dt__td nw" data-label="Category" data-w2="">{"Food and drink"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                </tr>
                                <tr style={{"--k0": "5", "--k1": "1", "--k3": "1"}}>
                                  <td className="dt__td nw" data-label="Name" data-w2="" data-t="">{"Seafood Grill"}</td>
                                  <td className="dt__td nw" data-label="Category" data-w2="">{"Food and drink"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-label="Hours" data-w2="">{"Oct to Mar"}</td>
                                  <td className="dt__td nw" data-e="" />
                                </tr>
                                <tr style={{"--k0": "2", "--k1": "1", "--k3": "2"}}>
                                  <td className="dt__td nw" data-label="Name" data-w2="" data-t="">{"Cochin Trade Bar"}</td>
                                  <td className="dt__td nw" data-label="Category" data-w2="">{"Food and drink"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                </tr>
                                <tr style={{"--k0": "1", "--k1": "3", "--k3": "2"}}>
                                  <td className="dt__td nw" data-label="Name" data-w2="" data-t="">{"Ayurvedic Centre"}</td>
                                  <td className="dt__td nw" data-label="Category" data-w2="">{"Wellness"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                </tr>
                                <tr style={{"--k0": "4", "--k1": "2", "--k3": "2"}}>
                                  <td className="dt__td nw" data-label="Name" data-w2="" data-t="">{"Periyar hall"}</td>
                                  <td className="dt__td nw" data-label="Category" data-w2="">{"Meeting space"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                </tr>
                                <tr style={{"--k0": "3", "--k1": "2", "--k3": "2"}}>
                                  <td className="dt__td nw" data-label="Name" data-w2="" data-t="">{"Meenachil hall"}</td>
                                  <td className="dt__td nw" data-label="Category" data-w2="">{"Meeting space"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
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
                                  <b>{"1–6"}</b>
                                  {" of 6"}
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
                                  <b>{"1–6"}</b>
                                  {" of 6"}
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
                                  <b>{"1–6"}</b>
                                  {" of 6"}
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
                                  <b>{"1–6"}</b>
                                  {" of 6"}
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
                                  <b>{"1–6"}</b>
                                  {" of 6"}
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
                        <div className="s-actions s-actions--start">
                          <a className="btn" href="#rss02-add-facility">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Add facility"}
                          </a>
                        </div>
                      </section>
                    </section>
                    <section className="stabs__panel" data-code="RSS-02-T5" aria-label="People">
                      <section className="card" data-code="RSS-02-43">
                        <h2 className="s-card-title">{"Reservation contact"}</h2>
                        <div className="s-grid3">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f68">
                              {"Reservations phone "}
                              <span className="field__req">{"*"}</span>
                            </label>
                            <input className="field__input num" id="f68" type="tel" required={true} defaultValue={"+91 484 000 0000"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f69">
                              {"Reservations email "}
                              <span className="field__req">{"*"}</span>
                            </label>
                            <input className="field__input" id="f69" type="email" required={true} defaultValue={"reservations@avivkochi.example"} />
                          </div>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-78">
                        <h2 className="s-card-title">{"Contact directory"}</h2>
                        <div className="pgw">
                          <div className="s-scroll">
                            <table className="srt dt__table dt--hug" style={{"--srt-cols": "auto auto auto auto auto auto"}} data-mc="">
                              <caption className="sr-only">{"Contact directory"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">
                                    <input className="srt-i srt-a0" type="radio" name="strss021" id="strss021-0a" aria-label="Sort by Role, lowest or A first" />
                                    <input className="srt-i srt-d0" type="radio" name="strss021" id="strss021-0d" aria-label="Sort by Role, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss021-0a">{"Role"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss021-0d" aria-hidden="true">{"Role"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a1" type="radio" name="strss021" id="strss021-1a" aria-label="Sort by Name, lowest or A first" />
                                    <input className="srt-i srt-d1" type="radio" name="strss021" id="strss021-1d" aria-label="Sort by Name, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss021-1a">{"Name"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss021-1d" aria-hidden="true">{"Name"}</label>
                                  </th>
                                  <th scope="col">{"Email"}</th>
                                  <th scope="col">{"Phone"}</th>
                                  <th scope="col">
                                    <input className="srt-i srt-a4" type="radio" name="strss021" id="strss021-4a" aria-label="Sort by Coverage, lowest or A first" />
                                    <input className="srt-i srt-d4" type="radio" name="strss021" id="strss021-4d" aria-label="Sort by Coverage, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss021-4a">{"Coverage"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss021-4d" aria-hidden="true">{"Coverage"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a5" type="radio" name="strss021" id="strss021-5a" aria-label="Sort by Escalation, lowest or A first" />
                                    <input className="srt-i srt-d5" type="radio" name="strss021" id="strss021-5d" aria-label="Sort by Escalation, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss021-5a">{"Escalation"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss021-5d" aria-hidden="true">{"Escalation"}</label>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{"--k0": "2", "--k1": "4", "--k4": "1", "--k5": "3"}}>
                                  <td className="dt__td nw" data-label="Role" data-w2="" data-t="">{"General Manager"}</td>
                                  <td className="dt__td nw" data-label="Name" data-w2="">{"Vikram Nathan"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-label="Coverage" data-w2="">{"Daily"}</td>
                                  <td className="dt__td nw" data-label="Escalation" data-w2="">{"Level 3"}</td>
                                </tr>
                                <tr style={{"--k0": "1", "--k1": "3", "--k4": "1", "--k5": "2"}}>
                                  <td className="dt__td nw" data-label="Role" data-w2="" data-t="">{"Front Office Manager"}</td>
                                  <td className="dt__td nw" data-label="Name" data-w2="">{"Meera Prem"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-label="Coverage" data-w2="">{"Daily"}</td>
                                  <td className="dt__td nw" data-label="Escalation" data-w2="">{"Level 2"}</td>
                                </tr>
                                <tr style={{"--k0": "3", "--k1": "1", "--k4": "1", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Role" data-w2="" data-t="">{"Reservation Manager"}</td>
                                  <td className="dt__td nw" data-label="Name" data-w2="">{"Anita Mohan"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-label="Coverage" data-w2="">{"Daily"}</td>
                                  <td className="dt__td nw" data-label="Escalation" data-w2="">{"Level 1"}</td>
                                </tr>
                                <tr style={{"--k0": "4", "--k1": "2", "--k4": "2", "--k5": "2"}}>
                                  <td className="dt__td nw" data-label="Role" data-w2="" data-t="">{"Revenue Manager"}</td>
                                  <td className="dt__td nw" data-label="Name" data-w2="">{"Arjun Dev"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-label="Coverage" data-w2="">{"Weekdays"}</td>
                                  <td className="dt__td nw" data-label="Escalation" data-w2="">{"Level 2"}</td>
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
                              <input className="pg-in" type="radio" name="pg2r10" id="pg2r10p1" defaultChecked={true} />
                              <label className="pg-n" htmlFor="pg2r10p1" aria-label="Page 1">{"1"}</label>
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
                              <input className="pg-in" type="radio" name="pg2r15" id="pg2r15p1" defaultChecked={true} />
                              <label className="pg-n" htmlFor="pg2r15p1" aria-label="Page 1">{"1"}</label>
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
                              <input className="pg-in" type="radio" name="pg2r20" id="pg2r20p1" defaultChecked={true} />
                              <label className="pg-n" htmlFor="pg2r20p1" aria-label="Page 1">{"1"}</label>
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
                              <input className="pg-in" type="radio" name="pg2r25" id="pg2r25p1" defaultChecked={true} />
                              <label className="pg-n" htmlFor="pg2r25p1" aria-label="Page 1">{"1"}</label>
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
                              <input className="pg-in" type="radio" name="pg2r30" id="pg2r30p1" defaultChecked={true} />
                              <label className="pg-n" htmlFor="pg2r30p1" aria-label="Page 1">{"1"}</label>
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
                        <div className="s-actions s-actions--start">
                          <a className="btn" href="#rss02-add-contact">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Add contact"}
                          </a>
                        </div>
                      </section>
                    </section>
                    <section className="stabs__panel" data-code="RSS-02-T6" aria-label="Finance">
                      <section className="card" data-code="RSS-02-26">
                        <h2 className="s-card-title">{"Tax identity"}</h2>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label" htmlFor="f70">
                              {"GSTIN "}
                              <span className="field__req">{"*"}</span>
                            </label>
                            <input className="field__input" id="f70" type="text" required={true} defaultValue={"32AACCE1226H1Z9"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f71">{"PAN"}</label>
                            <input className="field__input" id="f71" type="text" defaultValue={"AACCE1226H"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f72">{"GST state code"}</label>
                            <input className="field__input" id="f72" type="text" defaultValue={"32"} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f73">{"Tax registration status"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f73" defaultValue={"Registered"}>
                                <option>{"Registered"}</option>
                                <option>{"Composition"}</option>
                                <option>{"Unregistered"}</option>
                                <option>{"Applied for"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f74">{"Company registration number"}</label>
                            <input className="field__input" id="f74" type="text" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f75">{"Tax jurisdiction"}</label>
                            <input className="field__input" id="f75" type="text" defaultValue={"Kerala"} />
                          </div>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-79">
                        <h2 className="s-card-title">{"Invoicing"}</h2>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label" htmlFor="f76">{"Invoice legal name"}</label>
                            <input className="field__input" id="f76" type="text" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f77">{"Financial year begins"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f77" disabled={true} defaultValue={"1 April"}>
                                <option>{"1 April"}</option>
                                <option>{"1 January"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint" data-flow="owner">
                              {"Set in Property Parameters (AD-03). "}
                              <Link data-leads-to="AD-03" to={"/property-administration/ad-03-property-parameters"}>{"Change it there"}</Link>
                            </span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f78">{"Invoice prefix"}</label>
                            <input className="field__input" id="f78" type="text" defaultValue={"FK"} />
                            <span className="field__hint">{"Printed before the invoice number"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f79">{"Finance policy reference"}</label>
                            <input className="field__input" id="f79" type="text" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="x1">{"E-invoice (IRN) applicable"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="x1" defaultValue={"Applies to bills for GST-registered companies"}>
                                <option>{"Applies to bills for GST-registered companies"}</option>
                                <option>{"Not applicable yet"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Bills to registered companies carry an invoice reference number"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="x2">{"Tax rounding"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="x2" disabled={true} defaultValue={"Per night, nearest paisa"}>
                                <option>{"Per night, nearest paisa"}</option>
                                <option>{"Per invoice, nearest paisa"}</option>
                                <option>{"Per night, nearest rupee"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint" data-flow="owner">
                              {"Set in Taxes (RSS-06). "}
                              <Link data-leads-to="RSS-06" to={"/setup/rss-06-taxes"}>{"Change it there"}</Link>
                            </span>
                            <span className="field__hint">{"Finance approves the rule"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="x3">{"Tax rate changes use the date of"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="x3" disabled={true} defaultValue={"The stay night"}>
                                <option>{"The stay night"}</option>
                                <option>{"The invoice"}</option>
                                <option>{"The payment"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint" data-flow="owner">
                              {"Set in Taxes (RSS-06). "}
                              <Link data-leads-to="RSS-06" to={"/setup/rss-06-taxes"}>{"Change it there"}</Link>
                            </span>
                            <span className="field__hint">{"Finance must approve; a booking date alone never decides the tax"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="x4">{"Initial authorised administrator"}</label>
                            <input className="field__input" id="x4" type="text" defaultValue={""} />
                            <span className="field__hint">{"The first person who can switch features on"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="x5">{"Who approves changes to this page"}</label>
                            <input className="field__input" id="x5" type="text" defaultValue={""} />
                            <span className="field__hint">{"Name or role; every change records who, when, old and new value and the reason"}</span>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f80">{"Billing address"}</label>
                          <textarea className="field__input field__input--area" id="f80" defaultValue={"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"} />
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-80">
                        <h2 className="s-card-title">{"Registration register"}</h2>
                        <div className="pgw">
                          <div className="s-scroll">
                            <table className="srt dt__table dt--hug" style={{"--srt-cols": "auto auto auto auto auto auto"}} data-mc="">
                              <caption className="sr-only">{"Registrations"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">
                                    <input className="srt-i srt-a0" type="radio" name="strss022" id="strss022-0a" aria-label="Sort by Type, lowest or A first" />
                                    <input className="srt-i srt-d0" type="radio" name="strss022" id="strss022-0d" aria-label="Sort by Type, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss022-0a">{"Type"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss022-0d" aria-hidden="true">{"Type"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a1" type="radio" name="strss022" id="strss022-1a" aria-label="Sort by Reference, lowest or A first" />
                                    <input className="srt-i srt-d1" type="radio" name="strss022" id="strss022-1d" aria-label="Sort by Reference, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss022-1a">{"Reference"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss022-1d" aria-hidden="true">{"Reference"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a2" type="radio" name="strss022" id="strss022-2a" aria-label="Sort by Authority, lowest or A first" />
                                    <input className="srt-i srt-d2" type="radio" name="strss022" id="strss022-2d" aria-label="Sort by Authority, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss022-2a">{"Authority"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss022-2d" aria-hidden="true">{"Authority"}</label>
                                  </th>
                                  <th scope="col">{"Expiry"}</th>
                                  <th scope="col">
                                    <input className="srt-i srt-a4" type="radio" name="strss022" id="strss022-4a" aria-label="Sort by Owner, lowest or A first" />
                                    <input className="srt-i srt-d4" type="radio" name="strss022" id="strss022-4d" aria-label="Sort by Owner, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss022-4a">{"Owner"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss022-4d" aria-hidden="true">{"Owner"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a5" type="radio" name="strss022" id="strss022-5a" aria-label="Sort by Status, lowest or A first" />
                                    <input className="srt-i srt-d5" type="radio" name="strss022" id="strss022-5d" aria-label="Sort by Status, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss022-5a">{"Status"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss022-5d" aria-hidden="true">{"Status"}</label>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{"--k0": "3", "--k1": "1", "--k2": "1", "--k4": "1", "--k5": "2"}}>
                                  <td className="dt__td nw" data-label="Type" data-w2="" data-t="">{"GST certificate"}</td>
                                  <td className="dt__td nw" data-label="Reference" data-w2="">{"32AACCE1226H1Z9"}</td>
                                  <td className="dt__td nw" data-label="Authority" data-w2="">{"GST Department"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-label="Owner">{"Finance"}</td>
                                  <td className="dt__td" data-label="Status" data-s="">
                                    <span className="pill pill--ready">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Valid"}
                                    </span>
                                  </td>
                                </tr>
                                <tr style={{"--k0": "1", "--k1": "2", "--k2": "2", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Type" data-w2="" data-t="">{"Fire safety"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td" data-label="Status" data-s="">
                                    <span className="pill pill--tentative">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#clock" />
                                      </svg>
                                      {"To add"}
                                    </span>
                                  </td>
                                </tr>
                                <tr style={{"--k0": "2", "--k1": "2", "--k2": "2", "--k4": "2", "--k5": "1"}}>
                                  <td className="dt__td nw" data-label="Type" data-w2="" data-t="">{"FSSAI licence"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td" data-label="Status" data-s="">
                                    <span className="pill pill--tentative">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#clock" />
                                      </svg>
                                      {"To add"}
                                    </span>
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
                                  <b>{"1–3"}</b>
                                  {" of 3"}
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
                                  <b>{"1–3"}</b>
                                  {" of 3"}
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
                                  <b>{"1–3"}</b>
                                  {" of 3"}
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
                                  <b>{"1–3"}</b>
                                  {" of 3"}
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
                                  <b>{"1–3"}</b>
                                  {" of 3"}
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
                        <div className="s-actions s-actions--start">
                          <a className="btn" href="#rss02-add-registration">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Add registration"}
                          </a>
                        </div>
                      </section>
                    </section>
                    <section className="stabs__panel" data-code="RSS-02-T7" aria-label="Guests">
                      <section className="card" data-code="RSS-02-81">
                        <h2 className="s-card-title">{"Guest experience"}</h2>
                        <div className="s-grid3">
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f81">{"Minimum check-in age"}</label>
                            <input className="field__input num" id="f81" type="number" defaultValue={"18"} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f82">{"Smoking policy"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f82" defaultValue={"Designated areas only"}>
                                <option>{"Non-smoking property"}</option>
                                <option>{"Designated areas only"}</option>
                                <option>{"Smoking rooms available"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f83">{"Pet policy"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f83" defaultValue={"Not allowed"}>
                                <option>{"Not allowed"}</option>
                                <option>{"Allowed"}</option>
                                <option>{"Allowed on request"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f84">{"Pet conditions"}</label>
                            <input className="field__input" id="f84" type="text" defaultValue={""} />
                            <span className="field__hint">{"Only if pets are allowed"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f85">{"Service animal policy"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f85" defaultValue={"Welcome"}>
                                <option>{"Welcome"}</option>
                                <option>{"On request"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f86">{"Parking and EV details"}</label>
                            <input className="field__input" id="f86" type="text" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f87">{"Guest internet"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f87" defaultValue={"Free Wi-Fi"}>
                                <option>{"Free Wi-Fi"}</option>
                                <option>{"Paid Wi-Fi"}</option>
                                <option>{"Not available"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f88">{"Children / extra bed policy reference"}</label>
                            <input className="field__input" id="f88" type="text" defaultValue={""} />
                            <span className="field__hint">{"Children up to 11 free with existing beds (max 2); extra bed ₹1,500 a night"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-82">
                        <h2 className="s-card-title">{"Accessibility"}</h2>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label" htmlFor="f89">{"Accessibility contact"}</label>
                            <input className="field__input" id="f89" type="text" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f90">{"Assessment owner"}</label>
                            <input className="field__input" id="f90" type="text" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f91">{"Assessment date"}</label>
                            <div className="dpk">
                              <button type="button" className="dpk-f field__input" id="f91" aria-haspopup="dialog">
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
                                  <select className="dpk-m" name="f91-month" aria-label="Month" defaultValue={"10"}>
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
                                  <select className="dpk-y" name="f91-year" aria-label="Year" defaultValue={"2026"}>
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
                                    <input type="radio" name="f91" value="01" />
                                    {"1"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="02" />
                                    {"2"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="03" />
                                    {"3"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="04" />
                                    {"4"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="05" />
                                    {"5"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="06" />
                                    {"6"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="07" />
                                    {"7"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="08" />
                                    {"8"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="09" />
                                    {"9"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="10" />
                                    {"10"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="11" />
                                    {"11"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="12" />
                                    {"12"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="13" />
                                    {"13"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="14" />
                                    {"14"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="15" />
                                    {"15"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="16" />
                                    {"16"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="17" />
                                    {"17"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="18" />
                                    {"18"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="19" />
                                    {"19"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="20" />
                                    {"20"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="21" />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="22" />
                                    {"22"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="23" />
                                    {"23"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="24" />
                                    {"24"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="25" />
                                    {"25"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="26" />
                                    {"26"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="27" />
                                    {"27"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="28" />
                                    {"28"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="29" />
                                    {"29"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="30" />
                                    {"30"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f91" value="31" />
                                    {"31"}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f92">{"Evidence reference"}</label>
                            <input className="field__input" id="f92" type="text" defaultValue={""} />
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f93">{"Accessibility statement"}</label>
                          <textarea className="field__input field__input--area" id="f93" defaultValue={""} />
                        </div>
                        <div className="field">
                          <span className="field__label">{"Accessibility checklist"}</span>
                          <div className="row">
                            <div className="row">
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Step-free entrance"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Accessible lift"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Accessible rooms"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Accessible bathroom"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Accessible parking"}
                              </label>
                              <label className="check">
                                <input className="check__input" type="checkbox" />
                                <span className="check__box" />
                                {"Visual alarms"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </section>
                    </section>
                    <section className="stabs__panel" data-code="RSS-02-T8" aria-label="Systems">
                      <section className="card" data-code="RSS-02-83">
                        <h2 className="s-card-title">{"Brand standards"}</h2>
                        <div className="s-grid3">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f94">{"Brand review state"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f94" defaultValue={"Not started"}>
                                <option>{"Not started"}</option>
                                <option>{"In review"}</option>
                                <option>{"Approved"}</option>
                                <option>{"Changes requested"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f95">{"Brand standard reference"}</label>
                            <input className="field__input" id="f95" type="text" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f96">{"Brand evidence"}</label>
                            <input className="field__input" id="f96" type="text" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f97">{"Brand contact"}</label>
                            <input className="field__input" id="f97" type="text" defaultValue={""} />
                          </div>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-84">
                        <h2 className="s-card-title">{"Privacy and security"}</h2>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label" htmlFor="f98">{"Privacy contact"}</label>
                            <input className="field__input" id="f98" type="text" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f99">{"Privacy notice URL"}</label>
                            <input className="field__input" id="f99" type="url" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f100">{"Retention policy reference"}</label>
                            <input className="field__input" id="f100" type="text" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f101">{"Security contact"}</label>
                            <input className="field__input" id="f101" type="text" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f102">{"Incident plan reference"}</label>
                            <input className="field__input" id="f102" type="text" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f103">{"Go-live date"}</label>
                            <div className="dpk">
                              <button type="button" className="dpk-f field__input" id="f103" aria-haspopup="dialog">
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
                                  <select className="dpk-m" name="f103-month" aria-label="Month" defaultValue={"10"}>
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
                                  <select className="dpk-y" name="f103-year" aria-label="Year" defaultValue={"2026"}>
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
                                    <input type="radio" name="f103" value="01" />
                                    {"1"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="02" />
                                    {"2"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="03" />
                                    {"3"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="04" />
                                    {"4"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="05" />
                                    {"5"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="06" />
                                    {"6"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="07" />
                                    {"7"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="08" />
                                    {"8"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="09" />
                                    {"9"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="10" />
                                    {"10"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="11" />
                                    {"11"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="12" />
                                    {"12"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="13" />
                                    {"13"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="14" />
                                    {"14"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="15" />
                                    {"15"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="16" />
                                    {"16"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="17" />
                                    {"17"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="18" />
                                    {"18"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="19" />
                                    {"19"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="20" />
                                    {"20"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="21" />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="22" />
                                    {"22"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="23" />
                                    {"23"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="24" />
                                    {"24"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="25" />
                                    {"25"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="26" />
                                    {"26"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="27" />
                                    {"27"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="28" />
                                    {"28"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="29" />
                                    {"29"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="30" />
                                    {"30"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="f103" value="31" />
                                    {"31"}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f104">{"Integration notes"}</label>
                          <textarea className="field__input field__input--area" id="f104" defaultValue={""} />
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-85">
                        <h2 className="s-card-title">{"Systems register"}</h2>
                        <div className="pgw">
                          <div className="s-scroll">
                            <table className="srt dt__table dt--hug" style={{"--srt-cols": "auto auto auto auto auto auto"}} data-mc="">
                              <caption className="sr-only">{"Systems"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">
                                    <input className="srt-i srt-a0" type="radio" name="strss023" id="strss023-0a" aria-label="Sort by System, lowest or A first" />
                                    <input className="srt-i srt-d0" type="radio" name="strss023" id="strss023-0d" aria-label="Sort by System, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss023-0a">{"System"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss023-0d" aria-hidden="true">{"System"}</label>
                                  </th>
                                  <th scope="col">
                                    <input className="srt-i srt-a1" type="radio" name="strss023" id="strss023-1a" aria-label="Sort by Provider, lowest or A first" />
                                    <input className="srt-i srt-d1" type="radio" name="strss023" id="strss023-1d" aria-label="Sort by Provider, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss023-1a">{"Provider"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss023-1d" aria-hidden="true">{"Provider"}</label>
                                  </th>
                                  <th scope="col">{"External ID"}</th>
                                  <th scope="col">
                                    <input className="srt-i srt-a3" type="radio" name="strss023" id="strss023-3a" aria-label="Sort by Owner, lowest or A first" />
                                    <input className="srt-i srt-d3" type="radio" name="strss023" id="strss023-3d" aria-label="Sort by Owner, highest or Z first" />
                                    <label className="srt-l srt-l--a" htmlFor="strss023-3a">{"Owner"}</label>
                                    <label className="srt-l srt-l--d" htmlFor="strss023-3d" aria-hidden="true">{"Owner"}</label>
                                  </th>
                                  <th scope="col">{"State"}</th>
                                  <th scope="col">{"Evidence"}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{"--k0": "1", "--k1": "1", "--k3": "3"}}>
                                  <td className="dt__td" data-label="System" data-w="" data-t="">{"Central reservation system (CRS)"}</td>
                                  <td className="dt__td nw" data-label="Provider" data-w2="">{"Aviv"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-label="Owner" data-w2="">{"Revenue Manager"}</td>
                                  <td className="dt__td" data-label="State" data-w2="" data-s="">
                                    <span className="pill pill--tentative">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#clock" />
                                      </svg>
                                      {"Simulated"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="" />
                                </tr>
                                <tr style={{"--k0": "2", "--k1": "2", "--k3": "3"}}>
                                  <td className="dt__td nw" data-label="System" data-w2="" data-t="">{"Channel manager"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-label="Owner" data-w2="">{"Revenue Manager"}</td>
                                  <td className="dt__td" data-label="State" data-w2="" data-s="">
                                    <span className="pill pill--tentative">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#clock" />
                                      </svg>
                                      {"Simulated"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="" />
                                </tr>
                                <tr style={{"--k0": "3", "--k1": "2", "--k3": "1"}}>
                                  <td className="dt__td nw" data-label="System" data-w2="" data-t="">{"Payment gateway"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-label="Owner" data-w2="">{"Accounts"}</td>
                                  <td className="dt__td" data-label="State" data-w2="" data-s="">
                                    <span className="pill pill--tentative">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#clock" />
                                      </svg>
                                      {"Simulated"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="" />
                                </tr>
                                <tr style={{"--k0": "4", "--k1": "2", "--k3": "2"}}>
                                  <td className="dt__td" data-label="System" data-w2="" data-t="">{"WhatsApp / SMS / email"}</td>
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-e="" />
                                  <td className="dt__td nw" data-label="Owner" data-w2="">{"Front Office Manager"}</td>
                                  <td className="dt__td" data-label="State" data-w2="" data-s="">
                                    <span className="pill pill--tentative">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#clock" />
                                      </svg>
                                      {"Simulated"}
                                    </span>
                                  </td>
                                  <td className="dt__td nw" data-e="" />
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
                              <input className="pg-in" type="radio" name="pg4r10" id="pg4r10p1" defaultChecked={true} />
                              <label className="pg-n" htmlFor="pg4r10p1" aria-label="Page 1">{"1"}</label>
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
                              <input className="pg-in" type="radio" name="pg4r15" id="pg4r15p1" defaultChecked={true} />
                              <label className="pg-n" htmlFor="pg4r15p1" aria-label="Page 1">{"1"}</label>
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
                              <input className="pg-in" type="radio" name="pg4r20" id="pg4r20p1" defaultChecked={true} />
                              <label className="pg-n" htmlFor="pg4r20p1" aria-label="Page 1">{"1"}</label>
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
                              <input className="pg-in" type="radio" name="pg4r25" id="pg4r25p1" defaultChecked={true} />
                              <label className="pg-n" htmlFor="pg4r25p1" aria-label="Page 1">{"1"}</label>
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
                              <input className="pg-in" type="radio" name="pg4r30" id="pg4r30p1" defaultChecked={true} />
                              <label className="pg-n" htmlFor="pg4r30p1" aria-label="Page 1">{"1"}</label>
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
                        <div className="s-actions s-actions--start">
                          <a className="btn" href="#rss02-add-system">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Add system"}
                          </a>
                        </div>
                      </section>
                    </section>
                    <section className="stabs__panel" data-code="RSS-02-T10" aria-label="Rates & distribution">
                      <section className="card" data-code="RSS-02-90">
                        <h2 className="s-card-title">{"Rate grid"}</h2>
                        <p className="field__hint rss02-lead">{"The rack rate of every room type, meal plan and occupancy – set once when the hotel is created. Rate plans, company rates, group rates and the channel manager all start from this grid."}</p>
                        <div className="rss02-chips">
                          <span className="rss02-chips__l">{"Occupancies"}</span>
                          <label className="arl-col">
                            <input type="checkbox" defaultChecked={true} />
                            {"Single (SGL)"}
                          </label>
                          <label className="arl-col">
                            <input type="checkbox" defaultChecked={true} />
                            {"Double (DBL)"}
                          </label>
                          <label className="arl-col">
                            <input type="checkbox" defaultChecked={true} />
                            {"Triple (TPL)"}
                          </label>
                          <label className="arl-col">
                            <input type="checkbox" defaultChecked={true} />
                            {"Extra bed"}
                          </label>
                          <span className="rss02-chips__l">{"Meal plans"}</span>
                          <label className="arl-col">
                            <input type="checkbox" defaultChecked={true} />
                            {"EP"}
                          </label>
                          <label className="arl-col">
                            <input type="checkbox" defaultChecked={true} />
                            {"CP"}
                          </label>
                          <label className="arl-col">
                            <input type="checkbox" defaultChecked={true} />
                            {"MAP"}
                          </label>
                          <label className="arl-col">
                            <input type="checkbox" defaultChecked={true} />
                            {"AP"}
                          </label>
                        </div>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label">{"Rack rate is quoted"}</label>
                            <div className="field__wrap">
                              <select aria-label="Rack rate is quoted" className="field__input field__input--select" defaultValue={"Per room per night, by occupancy and meal plan"}>
                                <option>{"Per room per night, by occupancy and meal plan"}</option>
                                <option>{"Per person per night"}</option>
                              </select>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label">{"Extra bed (₹ per night)"}</label>
                            <div className="field__wrap">
                              <input aria-label="Extra bed (₹ per night)" className="field__input num" type="text" defaultValue={"1,500"} />
                            </div>
                            <span className="field__hint">{"Charged for a third adult or a child above 11"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label">{"Child 6 – 11 without a bed"}</label>
                            <div className="field__wrap">
                              <select aria-label="Child 6 – 11 without a bed" className="field__input field__input--select" defaultValue={"Meals only (half the meal rate)"}>
                                <option>{"Meals only (half the meal rate)"}</option>
                                <option>{"Free"}</option>
                                <option>{"Fixed amount"}</option>
                              </select>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label">{"Weekend uplift, Friday and Saturday (%)"}</label>
                            <div className="field__wrap">
                              <input aria-label="Weekend uplift, Friday and Saturday (%)" className="field__input num" type="text" defaultValue={"10"} />
                            </div>
                            <span className="field__hint">{"On top of the season factor"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label">{"Round rates to"}</label>
                            <div className="field__wrap">
                              <select aria-label="Round rates to" className="field__input field__input--select" defaultValue={"Nearest ₹5"}>
                                <option>{"Nearest ₹5"}</option>
                                <option>{"Nearest ₹10"}</option>
                                <option>{"Nearest ₹1"}</option>
                              </select>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label">{"Rates are shown"}</label>
                            <div className="field__wrap">
                              <select aria-label="Rates are shown" className="field__input field__input--select" defaultValue={"Before GST"}>
                                <option>{"Before GST"}</option>
                                <option>{"Including GST"}</option>
                              </select>
                            </div>
                            <span className="field__hint">{"GST slab follows the price charged: 5 % up to ₹7,500, 18 % above"}</span>
                          </div>
                        </div>
                        <h3 className="rss02-sub">{"Seasons used by every rate grid"}</h3>
                        <div className="s-scroll">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Seasons of the hotel"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Season"}</th>
                                <th scope="col">{"Dates"}</th>
                                <th scope="col" className="dt__th--right">{"Factor on the rack rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Season" data-w2="" data-t="">
                                  <b>{"Regular"}</b>
                                </td>
                                <td className="dt__td" data-label="Dates" data-w2="">{"1 Oct – 19 Dec · 6 Jan – 31 Mar"}</td>
                                <td className="dt__td dt__td--right num" data-label="Factor on the rack rate" data-w2="">{"100 % (base)"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Season" data-w2="" data-t="">
                                  <b>{"Peak"}</b>
                                </td>
                                <td className="dt__td" data-label="Dates" data-w2="">{"20 Dec – 5 Jan"}</td>
                                <td className="dt__td dt__td--right num" data-label="Factor on the rack rate" data-w2="">{"135 %"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Season" data-w2="" data-t="">
                                  <b>{"Shoulder"}</b>
                                </td>
                                <td className="dt__td" data-label="Dates" data-w2="">{"1 Apr – 31 May"}</td>
                                <td className="dt__td dt__td--right num" data-label="Factor on the rack rate" data-w2="">{"95 %"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Season" data-w2="" data-t="">
                                  <b>{"Monsoon"}</b>
                                </td>
                                <td className="dt__td" data-label="Dates" data-w2="">{"1 Jun – 30 Sep"}</td>
                                <td className="dt__td dt__td--right num" data-label="Factor on the rack rate" data-w2="">{"85 %"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="field__hint">
                          {"Prices come from the Rate Calendar (RSS-08) for 1 and 2 adults; meal plans differ by the meal values of RSS-05. Season dates are kept in "}
                          <Link data-leads-to="RSS-09" to={"/setup/rss-09-seasons-and-special-dates"}>{"Seasons and Special Dates"}</Link>
                          {". Company, agent and group grids take their season dates from here and can add their own date ranges."}
                        </p>
                        <h3 className="rss02-sub">{"Rack rate grid · Regular (base season), weekday"}</h3>
                        <div className="s-scroll rss02-gridscroll">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Rack rate grid"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Room type"}</th>
                                <th scope="col">{"Meal plan"}</th>
                                <th scope="col">{"Single (SGL)"}</th>
                                <th scope="col">{"Double (DBL)"}</th>
                                <th scope="col">{"Triple (TPL)"}</th>
                                <th scope="col" className="dt__th--right">{"Extra adult (bed + meals)"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"GDLX"}</span>
                                  {" Garden Deluxe Room"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Single (SGL)" defaultValue={"6,600"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Double (DBL)" defaultValue={"6,401"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX EP Triple (TPL)" defaultValue={"7,402"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹1,800"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"GDLX"}</span>
                                  {" Garden Deluxe Room"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Single (SGL)" defaultValue={"7,399"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Double (DBL)" defaultValue={"7,999"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX CP Triple (TPL)" defaultValue={"9,799"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹2,299"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"GDLX"}</span>
                                  {" Garden Deluxe Room"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Single (SGL)" defaultValue={"8,798"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Double (DBL)" defaultValue={"10,797"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX MAP Triple (TPL)" defaultValue={"13,996"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹3,399"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"GDLX"}</span>
                                  {" Garden Deluxe Room"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Single (SGL)" defaultValue={"9,997"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Double (DBL)" defaultValue={"13,195"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="GDLX AP Triple (TPL)" defaultValue={"17,593"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹4,349"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"PDLX"}</span>
                                  {" Pool Deluxe Room"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Single (SGL)" defaultValue={"7,000"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Double (DBL)" defaultValue={"6,901"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX EP Triple (TPL)" defaultValue={"7,902"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹1,800"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"PDLX"}</span>
                                  {" Pool Deluxe Room"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Single (SGL)" defaultValue={"7,799"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Double (DBL)" defaultValue={"8,499"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX CP Triple (TPL)" defaultValue={"10,299"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹2,299"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"PDLX"}</span>
                                  {" Pool Deluxe Room"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Single (SGL)" defaultValue={"9,198"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Double (DBL)" defaultValue={"11,297"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX MAP Triple (TPL)" defaultValue={"14,496"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹3,399"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"PDLX"}</span>
                                  {" Pool Deluxe Room"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Single (SGL)" defaultValue={"10,397"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Double (DBL)" defaultValue={"13,695"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PDLX AP Triple (TPL)" defaultValue={"18,093"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹4,349"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"DLXS"}</span>
                                  {" Deluxe Suite"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Single (SGL)" defaultValue={"12,500"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Double (DBL)" defaultValue={"12,902"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS EP Triple (TPL)" defaultValue={"13,903"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹1,800"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"DLXS"}</span>
                                  {" Deluxe Suite"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Single (SGL)" defaultValue={"13,299"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Double (DBL)" defaultValue={"14,500"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS CP Triple (TPL)" defaultValue={"16,300"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹2,299"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"DLXS"}</span>
                                  {" Deluxe Suite"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Single (SGL)" defaultValue={"14,698"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Double (DBL)" defaultValue={"17,298"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS MAP Triple (TPL)" defaultValue={"20,497"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹3,399"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"DLXS"}</span>
                                  {" Deluxe Suite"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Single (SGL)" defaultValue={"15,897"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Double (DBL)" defaultValue={"19,696"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="DLXS AP Triple (TPL)" defaultValue={"24,094"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹4,349"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"PRMS"}</span>
                                  {" Premium Suite"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"EP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Single (SGL)" defaultValue={"21,300"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Double (DBL)" defaultValue={"22,402"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS EP Triple (TPL)" defaultValue={"23,403"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹1,800"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"PRMS"}</span>
                                  {" Premium Suite"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"CP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Single (SGL)" defaultValue={"22,099"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Double (DBL)" defaultValue={"24,000"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS CP Triple (TPL)" defaultValue={"25,800"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹2,299"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"PRMS"}</span>
                                  {" Premium Suite"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"MAP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Single (SGL)" defaultValue={"23,498"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Double (DBL)" defaultValue={"26,798"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS MAP Triple (TPL)" defaultValue={"29,997"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹3,399"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td nw" data-label="Room type" data-w2="" data-t="">
                                  <span className="code-chip">{"PRMS"}</span>
                                  {" Premium Suite"}
                                </td>
                                <td className="dt__td nw" data-label="Meal plan" data-w2="">{"AP"}</td>
                                <td className="dt__td" data-label="Single (SGL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Single (SGL)" defaultValue={"24,697"} />
                                </td>
                                <td className="dt__td" data-label="Double (DBL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Double (DBL)" defaultValue={"29,196"} />
                                </td>
                                <td className="dt__td" data-label="Triple (TPL)" data-w2="">
                                  <input className="field__input num rg-in" type="text" inputMode="numeric" aria-label="PRMS AP Triple (TPL)" defaultValue={"33,594"} />
                                </td>
                                <td className="dt__td dt__td--right num nw" data-label="Extra adult (bed + meals)" data-w2="" data-m="">{"₹4,349"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="s-actions s-actions--start">
                          <Link className="btn" data-leads-to="RSS-08" to={"/setup/rss-08-rate-calendar"}>{"Open the rate calendar"}</Link>
                          <Link className="btn" data-leads-to="RSS-07" to={"/setup/rss-07-rate-plans"}>{"Rate plans"}</Link>
                          <a className="btn" href="#rss02-upload-rates">
                            <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#upload" />
                            </svg>
                            {"Upload a rate sheet"}
                          </a>
                          <a className="btn" href="#flow-file">
                            <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#download" />
                            </svg>
                            {"Download the grid"}
                          </a>
                        </div>
                      </section>
                      <section className="card" data-code="RSS-02-91">
                        <h2 className="s-card-title">{"Channel manager connectivity"}</h2>
                        <p className="field__hint rss02-lead">
                          {"The channel manager carries the hotel's rates, availability and restrictions to the OTAs and brings their bookings back (RS-23). Mapping of room and rate codes is in "}
                          <Link data-leads-to="RSS-16" to={"/setup/rss-16-channel-mapping"}>{"Channel Mapping"}</Link>
                          {"."}
                        </p>
                        <div className="s-grid3">
                          <div className="field">
                            <label className="field__label">{"Channel manager"}</label>
                            <div className="field__wrap">
                              <select aria-label="Channel manager" className="field__input field__input--select" defaultValue={"Derbysoft"}>
                                <option>{"Derbysoft"}</option>
                                <option>{"SiteMinder"}</option>
                                <option>{"RateGain"}</option>
                                <option>{"eZee Centrix"}</option>
                                <option>{"None – update OTAs by hand"}</option>
                              </select>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label">{"Property ID at the channel manager"}</label>
                            <input aria-label="Property ID at the channel manager" className="field__input" type="text" defaultValue={"ZKC-KOCHI-001"} />
                            <span className="field__hint">{"Given by the channel manager"}</span>
                          </div>
                          <div className="field">
                            <label className="field__label">{"Connection"}</label>
                            <div className="rss02-status">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Connected"}
                              </span>
                              <span className="field__hint">{"Last sync 22 Oct 08:15"}</span>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label">{"How often rates go out"}</label>
                            <div className="field__wrap">
                              <select aria-label="How often rates go out" className="field__input field__input--select" defaultValue={"As soon as a rate changes"}>
                                <option>{"As soon as a rate changes"}</option>
                                <option>{"Every 15 minutes"}</option>
                                <option>{"Every hour"}</option>
                                <option>{"Once a day at 02:00"}</option>
                              </select>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label">{"Send rates for the next (days)"}</label>
                            <div className="field__wrap">
                              <input aria-label="Send rates for the next (days)" className="field__input num" type="text" defaultValue={"365"} />
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label">{"Rates sent are"}</label>
                            <div className="field__wrap">
                              <select aria-label="Rates sent are" className="field__input field__input--select" defaultValue={"Before GST"}>
                                <option>{"Before GST"}</option>
                                <option>{"Including GST"}</option>
                              </select>
                            </div>
                            <span className="field__hint">{"OTAs add their own tax display"}</span>
                          </div>
                        </div>
                        <div className="rss02-sws">
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Send rates"}
                          </label>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Send availability"}
                          </label>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Send restrictions (min stay, closed, CTA / CTD)"}
                          </label>
                          <label className="sw">
                            <input type="checkbox" role="switch" defaultChecked={true} />
                            <span className="sw__track" />
                            {"Bring OTA bookings back into the Channel Booking Queue"}
                          </label>
                        </div>
                        <h3 className="rss02-sub">{"Channels that receive the rates"}</h3>
                        <div className="s-scroll">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Channels that receive the hotel's rates"}</caption>
                            <thead>
                              <tr>
                                <th scope="col" />
                                <th scope="col">{"Channel"}</th>
                                <th scope="col">{"Rate plan sent"}</th>
                                <th scope="col" className="dt__th--right">{"Adjustment"}</th>
                                <th scope="col" className="dt__th--right">{"Commission"}</th>
                                <th scope="col">{"Last pushed"}</th>
                                <th scope="col">{"Status"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Send" data-sel="">
                                  <input type="checkbox" aria-label="Send to Booking.com" defaultChecked={true} />
                                </td>
                                <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                  <b>{"Booking.com"}</b>
                                </td>
                                <td className="dt__td nw" data-label="Rate plan sent" data-w2="">{"BAR-CP"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Adjustment" data-w2="">{"+0 %"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Commission" data-w2="">{"15 %"}</td>
                                <td className="dt__td nw" data-label="Last pushed" data-w2="">{"08:15"}</td>
                                <td className="dt__td" data-label="Status" data-s="">
                                  <span className="pill pill--ready">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#check-circle" />
                                    </svg>
                                    {"In sync"}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Send" data-sel="">
                                  <input type="checkbox" aria-label="Send to Expedia" defaultChecked={true} />
                                </td>
                                <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                  <b>{"Expedia"}</b>
                                </td>
                                <td className="dt__td nw" data-label="Rate plan sent" data-w2="">{"BAR-CP"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Adjustment" data-w2="">{"+0 %"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Commission" data-w2="">{"18 %"}</td>
                                <td className="dt__td nw" data-label="Last pushed" data-w2="">{"08:15"}</td>
                                <td className="dt__td" data-label="Status" data-s="">
                                  <span className="pill pill--ready">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#check-circle" />
                                    </svg>
                                    {"In sync"}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Send" data-sel="">
                                  <input type="checkbox" aria-label="Send to MakeMyTrip / Goibibo" defaultChecked={true} />
                                </td>
                                <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                  <b>{"MakeMyTrip / Goibibo"}</b>
                                </td>
                                <td className="dt__td nw" data-label="Rate plan sent" data-w2="">{"BAR-CP"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Adjustment" data-w2="">{"−2 %"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Commission" data-w2="">{"17 %"}</td>
                                <td className="dt__td nw" data-label="Last pushed" data-w2="">{"08:10"}</td>
                                <td className="dt__td" data-label="Status" data-s="">
                                  <span className="pill pill--ready">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#check-circle" />
                                    </svg>
                                    {"In sync"}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Send" data-sel="">
                                  <input type="checkbox" aria-label="Send to Agoda" defaultChecked={true} />
                                </td>
                                <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                  <b>{"Agoda"}</b>
                                </td>
                                <td className="dt__td nw" data-label="Rate plan sent" data-w2="">{"BAR-CP"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Adjustment" data-w2="">{"+0 %"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Commission" data-w2="">{"16 %"}</td>
                                <td className="dt__td nw" data-label="Last pushed" data-w2="">{"08:15"}</td>
                                <td className="dt__td" data-label="Status" data-s="">
                                  <span className="pill pill--tentative">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#clock" />
                                    </svg>
                                    {"Parity check"}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Send" data-sel="">
                                  <input type="checkbox" aria-label="Send to Cleartrip" defaultChecked={true} />
                                </td>
                                <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                  <b>{"Cleartrip"}</b>
                                </td>
                                <td className="dt__td nw" data-label="Rate plan sent" data-w2="">{"BAR-EP"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Adjustment" data-w2="">{"+0 %"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Commission" data-w2="">{"15 %"}</td>
                                <td className="dt__td nw" data-label="Last pushed" data-w2="">{"07:45"}</td>
                                <td className="dt__td" data-label="Status" data-s="">
                                  <span className="pill pill--ready">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#check-circle" />
                                    </svg>
                                    {"In sync"}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Send" data-sel="">
                                  <input type="checkbox" aria-label="Send to Aviv website and mobile app" defaultChecked={true} />
                                </td>
                                <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                  <b>{"Aviv website and mobile app"}</b>
                                </td>
                                <td className="dt__td nw" data-label="Rate plan sent" data-w2="">{"Member rate"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Adjustment" data-w2="">{"−5 %"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Commission" data-w2="">{"–"}</td>
                                <td className="dt__td nw" data-label="Last pushed" data-w2="">{"08:15"}</td>
                                <td className="dt__td" data-label="Status" data-s="">
                                  <span className="pill pill--ready">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#check-circle" />
                                    </svg>
                                    {"In sync"}
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Send" data-sel="">
                                  <input type="checkbox" aria-label="Send to Corporate booking page" defaultChecked={true} />
                                </td>
                                <td className="dt__td nw" data-label="Channel" data-w2="" data-t="">
                                  <b>{"Corporate booking page"}</b>
                                </td>
                                <td className="dt__td nw" data-label="Rate plan sent" data-w2="">{"Company rate grids"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Adjustment" data-w2="">{"per account"}</td>
                                <td className="dt__td dt__td--right nw" data-label="Commission" data-w2="">{"–"}</td>
                                <td className="dt__td nw" data-label="Last pushed" data-w2="">{"08:00"}</td>
                                <td className="dt__td" data-label="Status" data-s="">
                                  <span className="pill pill--ready">
                                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#check-circle" />
                                    </svg>
                                    {"In sync"}
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="field__hint">
                          {"Rates for one company or agent are set on that account in "}
                          <Link data-leads-to="RS-19" to={"/reservation/rs-19-company-travel-agent-account"}>{"Corporate"}</Link>
                          {" (rate grid by season, meal plan and occupancy) and are sent only to the booking pages or channels ticked there."}
                        </p>
                        <div className="s-actions s-actions--start">
                          <a className="btn" href="#flow-done">
                            <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#refresh" />
                            </svg>
                            {"Test the connection"}
                          </a>
                          <a className="btn" href="#flow-done">
                            <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#send" />
                            </svg>
                            {"Push all rates now"}
                          </a>
                          <Link className="btn" data-leads-to="RS-23" to={"/reservation/rs-23-channel-booking-queue"}>{"View the sync log"}</Link>
                        </div>
                      </section>
                    </section>
                    <section className="stabs__panel" data-code="RSS-02-T9" aria-label="Review">
                      <section className="card" data-code="RSS-02-86">
                        <h2 className="s-card-title">{"Review and handover"}</h2>
                        <div className="s-grid3">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f105">{"Review owner"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f105">
                                <option>{"Vikram Nathan"}</option>
                                <option>{"Meera Prem"}</option>
                                <option>{"Anita Mohan"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f106">{"Handover notes"}</label>
                          <textarea className="field__input field__input--area" id="f106" defaultValue={""} />
                        </div>
                        <label className="sw">
                          <input type="checkbox" role="switch" defaultChecked={true} />
                          <span className="sw__track" />
                          {"I have reviewed these details and they are correct"}
                        </label>
                      </section>
                    </section>
                  </div>
                </div>
                <div className="s-actions s-actions--sticky">
                  <Link className="btn" data-leads-to="RSS-01" to={"/setup/rss-01-setup-home-checklist"}>{"Cancel"}</Link>
                  <a className="btn btn--primary" href="#flow-done">{"Save changes"}</a>
                </div>
              </form>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"RSS-02"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Name, address, GSTIN 32AACCE1226H1Z9, contacts, Aviv Club, financial year, audit time"}</dd>
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
              <div className="modal" id="rss02-upload-rates" data-flow="add-form" role="dialog" aria-modal="true" aria-labelledby="rss02-upload-rates-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="rss02-upload-rates-t">{"Upload a rate sheet"}</h2>
                      <p className="modal__desc">{"One Excel or CSV file with the rate of each room type and meal plan."}</p>
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
                        <label className="field__label" htmlFor="rss02-upload-rates-f1">
                          {"File "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rss02-upload-rates-f1" type="file" placeholder="" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-upload-rates-f2">
                          {"Effective from "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="rss02-upload-rates-f2" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="rss02-upload-rates-f2-f16-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="rss02-upload-rates-f2-f16-year" aria-label="Year" defaultValue={"2026"}>
                                <option value="2024" className="lp">{"2024"}</option>
                                <option value="2025">{"2025"}</option>
                                <option value="2026">{"2026"}</option>
                                <option value="2027">{"2027"}</option>
                                <option value="2028" className="lp">{"2028"}</option>
                                <option value="2029">{"2029"}</option>
                                <option value="2030">{"2030"}</option>
                                <option value="2031">{"2031"}</option>
                                <option value="2032" className="lp">{"2032"}</option>
                                <option value="2033">{"2033"}</option>
                                <option value="2034">{"2034"}</option>
                                <option value="2035">{"2035"}</option>
                                <option value="2036" className="lp">{"2036"}</option>
                                <option value="2037">{"2037"}</option>
                                <option value="2038">{"2038"}</option>
                                <option value="2039">{"2039"}</option>
                                <option value="2040" className="lp">{"2040"}</option>
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
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-upload-rates-f2-f16" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-upload-rates-f3">{"When a rate already exists"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-upload-rates-f3" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Replace it"}</option>
                            <option>{"Keep the existing rate"}</option>
                            <option>{"Ask me for each line"}</option>
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
                    <a className="btn btn--primary" href="#flow-done">{"Check and upload"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="rss02-add-facility" data-flow="add-form" role="dialog" aria-modal="true" aria-labelledby="rss02-add-facility-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="rss02-add-facility-t">{"Add facility"}</h2>
                      <p className="modal__desc">{"A new line in the Facilities register."}</p>
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
                        <label className="field__label" htmlFor="rss02-add-facility-f1">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rss02-add-facility-f1" type="text" placeholder="For example Rooftop Pool" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-facility-f2">
                          {"Category "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-add-facility-f2" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Food and drink"}</option>
                            <option>{"Wellness"}</option>
                            <option>{"Meeting space"}</option>
                            <option>{"Recreation"}</option>
                            <option>{"Guest service"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-facility-f3">{"Location"}</label>
                        <input className="field__input" id="rss02-add-facility-f3" type="text" placeholder="For example Ground floor, lobby wing" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-facility-f4">{"Hours"}</label>
                        <input className="field__input" id="rss02-add-facility-f4" type="text" placeholder="For example 07:00 to 22:00, or Oct to Mar" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-facility-f5">{"Owner"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-add-facility-f5" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"General Manager"}</option>
                            <option>{"Admin"}</option>
                            <option>{"Front Office Manager"}</option>
                            <option>{"Reservation Manager"}</option>
                            <option>{"Reservation Agent"}</option>
                            <option>{"Revenue Manager"}</option>
                            <option>{"Sales Manager"}</option>
                            <option>{"Accounts"}</option>
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
                    <a className="btn btn--primary" href="#flow-done">{"Save facility"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="rss02-add-contact" data-flow="add-form" role="dialog" aria-modal="true" aria-labelledby="rss02-add-contact-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="rss02-add-contact-t">{"Add contact"}</h2>
                      <p className="modal__desc">{"A new line in the Contact directory."}</p>
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
                        <label className="field__label" htmlFor="rss02-add-contact-f1">
                          {"Role "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-add-contact-f1" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"General Manager"}</option>
                            <option>{"Admin"}</option>
                            <option>{"Front Office Manager"}</option>
                            <option>{"Reservation Manager"}</option>
                            <option>{"Reservation Agent"}</option>
                            <option>{"Revenue Manager"}</option>
                            <option>{"Sales Manager"}</option>
                            <option>{"Accounts"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-contact-f2">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rss02-add-contact-f2" type="text" placeholder="Full name" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-contact-f3">{"Email"}</label>
                        <input className="field__input" id="rss02-add-contact-f3" type="email" placeholder="name@avivkochi.example" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-contact-f4">{"Phone"}</label>
                        <input className="field__input" id="rss02-add-contact-f4" type="tel" placeholder="+91 484 000 0000" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-contact-f5">{"Coverage"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-add-contact-f5" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Daily"}</option>
                            <option>{"Weekdays"}</option>
                            <option>{"Weekends"}</option>
                            <option>{"On call"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-contact-f6">{"Escalation"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-add-contact-f6" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Level 1"}</option>
                            <option>{"Level 2"}</option>
                            <option>{"Level 3"}</option>
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
                    <a className="btn btn--primary" href="#flow-done">{"Save contact"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="rss02-add-registration" data-flow="add-form" role="dialog" aria-modal="true" aria-labelledby="rss02-add-registration-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="rss02-add-registration-t">{"Add registration"}</h2>
                      <p className="modal__desc">{"A new line in the Registration register."}</p>
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
                        <label className="field__label" htmlFor="rss02-add-registration-f1">
                          {"Type "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-add-registration-f1" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"GST certificate"}</option>
                            <option>{"Fire safety"}</option>
                            <option>{"FSSAI licence"}</option>
                            <option>{"Trade licence"}</option>
                            <option>{"Pollution control"}</option>
                            <option>{"Liquor licence"}</option>
                            <option>{"Tourism classification"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-registration-f2">
                          {"Reference "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rss02-add-registration-f2" type="text" placeholder="Certificate or licence number" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-registration-f3">{"Authority"}</label>
                        <input className="field__input" id="rss02-add-registration-f3" type="text" placeholder="Issuing department" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-registration-f4">{"Expiry"}</label>
                        <div className="dpk">
                          <button type="button" className="dpk-f field__input" id="rss02-add-registration-f4" aria-haspopup="dialog">
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
                              <select className="dpk-m" name="rss02-add-registration-f4-f16-month" aria-label="Month" defaultValue={"10"}>
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
                              <select className="dpk-y" name="rss02-add-registration-f4-f16-year" aria-label="Year" defaultValue={"2026"}>
                                <option value="2024" className="lp">{"2024"}</option>
                                <option value="2025">{"2025"}</option>
                                <option value="2026">{"2026"}</option>
                                <option value="2027">{"2027"}</option>
                                <option value="2028" className="lp">{"2028"}</option>
                                <option value="2029">{"2029"}</option>
                                <option value="2030">{"2030"}</option>
                                <option value="2031">{"2031"}</option>
                                <option value="2032" className="lp">{"2032"}</option>
                                <option value="2033">{"2033"}</option>
                                <option value="2034">{"2034"}</option>
                                <option value="2035">{"2035"}</option>
                                <option value="2036" className="lp">{"2036"}</option>
                                <option value="2037">{"2037"}</option>
                                <option value="2038">{"2038"}</option>
                                <option value="2039">{"2039"}</option>
                                <option value="2040" className="lp">{"2040"}</option>
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
                                <input type="radio" name="rss02-add-registration-f4-f16" value="01" />
                                {"1"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="02" />
                                {"2"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="03" />
                                {"3"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="04" />
                                {"4"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="05" />
                                {"5"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="06" />
                                {"6"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="07" />
                                {"7"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="08" />
                                {"8"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="09" />
                                {"9"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="10" />
                                {"10"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="11" />
                                {"11"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="12" />
                                {"12"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="13" />
                                {"13"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="14" />
                                {"14"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="15" />
                                {"15"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="16" />
                                {"16"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="17" />
                                {"17"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="18" />
                                {"18"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="19" />
                                {"19"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="20" />
                                {"20"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="21" />
                                {"21"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="22" />
                                {"22"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="23" />
                                {"23"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="24" />
                                {"24"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="25" />
                                {"25"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="26" />
                                {"26"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="27" />
                                {"27"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="28" />
                                {"28"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="29" />
                                {"29"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="30" />
                                {"30"}
                              </label>
                              <label className="dpk-d">
                                <input type="radio" name="rss02-add-registration-f4-f16" value="31" />
                                {"31"}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-registration-f5">{"Owner"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-add-registration-f5" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"General Manager"}</option>
                            <option>{"Admin"}</option>
                            <option>{"Front Office Manager"}</option>
                            <option>{"Reservation Manager"}</option>
                            <option>{"Reservation Agent"}</option>
                            <option>{"Revenue Manager"}</option>
                            <option>{"Sales Manager"}</option>
                            <option>{"Accounts"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-registration-f6">{"Status"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-add-registration-f6" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Valid"}</option>
                            <option>{"To add"}</option>
                            <option>{"Expiring"}</option>
                            <option>{"Expired"}</option>
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
                    <a className="btn btn--primary" href="#flow-done">{"Save registration"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="rss02-add-system" data-flow="add-form" role="dialog" aria-modal="true" aria-labelledby="rss02-add-system-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="rss02-add-system-t">{"Add system"}</h2>
                      <p className="modal__desc">{"A new line in the Systems register."}</p>
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
                        <label className="field__label" htmlFor="rss02-add-system-f1">
                          {"System "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rss02-add-system-f1" type="text" placeholder="For example Door lock system" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-system-f2">{"Provider"}</label>
                        <input className="field__input" id="rss02-add-system-f2" type="text" placeholder="Vendor name" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-system-f3">{"External ID"}</label>
                        <input className="field__input" id="rss02-add-system-f3" type="text" placeholder="The system's own reference for this hotel" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-system-f4">{"Owner"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-add-system-f4" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"General Manager"}</option>
                            <option>{"Admin"}</option>
                            <option>{"Front Office Manager"}</option>
                            <option>{"Reservation Manager"}</option>
                            <option>{"Reservation Agent"}</option>
                            <option>{"Revenue Manager"}</option>
                            <option>{"Sales Manager"}</option>
                            <option>{"Accounts"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-system-f5">{"State"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss02-add-system-f5" defaultValue={""}>
                            <option value="">{"Select…"}</option>
                            <option>{"Simulated"}</option>
                            <option>{"Connected"}</option>
                            <option>{"Not connected"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss02-add-system-f6">{"Evidence"}</label>
                        <input className="field__input" id="rss02-add-system-f6" type="text" placeholder="Test reference or document name" />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save system"}</a>
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
              <div className="modal modal--sm" id="flow-file" data-flow="flow-file" role="dialog" aria-modal="true" aria-labelledby="flow-file-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="flow-file-t">{"File ready"}</h2>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close" />
                  </div>
                  <div className="modal__body">
                    <p className="field__hint">{"In the live system your file opens here to print or save, and the export is logged with your name and the time."}</p>
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
