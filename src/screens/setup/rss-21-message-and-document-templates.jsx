// GENERATED from public/setup/rss-21-message-and-document-templates/index.html by scripts/convert_legacy.py.
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
    "href": "/setup/rss-21-message-and-document-templates/rss-21-message-and-document-templates.css",
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

export default function SetupRss21MessageAndDocumentTemplates() {
  return (
    <ScreenShell title="Message & Document Templates" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RSS-21" data-code="RSS-21" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="RSS-21" tabIndex="-1">
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
                        <span aria-current="page">{"Message & Document Templates"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Message & Document Templates"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RSS-21"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs3711" type="search" name="q" placeholder="Search templates" aria-label="Search templates" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs3711" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf3712" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf3712" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#sliders" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f ">
                            <span className="hf-f__l">{"Channel"}</span>
                            <select className="hf-f__c">
                              <option>{"All channels"}</option>
                              <option>{"Email"}</option>
                              <option>{"WhatsApp"}</option>
                              <option>{"SMS"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">{"Kind"}</span>
                            <select className="hf-f__c">
                              <option>{"All kinds"}</option>
                              <option>{"Advance Reminder"}</option>
                              <option>{"Amendment"}</option>
                              <option>{"Cancellation"}</option>
                              <option>{"Confirmation"}</option>
                              <option>{"Group Confirmation"}</option>
                              <option>{"Option Expiry"}</option>
                              <option>{"Payment Link"}</option>
                              <option>{"Pre Arrival"}</option>
                              <option>{"Quote"}</option>
                              <option>{"Receipt"}</option>
                              <option>{"Tentative"}</option>
                              <option>{"Waitlist"}</option>
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
                          <label className="hfilter__done" htmlFor="hf3712">
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
                    <a className="btn btn--primary" href="#RSS-21a-new" data-opens="RSS-21a">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"New template"}
                    </a>
                  </div>
                </div>
              </header>
              <p className="s-note" data-flow="own-tpl">
                {"Reservation templates. All templates of the hotel can be seen together in the Template Library ("}
                <Link data-leads-to="AD-07" to={"/property-administration/ad-07-template-library"}>{"AD-07"}</Link>
                {")."}
              </p>
              <div className="pgw">
                <div className="s-scroll">
                  <table className="srt dt__table dt--hug" data-code="RSS-21-list" style={{"--srt-cols": "auto auto auto auto auto auto max-content"}} data-mc="">
                    <caption className="sr-only">{"Templates"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          <input className="srt-i srt-a0" type="radio" name="strss210" id="strss210-0a" aria-label="Sort by Code, lowest or A first" />
                          <input className="srt-i srt-d0" type="radio" name="strss210" id="strss210-0d" aria-label="Sort by Code, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strss210-0a">{"Code"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strss210-0d" aria-hidden="true">{"Code"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a1" type="radio" name="strss210" id="strss210-1a" aria-label="Sort by Template, lowest or A first" />
                          <input className="srt-i srt-d1" type="radio" name="strss210" id="strss210-1d" aria-label="Sort by Template, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strss210-1a">{"Template"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strss210-1d" aria-hidden="true">{"Template"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a2" type="radio" name="strss210" id="strss210-2a" aria-label="Sort by Kind, lowest or A first" />
                          <input className="srt-i srt-d2" type="radio" name="strss210" id="strss210-2d" aria-label="Sort by Kind, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strss210-2a">{"Kind"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strss210-2d" aria-hidden="true">{"Kind"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a3" type="radio" name="strss210" id="strss210-3a" aria-label="Sort by Channel, lowest or A first" />
                          <input className="srt-i srt-d3" type="radio" name="strss210" id="strss210-3d" aria-label="Sort by Channel, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="strss210-3a">{"Channel"}</label>
                          <label className="srt-l srt-l--d" htmlFor="strss210-3d" aria-hidden="true">{"Channel"}</label>
                        </th>
                        <th scope="col">{"Language"}</th>
                        <th scope="col">{"Status"}</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{"--k0": "11", "--k1": "12", "--k2": "9", "--k3": "2"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"QUOTE-WA"}</strong>
                        </td>
                        <td className="dt__td nw" data-label="Template" data-w2="">{"Quote – WhatsApp"}</td>
                        <td className="dt__td nw" data-label="Kind">{"Quote"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Whatsapp"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-QUOTE-WA" data-opens="RSS-21a" aria-label="Edit Quote – WhatsApp">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-QUOTE-WA" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "10", "--k1": "11", "--k2": "9", "--k3": "1"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"QUOTE-EMAIL"}</strong>
                        </td>
                        <td className="dt__td nw" data-label="Template" data-w2="">{"Quote – Email"}</td>
                        <td className="dt__td nw" data-label="Kind">{"Quote"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Email"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-QUOTE-EMAIL" data-opens="RSS-21a" aria-label="Edit Quote – Email">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-QUOTE-EMAIL" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "4", "--k1": "4", "--k2": "4", "--k3": "1"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"CONF-EMAIL"}</strong>
                        </td>
                        <td className="dt__td" data-label="Template">{"Booking confirmation – Email"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Confirmation"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Email"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-CONF-EMAIL" data-opens="RSS-21a" aria-label="Edit Booking confirmation – Email">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-CONF-EMAIL" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "5", "--k1": "5", "--k2": "4", "--k3": "2"}}>
                        <td className="dt__td nw" data-label="Code" data-t="">
                          <strong>{"CONF-WA"}</strong>
                        </td>
                        <td className="dt__td" data-label="Template">{"Booking confirmation – WhatsApp"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Confirmation"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Whatsapp"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-CONF-WA" data-opens="RSS-21a" aria-label="Edit Booking confirmation – WhatsApp">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-CONF-WA" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "13", "--k1": "14", "--k2": "11", "--k3": "1"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"TENT-EMAIL"}</strong>
                        </td>
                        <td className="dt__td" data-label="Template" data-w2="">{"Tentative booking – Email"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Tentative"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Email"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-TENT-EMAIL" data-opens="RSS-21a" aria-label="Edit Tentative booking – Email">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-TENT-EMAIL" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "2", "--k1": "3", "--k2": "2", "--k3": "1"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"AMEND-EMAIL"}</strong>
                        </td>
                        <td className="dt__td nw" data-label="Template" data-w2="">{"Amendment – Email"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Amendment"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Email"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-AMEND-EMAIL" data-opens="RSS-21a" aria-label="Edit Amendment – Email">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-AMEND-EMAIL" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "3", "--k1": "6", "--k2": "3", "--k3": "1"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"CANCEL-EMAIL"}</strong>
                        </td>
                        <td className="dt__td nw" data-label="Template" data-w2="">{"Cancellation – Email"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Cancellation"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Email"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-CANCEL-EMAIL" data-opens="RSS-21a" aria-label="Edit Cancellation – Email">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-CANCEL-EMAIL" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "12", "--k1": "1", "--k2": "10", "--k3": "1"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"RECEIPT-EMAIL"}</strong>
                        </td>
                        <td className="dt__td" data-label="Template" data-w2="">{"Advance receipt – Email"}</td>
                        <td className="dt__td nw" data-label="Kind">{"Receipt"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Email"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-RECEIPT-EMAIL" data-opens="RSS-21a" aria-label="Edit Advance receipt – Email">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-RECEIPT-EMAIL" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "8", "--k1": "9", "--k2": "7", "--k3": "2"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"PAYLINK-WA"}</strong>
                        </td>
                        <td className="dt__td" data-label="Template" data-w2="">{"Payment link – WhatsApp"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Payment Link"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Whatsapp"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-PAYLINK-WA" data-opens="RSS-21a" aria-label="Edit Payment link – WhatsApp">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-PAYLINK-WA" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "1", "--k1": "2", "--k2": "1", "--k3": "2"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"ADVREM-WA"}</strong>
                        </td>
                        <td className="dt__td" data-label="Template">{"Advance reminder – WhatsApp"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Advance Reminder"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Whatsapp"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-ADVREM-WA" data-opens="RSS-21a" aria-label="Edit Advance reminder – WhatsApp">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-ADVREM-WA" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "9", "--k1": "10", "--k2": "8", "--k3": "2"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"PREARR-WA"}</strong>
                        </td>
                        <td className="dt__td" data-label="Template" data-w2="">{"Pre-arrival – WhatsApp"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Pre Arrival"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Whatsapp"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-PREARR-WA" data-opens="RSS-21a" aria-label="Edit Pre-arrival – WhatsApp">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-PREARR-WA" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "14", "--k1": "13", "--k2": "12", "--k3": "2"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"WAITLIST-WA"}</strong>
                        </td>
                        <td className="dt__td" data-label="Template">{"Room available (waitlist) – WhatsApp"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Waitlist"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Whatsapp"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-WAITLIST-WA" data-opens="RSS-21a" aria-label="Edit Room available (waitlist) – WhatsApp">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-WAITLIST-WA" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "7", "--k1": "8", "--k2": "6", "--k3": "1"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"OPTEXP-EMAIL"}</strong>
                        </td>
                        <td className="dt__td" data-label="Template">{"Option date expiry – Email"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Option Expiry"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Email"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-OPTEXP-EMAIL" data-opens="RSS-21a" aria-label="Edit Option date expiry – Email">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-OPTEXP-EMAIL" data-opens="RSS-P18">{"Preview"}</a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "6", "--k1": "7", "--k2": "5", "--k3": "1"}}>
                        <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                          <strong>{"GRPCONF-EMAIL"}</strong>
                        </td>
                        <td className="dt__td" data-label="Template">{"Group confirmation – Email"}</td>
                        <td className="dt__td nw" data-label="Kind" data-w2="">{"Group Confirmation"}</td>
                        <td className="dt__td nw" data-label="Channel" data-w2="">{"Email"}</td>
                        <td className="dt__td nw" data-label="Language" data-w2="">{"English"}</td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="#RSS-21a-GRPCONF-EMAIL" data-opens="RSS-21a" aria-label="Edit Group confirmation – Email">{"Edit"}</a>
                          {" "}
                          <a className="btn" href="#RSS-P18-GRPCONF-EMAIL" data-opens="RSS-P18">{"Preview"}</a>
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
              <div className="modal modal--full" id="RSS-21a-QUOTE-WA" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-QUOTE-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-QUOTE-WA-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Quote – WhatsApp"}</p>
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
                        <label className="field__label" htmlFor="f3713">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3713" type="text" required={true} defaultValue={"QUOTE-WA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3714">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3714" type="text" required={true} defaultValue={"Quote – WhatsApp"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3715">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3715" defaultValue={"Quote"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3716">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3716" defaultValue={"Whatsapp"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3717">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3717" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3718">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3718" type="text" defaultValue={""} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3719">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3719" defaultValue={"Dear {{guest.name}}, thank you for your enquiry. For {{stay.arrival}} to {{stay.departure}} ({{stay.nights}} nights) we can offer {{room.type}} at {{price.total}} including taxes. This quote is valid for 48 hours. Reply to book. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-QUOTE-WA" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3720">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3720" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3721">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3721" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3722">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3722" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-QUOTE-WA" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-QUOTE-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-QUOTE-WA-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Quote – WhatsApp · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, thank you for your enquiry. For 24 Oct 2026 to 26 Oct 2026 (2 nights) we can offer Garden Deluxe Room at ₹19,821.64 including taxes. This quote is valid for 48 hours. Reply to book. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3723">{"Send a test to"}</label>
                      <input className="field__input" id="f3723" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-QUOTE-EMAIL" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-QUOTE-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-QUOTE-EMAIL-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Quote – Email"}</p>
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
                        <label className="field__label" htmlFor="f3724">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3724" type="text" required={true} defaultValue={"QUOTE-EMAIL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3725">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3725" type="text" required={true} defaultValue={"Quote – Email"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3726">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3726" defaultValue={"Quote"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f3727">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3727" defaultValue={"Email"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3728">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3728" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3729">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3729" type="text" defaultValue={"Your quote from The Aviv Kochi"} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3730">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3730" defaultValue={"Dear {{guest.name}}, Thank you for your interest in The Aviv Kochi. Your quote for {{stay.arrival}} to {{stay.departure}}: {{room.type}}, {{price.total}} including taxes. We would be delighted to host you. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-QUOTE-EMAIL" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3731">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3731" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3732">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3732" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3733">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3733" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-QUOTE-EMAIL" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-QUOTE-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-QUOTE-EMAIL-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Quote – Email · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p>
                        <strong>{"Your quote from The Aviv Kochi"}</strong>
                      </p>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, Thank you for your interest in The Aviv Kochi. Your quote for 24 Oct 2026 to 26 Oct 2026: Garden Deluxe Room, ₹19,821.64 including taxes. We would be delighted to host you. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3734">{"Send a test to"}</label>
                      <input className="field__input" id="f3734" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-CONF-EMAIL" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-CONF-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-CONF-EMAIL-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Booking confirmation – Email"}</p>
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
                        <label className="field__label" htmlFor="f3735">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3735" type="text" required={true} defaultValue={"CONF-EMAIL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3736">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3736" type="text" required={true} defaultValue={"Booking confirmation – Email"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3737">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3737" defaultValue={"Confirmation"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f3738">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3738" defaultValue={"Email"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3739">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3739" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3740">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3740" type="text" defaultValue={"Booking confirmed: {{reservation.number}}"} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3741">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3741" defaultValue={"Dear {{guest.name}}, Your booking {{reservation.number}} is confirmed. Arrival {{stay.arrival}} from 15:00 · Departure {{stay.departure}} by 12:00 {{room.type}} · {{price.total}} including taxes {{policy.cancellation}} The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-CONF-EMAIL" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3742">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3742" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3743">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3743" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3744">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3744" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-CONF-EMAIL" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-CONF-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-CONF-EMAIL-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Booking confirmation – Email · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p>
                        <strong>{"Booking confirmed: FK-10037"}</strong>
                      </p>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, Your booking FK-10037 is confirmed. Arrival 24 Oct 2026 from 15:00 · Departure 26 Oct 2026 by 12:00 Garden Deluxe Room · ₹19,821.64 including taxes Free cancellation until 72 hours before arrival. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3745">{"Send a test to"}</label>
                      <input className="field__input" id="f3745" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-CONF-WA" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-CONF-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-CONF-WA-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Booking confirmation – WhatsApp"}</p>
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
                        <label className="field__label" htmlFor="f3746">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3746" type="text" required={true} defaultValue={"CONF-WA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3747">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3747" type="text" required={true} defaultValue={"Booking confirmation – WhatsApp"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3748">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3748" defaultValue={"Confirmation"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3749">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3749" defaultValue={"Whatsapp"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3750">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3750" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3751">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3751" type="text" defaultValue={""} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3752">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3752" defaultValue={"Hello {{guest.name}}! Your stay {{reservation.number}} at The Aviv Kochi is confirmed for {{stay.arrival}} – {{stay.departure}}. Check-in from 15:00. See you soon! The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-CONF-WA" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3753">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3753" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3754">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3754" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3755">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3755" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-CONF-WA" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-CONF-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-CONF-WA-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Booking confirmation – WhatsApp · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p style={{"whiteSpace": "pre-line"}}>{"Hello Ms Priya Noel! Your stay FK-10037 at The Aviv Kochi is confirmed for 24 Oct 2026 – 26 Oct 2026. Check-in from 15:00. See you soon! The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3756">{"Send a test to"}</label>
                      <input className="field__input" id="f3756" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-TENT-EMAIL" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-TENT-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-TENT-EMAIL-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Tentative booking – Email"}</p>
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
                        <label className="field__label" htmlFor="f3757">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3757" type="text" required={true} defaultValue={"TENT-EMAIL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3758">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3758" type="text" required={true} defaultValue={"Tentative booking – Email"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3759">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3759" defaultValue={"Tentative"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f3760">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3760" defaultValue={"Email"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3761">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3761" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3762">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3762" type="text" defaultValue={"Tentative booking {{reservation.number}}"} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3763">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3763" defaultValue={"Dear {{guest.name}}, We are holding {{reservation.number}} until {{option.date}}. Please pay the advance of {{advance.amount}} to confirm. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-TENT-EMAIL" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3764">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3764" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3765">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3765" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3766">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3766" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-TENT-EMAIL" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-TENT-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-TENT-EMAIL-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Tentative booking – Email · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p>
                        <strong>{"Tentative booking FK-10037"}</strong>
                      </p>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, We are holding FK-10037 until 25 Oct 2026. Please pay the advance of ₹10,382.82 to confirm. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3767">{"Send a test to"}</label>
                      <input className="field__input" id="f3767" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-AMEND-EMAIL" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-AMEND-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-AMEND-EMAIL-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Amendment – Email"}</p>
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
                        <label className="field__label" htmlFor="f3768">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3768" type="text" required={true} defaultValue={"AMEND-EMAIL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3769">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3769" type="text" required={true} defaultValue={"Amendment – Email"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3770">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3770" defaultValue={"Amendment"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f3771">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3771" defaultValue={"Email"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3772">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3772" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3773">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3773" type="text" defaultValue={"Booking {{reservation.number}} updated"} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3774">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3774" defaultValue={"Dear {{guest.name}}, Your booking {{reservation.number}} has been updated. New stay: {{stay.arrival}} to {{stay.departure}}, {{price.total}} including taxes. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-AMEND-EMAIL" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3775">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3775" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3776">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3776" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3777">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3777" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-AMEND-EMAIL" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-AMEND-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-AMEND-EMAIL-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Amendment – Email · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p>
                        <strong>{"Booking FK-10037 updated"}</strong>
                      </p>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, Your booking FK-10037 has been updated. New stay: 24 Oct 2026 to 26 Oct 2026, ₹19,821.64 including taxes. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3778">{"Send a test to"}</label>
                      <input className="field__input" id="f3778" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-CANCEL-EMAIL" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-CANCEL-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-CANCEL-EMAIL-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Cancellation – Email"}</p>
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
                        <label className="field__label" htmlFor="f3779">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3779" type="text" required={true} defaultValue={"CANCEL-EMAIL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3780">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3780" type="text" required={true} defaultValue={"Cancellation – Email"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3781">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3781" defaultValue={"Cancellation"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f3782">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3782" defaultValue={"Email"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3783">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3783" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3784">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3784" type="text" defaultValue={"Booking {{reservation.number}} cancelled"} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3785">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3785" defaultValue={"Dear {{guest.name}}, Your booking {{reservation.number}} has been cancelled. Cancellation charge: {{cancellation.penalty}}. Refund due: {{cancellation.refund}}. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-CANCEL-EMAIL" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3786">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3786" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3787">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3787" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3788">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3788" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-CANCEL-EMAIL" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-CANCEL-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-CANCEL-EMAIL-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Cancellation – Email · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p>
                        <strong>{"Booking FK-10037 cancelled"}</strong>
                      </p>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, Your booking FK-10037 has been cancelled. Cancellation charge: ₹10,382.82. Refund due: cancellation.refund. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3789">{"Send a test to"}</label>
                      <input className="field__input" id="f3789" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-RECEIPT-EMAIL" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-RECEIPT-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-RECEIPT-EMAIL-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Advance receipt – Email"}</p>
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
                        <label className="field__label" htmlFor="f3790">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3790" type="text" required={true} defaultValue={"RECEIPT-EMAIL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3791">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3791" type="text" required={true} defaultValue={"Advance receipt – Email"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3792">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3792" defaultValue={"Receipt"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f3793">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3793" defaultValue={"Email"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3794">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3794" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3795">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3795" type="text" defaultValue={"Receipt {{receipt.number}}"} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3796">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3796" defaultValue={"Dear {{guest.name}}, Thank you for your payment of {{payment.amount}} received on {{payment.date}} for booking {{reservation.number}}. Receipt {{receipt.number}} is attached. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-RECEIPT-EMAIL" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3797">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3797" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3798">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3798" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3799">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3799" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-RECEIPT-EMAIL" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-RECEIPT-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-RECEIPT-EMAIL-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Advance receipt – Email · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p>
                        <strong>{"Receipt RC-26-27-00049"}</strong>
                      </p>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, Thank you for your payment of ₹10,382.82 received on 22 Oct 2026 for booking FK-10037. Receipt RC-26-27-00049 is attached. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3800">{"Send a test to"}</label>
                      <input className="field__input" id="f3800" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-PAYLINK-WA" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-PAYLINK-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-PAYLINK-WA-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Payment link – WhatsApp"}</p>
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
                        <label className="field__label" htmlFor="f3801">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3801" type="text" required={true} defaultValue={"PAYLINK-WA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3802">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3802" type="text" required={true} defaultValue={"Payment link – WhatsApp"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3803">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3803" defaultValue={"Payment Link"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3804">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3804" defaultValue={"Whatsapp"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3805">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3805" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3806">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3806" type="text" defaultValue={""} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3807">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3807" defaultValue={"Dear {{guest.name}}, please pay {{payment.amount}} to secure booking {{reservation.number}}: {{payment.link}} (valid for 24 hours). The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-PAYLINK-WA" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3808">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3808" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3809">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3809" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3810">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3810" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-PAYLINK-WA" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-PAYLINK-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-PAYLINK-WA-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Payment link – WhatsApp · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, please pay ₹10,382.82 to secure booking FK-10037: pay.avivkochi.example/l/fk-10037 (valid for 24 hours). The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3811">{"Send a test to"}</label>
                      <input className="field__input" id="f3811" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-ADVREM-WA" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-ADVREM-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-ADVREM-WA-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Advance reminder – WhatsApp"}</p>
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
                        <label className="field__label" htmlFor="f3812">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3812" type="text" required={true} defaultValue={"ADVREM-WA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3813">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3813" type="text" required={true} defaultValue={"Advance reminder – WhatsApp"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3814">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3814" defaultValue={"Advance Reminder"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3815">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3815" defaultValue={"Whatsapp"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3816">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3816" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3817">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3817" type="text" defaultValue={""} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3818">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3818" defaultValue={"Dear {{guest.name}}, a reminder that the advance of {{advance.amount}} for {{reservation.number}} is due on {{advance.due}}. Pay with the link: {{payment.link}} The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-ADVREM-WA" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3819">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3819" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3820">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3820" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3821">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3821" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-ADVREM-WA" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-ADVREM-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-ADVREM-WA-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Advance reminder – WhatsApp · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, a reminder that the advance of ₹10,382.82 for FK-10037 is due on 25 Oct 2026. Pay with the link: pay.avivkochi.example/l/fk-10037 The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3822">{"Send a test to"}</label>
                      <input className="field__input" id="f3822" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-PREARR-WA" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-PREARR-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-PREARR-WA-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Pre-arrival – WhatsApp"}</p>
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
                        <label className="field__label" htmlFor="f3823">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3823" type="text" required={true} defaultValue={"PREARR-WA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3824">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3824" type="text" required={true} defaultValue={"Pre-arrival – WhatsApp"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3825">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3825" defaultValue={"Pre Arrival"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3826">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3826" defaultValue={"Whatsapp"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3827">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3827" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3828">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3828" type="text" defaultValue={""} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3829">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3829" defaultValue={"Welcome in advance, {{guest.name}}! We look forward to seeing you tomorrow. Check-in is from 15:00. Tell us your arrival time and any requests. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-PREARR-WA" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3830">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3830" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3831">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3831" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3832">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3832" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-PREARR-WA" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-PREARR-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-PREARR-WA-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Pre-arrival – WhatsApp · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p style={{"whiteSpace": "pre-line"}}>{"Welcome in advance, Ms Priya Noel! We look forward to seeing you tomorrow. Check-in is from 15:00. Tell us your arrival time and any requests. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3833">{"Send a test to"}</label>
                      <input className="field__input" id="f3833" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-WAITLIST-WA" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-WAITLIST-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-WAITLIST-WA-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Room available (waitlist) – WhatsApp"}</p>
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
                        <label className="field__label" htmlFor="f3834">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3834" type="text" required={true} defaultValue={"WAITLIST-WA"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3835">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3835" type="text" required={true} defaultValue={"Room available (waitlist) – WhatsApp"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3836">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3836" defaultValue={"Waitlist"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3837">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3837" defaultValue={"Whatsapp"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3838">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3838" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3839">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3839" type="text" defaultValue={""} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3840">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3840" defaultValue={"Good news, {{guest.name}} – a {{room.type}} is now available for {{stay.arrival}} to {{stay.departure}}. Reply within 12 hours to book it. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-WAITLIST-WA" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3841">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3841" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3842">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3842" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3843">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3843" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-WAITLIST-WA" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-WAITLIST-WA-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-WAITLIST-WA-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Room available (waitlist) – WhatsApp · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p style={{"whiteSpace": "pre-line"}}>{"Good news, Ms Priya Noel – a Garden Deluxe Room is now available for 24 Oct 2026 to 26 Oct 2026. Reply within 12 hours to book it. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3844">{"Send a test to"}</label>
                      <input className="field__input" id="f3844" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-OPTEXP-EMAIL" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-OPTEXP-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-OPTEXP-EMAIL-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Option date expiry – Email"}</p>
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
                        <label className="field__label" htmlFor="f3845">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3845" type="text" required={true} defaultValue={"OPTEXP-EMAIL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3846">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3846" type="text" required={true} defaultValue={"Option date expiry – Email"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3847">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3847" defaultValue={"Option Expiry"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f3848">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3848" defaultValue={"Email"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3849">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3849" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3850">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3850" type="text" defaultValue={"Your tentative booking expires today"} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3851">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3851" defaultValue={"Dear {{guest.name}}, Booking {{reservation.number}} expires today. Reply or pay the advance to keep your room. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-OPTEXP-EMAIL" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3852">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3852" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3853">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3853" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3854">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3854" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-OPTEXP-EMAIL" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-OPTEXP-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-OPTEXP-EMAIL-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Option date expiry – Email · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p>
                        <strong>{"Your tentative booking expires today"}</strong>
                      </p>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, Booking FK-10037 expires today. Reply or pay the advance to keep your room. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3855">{"Send a test to"}</label>
                      <input className="field__input" id="f3855" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-GRPCONF-EMAIL" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-GRPCONF-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-GRPCONF-EMAIL-t">{"Template editor"}</h2>
                      <p className="modal__desc">{"Group confirmation – Email"}</p>
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
                        <label className="field__label" htmlFor="f3856">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3856" type="text" required={true} defaultValue={"GRPCONF-EMAIL"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3857">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3857" type="text" required={true} defaultValue={"Group confirmation – Email"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3858">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3858" defaultValue={"Group Confirmation"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f3859">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3859" defaultValue={"Email"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3860">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3860" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3861">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3861" type="text" defaultValue={"Group booking {{group.number}} confirmed"} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3862">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3862" defaultValue={"Dear {{guest.name}}, Your group {{group.name}} ({{group.number}}) is confirmed: {{group.rooms}} rooms from {{stay.arrival}} to {{stay.departure}}. Cut-off date for the rooming list: {{group.cutoff}}. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <a className="btn" href="#RSS-P18-GRPCONF-EMAIL" data-opens="RSS-P18">{"Preview and test send"}</a>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3863">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3863" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3864">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3864" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3865">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3865" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <div className="modal" id="RSS-P18-GRPCONF-EMAIL" data-code="RSS-P18" role="dialog" aria-modal="true" aria-labelledby="RSS-P18-GRPCONF-EMAIL-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-P18-GRPCONF-EMAIL-t">{"Preview and test send"}</h2>
                      <p className="modal__desc">{"Group confirmation – Email · example data"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="card" style={{"background": "var(--surface-2)"}}>
                      <p>
                        <strong>{"Group booking GRP-0001 confirmed"}</strong>
                      </p>
                      <p style={{"whiteSpace": "pre-line"}}>{"Dear Ms Priya Noel, Your group Vijay–Nathan wedding (GRP-0001) is confirmed: 14 rooms from 24 Oct 2026 to 26 Oct 2026. Cut-off date for the rooming list: group.cutoff. The Aviv Kochi Bristow Road, Willingdon Island, Kochi 682 003 +91 484 266 8888"}</p>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3866">{"Send a test to"}</label>
                      <input className="field__input" id="f3866" type="text" defaultValue={""} />
                      <span className="field__hint">{"An email address or WhatsApp number. Test messages are marked TEST."}</span>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Send test"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="RSS-21a-new" data-code="RSS-21a" role="dialog" aria-modal="true" aria-labelledby="RSS-21a-new-t">
                <a className="modal__backdrop" href="#" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="#" noValidate={true}>
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RSS-21a-new-t">{"New template"}</h2>
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
                        <label className="field__label" htmlFor="f3867">
                          {"Code "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3867" type="text" required={true} defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f3868">
                          {"Name "}
                          <span className="field__req">{"*"}</span>
                        </label>
                        <input className="field__input" id="f3868" type="text" required={true} defaultValue={""} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3869">{"Kind"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3869" defaultValue={"Confirmation"}>
                            <option>{"Advance Reminder"}</option>
                            <option>{"Amendment"}</option>
                            <option>{"Cancellation"}</option>
                            <option>{"Confirmation"}</option>
                            <option>{"Group Confirmation"}</option>
                            <option>{"Option Expiry"}</option>
                            <option>{"Payment Link"}</option>
                            <option>{"Pre Arrival"}</option>
                            <option>{"Quote"}</option>
                            <option>{"Receipt"}</option>
                            <option>{"Tentative"}</option>
                            <option>{"Waitlist"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f3870">{"Channel"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3870" defaultValue={"Email"}>
                            <option>{"Email"}</option>
                            <option>{"Whatsapp"}</option>
                            <option>{"SMS"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3871">{"Language"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f3871" defaultValue={"English"}>
                            <option>{"English"}</option>
                            <option>{"Malayalam"}</option>
                            <option>{"Hindi"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3872">{"Subject (email only)"}</label>
                      <input className="field__input" id="f3872" type="text" defaultValue={""} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="f3873">{"Message"}</label>
                      <textarea className="field__input field__input--area" id="f3873" defaultValue={""} />
                      <span className="field__hint">{"Placeholders in double curly brackets are filled in automatically"}</span>
                    </div>
                    <div className="s-note">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#info" />
                      </svg>
                      <span>{"Placeholders: guest.name, reservation.number, stay.arrival, stay.departure, stay.nights, room.type, price.total, advance.amount, payment.link …"}</span>
                    </div>
                    <label className="sw">
                      <input type="checkbox" role="switch" defaultChecked={true} />
                      <span className="sw__track" />
                      {"Active"}
                    </label>
                    <fieldset className="form-section">
                      <legend className="form-section__title">{"Sending rules"}</legend>
                      <div className="s-grid3">
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="f3874">{"Language"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3874" defaultValue={"English"}>
                              <option>{"English"}</option>
                              <option>{"Malayalam"}</option>
                              <option>{"Hindi"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3875">{"Sender"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3875" defaultValue={"Hotel business WhatsApp / email"}>
                              <option>{"Hotel business WhatsApp / email"}</option>
                              <option>{"Hotel SMS sender"}</option>
                            </select>
                            <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Never a staff member's own phone"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="f3876">{"Needs the guest's consent"}</label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="f3876" defaultValue={"Stay messages only"}>
                              <option>{"Stay messages only"}</option>
                              <option>{"Marketing – explicit opt-in"}</option>
                              <option>{"No consent needed (legal notice)"}</option>
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
                        <span>{"Placeholders such as {{guest}} and {{arrival}} are checked before saving. Each event sends once; a failed message can be retried without sending twice."}</span>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Cancel"}</a>
                    <a className="btn btn--primary" href="#flow-done">{"Save template"}</a>
                  </div>
                </form>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"RSS-21"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Quote, confirmation, amendment, cancellation, receipt, reminders"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/setup/rss-01-setup-home-checklist"}>{"RSS-01"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <a href="/setup/rss-21-message-and-document-templates/#RSS-21a-new">{"RSS-21a"}</a>
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
