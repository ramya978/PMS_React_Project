// GENERATED from public/stores-setup/sts-02-categories-and-gl-mapping/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/linen.css",
    "media": null
  },
  {
    "href": "/css/aviv/purchase.css",
    "media": null
  },
  {
    "href": "/css/aviv/stores.css",
    "media": null
  },
  {
    "href": "/stores-setup/sts-02-categories-and-gl-mapping/sts-02-categories-and-gl-mapping.css",
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

export default function StoresSetupSts02CategoriesAndGlMapping() {
  return (
    <ScreenShell title="Categories & GL Mapping" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="STS-02" data-code="STS-02" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="STS-01" aria-current="page" title="Stores Setup – Items" to={"/stores-setup/sts-01-item-master"}>
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
            <main className="app__content" id="main" data-code="STS-02" tabIndex="-1">
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
                        <Link to={"/stores-setup/sts-01-item-master"}>{"Stores Setup"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Categories"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Categories & GL Mapping"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"STS-02"}</span>
                  <div className="page-header__actions">
                    <label className="btn add-btn" htmlFor="add-3" role="button">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add category"}
                    </label>
                    <label className="btn add-btn" htmlFor="add-2" role="button">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add sub-sub-category"}
                    </label>
                    <label className="btn btn--primary add-btn" htmlFor="add-1" role="button">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add sub-category"}
                    </label>
                  </div>
                </div>
              </header>
              <nav className="sts-nav" aria-label="Stores Setup">
                <Link to={"/stores-setup/sts-01-item-master"}>{"Items"}</Link>
                <Link aria-current="page" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Categories"}</Link>
                <Link to={"/stores-setup/sts-03-units-and-conversions"}>{"Units"}</Link>
                <Link to={"/stores-setup/sts-04-stores-and-sub-stores"}>{"Stores"}</Link>
                <Link to={"/stores-setup/sts-05-reorder-and-par-levels"}>{"Levels"}</Link>
                <Link to={"/stores-setup/sts-06-valuation-tolerances-and-close"}>{"Valuation & Close"}</Link>
              </nav>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="added" />
                <i className="pm" id="added-cat" />
                <i className="pm" id="added-ssub" />
                <i className="pm" id="saved" />
              </div>
              <div className="fd-banner fd-banner--ok vn-wait">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#shield-check" />
                </svg>
                <div className="fd-banner__t">
                  <strong>{"All 17 sub-categories are mapped to an inventory and a consumption GL account (BR-02)"}</strong>
                  {"Stock received is posted to the inventory account; stock issued is posted to the consumption account of the receiving department. The accounts come from the chart of accounts of General Ledger Setup (ACS). Sub-sub-categories use the accounts of their sub-category."}
                </div>
              </div>
              <input className="add-sw" type="checkbox" id="add-1" aria-label="Show the form" />
              <div className="add-panel prs-add">
                <form className="prs-add__f" action="/stores-setup/sts-02-categories-and-gl-mapping/#added" method="get">
                  <div className="s-grid2 la-cols la-cols--6">
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="nc-parent">
                        {"Category "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="nc-parent" name="nc-parent" required={true} defaultValue={"Food"}>
                          <option value="Food">{"Food"}</option>
                          <option value="Beverage">{"Beverage"}</option>
                          <option value="Tobacco">{"Tobacco"}</option>
                          <option value="Housekeeping supplies">{"Housekeeping supplies"}</option>
                          <option value="Guest amenities">{"Guest amenities"}</option>
                          <option value="Linen">{"Linen"}</option>
                          <option value="Engineering spares">{"Engineering spares"}</option>
                          <option value="Printing & stationery">{"Printing & stationery"}</option>
                          <option value="Fuel">{"Fuel"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="nc-name">
                        {"Sub-category "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="nc-name" name="nc-name" type="text" required={true} maxLength="40" placeholder="e.g. Kitchen disposables & packaging" />
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="nc-code">
                        {"Short code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="nc-code" name="nc-code" type="text" required={true} maxLength="3" pattern={"[A-Z]{3}"} placeholder="3 capital letters" />
                      <span className="field__hint">
                        {"Becomes the middle part of the item codes: ST-"}
                        <b>{"KDP"}</b>
                        {"-001"}
                      </span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="nc-inv">
                        {"Inventory GL account "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="nc-inv" name="nc-inv" required={true} defaultValue={""}>
                          <option value="" disabled={true}>{"Choose the stock account"}</option>
                          <option value="1301">{"1301 · Inventory – Food"}</option>
                          <option value="1302">{"1302 · Inventory – Beverages"}</option>
                          <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                          <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                          <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                          <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                          <option value="1307">{"1307 · Inventory – Linen"}</option>
                          <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                          <option value="1309">{"1309 · Inventory – Stationery"}</option>
                          <option value="1310">{"1310 · Inventory – Fuel"}</option>
                          <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="nc-con">
                        {"Consumption GL account "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="nc-con" name="nc-con" required={true} defaultValue={""}>
                          <option value="" disabled={true}>{"Choose the expense account"}</option>
                          <option value="5101">{"5101 · Food cost"}</option>
                          <option value="5102">{"5102 · Beverage cost"}</option>
                          <option value="5103">{"5103 · Liquor cost"}</option>
                          <option value="5104">{"5104 · Tobacco cost"}</option>
                          <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                          <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                          <option value="5202">{"5202 · Guest amenities consumed"}</option>
                          <option value="5203">{"5203 · Linen consumed"}</option>
                          <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                          <option value="5401">{"5401 · Printing and stationery"}</option>
                          <option value="5402">{"5402 · Fuel and power"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="nc-cost">
                        {"Cost type "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="nc-cost" name="nc-cost" required={true} defaultValue={""}>
                          <option value="" disabled={true}>{"Choose the cost type"}</option>
                          <option value="Food cost">{"Food cost"}</option>
                          <option value="Beverage cost">{"Beverage cost"}</option>
                          <option value="Operating supplies">{"Operating supplies"}</option>
                          <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="prs-add__a">
                    <span className="fd-muted">{"A sub-category in use cannot be deleted, only renamed"}</span>
                    <button className="btn btn--primary" type="submit">{"Add"}</button>
                  </div>
                </form>
              </div>
              <input className="add-sw" type="checkbox" id="add-3" aria-label="Show the form" />
              <div className="add-panel prs-add">
                <form className="prs-add__f" action="/stores-setup/sts-02-categories-and-gl-mapping/#added-cat" method="get">
                  <div className="s-grid2 la-cols la-cols--3">
                    <div className="field">
                      <label className="field__label" htmlFor="ac-name">
                        {"Category "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="ac-name" name="ac-name" type="text" required={true} maxLength="30" placeholder="e.g. Spa & wellness supplies" />
                      <span className="field__hint">{"The top level – every sub-category sits under one category"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="ac-note">{"What it covers"}</label>
                      <input className="field__input" id="ac-note" name="ac-note" type="text" maxLength="60" placeholder="e.g. Oils, towels and consumables for the spa" />
                    </div>
                  </div>
                  <div className="prs-add__a">
                    <span className="fd-muted">{"Add its sub-categories next, then the sub-sub-categories"}</span>
                    <button className="btn btn--primary" type="submit">{"Add"}</button>
                  </div>
                </form>
              </div>
              <input className="add-sw" type="checkbox" id="add-2" aria-label="Show the form" />
              <div className="add-panel prs-add">
                <form className="prs-add__f" action="/stores-setup/sts-02-categories-and-gl-mapping/#added-ssub" method="get">
                  <div className="s-grid2 la-cols la-cols--3">
                    <div className="field">
                      <label className="field__label" htmlFor="as-sub">
                        {"Category › sub-category "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="as-sub" name="as-sub" required={true} defaultValue={""}>
                          <option value="" disabled={true}>{"Choose the sub-category"}</option>
                          <optgroup label="Food">
                            <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                            <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                            <option value="Meat & seafood">{"Meat & seafood"}</option>
                            <option value="Dairy">{"Dairy"}</option>
                            <option value="Grocery">{"Grocery"}</option>
                            <option value="Snacks & confectionery">{"Snacks & confectionery"}</option>
                          </optgroup>
                          <optgroup label="Beverage">
                            <option value="Soft drinks & water">{"Soft drinks & water"}</option>
                            <option value="Coca-Cola range">{"Coca-Cola range"}</option>
                            <option value="Liquor, beer & wine">{"Liquor, beer & wine"}</option>
                            <option value="Bar & F&B consumables">{"Bar & F&B consumables"}</option>
                          </optgroup>
                          <optgroup label="Tobacco">
                            <option value="Tobacco">{"Tobacco"}</option>
                          </optgroup>
                          <optgroup label="Housekeeping supplies">
                            <option value="Cleaning chemicals">{"Cleaning chemicals"}</option>
                            <option value="Room & washroom supplies">{"Room & washroom supplies"}</option>
                          </optgroup>
                          <optgroup label="Guest amenities">
                            <option value="Guest amenities">{"Guest amenities"}</option>
                          </optgroup>
                          <optgroup label="Linen">
                            <option value="Linen">{"Linen"}</option>
                          </optgroup>
                          <optgroup label="Engineering spares">
                            <option value="Electrical, plumbing & HVAC spares">{"Electrical, plumbing & HVAC spares"}</option>
                          </optgroup>
                          <optgroup label="Printing & stationery">
                            <option value="Printing & stationery">{"Printing & stationery"}</option>
                          </optgroup>
                          <optgroup label="Fuel">
                            <option value="Diesel & LPG">{"Diesel & LPG"}</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="as-name">
                        {"Sub-sub-category "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="as-name" name="as-name" type="text" required={true} maxLength="40" placeholder="e.g. Diet Coke" />
                      <span className="field__hint">{"Example: Beverage › Coca-Cola range › Diet Coke"}</span>
                    </div>
                  </div>
                  <div className="prs-add__a">
                    <span className="fd-muted">{"Uses the GL accounts and cost type of its sub-category"}</span>
                    <button className="btn btn--primary" type="submit">{"Add"}</button>
                  </div>
                </form>
              </div>
              <form className="prs-form" action="/stores-setup/sts-02-categories-and-gl-mapping/#saved" method="get">
                <section className="fd-sec" id="sec-cats" data-code="STS-02-cats">
                  <h2 className="fd-sec__t">{"A · Categories"}</h2>
                  <p className="fd-sec__d">
                    {"The top level of the tree: "}
                    <b>{"category › sub-category › sub-sub-category"}</b>
                    {". The same tree is used on Stores items, Minibar items, Linen & amenities, the Restaurant menu and the reports."}
                  </p>
                  <div className="prs-in">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table" data-code="STS-02-cats" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Categories with their sub-categories"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Category"}</th>
                              <th scope="col">{"Includes"}</th>
                              <th scope="col" className="dt__th--right">{"Sub-categories"}</th>
                              <th scope="col" className="dt__th--right">{"Sub-sub-categories"}</th>
                              <th scope="col" className="dt__th--right">{"Items"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="cg-row">
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <strong>{"Food"}</strong>
                              </td>
                              <td className="dt__td" data-label="Includes" data-w="">
                                <span className="fd-sub" title="Kitchen disposables & packaging, Vegetables & fruits, Meat & seafood, Dairy, Grocery, Snacks & confectionery">{"Kitchen disposables & packaging, Vegetables & fruits, Meat & seafood, Dairy, Grocery, Snacks & confectionery"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-categories" data-w2="">{"6"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-sub-categories" data-w2="">{"16"}</td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"37"}</Link>
                              </td>
                            </tr>
                            <tr className="cg-row">
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <strong>{"Beverage"}</strong>
                              </td>
                              <td className="dt__td" data-label="Includes" data-w="">
                                <span className="fd-sub" title="Soft drinks & water, Coca-Cola range, Liquor, beer & wine, Bar & F&B consumables">{"Soft drinks & water, Coca-Cola range, Liquor, beer & wine, Bar & F&B consumables"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-categories" data-w2="">{"4"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-sub-categories" data-w2="">{"13"}</td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"13"}</Link>
                              </td>
                            </tr>
                            <tr className="cg-row">
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <strong>{"Tobacco"}</strong>
                              </td>
                              <td className="dt__td" data-label="Includes" data-w2="">
                                <span className="fd-sub" title="Tobacco">{"Tobacco"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-categories" data-w2="">{"1"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-sub-categories" data-w2="">{"0"}</td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="cg-row">
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <strong>{"Housekeeping supplies"}</strong>
                              </td>
                              <td className="dt__td" data-label="Includes">
                                <span className="fd-sub" title="Cleaning chemicals, Room & washroom supplies">{"Cleaning chemicals, Room & washroom supplies"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-categories" data-w2="">{"2"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-sub-categories" data-w2="">{"4"}</td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"10"}</Link>
                              </td>
                            </tr>
                            <tr className="cg-row">
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <strong>{"Guest amenities"}</strong>
                              </td>
                              <td className="dt__td" data-label="Includes" data-w2="">
                                <span className="fd-sub" title="Guest amenities">{"Guest amenities"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-categories" data-w2="">{"1"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-sub-categories" data-w2="">{"4"}</td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"16"}</Link>
                              </td>
                            </tr>
                            <tr className="cg-row">
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <strong>{"Linen"}</strong>
                              </td>
                              <td className="dt__td" data-label="Includes" data-w2="">
                                <span className="fd-sub" title="Linen">{"Linen"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-categories" data-w2="">{"1"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-sub-categories" data-w2="">{"4"}</td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"18"}</Link>
                              </td>
                            </tr>
                            <tr className="cg-row">
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <strong>{"Engineering spares"}</strong>
                              </td>
                              <td className="dt__td" data-label="Includes">
                                <span className="fd-sub" title="Electrical, plumbing & HVAC spares">{"Electrical, plumbing & HVAC spares"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-categories" data-w2="">{"1"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-sub-categories" data-w2="">{"4"}</td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"20"}</Link>
                              </td>
                            </tr>
                            <tr className="cg-row">
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <strong>{"Printing & stationery"}</strong>
                              </td>
                              <td className="dt__td" data-label="Includes" data-w2="">
                                <span className="fd-sub" title="Printing & stationery">{"Printing & stationery"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-categories" data-w2="">{"1"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-sub-categories" data-w2="">{"2"}</td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"6"}</Link>
                              </td>
                            </tr>
                            <tr className="cg-row">
                              <td className="dt__td nw" data-label="Category" data-w2="" data-t="">
                                <strong>{"Fuel"}</strong>
                              </td>
                              <td className="dt__td" data-label="Includes" data-w2="">
                                <span className="fd-sub" title="Diesel & LPG">{"Diesel & LPG"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-categories" data-w2="">{"1"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-sub-categories" data-w2="">{"0"}</td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                            </tr>
                            <tr className="cg-row cg-row--new" id="c-spa">
                              <td className="dt__td nw" data-label="Category" data-w="" data-t="">
                                <strong>{"Spa & wellness supplies"}</strong>
                                <span className="fd-sub cg-fresh">{"Added just now by Thomas Kurian"}</span>
                              </td>
                              <td className="dt__td" data-label="Includes">
                                <span className="fd-muted">{"add its sub-categories next"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-categories" data-w2="">{"0"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Sub-sub-categories" data-w2="">{"0"}</td>
                              <td className="dt__td dt__td--right nw" data-label="Items" data-w2="">
                                <span className="fd-muted">{"none yet"}</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="fd-sec" id="sec-subs" data-code="STS-02-subs">
                  <h2 className="fd-sec__t">{"B · Sub-categories & GL mapping"}</h2>
                  <p className="fd-sec__d">
                    {"The second level. The short code is the middle part of the item codes (ST-"}
                    <b>{"BEV"}</b>
                    {"-011) and decides the GL accounts."}
                  </p>
                  <div className="prs-in">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table" data-code="STS-02-list" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Categories, GL accounts and cost types"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Category › sub-category"}</th>
                              <th scope="col">{"Inventory GL (stock)"}</th>
                              <th scope="col">{"Consumption GL (expense)"}</th>
                              <th scope="col">{"Cost type"}</th>
                              <th scope="col" className="dt__th--right">{"Items"}</th>
                              <th scope="col">{"GL check"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="ct-row ct-row--new" id="c-kdp">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-kdp">{"Sub-category name – Kitchen disposables & packaging"}</label>
                                <input className="field__input ct-name" id="cn-kdp" name="name_KDP" type="text" required={true} maxLength="40" defaultValue={"Kitchen disposables & packaging"} />
                                <span className="fd-sub">{"Food · KDP · Foil, cling film, takeaway boxes"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-kdp">{"Inventory GL account – Kitchen disposables & packaging"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-kdp" name="gi-kdp" defaultValue={"1311"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-kdp">{"Consumption GL account – Kitchen disposables & packaging"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-kdp" name="gc-kdp" defaultValue={"5105"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w="">
                                <label className="sr-only" htmlFor="ct-kdp">{"Cost type – Kitchen disposables & packaging"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-kdp" name="ct-kdp" defaultValue={"Operating supplies"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items" data-w2="">
                                <span className="fd-muted">{"none yet"}</span>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-frp">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-frp">{"Sub-category name – Vegetables & fruits"}</label>
                                <input className="field__input ct-name" id="cn-frp" name="name_FRP" type="text" required={true} maxLength="40" defaultValue={"Vegetables & fruits"} />
                                <span className="fd-sub">{"Food · FRP · Vegetables, fruit, herbs, coconut · 2 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-frp">{"Inventory GL account – Vegetables & fruits"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-frp" name="gi-frp" defaultValue={"1301"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-frp">{"Consumption GL account – Vegetables & fruits"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-frp" name="gc-frp" defaultValue={"5101"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w2="">
                                <label className="sr-only" htmlFor="ct-frp">{"Cost type – Vegetables & fruits"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-frp" name="ct-frp" defaultValue={"Food cost"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"8"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-msf">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-msf">{"Sub-category name – Meat & seafood"}</label>
                                <input className="field__input ct-name" id="cn-msf" name="name_MSF" type="text" required={true} maxLength="40" defaultValue={"Meat & seafood"} />
                                <span className="fd-sub">{"Food · MSF · Chicken, mutton, fish, prawns · 2 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-msf">{"Inventory GL account – Meat & seafood"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-msf" name="gi-msf" defaultValue={"1301"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-msf">{"Consumption GL account – Meat & seafood"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-msf" name="gc-msf" defaultValue={"5101"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w2="">
                                <label className="sr-only" htmlFor="ct-msf">{"Cost type – Meat & seafood"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-msf" name="ct-msf" defaultValue={"Food cost"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"5"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-dry">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-dry">{"Sub-category name – Dairy"}</label>
                                <input className="field__input ct-name" id="cn-dry" name="name_DRY" type="text" required={true} maxLength="40" defaultValue={"Dairy"} />
                                <span className="fd-sub">{"Food · DRY · Milk, curd, butter, paneer, cream · 2 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-dry">{"Inventory GL account – Dairy"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-dry" name="gi-dry" defaultValue={"1301"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-dry">{"Consumption GL account – Dairy"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-dry" name="gc-dry" defaultValue={"5101"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w2="">
                                <label className="sr-only" htmlFor="ct-dry">{"Cost type – Dairy"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-dry" name="ct-dry" defaultValue={"Food cost"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"5"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-gro">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-gro">{"Sub-category name – Grocery"}</label>
                                <input className="field__input ct-name" id="cn-gro" name="name_GRO" type="text" required={true} maxLength="40" defaultValue={"Grocery"} />
                                <span className="fd-sub">{"Food · GRO · Rice, dal, oil, sugar, spices · 5 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-gro">{"Inventory GL account – Grocery"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-gro" name="gi-gro" defaultValue={"1301"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-gro">{"Consumption GL account – Grocery"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-gro" name="gc-gro" defaultValue={"5101"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w2="">
                                <label className="sr-only" htmlFor="ct-gro">{"Cost type – Grocery"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-gro" name="ct-gro" defaultValue={"Food cost"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"10"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-snk">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-snk">{"Sub-category name – Snacks & confectionery"}</label>
                                <input className="field__input ct-name" id="cn-snk" name="name_SNK" type="text" required={true} maxLength="40" defaultValue={"Snacks & confectionery"} />
                                <span className="fd-sub">{"Food · SNK · Minibar snacks and chocolates · 5 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-snk">{"Inventory GL account – Snacks & confectionery"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-snk" name="gi-snk" defaultValue={"1301"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-snk">{"Consumption GL account – Snacks & confectionery"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-snk" name="gc-snk" defaultValue={"5101"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w2="">
                                <label className="sr-only" htmlFor="ct-snk">{"Cost type – Snacks & confectionery"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-snk" name="ct-snk" defaultValue={"Food cost"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"9"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-bev">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-bev">{"Sub-category name – Soft drinks & water"}</label>
                                <input className="field__input ct-name" id="cn-bev" name="name_BEV" type="text" required={true} maxLength="40" defaultValue={"Soft drinks & water"} />
                                <span className="fd-sub">{"Beverage · BEV · Water, soft drinks, juices · 5 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-bev">{"Inventory GL account – Soft drinks & water"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-bev" name="gi-bev" defaultValue={"1302"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-bev">{"Consumption GL account – Soft drinks & water"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-bev" name="gc-bev" defaultValue={"5102"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w2="">
                                <label className="sr-only" htmlFor="ct-bev">{"Cost type – Soft drinks & water"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-bev" name="ct-bev" defaultValue={"Beverage cost"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"5"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-cok">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-cok">{"Sub-category name – Coca-Cola range"}</label>
                                <input className="field__input ct-name" id="cn-cok" name="name_COK" type="text" required={true} maxLength="40" defaultValue={"Coca-Cola range"} />
                                <span className="fd-sub">{"Beverage · COK · Coca-Cola, Coke Zero Sugar, Diet Coke, Coke Black · 4 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-cok">{"Inventory GL account – Coca-Cola range"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-cok" name="gi-cok" defaultValue={"1302"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-cok">{"Consumption GL account – Coca-Cola range"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-cok" name="gc-cok" defaultValue={"5102"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w2="">
                                <label className="sr-only" htmlFor="ct-cok">{"Cost type – Coca-Cola range"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-cok" name="ct-cok" defaultValue={"Beverage cost"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items" data-w2="">
                                <span className="fd-muted">{"none yet"}</span>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-liq">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-liq">{"Sub-category name – Liquor, beer & wine"}</label>
                                <input className="field__input ct-name" id="cn-liq" name="name_LIQ" type="text" required={true} maxLength="40" defaultValue={"Liquor, beer & wine"} />
                                <span className="fd-sub">{"Beverage · LIQ · Spirits, beer and wine (state excise) · 4 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-liq">{"Inventory GL account – Liquor, beer & wine"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-liq" name="gi-liq" defaultValue={"1303"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-liq">{"Consumption GL account – Liquor, beer & wine"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-liq" name="gc-liq" defaultValue={"5103"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w2="">
                                <label className="sr-only" htmlFor="ct-liq">{"Cost type – Liquor, beer & wine"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-liq" name="ct-liq" defaultValue={"Beverage cost"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"5"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-fbc">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-fbc">{"Sub-category name – Bar & F&B consumables"}</label>
                                <input className="field__input ct-name" id="cn-fbc" name="name_FBC" type="text" required={true} maxLength="40" defaultValue={"Bar & F&B consumables"} />
                                <span className="fd-sub">{"Beverage · FBC · Straws, napkins, coasters"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-fbc">{"Inventory GL account – Bar & F&B consumables"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-fbc" name="gi-fbc" defaultValue={"1311"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-fbc">{"Consumption GL account – Bar & F&B consumables"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-fbc" name="gc-fbc" defaultValue={"5105"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w="">
                                <label className="sr-only" htmlFor="ct-fbc">{"Cost type – Bar & F&B consumables"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-fbc" name="ct-fbc" defaultValue={"Operating supplies"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-tob">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-tob">{"Sub-category name – Tobacco"}</label>
                                <input className="field__input ct-name" id="cn-tob" name="name_TOB" type="text" required={true} maxLength="40" defaultValue={"Tobacco"} />
                                <span className="fd-sub">{"Tobacco · TOB · Cigarettes (bar counter)"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-tob">{"Inventory GL account – Tobacco"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-tob" name="gi-tob" defaultValue={"1304"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-tob">{"Consumption GL account – Tobacco"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-tob" name="gc-tob" defaultValue={"5104"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w2="">
                                <label className="sr-only" htmlFor="ct-tob">{"Cost type – Tobacco"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-tob" name="ct-tob" defaultValue={"Beverage cost"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-hkc">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-hkc">{"Sub-category name – Cleaning chemicals"}</label>
                                <input className="field__input ct-name" id="cn-hkc" name="name_HKC" type="text" required={true} maxLength="40" defaultValue={"Cleaning chemicals"} />
                                <span className="fd-sub">{"Housekeeping supplies · HKC · Room, glass, floor cleaners, detergents · 2 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-hkc">{"Inventory GL account – Cleaning chemicals"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-hkc" name="gi-hkc" defaultValue={"1305"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-hkc">{"Consumption GL account – Cleaning chemicals"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-hkc" name="gc-hkc" defaultValue={"5201"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w="">
                                <label className="sr-only" htmlFor="ct-hkc">{"Cost type – Cleaning chemicals"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-hkc" name="ct-hkc" defaultValue={"Operating supplies"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"5"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-sup">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-sup">{"Sub-category name – Room & washroom supplies"}</label>
                                <input className="field__input ct-name" id="cn-sup" name="name_SUP" type="text" required={true} maxLength="40" defaultValue={"Room & washroom supplies"} />
                                <span className="fd-sub">{"Housekeeping supplies · SUP · Toilet rolls, tissues, bags, gloves · 2 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-sup">{"Inventory GL account – Room & washroom supplies"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-sup" name="gi-sup" defaultValue={"1305"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-sup">{"Consumption GL account – Room & washroom supplies"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-sup" name="gc-sup" defaultValue={"5201"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w="">
                                <label className="sr-only" htmlFor="ct-sup">{"Cost type – Room & washroom supplies"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-sup" name="ct-sup" defaultValue={"Operating supplies"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"5"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-amn">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-amn">{"Sub-category name – Guest amenities"}</label>
                                <input className="field__input ct-name" id="cn-amn" name="name_AMN" type="text" required={true} maxLength="40" defaultValue={"Guest amenities"} />
                                <span className="fd-sub">{"Guest amenities · AMN · Toiletries, kits, slippers, tea tray · 4 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-amn">{"Inventory GL account – Guest amenities"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-amn" name="gi-amn" defaultValue={"1306"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-amn">{"Consumption GL account – Guest amenities"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-amn" name="gc-amn" defaultValue={"5202"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w="">
                                <label className="sr-only" htmlFor="ct-amn">{"Cost type – Guest amenities"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-amn" name="ct-amn" defaultValue={"Operating supplies"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"16"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-lin">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-lin">{"Sub-category name – Linen"}</label>
                                <input className="field__input ct-name" id="cn-lin" name="name_LIN" type="text" required={true} maxLength="40" defaultValue={"Linen"} />
                                <span className="fd-sub">{"Linen · LIN · Bed, bath, pool and F&B linen · 4 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-lin">{"Inventory GL account – Linen"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-lin" name="gi-lin" defaultValue={"1307"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-lin">{"Consumption GL account – Linen"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-lin" name="gc-lin" defaultValue={"5203"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w="">
                                <label className="sr-only" htmlFor="ct-lin">{"Cost type – Linen"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-lin" name="ct-lin" defaultValue={"Operating supplies"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"18"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-eng">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-eng">{"Sub-category name – Electrical, plumbing & HVAC spares"}</label>
                                <input className="field__input ct-name" id="cn-eng" name="name_ENG" type="text" required={true} maxLength="40" defaultValue={"Electrical, plumbing & HVAC spares"} />
                                <span className="fd-sub">{"Engineering spares · ENG · Lamps, contactors, filters, valves · 4 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-eng">{"Inventory GL account – Electrical, plumbing & HVAC spares"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-eng" name="gi-eng" defaultValue={"1308"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-eng">{"Consumption GL account – Electrical, plumbing & HVAC spares"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-eng" name="gc-eng" defaultValue={"5301"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w="">
                                <label className="sr-only" htmlFor="ct-eng">{"Cost type – Electrical, plumbing & HVAC spares"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-eng" name="ct-eng" defaultValue={"Repairs & maintenance"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"20"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-prn">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-prn">{"Sub-category name – Printing & stationery"}</label>
                                <input className="field__input ct-name" id="cn-prn" name="name_PRN" type="text" required={true} maxLength="40" defaultValue={"Printing & stationery"} />
                                <span className="fd-sub">{"Printing & stationery · PRN · Key cards, forms, paper, pens · 2 sub-sub-categories"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-prn">{"Inventory GL account – Printing & stationery"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-prn" name="gi-prn" defaultValue={"1309"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-prn">{"Consumption GL account – Printing & stationery"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-prn" name="gc-prn" defaultValue={"5401"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w="">
                                <label className="sr-only" htmlFor="ct-prn">{"Cost type – Printing & stationery"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-prn" name="ct-prn" defaultValue={"Operating supplies"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"6"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="ct-row" id="c-ful">
                              <td className="dt__td" data-label="Category › sub-category" data-w="" data-t="">
                                <label className="sr-only" htmlFor="cn-ful">{"Sub-category name – Diesel & LPG"}</label>
                                <input className="field__input ct-name" id="cn-ful" name="name_FUL" type="text" required={true} maxLength="40" defaultValue={"Diesel & LPG"} />
                                <span className="fd-sub">{"Fuel · FUL · DG-set diesel, kitchen LPG"}</span>
                              </td>
                              <td className="dt__td" data-label="Inventory GL (stock)" data-w="">
                                <label className="sr-only" htmlFor="gi-ful">{"Inventory GL account – Diesel & LPG"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gi-ful" name="gi-ful" defaultValue={"1310"}>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Consumption GL (expense)" data-w="">
                                <label className="sr-only" htmlFor="gc-ful">{"Consumption GL account – Diesel & LPG"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="gc-ful" name="gc-ful" defaultValue={"5402"}>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Cost type" data-w="">
                                <label className="sr-only" htmlFor="ct-ful">{"Cost type – Diesel & LPG"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="ct-ful" name="ct-ful" defaultValue={"Operating supplies"}>
                                    <option value="Food cost">{"Food cost"}</option>
                                    <option value="Beverage cost">{"Beverage cost"}</option>
                                    <option value="Operating supplies">{"Operating supplies"}</option>
                                    <option value="Repairs & maintenance">{"Repairs & maintenance"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                              <td className="dt__td nw" data-label="GL check" data-w2="">
                                <span className="sts-flag sts-flag--ok" title="Both GL accounts are chosen (BR-02)">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="fd-sec" id="sec-subsubs" data-code="STS-02-subsubs">
                  <h2 className="fd-sec__t">{"C · Sub-sub-categories"}</h2>
                  <p className="fd-sec__d">
                    {"The third level, optional on every item – for example "}
                    <b>{"Beverage › Coca-Cola range › Diet Coke"}</b>
                    {". A sub-sub-category belongs to one sub-category and uses its GL accounts."}
                  </p>
                  <div className="prs-in">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table" data-code="STS-02-subsubs" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Sub-sub-categories"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Category › sub-category"}</th>
                              <th scope="col">{"Sub-sub-category"}</th>
                              <th scope="col">{"Items such as"}</th>
                              <th scope="col" className="dt__th--right">{"Items"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="ss-row" id="ss-frp-1">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Food › Vegetables & fruits"}
                                <span className="fd-sub">{"FRP"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-1">{"Sub-sub-category name – Vegetables"}</label>
                                <input className="field__input ct-name" id="sn-1" name="ssub_FRP_1" type="text" required={true} maxLength="40" defaultValue={"Vegetables"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Onion, Tomato, Potato, Green chilli, Raw banana (nendran)">{"Onion, Tomato + 3 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"5"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-frp-2">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Food › Vegetables & fruits"}
                                <span className="fd-sub">{"FRP"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-2">{"Sub-sub-category name – Fruit, coconut & herbs"}</label>
                                <input className="field__input ct-name" id="sn-2" name="ssub_FRP_2" type="text" required={true} maxLength="40" defaultValue={"Fruit, coconut & herbs"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Coconut, Curry leaves, Lemon">{"Coconut, Curry leaves + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-msf-3">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Food › Meat & seafood"}
                                <span className="fd-sub">{"MSF"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-3">{"Sub-sub-category name – Fish & prawns"}</label>
                                <input className="field__input ct-name" id="sn-3" name="ssub_MSF_3" type="text" required={true} maxLength="40" defaultValue={"Fish & prawns"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Karimeen (pearl spot), Tiger prawns 16/20, Seer fish (neymeen)">{"Karimeen (pearl spot), Tiger prawns 16/20 + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-msf-4">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Food › Meat & seafood"}
                                <span className="fd-sub">{"MSF"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-4">{"Sub-sub-category name – Meat & poultry"}</label>
                                <input className="field__input ct-name" id="sn-4" name="ssub_MSF_4" type="text" required={true} maxLength="40" defaultValue={"Meat & poultry"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Chicken (curry cut), Mutton">{"Chicken (curry cut), Mutton"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-dry-5">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Food › Dairy"}
                                <span className="fd-sub">{"DRY"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-5">{"Sub-sub-category name – Milk & curd"}</label>
                                <input className="field__input ct-name" id="sn-5" name="ssub_DRY_5" type="text" required={true} maxLength="40" defaultValue={"Milk & curd"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Milk 1 litre pack, Curd 1 kg pack">{"Milk 1 litre pack, Curd 1 kg pack"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-dry-6">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Food › Dairy"}
                                <span className="fd-sub">{"DRY"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-6">{"Sub-sub-category name – Butter, cream & paneer"}</label>
                                <input className="field__input ct-name" id="sn-6" name="ssub_DRY_6" type="text" required={true} maxLength="40" defaultValue={"Butter, cream & paneer"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Butter 500 g, Paneer, Fresh cream 1 litre">{"Butter 500 g, Paneer + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-gro-7">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Food › Grocery"}
                                <span className="fd-sub">{"GRO"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-7">{"Sub-sub-category name – Rice & flour"}</label>
                                <input className="field__input ct-name" id="sn-7" name="ssub_GRO_7" type="text" required={true} maxLength="40" defaultValue={"Rice & flour"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Basmati rice 1121, Wheat flour (atta), Matta rice (Kerala red rice)">{"Basmati rice 1121, Wheat flour (atta) + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-gro-8">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Food › Grocery"}
                                <span className="fd-sub">{"GRO"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-8">{"Sub-sub-category name – Pulses"}</label>
                                <input className="field__input ct-name" id="sn-8" name="ssub_GRO_8" type="text" required={true} maxLength="40" defaultValue={"Pulses"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Toor dal">{"Toor dal"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-gro-9">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Food › Grocery"}
                                <span className="fd-sub">{"GRO"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-9">{"Sub-sub-category name – Oils"}</label>
                                <input className="field__input ct-name" id="sn-9" name="ssub_GRO_9" type="text" required={true} maxLength="40" defaultValue={"Oils"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Sunflower oil 15 litre tin, Coconut oil 15 litre tin">{"Sunflower oil 15 litre tin, Coconut oil 15 litre tin"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-gro-10">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Food › Grocery"}
                                <span className="fd-sub">{"GRO"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-10">{"Sub-sub-category name – Sugar & sweeteners"}</label>
                                <input className="field__input ct-name" id="sn-10" name="ssub_GRO_10" type="text" required={true} maxLength="40" defaultValue={"Sugar & sweeteners"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Sugar, Jaggery">{"Sugar, Jaggery"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-gro-11">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Food › Grocery"}
                                <span className="fd-sub">{"GRO"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-11">{"Sub-sub-category name – Spices & tea"}</label>
                                <input className="field__input ct-name" id="sn-11" name="ssub_GRO_11" type="text" required={true} maxLength="40" defaultValue={"Spices & tea"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Black pepper, Cardamom (green)">{"Black pepper, Cardamom (green)"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-snk-12">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Food › Snacks & confectionery"}
                                <span className="fd-sub">{"SNK"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-12">{"Sub-sub-category name – Chips & namkeen"}</label>
                                <input className="field__input ct-name" id="sn-12" name="ssub_SNK_12" type="text" required={true} maxLength="40" defaultValue={"Chips & namkeen"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Potato chips 52 g, Kerala banana chips 100 g">{"Potato chips 52 g, Kerala banana chips 100 g"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-snk-13">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Food › Snacks & confectionery"}
                                <span className="fd-sub">{"SNK"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-13">{"Sub-sub-category name – Nuts"}</label>
                                <input className="field__input ct-name" id="sn-13" name="ssub_SNK_13" type="text" required={true} maxLength="40" defaultValue={"Nuts"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Cashew nuts salted 50 g, Masala peanuts 50 g, Trail mix 50 g">{"Cashew nuts salted 50 g, Masala peanuts 50 g + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-snk-14">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Food › Snacks & confectionery"}
                                <span className="fd-sub">{"SNK"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-14">{"Sub-sub-category name – Chocolate"}</label>
                                <input className="field__input ct-name" id="sn-14" name="ssub_SNK_14" type="text" required={true} maxLength="40" defaultValue={"Chocolate"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Milk chocolate bar 40 g, Dark chocolate 100 g">{"Milk chocolate bar 40 g, Dark chocolate 100 g"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-snk-15">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Food › Snacks & confectionery"}
                                <span className="fd-sub">{"SNK"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-15">{"Sub-sub-category name – Biscuits & cookies"}</label>
                                <input className="field__input ct-name" id="sn-15" name="ssub_SNK_15" type="text" required={true} maxLength="40" defaultValue={"Biscuits & cookies"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Butter cookies 75 g">{"Butter cookies 75 g"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-snk-16">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Food › Snacks & confectionery"}
                                <span className="fd-sub">{"SNK"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-16">{"Sub-sub-category name – Instant noodles"}</label>
                                <input className="field__input ct-name" id="sn-16" name="ssub_SNK_16" type="text" required={true} maxLength="40" defaultValue={"Instant noodles"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Instant noodles cup 70 g">{"Instant noodles cup 70 g"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-bev-17">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Soft drinks & water"}
                                <span className="fd-sub">{"BEV"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-17">{"Sub-sub-category name – Still water"}</label>
                                <input className="field__input ct-name" id="sn-17" name="ssub_BEV_17" type="text" required={true} maxLength="40" defaultValue={"Still water"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Packaged drinking water 500 ml">{"Packaged drinking water 500 ml"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-bev-18">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Soft drinks & water"}
                                <span className="fd-sub">{"BEV"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-18">{"Sub-sub-category name – Sparkling water"}</label>
                                <input className="field__input ct-name" id="sn-18" name="ssub_BEV_18" type="text" required={true} maxLength="40" defaultValue={"Sparkling water"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Sparkling water 330 ml">{"Sparkling water 330 ml"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-bev-19">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Soft drinks & water"}
                                <span className="fd-sub">{"BEV"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-19">{"Sub-sub-category name – Cola & lemon drinks"}</label>
                                <input className="field__input ct-name" id="sn-19" name="ssub_BEV_19" type="text" required={true} maxLength="40" defaultValue={"Cola & lemon drinks"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Soft drink can 330 ml (cola / lemon)">{"Soft drink can 330 ml (cola / lemon)"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-bev-20">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Soft drinks & water"}
                                <span className="fd-sub">{"BEV"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-20">{"Sub-sub-category name – Fruit juice"}</label>
                                <input className="field__input ct-name" id="sn-20" name="ssub_BEV_20" type="text" required={true} maxLength="40" defaultValue={"Fruit juice"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Fruit juice tetra pack 200 ml">{"Fruit juice tetra pack 200 ml"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-bev-21">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Soft drinks & water"}
                                <span className="fd-sub">{"BEV"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-21">{"Sub-sub-category name – Energy drinks"}</label>
                                <input className="field__input ct-name" id="sn-21" name="ssub_BEV_21" type="text" required={true} maxLength="40" defaultValue={"Energy drinks"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Energy drink can 250 ml">{"Energy drink can 250 ml"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-cok-22">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Coca-Cola range"}
                                <span className="fd-sub">{"COK"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-22">{"Sub-sub-category name – Original (normal)"}</label>
                                <input className="field__input ct-name" id="sn-22" name="ssub_COK_22" type="text" required={true} maxLength="40" defaultValue={"Original (normal)"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub">{"Coca-Cola original taste – items can be added in the item master"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items" data-w2="">
                                <span className="fd-muted">{"none yet"}</span>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-cok-23">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Coca-Cola range"}
                                <span className="fd-sub">{"COK"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-23">{"Sub-sub-category name – Zero Sugar"}</label>
                                <input className="field__input ct-name" id="sn-23" name="ssub_COK_23" type="text" required={true} maxLength="40" defaultValue={"Zero Sugar"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub">{"Coke Zero Sugar – items can be added in the item master"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items" data-w2="">
                                <span className="fd-muted">{"none yet"}</span>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-cok-24">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Coca-Cola range"}
                                <span className="fd-sub">{"COK"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-24">{"Sub-sub-category name – Diet Coke"}</label>
                                <input className="field__input ct-name" id="sn-24" name="ssub_COK_24" type="text" required={true} maxLength="40" defaultValue={"Diet Coke"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub">{"Diet Coke – items can be added in the item master"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items" data-w2="">
                                <span className="fd-muted">{"none yet"}</span>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-cok-25">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Coca-Cola range"}
                                <span className="fd-sub">{"COK"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-25">{"Sub-sub-category name – Black"}</label>
                                <input className="field__input ct-name" id="sn-25" name="ssub_COK_25" type="text" required={true} maxLength="40" defaultValue={"Black"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub">{"Coca-Cola Black – items can be added in the item master"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items" data-w2="">
                                <span className="fd-muted">{"none yet"}</span>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-liq-26">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Liquor, beer & wine"}
                                <span className="fd-sub">{"LIQ"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-26">{"Sub-sub-category name – Beer"}</label>
                                <input className="field__input ct-name" id="sn-26" name="ssub_LIQ_26" type="text" required={true} maxLength="40" defaultValue={"Beer"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Beer can 330 ml (lager), Beer bottle 650 ml (lager)">{"Beer can 330 ml (lager), Beer bottle 650 ml (lager)"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-liq-27">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Liquor, beer & wine"}
                                <span className="fd-sub">{"LIQ"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-27">{"Sub-sub-category name – Whisky"}</label>
                                <input className="field__input ct-name" id="sn-27" name="ssub_LIQ_27" type="text" required={true} maxLength="40" defaultValue={"Whisky"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Whisky miniature 50 ml">{"Whisky miniature 50 ml"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-liq-28">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Liquor, beer & wine"}
                                <span className="fd-sub">{"LIQ"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-28">{"Sub-sub-category name – Wine"}</label>
                                <input className="field__input ct-name" id="sn-28" name="ssub_LIQ_28" type="text" required={true} maxLength="40" defaultValue={"Wine"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Red wine 750 ml">{"Red wine 750 ml"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-liq-29">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Liquor, beer & wine"}
                                <span className="fd-sub">{"LIQ"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-29">{"Sub-sub-category name – Brandy"}</label>
                                <input className="field__input ct-name" id="sn-29" name="ssub_LIQ_29" type="text" required={true} maxLength="40" defaultValue={"Brandy"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Brandy 750 ml">{"Brandy 750 ml"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-hkc-30">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Housekeeping supplies › Cleaning chemicals"}
                                <span className="fd-sub">{"HKC"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-30">{"Sub-sub-category name – Room & washroom cleaners"}</label>
                                <input className="field__input ct-name" id="sn-30" name="ssub_HKC_30" type="text" required={true} maxLength="40" defaultValue={"Room & washroom cleaners"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Bathroom cleaner 5 litre, Glass cleaner 5 litre, Floor cleaner 5 litre">{"Bathroom cleaner 5 litre, Glass cleaner 5 litre + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-hkc-31">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Housekeeping supplies › Cleaning chemicals"}
                                <span className="fd-sub">{"HKC"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-31">{"Sub-sub-category name – Laundry chemicals"}</label>
                                <input className="field__input ct-name" id="sn-31" name="ssub_HKC_31" type="text" required={true} maxLength="40" defaultValue={"Laundry chemicals"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Liquid detergent 20 litre, Fabric softener 20 litre">{"Liquid detergent 20 litre, Fabric softener 20 litre"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"2"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-sup-32">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Housekeeping supplies › Room & washroom supplies"}
                                <span className="fd-sub">{"SUP"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-32">{"Sub-sub-category name – Paper & disposables"}</label>
                                <input className="field__input ct-name" id="sn-32" name="ssub_SUP_32" type="text" required={true} maxLength="40" defaultValue={"Paper & disposables"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Toilet roll, Facial tissue box, Garbage bag 19 x 21 in, Disposable gloves (box of 100)">{"Toilet roll, Facial tissue box + 2 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"4"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-sup-33">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Housekeeping supplies › Room & washroom supplies"}
                                <span className="fd-sub">{"SUP"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-33">{"Sub-sub-category name – Cleaning tools"}</label>
                                <input className="field__input ct-name" id="sn-33" name="ssub_SUP_33" type="text" required={true} maxLength="40" defaultValue={"Cleaning tools"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Mop head (cotton)">{"Mop head (cotton)"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"1"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-amn-34">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Guest amenities › Guest amenities"}
                                <span className="fd-sub">{"AMN"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-34">{"Sub-sub-category name – Bath & body"}</label>
                                <input className="field__input ct-name" id="sn-34" name="ssub_AMN_34" type="text" required={true} maxLength="40" defaultValue={"Bath & body"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Shampoo 30 ml bottle, Conditioner 30 ml bottle, Body wash 30 ml bottle, Soap 40 g, Herbal soap 50 g">{"Shampoo 30 ml bottle, Conditioner 30 ml bottle + 3 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"5"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-amn-35">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Guest amenities › Guest amenities"}
                                <span className="fd-sub">{"AMN"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-35">{"Sub-sub-category name – Kits"}</label>
                                <input className="field__input ct-name" id="sn-35" name="ssub_AMN_35" type="text" required={true} maxLength="40" defaultValue={"Kits"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Dental kit, Shaving kit, Sewing kit, Vanity kit">{"Dental kit, Shaving kit + 2 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"4"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-amn-36">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Guest amenities › Guest amenities"}
                                <span className="fd-sub">{"AMN"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-36">{"Sub-sub-category name – Room accessories"}</label>
                                <input className="field__input ct-name" id="sn-36" name="ssub_AMN_36" type="text" required={true} maxLength="40" defaultValue={"Room accessories"} />
                              </td>
                              <td className="dt__td" data-label="Items such as" data-w2="">
                                <span className="fd-sub" title="Comb, Shower cap, Slippers (pair), Laundry bag">{"Comb, Shower cap + 2 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"4"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-amn-37">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Guest amenities › Guest amenities"}
                                <span className="fd-sub">{"AMN"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-37">{"Sub-sub-category name – Tea & coffee"}</label>
                                <input className="field__input ct-name" id="sn-37" name="ssub_AMN_37" type="text" required={true} maxLength="40" defaultValue={"Tea & coffee"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Tea / coffee tray set, Sugar sachet, Creamer sachet">{"Tea / coffee tray set, Sugar sachet + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-lin-38">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Linen › Linen"}
                                <span className="fd-sub">{"LIN"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-38">{"Sub-sub-category name – Towels, mats & robes"}</label>
                                <input className="field__input ct-name" id="sn-38" name="ssub_LIN_38" type="text" required={true} maxLength="40" defaultValue={"Towels, mats & robes"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Bath towel 70 x 140 cm, Hand towel 50 x 90 cm, Bath mat 50 x 80 cm, Bathrobe (L / XL), Face towel 30 x 30 cm, Pool towel 90 x 180 cm, Bath towel – beige (old design)">{"Bath towel 70 x 140 cm, Hand towel 50 x 90 cm + 5 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"7"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-lin-39">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Linen › Linen"}
                                <span className="fd-sub">{"LIN"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-39">{"Sub-sub-category name – Bed linen"}</label>
                                <input className="field__input ct-name" id="sn-39" name="ssub_LIN_39" type="text" required={true} maxLength="40" defaultValue={"Bed linen"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Bed sheet king 274 x 297 cm, Bed sheet single 183 x 274 cm, Duvet cover king, Pillow case 50 x 75 cm, Spa sheet single">{"Bed sheet king 274 x 297 cm, Bed sheet single 183 x 274 cm + 3 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"5"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-lin-40">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Linen › Linen"}
                                <span className="fd-sub">{"LIN"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-40">{"Sub-sub-category name – Duvets & pillows"}</label>
                                <input className="field__input ct-name" id="sn-40" name="ssub_LIN_40" type="text" required={true} maxLength="40" defaultValue={"Duvets & pillows"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Duvet king (microfibre), Pillow (hollow fibre), Mattress protector king">{"Duvet king (microfibre), Pillow (hollow fibre) + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-lin-41">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w2="" data-t="">
                                {"Linen › Linen"}
                                <span className="fd-sub">{"LIN"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-41">{"Sub-sub-category name – F&B linen"}</label>
                                <input className="field__input ct-name" id="sn-41" name="ssub_LIN_41" type="text" required={true} maxLength="40" defaultValue={"F&B linen"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Table cloth 180 x 180 cm, Napkin 50 x 50 cm, Kitchen apron (pool)">{"Table cloth 180 x 180 cm, Napkin 50 x 50 cm + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-eng-42">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Engineering spares › Electrical, plumbing & HVAC spares"}
                                <span className="fd-sub">{"ENG"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-42">{"Sub-sub-category name – Electrical"}</label>
                                <input className="field__input ct-name" id="sn-42" name="ssub_ENG_42" type="text" required={true} maxLength="40" defaultValue={"Electrical"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Bedside switch panel, AA batteries (4), LED lamp 7 W E14, LED panel 2 x 2 ft 36 W, Contactor 32 A 3-pole, Thermocouple, MCB 16 A 2-pole">{"Bedside switch panel, AA batteries (4) + 5 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"7"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-eng-43">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Engineering spares › Electrical, plumbing & HVAC spares"}
                                <span className="fd-sub">{"ENG"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-43">{"Sub-sub-category name – Plumbing"}</label>
                                <input className="field__input ct-name" id="sn-43" name="ssub_ENG_43" type="text" required={true} maxLength="40" defaultValue={"Plumbing"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Flush valve kit, Mixer cartridge 35 mm, Ball valve 1/2 in (brass)">{"Flush valve kit, Mixer cartridge 35 mm + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-eng-44">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Engineering spares › Electrical, plumbing & HVAC spares"}
                                <span className="fd-sub">{"ENG"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-44">{"Sub-sub-category name – HVAC & refrigeration"}</label>
                                <input className="field__input ct-name" id="sn-44" name="ssub_ENG_44" type="text" required={true} maxLength="40" defaultValue={"HVAC & refrigeration"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Refrigerant R-410A (kg), Thermostat (VRV wired), Solar / heat pump thermostat, AHU pre-filter 24 x 24 in">{"Refrigerant R-410A (kg), Thermostat (VRV wired) + 2 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"4"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-eng-45">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Engineering spares › Electrical, plumbing & HVAC spares"}
                                <span className="fd-sub">{"ENG"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-45">{"Sub-sub-category name – Building & IT"}</label>
                                <input className="field__input ct-name" id="sn-45" name="ssub_ENG_45" type="text" required={true} maxLength="40" defaultValue={"Building & IT"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Wi-Fi access point, Curtain track bracket, Gypsum board 6 x 4 ft, Door gasket – cold room (m), Anti-skid floor tile 300 mm, Brass burner 4 inch">{"Wi-Fi access point, Curtain track bracket + 4 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"6"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-prn-46">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Printing & stationery › Printing & stationery"}
                                <span className="fd-sub">{"PRN"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-46">{"Sub-sub-category name – Cards & forms"}</label>
                                <input className="field__input ct-name" id="sn-46" name="ssub_PRN_46" type="text" required={true} maxLength="40" defaultValue={"Cards & forms"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="Key card RFID (blank), Registration card pad (100 sheets), Letterhead A4 (500 sheets)">{"Key card RFID (blank), Registration card pad (100 sheets) + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row" id="ss-prn-47">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Printing & stationery › Printing & stationery"}
                                <span className="fd-sub">{"PRN"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category" data-w2="">
                                <label className="sr-only" htmlFor="sn-47">{"Sub-sub-category name – Paper & stationery"}</label>
                                <input className="field__input ct-name" id="sn-47" name="ssub_PRN_47" type="text" required={true} maxLength="40" defaultValue={"Paper & stationery"} />
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub" title="POS paper roll 80 mm, Ball pen blue, A4 copier paper 75 GSM (ream)">{"POS paper roll 80 mm, Ball pen blue + 1 more"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items">
                                <Link className="fd-link num" title="Open the item master" to={"/stores-setup/sts-01-item-master"}>{"3"}</Link>
                              </td>
                            </tr>
                            <tr className="ss-row ss-row--new" id="ss-new">
                              <td className="dt__td nw" data-label="Category › sub-category" data-w="" data-t="">
                                {"Beverage › Soft drinks & water"}
                                <span className="fd-sub">{"BEV"}</span>
                              </td>
                              <td className="dt__td" data-label="Sub-sub-category">
                                <strong>{"Iced tea"}</strong>
                                <span className="fd-sub cg-fresh">{"Added just now by Thomas Kurian"}</span>
                              </td>
                              <td className="dt__td" data-label="Items such as">
                                <span className="fd-sub">{"use it on items such as Iced tea can 300 ml"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw" data-label="Items" data-w2="">
                                <span className="fd-muted">{"none yet"}</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
                <p className="prs-note">
                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#info" />
                  </svg>
                  {"Cost type decides which cost-control report the consumption appears in: Food cost and Beverage cost go to the F&B cost report, Operating supplies to the department expense report and Repairs & maintenance to Engineering. Changing a GL account affects "}
                  <b>{"new"}</b>
                  {" documents only; posted journals keep the account they were posted with."}
                </p>
                <details className="hk-sys" data-code="STS-X02">
                  <summary>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#cog" />
                    </svg>
                    {"System – what runs automatically on this screen"}
                  </summary>
                  <ul>
                    <li data-code="STS-X02">
                      <b>{"STS-X02 · Setup audit logger"}</b>
                      {" – Every new or renamed category, sub-category and sub-sub-category and every GL or cost-type change is written to the audit log with user, time, old and new values."}
                    </li>
                  </ul>
                </details>
                <div className="fd-formfoot">
                  <span className="fd-spacer">{"Last saved 02 Apr 2026, 11:05 by Thomas Kurian (Cost Controller). Written to the setup audit log with the old and new values (STS-X02)."}</span>
                  <a className="btn" href="#cancelled">{"Cancel"}</a>
                  <button className="btn btn--primary" type="submit">{"Save"}</button>
                </div>
              </form>
              <div className="fd-toast" id="t-added" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#plus-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Sub-category added – Kitchen disposables & packaging (KDP)"}
                  <small>{"Mapped to 1311 Inventory – Bar and F&B consumables and 5105 Bar and F&B consumables; cost type Operating supplies. It can now be chosen on items (STS-01) as ST-KDP-001. Written to the setup audit log with the old and new values (STS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-added-cat" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#plus-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Category added – Spa & wellness supplies"}
                  <small>{"It can now be chosen on items. Add its sub-categories next (each needs a short code and GL accounts). Written to the setup audit log with the old and new values (STS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-added-ssub" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#plus-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Sub-sub-category added – Iced tea"}
                  <small>{"Beverage › Soft drinks & water › Iced tea. It can now be chosen on Stores items, Minibar items and the Restaurant menu. Written to the setup audit log with the old and new values (STS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-saved" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Categories and GL mapping saved"}
                  <small>{"17 sub-categories and 47 sub-sub-categories saved. New documents use the changed accounts; posted journals keep theirs. Written to the setup audit log with the old and new values (STS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="cancelled" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#x-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"No changes saved"}
                  <small>{"The page shows the saved settings again."}</small>
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
