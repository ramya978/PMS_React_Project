// GENERATED from public/setup/rss-15-sources-segments-and-channels/index.html by scripts/convert_legacy.py.
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
    "href": "/setup/rss-15-sources-segments-and-channels/rss-15-sources-segments-and-channels.css",
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

export default function SetupRss15SourcesSegmentsAndChannels() {
  return (
    <ScreenShell title="Sources, Segments & Channels" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RSS-15" data-code="RSS-15" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="RSS-15" tabIndex="-1">
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
                        <span aria-current="page">{"Sources, Segments & Channels"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Sources, Segments & Channels"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RSS-15"}</span>
                  <div className="page-header__actions">
                    <a className="btn btn--primary" href="#RSS-P12-new" data-opens="RSS-P12">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add entry"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="stabs">
                <input type="radio" name="sc" id="sc-1" aria-label="Sources" defaultChecked={true} />
                <input type="radio" name="sc" id="sc-2" aria-label="Segments" />
                <input type="radio" name="sc" id="sc-3" aria-label="Channels" />
                <input type="radio" name="sc" id="sc-4" aria-label="Corporate account types" />
                <div className="stabs__list" role="tablist">
                  <label htmlFor="sc-1">
                    {"Sources"}
                    <span className="stabs__n">{"14"}</span>
                  </label>
                  <label htmlFor="sc-2">
                    {"Segments"}
                    <span className="stabs__n">{"10"}</span>
                  </label>
                  <label htmlFor="sc-3">
                    {"Channels"}
                    <span className="stabs__n">{"8"}</span>
                  </label>
                  <label htmlFor="sc-4">{"Corporate account types"}</label>
                </div>
                <div className="stabs__panels">
                  <section className="stabs__panel" data-code="RSS-15-1" aria-label="Sources">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="RSS-15-1-list" style={{"--srt-cols": "auto auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Booking sources"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="strss150" id="strss150-0a" aria-label="Sort by Code, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="strss150" id="strss150-0d" aria-label="Sort by Code, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss150-0a">{"Code"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss150-0d" aria-hidden="true">{"Code"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strss150" id="strss150-1a" aria-label="Sort by Source, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strss150" id="strss150-1d" aria-label="Sort by Source, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss150-1a">{"Source"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss150-1d" aria-hidden="true">{"Source"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strss150" id="strss150-2a" aria-label="Sort by Type, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strss150" id="strss150-2d" aria-label="Sort by Type, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss150-2a">{"Type"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss150-2d" aria-hidden="true">{"Type"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a3" type="radio" name="strss150" id="strss150-3a" aria-label="Sort by Linked channel, lowest or A first" />
                                <input className="srt-i srt-d3" type="radio" name="strss150" id="strss150-3d" aria-label="Sort by Linked channel, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss150-3a">{"Linked channel"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss150-3d" aria-hidden="true">{"Linked channel"}</label>
                              </th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "3", "--k1": "2", "--k2": "2", "--k3": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"APP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source" data-w2="">{"Aviv mobile app"}</td>
                              <td className="dt__td nw" data-label="Type" data-w2="">{"Brand site"}</td>
                              <td className="dt__td" data-label="Linked channel" data-w2="">{"Aviv mobile app (CRS)"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-app" data-opens="RSS-P12" aria-label="Edit Aviv mobile app">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "13", "--k1": "3", "--k2": "4", "--k3": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"WEBSITE"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source" data-w2="">{"Aviv website"}</td>
                              <td className="dt__td nw" data-label="Type">{"Direct"}</td>
                              <td className="dt__td" data-label="Linked channel">{"Aviv website booking engine"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-website" data-opens="RSS-P12" aria-label="Edit Aviv website">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "4", "--k2": "5", "--k3": "4"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"BOOKING"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source" data-w2="">{"Booking.com"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td nw" data-label="Linked channel" data-w2="">{"Booking.com"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-booking" data-opens="RSS-P12" aria-label="Edit Booking.com">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "1", "--k2": "5", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"AGODA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source">{"Agoda"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td nw" data-label="Linked channel" data-w2="">{"Agoda"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-agoda" data-opens="RSS-P12" aria-label="Edit Agoda">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "8", "--k2": "5", "--k3": "6"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"EXPEDIA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source">{"Expedia"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td nw" data-label="Linked channel" data-w2="">{"Expedia"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-expedia" data-opens="RSS-P12" aria-label="Edit Expedia">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "9", "--k1": "9", "--k2": "5", "--k3": "7"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"MMT"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source" data-w2="">{"MakeMyTrip / Goibibo"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td nw" data-label="Linked channel" data-w2="">{"MakeMyTrip / Goibibo"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-mmt" data-opens="RSS-P12" aria-label="Edit MakeMyTrip / Goibibo">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "6", "--k1": "6", "--k2": "5", "--k3": "5"}}>
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <strong>{"EASEMYTRIP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source" data-w2="">{"EaseMyTrip"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td nw" data-label="Linked channel" data-w2="">{"EaseMyTrip"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-eamt" data-opens="RSS-P12" aria-label="Edit EaseMyTrip">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "11", "--k1": "12", "--k2": "5", "--k3": "8"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"TRIP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source" data-w2="">{"Trip.com"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td nw" data-label="Linked channel" data-w2="">{"Trip.com"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-trip" data-opens="RSS-P12" aria-label="Edit Trip.com">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "12", "--k1": "13", "--k2": "6", "--k3": "9"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"WALKIN"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source">{"Walk-in"}</td>
                              <td className="dt__td nw" data-label="Type">{"Walk-in"}</td>
                              <td className="dt__td nw" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-walkin" data-opens="RSS-P12" aria-label="Edit Walk-in">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "10", "--k1": "10", "--k2": "4", "--k3": "9"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"PHONE"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source">{"Phone"}</td>
                              <td className="dt__td nw" data-label="Type">{"Direct"}</td>
                              <td className="dt__td nw" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-phone" data-opens="RSS-P12" aria-label="Edit Phone">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "7", "--k2": "4", "--k3": "9"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"EMAIL"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source">{"Email"}</td>
                              <td className="dt__td nw" data-label="Type">{"Direct"}</td>
                              <td className="dt__td nw" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-email" data-opens="RSS-P12" aria-label="Edit Email">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "14", "--k1": "14", "--k2": "4", "--k3": "9"}}>
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <strong>{"WHATSAPP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source" data-w2="">{"WhatsApp"}</td>
                              <td className="dt__td nw" data-label="Type">{"Direct"}</td>
                              <td className="dt__td nw" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-whatsapp" data-opens="RSS-P12" aria-label="Edit WhatsApp">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "11", "--k2": "1", "--k3": "9"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"AGENT"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source" data-w2="">{"Travel agent"}</td>
                              <td className="dt__td nw" data-label="Type">{"Agent"}</td>
                              <td className="dt__td nw" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-agent" data-opens="RSS-P12" aria-label="Edit Travel agent">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "5", "--k1": "5", "--k2": "3", "--k3": "9"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"COMPANY"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Source" data-w2="">{"Company booking"}</td>
                              <td className="dt__td nw" data-label="Type" data-w2="">{"Corporate"}</td>
                              <td className="dt__td nw" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-src-company" data-opens="RSS-P12" aria-label="Edit Company booking">{"Edit"}</a>
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
                              {" of 14"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"11–14"}</b>
                              {" of 14"}
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
                              <b>{"1–14"}</b>
                              {" of 14"}
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
                              <b>{"1–14"}</b>
                              {" of 14"}
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
                              <b>{"1–14"}</b>
                              {" of 14"}
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
                              <b>{"1–14"}</b>
                              {" of 14"}
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
                  <section className="stabs__panel" data-code="RSS-15-2" aria-label="Segments">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="RSS-15-2-list" style={{"--srt-cols": "auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Segments"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="strss151" id="strss151-0a" aria-label="Sort by Code, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="strss151" id="strss151-0d" aria-label="Sort by Code, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss151-0a">{"Code"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss151-0d" aria-hidden="true">{"Code"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strss151" id="strss151-1a" aria-label="Sort by Segment, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strss151" id="strss151-1d" aria-label="Sort by Segment, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss151-1a">{"Segment"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss151-1d" aria-hidden="true">{"Segment"}</label>
                              </th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "6", "--k1": "6"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"LEISURE"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Segment" data-w2="">{"Leisure (FIT)"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-seg-leisure" data-opens="RSS-P12" aria-label="Edit Leisure (FIT)">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "4"}}>
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <strong>{"CORPORATE"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Segment" data-w2="">{"Corporate"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-seg-corporate" data-opens="RSS-P12" aria-label="Edit Corporate">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"MICE"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Segment" data-w2="">{"Conference & events"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-seg-mice" data-opens="RSS-P12" aria-label="Edit Conference & events">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "10", "--k1": "10"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"WEDDING"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Segment" data-w2="">{"Wedding"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-seg-wedding" data-opens="RSS-P12" aria-label="Edit Wedding">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "9"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"AGENT"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Segment" data-w2="">{"Travel agent"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-seg-agent" data-opens="RSS-P12" aria-label="Edit Travel agent">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "9", "--k1": "8"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"OTA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Segment" data-w2="">{"Online travel agency"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-seg-ota" data-opens="RSS-P12" aria-label="Edit Online travel agency">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "1"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"CLUB"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Segment" data-w2="">{"Club member"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-seg-club" data-opens="RSS-P12" aria-label="Edit Club member">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "5", "--k1": "5"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"GOVT"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Segment" data-w2="">{"Government"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-seg-govt" data-opens="RSS-P12" aria-label="Edit Government">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "7"}}>
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <strong>{"LONGSTAY"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Segment" data-w2="">{"Long stay"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-seg-longstay" data-opens="RSS-P12" aria-label="Edit Long stay">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"COMP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Segment" data-w2="">{"Complimentary"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-seg-comp" data-opens="RSS-P12" aria-label="Edit Complimentary">{"Edit"}</a>
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
                          <input className="pg-in" type="radio" name="pg2r10" id="pg2r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r10p1" aria-label="Page 1">{"1"}</label>
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
                          <input className="pg-in" type="radio" name="pg2r15" id="pg2r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r15p1" aria-label="Page 1">{"1"}</label>
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
                          <input className="pg-in" type="radio" name="pg2r20" id="pg2r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r20p1" aria-label="Page 1">{"1"}</label>
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
                          <input className="pg-in" type="radio" name="pg2r25" id="pg2r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r25p1" aria-label="Page 1">{"1"}</label>
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
                          <input className="pg-in" type="radio" name="pg2r30" id="pg2r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r30p1" aria-label="Page 1">{"1"}</label>
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
                  <section className="stabs__panel" data-code="RSS-15-3" aria-label="Channels">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="RSS-15-3-list" style={{"--srt-cols": "auto auto auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Channels"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="strss152" id="strss152-0a" aria-label="Sort by Code, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="strss152" id="strss152-0d" aria-label="Sort by Code, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss152-0a">{"Code"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss152-0d" aria-hidden="true">{"Code"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strss152" id="strss152-1a" aria-label="Sort by Channel, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strss152" id="strss152-1d" aria-label="Sort by Channel, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss152-1a">{"Channel"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss152-1d" aria-hidden="true">{"Channel"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strss152" id="strss152-2a" aria-label="Sort by Type, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strss152" id="strss152-2d" aria-label="Sort by Type, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss152-2a">{"Type"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss152-2d" aria-hidden="true">{"Type"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a3" type="radio" name="strss152" id="strss152-3a" aria-label="Sort by Commission, lowest or A first" />
                                <input className="srt-i srt-d3" type="radio" name="strss152" id="strss152-3d" aria-label="Sort by Commission, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss152-3a">{"Commission"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss152-3d" aria-hidden="true">{"Commission"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a4" type="radio" name="strss152" id="strss152-4a" aria-label="Sort by Connection, lowest or A first" />
                                <input className="srt-i srt-d4" type="radio" name="strss152" id="strss152-4d" aria-label="Sort by Connection, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strss152-4a">{"Connection"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strss152-4d" aria-hidden="true">{"Connection"}</label>
                              </th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "2", "--k1": "2", "--k2": "1", "--k3": "1", "--k4": "1"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"APP"}</strong>
                              </td>
                              <td className="dt__td" data-label="Channel" data-w2="">{"Aviv mobile app (CRS)"}</td>
                              <td className="dt__td nw" data-label="Type" data-w2="">{"Brand site"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Commission" data-w2="">{"0%"}</td>
                              <td className="dt__td" data-label="Connection">{"Central reservation system (CRS)"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-ch-app" data-opens="RSS-P12" aria-label="Edit Aviv mobile app (CRS)">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "3", "--k2": "3", "--k3": "1", "--k4": "3"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"WEBSITE"}</strong>
                              </td>
                              <td className="dt__td" data-label="Channel">{"Aviv website booking engine"}</td>
                              <td className="dt__td nw" data-label="Type">{"Website"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Commission" data-w2="">{"0%"}</td>
                              <td className="dt__td nw" data-label="Connection" data-w2="">{"Direct"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-ch-website" data-opens="RSS-P12" aria-label="Edit Aviv website booking engine">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "4", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"BOOKING"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Channel" data-w2="">{"Booking.com"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Commission" data-w2="">{"15%"}</td>
                              <td className="dt__td nw" data-label="Connection" data-w2="">{"Channel manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-ch-booking" data-opens="RSS-P12" aria-label="Edit Booking.com">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "1", "--k2": "2", "--k3": "4", "--k4": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"AGODA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Channel" data-w2="">{"Agoda"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Commission" data-w2="">{"18%"}</td>
                              <td className="dt__td nw" data-label="Connection" data-w2="">{"Channel manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-ch-agoda" data-opens="RSS-P12" aria-label="Edit Agoda">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "5", "--k1": "6", "--k2": "2", "--k3": "4", "--k4": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"EXPEDIA"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Channel" data-w2="">{"Expedia"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Commission" data-w2="">{"18%"}</td>
                              <td className="dt__td nw" data-label="Connection" data-w2="">{"Channel manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-ch-expedia" data-opens="RSS-P12" aria-label="Edit Expedia">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "6", "--k1": "7", "--k2": "2", "--k3": "3", "--k4": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"MMT"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Channel" data-w2="">{"MakeMyTrip / Goibibo"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Commission" data-w2="">{"17%"}</td>
                              <td className="dt__td nw" data-label="Connection" data-w2="">{"Channel manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-ch-mmt" data-opens="RSS-P12" aria-label="Edit MakeMyTrip / Goibibo">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "5", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <strong>{"EASEMYTRIP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Channel" data-w2="">{"EaseMyTrip"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Commission" data-w2="">{"15%"}</td>
                              <td className="dt__td nw" data-label="Connection" data-w2="">{"Channel manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-ch-eamt" data-opens="RSS-P12" aria-label="Edit EaseMyTrip">{"Edit"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "8", "--k2": "2", "--k3": "2", "--k4": "2"}}>
                              <td className="dt__td nw" data-label="Code" data-t="">
                                <strong>{"TRIP"}</strong>
                              </td>
                              <td className="dt__td nw" data-label="Channel" data-w2="">{"Trip.com"}</td>
                              <td className="dt__td nw" data-label="Type">{"OTA"}</td>
                              <td className="dt__td dt__td--right num nw" data-label="Commission" data-w2="">{"15%"}</td>
                              <td className="dt__td nw" data-label="Connection" data-w2="">{"Channel manager"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#RSS-P12-ch-trip" data-opens="RSS-P12" aria-label="Edit Trip.com">{"Edit"}</a>
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
                  <section className="stabs__panel" data-code="RSS-15-4" aria-label="Corporate account types">
                    <div className="s-toolbar">
                      <p className="field__hint">{"Used on Reservations → Corporate (RS-19): the type decides which details the account form asks for and its default rates. Every account can then get its own rates and discounts."}</p>
                      <a className="btn btn--primary" href="#rss15-new-account-type">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        {"New account type"}
                      </a>
                    </div>
                    <div className="s-scroll">
                      <table className="srt dt__table" data-code="RSS-15-4-list" style={{"--srt-cols": "auto auto auto auto auto auto"}} data-mc="">
                        <caption className="sr-only">{"Corporate account types"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">
                              <input className="srt-i srt-a0" type="radio" name="strss153" id="strss153-0a" aria-label="Sort by Code, lowest or A first" />
                              <input className="srt-i srt-d0" type="radio" name="strss153" id="strss153-0d" aria-label="Sort by Code, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strss153-0a">{"Code"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strss153-0d" aria-hidden="true">{"Code"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a1" type="radio" name="strss153" id="strss153-1a" aria-label="Sort by Account type, lowest or A first" />
                              <input className="srt-i srt-d1" type="radio" name="strss153" id="strss153-1d" aria-label="Sort by Account type, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strss153-1a">{"Account type"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strss153-1d" aria-hidden="true">{"Account type"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a2" type="radio" name="strss153" id="strss153-2a" aria-label="Sort by Details asked for, lowest or A first" />
                              <input className="srt-i srt-d2" type="radio" name="strss153" id="strss153-2d" aria-label="Sort by Details asked for, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strss153-2a">{"Details asked for"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strss153-2d" aria-hidden="true">{"Details asked for"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a3" type="radio" name="strss153" id="strss153-3a" aria-label="Sort by Default rates, lowest or A first" />
                              <input className="srt-i srt-d3" type="radio" name="strss153" id="strss153-3d" aria-label="Sort by Default rates, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strss153-3a">{"Default rates"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strss153-3d" aria-hidden="true">{"Default rates"}</label>
                            </th>
                            <th scope="col">
                              <input className="srt-i srt-a4" type="radio" name="strss153" id="strss153-4a" aria-label="Sort by Commission, lowest or A first" />
                              <input className="srt-i srt-d4" type="radio" name="strss153" id="strss153-4d" aria-label="Sort by Commission, highest or Z first" />
                              <label className="srt-l srt-l--a" htmlFor="strss153-4a">{"Commission"}</label>
                              <label className="srt-l srt-l--d" htmlFor="strss153-4d" aria-hidden="true">{"Commission"}</label>
                            </th>
                            <th scope="col">{"Status"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{"--k0": "2", "--k1": "2", "--k2": "7", "--k3": "3", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"COMP"}</b>
                            </td>
                            <td className="dt__td" data-label="Account type" data-w2="">{"Company / corporate"}</td>
                            <td className="dt__td" data-label="Details asked for">{"Industry, CIN, booking reference (PO / employee ID)"}</td>
                            <td className="dt__td" data-label="Default rates">{"CORP fixed rates or % off BAR"}</td>
                            <td className="dt__td" data-e="">{"–"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "10", "--k1": "10", "--k2": "6", "--k3": "2", "--k4": "1"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"TA"}</b>
                            </td>
                            <td className="dt__td" data-label="Account type" data-w2="">{"Travel agent"}</td>
                            <td className="dt__td" data-label="Details asked for" data-w="">{"IATA / TIDS, Ministry of Tourism approval, association, bank account for commission"}</td>
                            <td className="dt__td" data-label="Default rates">{"AGENT net rate (BAR − 20 %)"}</td>
                            <td className="dt__td" data-label="Commission" data-w2="">{"10 % · TDS 2 %"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "5", "--k1": "6", "--k2": "8", "--k3": "6", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"GOV"}</b>
                            </td>
                            <td className="dt__td" data-label="Account type" data-w2="">{"Government agency"}</td>
                            <td className="dt__td" data-label="Details asked for" data-w="">{"Ministry / department, level, DDO code, sanction order, GST TDS (sec. 51), treasury payment"}</td>
                            <td className="dt__td" data-label="Default rates" data-w2="">{"Government fixed rate"}</td>
                            <td className="dt__td" data-e="">{"–"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "9", "--k1": "9", "--k2": "3", "--k3": "4", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"PSU"}</b>
                            </td>
                            <td className="dt__td" data-label="Account type" data-w2="">{"Public sector undertaking"}</td>
                            <td className="dt__td" data-label="Details asked for">{"Company details + government details"}</td>
                            <td className="dt__td" data-label="Default rates" data-w2="">{"CORP or government rate"}</td>
                            <td className="dt__td" data-e="">{"–"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "1", "--k1": "1", "--k2": "1", "--k3": "5", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"AIR"}</b>
                            </td>
                            <td className="dt__td" data-label="Account type" data-w2="">{"Airline (crew)"}</td>
                            <td className="dt__td" data-label="Details asked for">{"Airline code, crew rooms a night, release time, monthly statement"}</td>
                            <td className="dt__td" data-label="Default rates" data-w2="">{"Crew fixed rate"}</td>
                            <td className="dt__td" data-e="">{"–"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "4", "--k1": "4", "--k2": "5", "--k3": "1", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"EMB"}</b>
                            </td>
                            <td className="dt__td" data-label="Account type" data-w2="">{"Embassy / consulate"}</td>
                            <td className="dt__td" data-label="Details asked for">{"Country, tax treatment (exempt certificate)"}</td>
                            <td className="dt__td" data-label="Default rates" data-w2="">{"% off BAR"}</td>
                            <td className="dt__td" data-e="">{"–"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "7", "--k1": "7", "--k2": "9", "--k3": "1", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"NGO"}</b>
                            </td>
                            <td className="dt__td" data-label="Account type" data-w2="">{"NGO / trust"}</td>
                            <td className="dt__td" data-label="Details asked for">{"Registration (NGO Darpan / 12A / 80G)"}</td>
                            <td className="dt__td" data-label="Default rates" data-w2="">{"% off BAR"}</td>
                            <td className="dt__td" data-e="">{"–"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "6", "--k1": "5", "--k2": "4", "--k3": "7", "--k4": "2"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"MICE"}</b>
                            </td>
                            <td className="dt__td" data-label="Account type" data-w2="">{"Event / MICE organiser"}</td>
                            <td className="dt__td" data-label="Details asked for">{"Company details, events and halls"}</td>
                            <td className="dt__td" data-label="Default rates" data-w2="">{"Group rate"}</td>
                            <td className="dt__td" data-label="Commission" data-w2="">{"Optional"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "3", "--k1": "3", "--k2": "2", "--k3": "1", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"EDU"}</b>
                            </td>
                            <td className="dt__td" data-label="Account type" data-w2="">{"Educational institution"}</td>
                            <td className="dt__td" data-label="Details asked for" data-w2="">{"Company details"}</td>
                            <td className="dt__td" data-label="Default rates" data-w2="">{"% off BAR"}</td>
                            <td className="dt__td" data-e="">{"–"}</td>
                            <td className="dt__td" data-label="Status" data-s="">
                              <span className="pill pill--ready">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Active"}
                              </span>
                            </td>
                          </tr>
                          <tr style={{"--k0": "8", "--k1": "8", "--k2": "2", "--k3": "1", "--k4": "3"}}>
                            <td className="dt__td nw" data-label="Code" data-t="">
                              <b>{"OTH"}</b>
                            </td>
                            <td className="dt__td" data-label="Account type" data-w2="">{"Other"}</td>
                            <td className="dt__td" data-label="Details asked for" data-w2="">{"Company details"}</td>
                            <td className="dt__td" data-label="Default rates" data-w2="">{"% off BAR"}</td>
                            <td className="dt__td" data-e="">{"–"}</td>
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
                <span>{"Commission is used in revenue reports (net revenue). OTA connections are simulated until the channel manager is connected."}</span>
              </div>
              <div className="modal" id="RSS-P12-src-app" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-app-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-app-t">{"Source"}</h2>
                      <p className="modal__desc">{"Aviv mobile app"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1906">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1906" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1907">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1907" type="text" required={true} defaultValue={"APP"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1908">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1908" type="text" required={true} defaultValue={"Aviv mobile app"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1909">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1909" defaultValue={"Brand site"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1910">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1910" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1911">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1911" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1912">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1912" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-website" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-website-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-website-t">{"Source"}</h2>
                      <p className="modal__desc">{"Aviv website"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1913">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1913" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1914">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1914" type="text" required={true} defaultValue={"WEBSITE"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1915">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1915" type="text" required={true} defaultValue={"Aviv website"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1916">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1916" defaultValue={"Direct"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1917">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1917" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1918">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1918" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1919">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1919" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-booking" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-booking-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-booking-t">{"Source"}</h2>
                      <p className="modal__desc">{"Booking.com"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1920">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1920" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1921">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1921" type="text" required={true} defaultValue={"BOOKING"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1922">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1922" type="text" required={true} defaultValue={"Booking.com"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1923">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1923" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1924">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1924" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1925">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1925" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1926">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1926" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-agoda" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-agoda-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-agoda-t">{"Source"}</h2>
                      <p className="modal__desc">{"Agoda"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1927">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1927" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1928">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1928" type="text" required={true} defaultValue={"AGODA"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1929">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1929" type="text" required={true} defaultValue={"Agoda"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1930">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1930" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1931">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1931" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1932">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1932" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1933">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1933" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-expedia" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-expedia-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-expedia-t">{"Source"}</h2>
                      <p className="modal__desc">{"Expedia"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1934">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1934" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1935">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1935" type="text" required={true} defaultValue={"EXPEDIA"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1936">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1936" type="text" required={true} defaultValue={"Expedia"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1937">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1937" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1938">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1938" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1939">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1939" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1940">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1940" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-mmt" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-mmt-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-mmt-t">{"Source"}</h2>
                      <p className="modal__desc">{"MakeMyTrip / Goibibo"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1941">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1941" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1942">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1942" type="text" required={true} defaultValue={"MMT"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1943">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1943" type="text" required={true} defaultValue={"MakeMyTrip / Goibibo"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1944">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1944" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1945">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1945" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1946">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1946" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1947">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1947" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-eamt" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-eamt-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-eamt-t">{"Source"}</h2>
                      <p className="modal__desc">{"EaseMyTrip"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1948">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1948" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1949">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1949" type="text" required={true} defaultValue={"EASEMYTRIP"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1950">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1950" type="text" required={true} defaultValue={"EaseMyTrip"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1951">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1951" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1952">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1952" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1953">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1953" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1954">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1954" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-trip" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-trip-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-trip-t">{"Source"}</h2>
                      <p className="modal__desc">{"Trip.com"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1955">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1955" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1956">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1956" type="text" required={true} defaultValue={"TRIP"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1957">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1957" type="text" required={true} defaultValue={"Trip.com"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1958">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1958" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1959">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1959" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1960">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1960" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1961">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1961" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-walkin" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-walkin-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-walkin-t">{"Source"}</h2>
                      <p className="modal__desc">{"Walk-in"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1962">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1962" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1963">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1963" type="text" required={true} defaultValue={"WALKIN"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1964">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1964" type="text" required={true} defaultValue={"Walk-in"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1965">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1965" defaultValue={"Walk-in"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1966">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1966" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1967">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1967" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1968">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1968" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-phone" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-phone-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-phone-t">{"Source"}</h2>
                      <p className="modal__desc">{"Phone"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1969">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1969" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1970">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1970" type="text" required={true} defaultValue={"PHONE"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1971">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1971" type="text" required={true} defaultValue={"Phone"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1972">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1972" defaultValue={"Direct"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1973">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1973" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1974">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1974" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1975">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1975" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-email" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-email-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-email-t">{"Source"}</h2>
                      <p className="modal__desc">{"Email"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1976">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1976" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1977">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1977" type="text" required={true} defaultValue={"EMAIL"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1978">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1978" type="text" required={true} defaultValue={"Email"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1979">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1979" defaultValue={"Direct"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1980">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1980" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1981">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1981" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1982">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1982" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-whatsapp" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-whatsapp-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-whatsapp-t">{"Source"}</h2>
                      <p className="modal__desc">{"WhatsApp"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1983">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1983" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1984">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1984" type="text" required={true} defaultValue={"WHATSAPP"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1985">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1985" type="text" required={true} defaultValue={"WhatsApp"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1986">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1986" defaultValue={"Direct"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1987">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1987" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1988">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1988" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1989">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1989" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-agent" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-agent-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-agent-t">{"Source"}</h2>
                      <p className="modal__desc">{"Travel agent"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1990">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1990" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1991">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1991" type="text" required={true} defaultValue={"AGENT"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1992">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1992" type="text" required={true} defaultValue={"Travel agent"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f1993">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1993" defaultValue={"Agent"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f1994">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1994" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1995">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1995" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f1996">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f1996" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-src-company" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-src-company-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-src-company-t">{"Source"}</h2>
                      <p className="modal__desc">{"Company booking"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f1997">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1997" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1998">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1998" type="text" required={true} defaultValue={"COMPANY"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f1999">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f1999" type="text" required={true} defaultValue={"Company booking"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2000">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2000" defaultValue={"Corporate"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2001">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2001" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2002">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2002" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2003">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2003" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-seg-leisure" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-seg-leisure-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-seg-leisure-t">{"Segment"}</h2>
                      <p className="modal__desc">{"Leisure (FIT)"}</p>
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
                        <label className="field__label" htmlFor="f2004">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2004" defaultValue={"Segment"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2005">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2005" type="text" required={true} defaultValue={"LEISURE"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2006">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2006" type="text" required={true} defaultValue={"Leisure (FIT)"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2007">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2007" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2008">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2008" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2009">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2009" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-seg-corporate" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-seg-corporate-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-seg-corporate-t">{"Segment"}</h2>
                      <p className="modal__desc">{"Corporate"}</p>
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
                        <label className="field__label" htmlFor="f2010">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2010" defaultValue={"Segment"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2011">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2011" type="text" required={true} defaultValue={"CORPORATE"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2012">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2012" type="text" required={true} defaultValue={"Corporate"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2013">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2013" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2014">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2014" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2015">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2015" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-seg-mice" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-seg-mice-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-seg-mice-t">{"Segment"}</h2>
                      <p className="modal__desc">{"Conference & events"}</p>
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
                        <label className="field__label" htmlFor="f2016">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2016" defaultValue={"Segment"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2017">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2017" type="text" required={true} defaultValue={"MICE"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2018">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2018" type="text" required={true} defaultValue={"Conference & events"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2019">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2019" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2020">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2020" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2021">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2021" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-seg-wedding" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-seg-wedding-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-seg-wedding-t">{"Segment"}</h2>
                      <p className="modal__desc">{"Wedding"}</p>
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
                        <label className="field__label" htmlFor="f2022">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2022" defaultValue={"Segment"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2023">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2023" type="text" required={true} defaultValue={"WEDDING"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2024">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2024" type="text" required={true} defaultValue={"Wedding"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2025">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2025" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2026">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2026" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2027">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2027" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-seg-agent" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-seg-agent-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-seg-agent-t">{"Segment"}</h2>
                      <p className="modal__desc">{"Travel agent"}</p>
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
                        <label className="field__label" htmlFor="f2028">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2028" defaultValue={"Segment"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2029">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2029" type="text" required={true} defaultValue={"AGENT"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2030">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2030" type="text" required={true} defaultValue={"Travel agent"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2031">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2031" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2032">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2032" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2033">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2033" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-seg-ota" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-seg-ota-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-seg-ota-t">{"Segment"}</h2>
                      <p className="modal__desc">{"Online travel agency"}</p>
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
                        <label className="field__label" htmlFor="f2034">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2034" defaultValue={"Segment"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2035">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2035" type="text" required={true} defaultValue={"OTA"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2036">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2036" type="text" required={true} defaultValue={"Online travel agency"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2037">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2037" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2038">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2038" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2039">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2039" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-seg-club" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-seg-club-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-seg-club-t">{"Segment"}</h2>
                      <p className="modal__desc">{"Club member"}</p>
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
                        <label className="field__label" htmlFor="f2040">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2040" defaultValue={"Segment"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2041">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2041" type="text" required={true} defaultValue={"CLUB"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2042">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2042" type="text" required={true} defaultValue={"Club member"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2043">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2043" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2044">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2044" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2045">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2045" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-seg-govt" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-seg-govt-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-seg-govt-t">{"Segment"}</h2>
                      <p className="modal__desc">{"Government"}</p>
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
                        <label className="field__label" htmlFor="f2046">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2046" defaultValue={"Segment"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2047">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2047" type="text" required={true} defaultValue={"GOVT"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2048">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2048" type="text" required={true} defaultValue={"Government"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2049">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2049" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2050">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2050" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2051">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2051" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-seg-longstay" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-seg-longstay-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-seg-longstay-t">{"Segment"}</h2>
                      <p className="modal__desc">{"Long stay"}</p>
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
                        <label className="field__label" htmlFor="f2052">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2052" defaultValue={"Segment"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2053">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2053" type="text" required={true} defaultValue={"LONGSTAY"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2054">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2054" type="text" required={true} defaultValue={"Long stay"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2055">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2055" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2056">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2056" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2057">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2057" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-seg-comp" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-seg-comp-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-seg-comp-t">{"Segment"}</h2>
                      <p className="modal__desc">{"Complimentary"}</p>
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
                        <label className="field__label" htmlFor="f2058">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2058" defaultValue={"Segment"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2059">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2059" type="text" required={true} defaultValue={"COMP"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2060">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2060" type="text" required={true} defaultValue={"Complimentary"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2061">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2061" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2062">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2062" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2063">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2063" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-ch-app" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-ch-app-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-ch-app-t">{"Channel"}</h2>
                      <p className="modal__desc">{"Aviv mobile app (CRS)"}</p>
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
                        <label className="field__label" htmlFor="f2064">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2064" defaultValue={"Channel"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2065">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2065" type="text" required={true} defaultValue={"APP"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2066">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2066" type="text" required={true} defaultValue={"Aviv mobile app (CRS)"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2067">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2067" defaultValue={"Brand site"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f2068">{"Commission (%)"}</label>
                        <input className="field__input num" id="f2068" type="number" defaultValue={"0"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2069">{"Connection"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2069" defaultValue={"Central reservation system (CRS)"}>
                            <option>{"Central reservation system (CRS)"}</option>
                            <option>{"Direct"}</option>
                            <option>{"Channel manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2070">{"Contact email"}</label>
                        <input className="field__input" id="f2070" type="email" defaultValue={"app@channels.avivkochi.example"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2071">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2071" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2072">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2072" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2073">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2073" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-ch-website" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-ch-website-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-ch-website-t">{"Channel"}</h2>
                      <p className="modal__desc">{"Aviv website booking engine"}</p>
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
                        <label className="field__label" htmlFor="f2074">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2074" defaultValue={"Channel"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2075">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2075" type="text" required={true} defaultValue={"WEBSITE"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2076">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2076" type="text" required={true} defaultValue={"Aviv website booking engine"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2077">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2077" defaultValue={"Website"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f2078">{"Commission (%)"}</label>
                        <input className="field__input num" id="f2078" type="number" defaultValue={"0"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2079">{"Connection"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2079" defaultValue={"Direct"}>
                            <option>{"Central reservation system (CRS)"}</option>
                            <option>{"Direct"}</option>
                            <option>{"Channel manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2080">{"Contact email"}</label>
                        <input className="field__input" id="f2080" type="email" defaultValue={"website@channels.avivkochi.example"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2081">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2081" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2082">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2082" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2083">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2083" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-ch-booking" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-ch-booking-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-ch-booking-t">{"Channel"}</h2>
                      <p className="modal__desc">{"Booking.com"}</p>
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
                        <label className="field__label" htmlFor="f2084">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2084" defaultValue={"Channel"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2085">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2085" type="text" required={true} defaultValue={"BOOKING"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2086">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2086" type="text" required={true} defaultValue={"Booking.com"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2087">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2087" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f2088">{"Commission (%)"}</label>
                        <input className="field__input num" id="f2088" type="number" defaultValue={"15"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2089">{"Connection"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2089" defaultValue={"Channel manager"}>
                            <option>{"Central reservation system (CRS)"}</option>
                            <option>{"Direct"}</option>
                            <option>{"Channel manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2090">{"Contact email"}</label>
                        <input className="field__input" id="f2090" type="email" defaultValue={"booking@channels.avivkochi.example"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2091">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2091" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2092">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2092" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2093">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2093" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-ch-agoda" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-ch-agoda-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-ch-agoda-t">{"Channel"}</h2>
                      <p className="modal__desc">{"Agoda"}</p>
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
                        <label className="field__label" htmlFor="f2094">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2094" defaultValue={"Channel"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2095">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2095" type="text" required={true} defaultValue={"AGODA"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2096">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2096" type="text" required={true} defaultValue={"Agoda"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2097">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2097" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f2098">{"Commission (%)"}</label>
                        <input className="field__input num" id="f2098" type="number" defaultValue={"18"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2099">{"Connection"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2099" defaultValue={"Channel manager"}>
                            <option>{"Central reservation system (CRS)"}</option>
                            <option>{"Direct"}</option>
                            <option>{"Channel manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2100">{"Contact email"}</label>
                        <input className="field__input" id="f2100" type="email" defaultValue={"agoda@channels.avivkochi.example"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2101">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2101" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2102">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2102" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2103">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2103" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-ch-expedia" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-ch-expedia-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-ch-expedia-t">{"Channel"}</h2>
                      <p className="modal__desc">{"Expedia"}</p>
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
                        <label className="field__label" htmlFor="f2104">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2104" defaultValue={"Channel"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2105">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2105" type="text" required={true} defaultValue={"EXPEDIA"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2106">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2106" type="text" required={true} defaultValue={"Expedia"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2107">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2107" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f2108">{"Commission (%)"}</label>
                        <input className="field__input num" id="f2108" type="number" defaultValue={"18"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2109">{"Connection"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2109" defaultValue={"Channel manager"}>
                            <option>{"Central reservation system (CRS)"}</option>
                            <option>{"Direct"}</option>
                            <option>{"Channel manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2110">{"Contact email"}</label>
                        <input className="field__input" id="f2110" type="email" defaultValue={"expedia@channels.avivkochi.example"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2111">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2111" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2112">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2112" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2113">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2113" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-ch-mmt" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-ch-mmt-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-ch-mmt-t">{"Channel"}</h2>
                      <p className="modal__desc">{"MakeMyTrip / Goibibo"}</p>
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
                        <label className="field__label" htmlFor="f2114">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2114" defaultValue={"Channel"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2115">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2115" type="text" required={true} defaultValue={"MMT"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2116">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2116" type="text" required={true} defaultValue={"MakeMyTrip / Goibibo"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2117">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2117" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f2118">{"Commission (%)"}</label>
                        <input className="field__input num" id="f2118" type="number" defaultValue={"17"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2119">{"Connection"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2119" defaultValue={"Channel manager"}>
                            <option>{"Central reservation system (CRS)"}</option>
                            <option>{"Direct"}</option>
                            <option>{"Channel manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2120">{"Contact email"}</label>
                        <input className="field__input" id="f2120" type="email" defaultValue={"mmt@channels.avivkochi.example"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2121">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2121" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2122">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2122" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2123">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2123" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-ch-eamt" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-ch-eamt-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-ch-eamt-t">{"Channel"}</h2>
                      <p className="modal__desc">{"EaseMyTrip"}</p>
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
                        <label className="field__label" htmlFor="f2124">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2124" defaultValue={"Channel"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2125">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2125" type="text" required={true} defaultValue={"EASEMYTRIP"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2126">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2126" type="text" required={true} defaultValue={"EaseMyTrip"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2127">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2127" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f2128">{"Commission (%)"}</label>
                        <input className="field__input num" id="f2128" type="number" defaultValue={"15"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2129">{"Connection"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2129" defaultValue={"Channel manager"}>
                            <option>{"Central reservation system (CRS)"}</option>
                            <option>{"Direct"}</option>
                            <option>{"Channel manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2130">{"Contact email"}</label>
                        <input className="field__input" id="f2130" type="email" defaultValue={"easemytrip@channels.avivkochi.example"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2131">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2131" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2132">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2132" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2133">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2133" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-ch-trip" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-ch-trip-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-ch-trip-t">{"Channel"}</h2>
                      <p className="modal__desc">{"Trip.com"}</p>
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
                        <label className="field__label" htmlFor="f2134">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2134" defaultValue={"Channel"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2135">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2135" type="text" required={true} defaultValue={"TRIP"} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2136">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2136" type="text" required={true} defaultValue={"Trip.com"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2137">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2137" defaultValue={"OTA"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f2138">{"Commission (%)"}</label>
                        <input className="field__input num" id="f2138" type="number" defaultValue={"15"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2139">{"Connection"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2139" defaultValue={"Channel manager"}>
                            <option>{"Central reservation system (CRS)"}</option>
                            <option>{"Direct"}</option>
                            <option>{"Channel manager"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2140">{"Contact email"}</label>
                        <input className="field__input" id="f2140" type="email" defaultValue={"trip@channels.avivkochi.example"} />
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2141">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2141" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2142">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2142" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2143">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2143" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P12-new" data-code="RSS-P12" role="dialog" aria-modal="true" aria-labelledby="RSS-P12-new-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P12-new-t">{"New entry"}</h2>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f2144">{"What are you adding?"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2144" defaultValue={"Source"}>
                            <option>{"Source"}</option>
                            <option>{"Segment"}</option>
                            <option>{"Channel"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2145">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2145" type="text" required={true} defaultValue={""} />
                        <span className="field__hint">{"Capital letters, unique"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2146">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f2146" type="text" required={true} defaultValue={""} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2147">{"Type"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2147" defaultValue={"Direct"}>
                            <option>{"Brand site"}</option>
                            <option>{"Direct"}</option>
                            <option>{"OTA"}</option>
                            <option>{"Walk-in"}</option>
                            <option>{"Agent"}</option>
                            <option>{"Corporate"}</option>
                            <option>{"Website"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Money and messages (channels)"}</legend>
                      <div className="s-grid3">
                        <div className="field">
                          <label className="field__label" htmlFor="f2148">{"Who collects the payment"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2148" defaultValue={"Hotel"}>
                              <option>{"Hotel"}</option>
                              <option>{"OTA – prepaid"}</option>
                              <option>{"OTA – virtual card"}</option>
                              <option>{"Depends on the booking"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"A payment method is not the same as a channel collecting for the hotel"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2149">{"Commission paid on"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2149" defaultValue={"Room charge only"}>
                              <option>{"Room charge only"}</option>
                              <option>{"Room and meals"}</option>
                              <option>{"Total bill"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f2150">{"Bookings are ordered by"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f2150" defaultValue={"External ID and message version"}>
                              <option>{"External ID and message version"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Older messages never overwrite newer ones"}</span>
                        </div>
                      </div>
                      <div className="s-note">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        <span>{"A booking message received twice returns the same booking. A change that arrives before its booking waits in the Channel Queue instead of creating a second booking."}</span>
                      </div>
                    </fieldset>
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
                  <span className="code-chip">{"RSS-15"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Booking sources, business types, channels with commission"}</dd>
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
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Rate groups"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Corporate, Travel agents, RSO Delhi NCR, ONLINE PORTALS – OTA, Government"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-19, RS-21"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Sales persons"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Suraj Narayan and the sales team (from Users, LG-02)"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-19, RS-21"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="List" data-w2="" data-t="">{"Account detail lists"}</td>
                        <td className="dt__td" data-label="Values" data-w2="">{"Travel association: TAAI, IATO, ADTOI, TAFI, Kerala Travel Mart Society · Government level: Central government, State government, Local body, Defence · Payment through: Treasury, PFMS · Airline crew rate · Rate basis: Fixed rate per room type, Discount off BAR, Use a rate plan as it is"}</td>
                        <td className="dt__td" data-label="Used on" data-w2="">{"RS-19"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <div className="modal" id="rss15-new-account-type" data-flow="add-form" role="dialog" aria-modal="true" aria-labelledby="rss15-new-account-type-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="rss15-new-account-type-t">{"New account type"}</h2>
                      <p className="modal__desc">{"Used on Corporate (RS-19): decides which details the account form asks for."}</p>
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
                        <label className="field__label" htmlFor="rss15-new-account-type-f1">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rss15-new-account-type-f1" type="text" placeholder="For example CLUB" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss15-new-account-type-f2">
                          {"Account type "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="rss15-new-account-type-f2" type="text" placeholder="For example Sports club" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss15-new-account-type-f3">{"Details asked for"}</label>
                        <textarea className="field__input" id="rss15-new-account-type-f3" rows="3" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss15-new-account-type-f4">{"Default rates"}</label>
                        <input className="field__input" id="rss15-new-account-type-f4" type="text" placeholder="For example % off BAR" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss15-new-account-type-f5">{"Commission"}</label>
                        <input className="field__input" id="rss15-new-account-type-f5" type="text" placeholder="For example 10 % · TDS 2 %, or –" />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rss15-new-account-type-f6">{"Status"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rss15-new-account-type-f6" defaultValue={""}>
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
                    <a className="btn btn--primary" href="#flow-done">{"Save account type"}</a>
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
