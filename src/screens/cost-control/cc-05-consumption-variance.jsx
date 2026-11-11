// GENERATED from public/cost-control/cc-05-consumption-variance/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/laundry.css",
    "media": null
  },
  {
    "href": "/css/aviv/linen.css",
    "media": null
  },
  {
    "href": "/css/aviv/lostfound.css",
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
    "href": "/css/aviv/costcontrol.css",
    "media": null
  },
  {
    "href": "/cost-control/cc-05-consumption-variance/cc-05-consumption-variance.css",
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

export default function CostControlCc05ConsumptionVariance() {
  return (
    <ScreenShell title="Consumption Variance" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="CC-05" data-code="CC-05" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="cost-control" open={true}>
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
                  <Link className="nav__item is-active" data-nav="CC-05" aria-current="page" title="Variance" to={"/cost-control/cc-05-consumption-variance"}>
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
            <main className="app__content" id="main" data-code="CC-05" tabIndex="-1">
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
                        <Link to={"/cost-control/cc-01-cost-control-dashboard"}>{"Cost Control"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Variance"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Consumption Variance"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"CC-05"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="cc-05-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="cc-05-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" action="/cost-control/cc-05-consumption-variance/" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"Period"}</span>
                            <select className="hf-f__c" name="period" defaultValue={"Month to date (1 – 21 Oct 2026)"}>
                              <option>{"Month to date (1 – 21 Oct 2026)"}</option>
                              <option>{"Last week"}</option>
                              <option>{"September 2026"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Store"}</span>
                            <select className="hf-f__c" name="store" defaultValue={"Kitchen store"}>
                              <option>{"Kitchen store"}</option>
                              <option>{"Bar store (see Beverage Control)"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"From"}</span>
                            <input className="hf-f__c" type="date" name="from" defaultValue={"2026-10-01"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"To"}</span>
                            <input className="hf-f__c" type="date" name="to" defaultValue={"2026-10-22"} />
                          </label>
                        </div>
                        <div className="hfilter__acts">
                          <button className="hfilter__clear" type="reset">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#x" />
                            </svg>
                            <span>{"Clear"}</span>
                          </button>
                          <a className="hfilter__done" href="#flow-filter">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check" />
                            </svg>
                            {"Show"}
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="page-header__actions">
                    <Link className="btn" data-leads-to="CC-R03" to={"/cost-control/cc-r03-consumption-variance"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </Link>
                    <Link className="btn" data-leads-to="CC-06" to={"/cost-control/cc-06-beverage-control"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#gauge" />
                      </svg>
                      {"Beverage control"}
                    </Link>
                  </div>
                </div>
              </header>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="saved" />
              </div>
              <ul className="cc-kpis">
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"24"}</span>
                  <span className="cc-kpi__l">{"Ingredients compared"}</span>
                  <span className="cc-kpi__s">{"Kitchen store, 1 – 21 Oct 2026"}</span>
                </li>
                <li className="cc-kpi cc-kpi--warn">
                  <span className="cc-kpi__v">{"6"}</span>
                  <span className="cc-kpi__l">{"Above tolerance"}</span>
                  <span className="cc-kpi__s">{"2 % unless the ingredient has its own limit (CCS-01)"}</span>
                </li>
                <li className="cc-kpi cc-kpi--bad">
                  <span className="cc-kpi__v">{"2"}</span>
                  <span className="cc-kpi__l">{"Waiting for an explanation"}</span>
                  <span className="cc-kpi__s">{"Karimeen (pearl spot), Coconut oil"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"₹11,632"}</span>
                  <span className="cc-kpi__l">{"Used more than expected"}</span>
                  <span className="cc-kpi__s">{"value of all differences at the latest rate"}</span>
                </li>
              </ul>
              <form className="prs-form" action="/cost-control/cc-05-consumption-variance/#saved" method="get">
                <section className="fd-sec cc-sec" id="sec-variance" data-code="CC-05-list">
                  <h2 className="fd-sec__t">{"Potential against actual use"}</h2>
                  <p className="fd-sec__d">{"Potential = sales × recipes (sub-recipes included), worked out every night. Actual = opening stock + issues − closing stock. An ingredient above its tolerance needs the chef’s explanation before the month is closed."}</p>
                  <div className="pgw">
                    <div className="s-scroll">
                      <table className="dt__table" data-code="CC-05-lines" data-nosort="" data-mc="">
                        <caption className="sr-only">{"Potential and actual consumption by ingredient"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Ingredient"}</th>
                            <th scope="col" className="dt__th--right">{"Potential use"}</th>
                            <th scope="col" className="dt__th--right">{"Actual use"}</th>
                            <th scope="col" className="dt__th--right">{"Difference"}</th>
                            <th scope="col" className="dt__th--right">{"Value"}</th>
                            <th scope="col" className="dt__th--right">{"Variance %"}</th>
                            <th scope="col">{"Status"}</th>
                            <th scope="col">{"Explanation"}</th>
                            <th scope="col">{"Open"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="dl-total">
                            <td className="dt__td" colSpan="4">
                              <b>{"All ingredients"}</b>
                              <span className="fd-sub">{"24 lines, Kitchen store"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Value" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"₹11,632"}</b>
                            </td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+2.6 %"}</b>
                            </td>
                            <td className="dt__td" colSpan="3">
                              <span className="fd-sub">{"Used more than expected costs money; used less may mean portions are short or recipes are wrong."}</span>
                            </td>
                          </tr>
                          <tr className="cv-row cv-row--above" id="cv-st-msf-013">
                            <td className="dt__td" data-label="Ingredient" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Chicken (curry cut)"}</b>
                              <span className="fd-sub">{"ST-MSF-013"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"640.8 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"662.6 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+21.8 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹5,123"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+3.4 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--info">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check" />
                                </svg>
                                {"Explained"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w="" data-m="">
                              <span className="cv-ex-t">{"Supplier cut bigger pieces with more bone from 12-10; informed Purchase"}</span>
                              <span className="fd-sub">{"Arun Prakash · 20-10-2026"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-msf-013">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row cv-row--above" id="cv-st-msf-011">
                            <td className="dt__td" data-label="Ingredient" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Karimeen (pearl spot)"}</b>
                              <span className="fd-sub">{"ST-MSF-011"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"60.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"63.1 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+3.1 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹2,108"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+5.2 %"}</b>
                              <span className="fd-sub">{"limit 3 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--bad">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#alert" />
                                </svg>
                                {"Needs explanation"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <label className="sr-only" htmlFor="ex-st-msf-011">{"Explanation for Karimeen (pearl spot)"}</label>
                              <input className="field__input cv-ex" id="ex-st-msf-011" name="ex_st-msf-011" type="text" maxLength="120" required={true} placeholder="Required: why was more used than expected?" />
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-msf-011">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row cv-row--above" id="cv-st-msf-012">
                            <td className="dt__td" data-label="Ingredient" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Tiger prawns 16/20"}</b>
                              <span className="fd-sub">{"ST-MSF-012"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"42.9 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"44.9 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+2.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹1,840"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+4.6 %"}</b>
                              <span className="fd-sub">{"limit 3 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--info">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check" />
                                </svg>
                                {"Explained"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w="" data-m="">
                              <span className="cv-ex-t">{"Ice glaze on the frozen prawns weighed 6 % more than the label"}</span>
                              <span className="fd-sub">{"Arun Prakash · 21-10-2026"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-msf-012">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-frp-005">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Coconut"}</b>
                              <span className="fd-sub">{"ST-FRP-005"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"811.7 nos"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"836.9 nos"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+25.2 nos"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹680"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+3.1 %"}</b>
                              <span className="fd-sub">{"limit 4 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-frp-005">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row cv-row--above" id="cv-st-gro-036">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Coconut oil"}</b>
                              <span className="fd-sub">{"ST-GRO-036"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"104.3 litre"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"107.3 litre"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+3.0 litre"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹630"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+2.9 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--bad">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#alert" />
                                </svg>
                                {"Needs explanation"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <label className="sr-only" htmlFor="ex-st-gro-036">{"Explanation for Coconut oil"}</label>
                              <input className="field__input cv-ex" id="ex-st-gro-036" name="ex_st-gro-036" type="text" maxLength="120" required={true} placeholder="Required: why was more used than expected?" />
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-gro-036">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row cv-row--above" id="cv-st-dry-024">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Paneer"}</b>
                              <span className="fd-sub">{"ST-DRY-024"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"42.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"41.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"-1.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Value">{"−₹390"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"-2.4 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--info">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check" />
                                </svg>
                                {"Explained"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w="" data-m="">
                              <span className="cv-ex-t">{"Paneer trimmings were used in the staff meal"}</span>
                              <span className="fd-sub">{"Arun Prakash · 21-10-2026"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-dry-024">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-msf-015">
                            <td className="dt__td" data-label="Ingredient" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Seer fish (neymeen)"}</b>
                              <span className="fd-sub">{"ST-MSF-015"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"23.8 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"24.1 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.3 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹345"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+1.1 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-msf-015">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-gro-031">
                            <td className="dt__td" data-label="Ingredient" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Basmati rice 1121"}</b>
                              <span className="fd-sub">{"ST-GRO-031"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"119.3 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"121.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+1.7 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹340"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+1.4 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-gro-031">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-dry-023">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Butter"}</b>
                              <span className="fd-sub">{"ST-DRY-023"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"34.8 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"35.4 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.6 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹318"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+1.6 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-dry-023">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-dry-021">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Milk"}</b>
                              <span className="fd-sub">{"ST-DRY-021"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"444.9 litre"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"450.2 litre"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+5.3 litre"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹276"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+1.2 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-dry-021">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-frp-006">
                            <td className="dt__td" data-label="Ingredient" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Raw banana (nendran)"}</b>
                              <span className="fd-sub">{"ST-FRP-006"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"208.6 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"211.3 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+2.7 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹151"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+1.3 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-frp-006">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-gro-032">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Toor dal"}</b>
                              <span className="fd-sub">{"ST-GRO-032"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"70.1 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"69.5 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"-0.6 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Value">{"−₹85"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"-0.8 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-gro-032">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-frp-001">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Onion"}</b>
                              <span className="fd-sub">{"ST-FRP-001"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"154.6 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"156.3 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+1.7 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹65"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+1.1 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-frp-001">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-gro-038">
                            <td className="dt__td" data-label="Ingredient" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Matta rice (Kerala red rice)"}</b>
                              <span className="fd-sub">{"ST-GRO-038"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"214.1 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"215.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.9 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹56"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+0.4 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-gro-038">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-frp-002">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Tomato"}</b>
                              <span className="fd-sub">{"ST-FRP-002"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"110.2 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"111.2 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+1.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹44"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+0.9 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-frp-002">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-gro-033">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Sunflower oil"}</b>
                              <span className="fd-sub">{"ST-GRO-033"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"33.4 litre"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"33.7 litre"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.3 litre"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹43"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+0.8 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-gro-033">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-dry-025">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Fresh cream"}</b>
                              <span className="fd-sub">{"ST-DRY-025"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"19.4 litre"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"19.5 litre"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.1 litre"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹31"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+0.7 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-dry-025">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row cv-row--above" id="cv-st-frp-004">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Green chilli"}</b>
                              <span className="fd-sub">{"ST-FRP-004"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"9.9 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"10.2 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.3 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹24"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+2.6 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--info">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check" />
                                </svg>
                                {"Explained"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w="" data-m="">
                              <span className="cv-ex-t">{"Green chilli price rise made the kitchen buy bigger, older stock; more trimming"}</span>
                              <span className="fd-sub">{"Arun Prakash · 20-10-2026"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-frp-004">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-frp-008">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Lemon"}</b>
                              <span className="fd-sub">{"ST-FRP-008"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"8.8 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"9.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.2 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹18"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+1.8 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-frp-008">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-gro-034">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Sugar"}</b>
                              <span className="fd-sub">{"ST-GRO-034"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"69.7 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"70.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.3 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹13"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+0.5 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-gro-034">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-frp-007">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Curry leaves"}</b>
                              <span className="fd-sub">{"ST-FRP-007"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"9.9 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"10.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.1 kg"}</td>
                            <td className="dt__td dt__td--right nw num cv-neg" data-label="Value">{"₹12"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+1.4 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-frp-007">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-frp-003">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Potato"}</b>
                              <span className="fd-sub">{"ST-FRP-003"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"43.1 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"42.8 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"-0.3 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Value">{"−₹10"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"-0.6 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-frp-003">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-gro-039">
                            <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Black pepper"}</b>
                              <span className="fd-sub">{"ST-GRO-039"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"0.5 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"0.5 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Value">{"₹0"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+1.0 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-gro-039">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                          <tr className="cv-row" id="cv-st-gro-040">
                            <td className="dt__td" data-label="Ingredient" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b>{"Cardamom (green)"}</b>
                              <span className="fd-sub">{"ST-GRO-040"}</span>
                            </td>
                            <td className="dt__td dt__td--right nw num" data-label="Potential use" data-w2="">{"0.2 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Actual use" data-w2="">{"0.2 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Difference" data-w2="">{"+0.0 kg"}</td>
                            <td className="dt__td dt__td--right nw num" data-label="Value">{"₹0"}</td>
                            <td className="dt__td dt__td--right nw" data-label="Variance %" data-w2="">
                              <b className="num">{"+0.0 %"}</b>
                              <span className="fd-sub">{"limit 2 %"}</span>
                            </td>
                            <td className="dt__td nw" data-label="Status" data-w2="">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Within tolerance"}
                              </span>
                            </td>
                            <td className="dt__td" data-label="Explanation" data-w2="" data-m="">
                              <span className="fd-muted">{"not needed"}</span>
                            </td>
                            <td className="dt__td nw" data-a="">
                              <a className="btn btn--sm" href="#drill-st-gro-040">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#search" />
                                </svg>
                                {"Drill down"}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <p className="cc-note">
                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    {"The tolerance of each ingredient comes from Targets & Tolerances (CCS-01): 2 % for most, Tiger prawns 3 %, Karimeen 3 %, Coconut 4 %. A negative difference means less was used than the recipes need."}
                  </p>
                </section>
                <details className="hk-sys" data-code="CC-X02">
                  <summary>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#cog" />
                    </svg>
                    {"System – what runs automatically on this screen"}
                  </summary>
                  <ul>
                    <li data-code="CC-X02">
                      <b>{"CC-X02 · Potential consumption"}</b>
                      {" – Runs every night: portions sold × recipe quantity ÷ yield, by ingredient."}
                    </li>
                    <li data-code="CC-X04">
                      <b>{"CC-X04 · Variance alert"}</b>
                      {" – Flags the ingredients above tolerance and tells the Executive Chef."}
                    </li>
                  </ul>
                </details>
                <div className="fd-formfoot">
                  <span className="fd-spacer">{"Explanations are saved with the user and the date. Written to the audit log with the user, time and the old and new values."}</span>
                  <Link className="btn" to={"/cost-control/cc-05-consumption-variance"}>{"Cancel"}</Link>
                  <button className="btn btn--primary" type="submit">{"Save explanations"}</button>
                </div>
              </form>
              <div className="modal" id="drill-st-msf-013" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-msf-013-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-msf-013-t">{"Chicken (curry cut) – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 640.8 kg, actual 662.6 kg, variance +3.4 % (₹5,123)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-msf-013" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Chicken (curry cut)"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-stew">{"Kerala chicken stew"}</a>
                                <span className="fd-sub">{"MN-121"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"221"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.38 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"120.0 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bchicken">{"Butter chicken"}</a>
                                <span className="fd-sub">{"MN-131"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"254"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.3 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"108.9 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-biryani">{"Thalassery chicken biryani"}</a>
                                <span className="fd-sub">{"MN-161"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"301"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.3 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"129.0 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-soup">{"Kozhi clear soup"}</a>
                                <span className="fd-sub">{"MN-102"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"76"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.08 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"8.7 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bbiryani">{"Banquet chicken biryani (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D12"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"640"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.3 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"274.3 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 70 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"640.8 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 231.9 + issues 795.1 − closing stock 364.4 = "}
                      <b>{"662.6 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                    <p className="cc-now">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check-circle" />
                      </svg>
                      <span>{"Explained by Arun Prakash on 20-10-2026: Supplier cut bigger pieces with more bone from 12-10; informed Purchase."}</span>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-msf-011" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-msf-011-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-msf-011-t">{"Karimeen (pearl spot) – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 60.0 kg, actual 63.1 kg, variance +5.2 % (₹2,108)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-msf-011" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Karimeen (pearl spot)"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-karimeen">{"Karimeen pollichathu"}</a>
                                <span className="fd-sub">{"MN-120"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"186"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.2 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"60.0 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 62 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"60.0 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 22.1 + issues 75.7 − closing stock 34.7 = "}
                      <b>{"63.1 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                    <p className="cc-warn">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <span>{"The variance is above the 3 % limit. Arun Prakash must write an explanation before the month is closed (BR-03)."}</span>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-msf-012" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-msf-012-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-msf-012-t">{"Tiger prawns 16/20 – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 42.9 kg, actual 44.9 kg, variance +4.6 % (₹1,840)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-msf-012" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Tiger prawns 16/20"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-prawns">{"Grilled tiger prawns"}</a>
                                <span className="fd-sub">{"MN-145"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"118"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.2 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"42.9 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 55 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"42.9 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 15.7 + issues 53.9 − closing stock 24.7 = "}
                      <b>{"44.9 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                    <p className="cc-now">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check-circle" />
                      </svg>
                      <span>{"Explained by Arun Prakash on 21-10-2026: Ice glaze on the frozen prawns weighed 6 % more than the label."}</span>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-frp-005" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-frp-005-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-frp-005-t">{"Coconut – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 811.7 nos, actual 836.9 nos, variance +3.1 % (₹680)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-frp-005" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Coconut"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-stew">{"Kerala chicken stew"}</a>
                                <span className="fd-sub">{"MN-121"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"221"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.15 nos"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"63.8 nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-fishcurry">{"Malabar fish curry"}</a>
                                <span className="fd-sub">{"MN-122"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"143"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.1 nos"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"27.5 nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-vegstew">{"Vegetable stew"}</a>
                                <span className="fd-sub">{"MN-123"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"97"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.25 nos"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"46.6 nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-sadya">{"Kerala sadya (Sunday lunch)"}</a>
                                <span className="fd-sub">{"MN-124"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"64"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.6 nos"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"73.8 nos"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bsadya">{"Banquet wedding sadya (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D03"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"520"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.6 nos"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"600.0 nos"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 52 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"811.7 nos"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 292.9 + issues 1,004.3 − closing stock 460.3 = "}
                      <b>{"836.9 nos"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-gro-036" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-gro-036-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-gro-036-t">{"Coconut oil – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 104.3 litre, actual 107.3 litre, variance +2.9 % (₹630)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-gro-036" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Coconut oil"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-karimeen">{"Karimeen pollichathu"}</a>
                                <span className="fd-sub">{"MN-120"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"186"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.03 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"5.6 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-stew">{"Kerala chicken stew"}</a>
                                <span className="fd-sub">{"MN-121"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"221"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.02 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"4.4 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-fishcurry">{"Malabar fish curry"}</a>
                                <span className="fd-sub">{"MN-122"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"143"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.02 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"2.9 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-vegstew">{"Vegetable stew"}</a>
                                <span className="fd-sub">{"MN-123"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"97"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.04 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"3.9 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-sadya">{"Kerala sadya (Sunday lunch)"}</a>
                                <span className="fd-sub">{"MN-124"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"64"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.15 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"9.6 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bsadya">{"Banquet wedding sadya (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D03"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"520"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.15 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"78.0 litre"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"104.3 litre"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 37.6 + issues 128.8 − closing stock 59.1 = "}
                      <b>{"107.3 litre"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                    <p className="cc-warn">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <span>{"The variance is above the 2 % limit. Arun Prakash must write an explanation before the month is closed (BR-03)."}</span>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-dry-024" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-dry-024-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-dry-024-t">{"Paneer – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 42.0 kg, actual 41.0 kg, variance -2.4 % (−₹390)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-dry-024" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Paneer"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-pbm">{"Paneer butter masala"}</a>
                                <span className="fd-sub">{"MN-130"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"168"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.15 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"25.7 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-chillipaneer">{"Chilli paneer"}</a>
                                <span className="fd-sub">{"MN-111"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"133"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.12 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"16.3 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 98 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"42.0 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 14.3 + issues 49.2 − closing stock 22.5 = "}
                      <b>{"41.0 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                    <p className="cc-now">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check-circle" />
                      </svg>
                      <span>{"Explained by Arun Prakash on 21-10-2026: Paneer trimmings were used in the staff meal."}</span>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-msf-015" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-msf-015-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-msf-015-t">{"Seer fish (neymeen) – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 23.8 kg, actual 24.1 kg, variance +1.1 % (₹345)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-msf-015" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Seer fish (neymeen)"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-fishcurry">{"Malabar fish curry"}</a>
                                <span className="fd-sub">{"MN-122"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"143"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.1 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"23.8 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 60 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"23.8 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 8.4 + issues 28.9 − closing stock 13.2 = "}
                      <b>{"24.1 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-gro-031" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-gro-031-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-gro-031-t">{"Basmati rice 1121 – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 119.3 kg, actual 121.0 kg, variance +1.4 % (₹340)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-gro-031" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Basmati rice 1121"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-biryani">{"Thalassery chicken biryani"}</a>
                                <span className="fd-sub">{"MN-161"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"301"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.12 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"36.1 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bbiryani">{"Banquet chicken biryani (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D12"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"640"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.13 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"83.2 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"119.3 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 42.3 + issues 145.2 − closing stock 66.5 = "}
                      <b>{"121.0 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-dry-023" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-dry-023-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-dry-023-t">{"Butter – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 34.8 kg, actual 35.4 kg, variance +1.6 % (₹318)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-dry-023" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Butter"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-pbm">{"Paneer butter masala"}</a>
                                <span className="fd-sub">{"MN-130"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"168"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.03 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"5.0 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bchicken">{"Butter chicken"}</a>
                                <span className="fd-sub">{"MN-131"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"254"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.03 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"7.6 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-prawns">{"Grilled tiger prawns"}</a>
                                <span className="fd-sub">{"MN-145"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"118"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.02 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"2.4 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-biryani">{"Thalassery chicken biryani"}</a>
                                <span className="fd-sub">{"MN-161"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"301"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.02 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"6.0 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-payasam">{"Palada payasam"}</a>
                                <span className="fd-sub">{"MN-170"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"189"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.005 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"0.9 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bbiryani">{"Banquet chicken biryani (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D12"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"640"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.02 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"12.8 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"34.8 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 12.4 + issues 42.5 − closing stock 19.5 = "}
                      <b>{"35.4 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-dry-021" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-dry-021-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-dry-021-t">{"Milk – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 444.9 litre, actual 450.2 litre, variance +1.2 % (₹276)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-dry-021" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Milk"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-sadya">{"Kerala sadya (Sunday lunch)"}</a>
                                <span className="fd-sub">{"MN-124"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"64"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.6 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"38.4 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-payasam">{"Palada payasam"}</a>
                                <span className="fd-sub">{"MN-170"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"189"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.5 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"94.5 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bsadya">{"Banquet wedding sadya (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D03"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"520"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.6 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"312.0 litre"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"444.9 litre"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 157.6 + issues 540.2 − closing stock 247.6 = "}
                      <b>{"450.2 litre"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-frp-006" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-frp-006-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-frp-006-t">{"Raw banana (nendran) – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 208.6 kg, actual 211.3 kg, variance +1.3 % (₹151)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-frp-006" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Raw banana (nendran)"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-sadya">{"Kerala sadya (Sunday lunch)"}</a>
                                <span className="fd-sub">{"MN-124"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"64"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.25 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"22.9 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bsadya">{"Banquet wedding sadya (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D03"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"520"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.25 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"185.7 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 70 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"208.6 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 74.0 + issues 253.6 − closing stock 116.3 = "}
                      <b>{"211.3 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-gro-032" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-gro-032-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-gro-032-t">{"Toor dal – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 70.1 kg, actual 69.5 kg, variance -0.8 % (−₹85)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-gro-032" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Toor dal"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-sadya">{"Kerala sadya (Sunday lunch)"}</a>
                                <span className="fd-sub">{"MN-124"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"64"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.12 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"7.7 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bsadya">{"Banquet wedding sadya (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D03"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"520"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.12 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"62.4 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"70.1 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 24.3 + issues 83.4 − closing stock 38.2 = "}
                      <b>{"69.5 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-frp-001" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-frp-001-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-frp-001-t">{"Onion – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 154.6 kg, actual 156.3 kg, variance +1.1 % (₹65)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-frp-001" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Onion"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-karimeen">{"Karimeen pollichathu"}</a>
                                <span className="fd-sub">{"MN-120"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"186"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.06 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"12.4 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-stew">{"Kerala chicken stew"}</a>
                                <span className="fd-sub">{"MN-121"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"221"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.05 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"12.3 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-fishcurry">{"Malabar fish curry"}</a>
                                <span className="fd-sub">{"MN-122"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"143"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.05 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"7.9 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-vegstew">{"Vegetable stew"}</a>
                                <span className="fd-sub">{"MN-123"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"97"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.05 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"5.4 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-pbm">{"Paneer butter masala"}</a>
                                <span className="fd-sub">{"MN-130"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"168"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.06 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"11.2 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bchicken">{"Butter chicken"}</a>
                                <span className="fd-sub">{"MN-131"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"254"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.05 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"14.1 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-biryani">{"Thalassery chicken biryani"}</a>
                                <span className="fd-sub">{"MN-161"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"301"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.08 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"26.8 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-soup">{"Kozhi clear soup"}</a>
                                <span className="fd-sub">{"MN-102"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"76"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.02 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"1.7 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-chillipaneer">{"Chilli paneer"}</a>
                                <span className="fd-sub">{"MN-111"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"133"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.04 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"5.9 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bbiryani">{"Banquet chicken biryani (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D12"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"640"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.08 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"56.9 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 90 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"154.6 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 54.7 + issues 187.6 − closing stock 86.0 = "}
                      <b>{"156.3 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-gro-038" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-gro-038-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-gro-038-t">{"Matta rice (Kerala red rice) – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 214.1 kg, actual 215.0 kg, variance +0.4 % (₹56)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-gro-038" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Matta rice (Kerala red rice)"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-sadya">{"Kerala sadya (Sunday lunch)"}</a>
                                <span className="fd-sub">{"MN-124"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"64"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.25 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"16.0 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-mattarice">{"Kerala matta rice"}</a>
                                <span className="fd-sub">{"MN-160"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"312"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.2 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"62.4 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-payasam">{"Palada payasam"}</a>
                                <span className="fd-sub">{"MN-170"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"189"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.03 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"5.7 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bsadya">{"Banquet wedding sadya (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D03"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"520"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.25 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"130.0 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"214.1 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 75.2 + issues 258.0 − closing stock 118.2 = "}
                      <b>{"215.0 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-frp-002" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-frp-002-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-frp-002-t">{"Tomato – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 110.2 kg, actual 111.2 kg, variance +0.9 % (₹44)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-frp-002" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Tomato"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-karimeen">{"Karimeen pollichathu"}</a>
                                <span className="fd-sub">{"MN-120"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"186"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.05 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"9.8 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-fishcurry">{"Malabar fish curry"}</a>
                                <span className="fd-sub">{"MN-122"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"143"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.05 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"7.5 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-pbm">{"Paneer butter masala"}</a>
                                <span className="fd-sub">{"MN-130"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"168"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.12 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"21.2 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bchicken">{"Butter chicken"}</a>
                                <span className="fd-sub">{"MN-131"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"254"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.12 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"32.1 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-biryani">{"Thalassery chicken biryani"}</a>
                                <span className="fd-sub">{"MN-161"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"301"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.04 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"12.7 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bbiryani">{"Banquet chicken biryani (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D12"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"640"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.04 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"26.9 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 95 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"110.2 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 38.9 + issues 133.4 − closing stock 61.1 = "}
                      <b>{"111.2 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-gro-033" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-gro-033-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-gro-033-t">{"Sunflower oil – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 33.4 litre, actual 33.7 litre, variance +0.8 % (₹43)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-gro-033" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Sunflower oil"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-prawns">{"Grilled tiger prawns"}</a>
                                <span className="fd-sub">{"MN-145"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"118"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.01 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"1.2 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-biryani">{"Thalassery chicken biryani"}</a>
                                <span className="fd-sub">{"MN-161"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"301"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.03 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"9.0 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-chillipaneer">{"Chilli paneer"}</a>
                                <span className="fd-sub">{"MN-111"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"133"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.03 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"4.0 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bbiryani">{"Banquet chicken biryani (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D12"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"640"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.03 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"19.2 litre"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"33.4 litre"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 11.8 + issues 40.4 − closing stock 18.5 = "}
                      <b>{"33.7 litre"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-dry-025" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-dry-025-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-dry-025-t">{"Fresh cream – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 19.4 litre, actual 19.5 litre, variance +0.7 % (₹31)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-dry-025" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Fresh cream"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-pbm">{"Paneer butter masala"}</a>
                                <span className="fd-sub">{"MN-130"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"168"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.04 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"6.7 litre"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bchicken">{"Butter chicken"}</a>
                                <span className="fd-sub">{"MN-131"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"254"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.05 litre"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"12.7 litre"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"19.4 litre"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 6.8 + issues 23.4 − closing stock 10.7 = "}
                      <b>{"19.5 litre"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-frp-004" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-frp-004-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-frp-004-t">{"Green chilli – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 9.9 kg, actual 10.2 kg, variance +2.6 % (₹24)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-frp-004" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Green chilli"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-karimeen">{"Karimeen pollichathu"}</a>
                                <span className="fd-sub">{"MN-120"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"186"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.01 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"2.0 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-stew">{"Kerala chicken stew"}</a>
                                <span className="fd-sub">{"MN-121"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"221"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.01 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"2.4 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-fishcurry">{"Malabar fish curry"}</a>
                                <span className="fd-sub">{"MN-122"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"143"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.01 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"1.6 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-vegstew">{"Vegetable stew"}</a>
                                <span className="fd-sub">{"MN-123"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"97"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.01 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"1.1 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-chillipaneer">{"Chilli paneer"}</a>
                                <span className="fd-sub">{"MN-111"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"133"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.02 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"2.9 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 92 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"9.9 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 3.6 + issues 12.2 − closing stock 5.6 = "}
                      <b>{"10.2 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                    <p className="cc-now">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check-circle" />
                      </svg>
                      <span>{"Explained by Arun Prakash on 20-10-2026: Green chilli price rise made the kitchen buy bigger, older stock; more trimming."}</span>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-frp-008" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-frp-008-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-frp-008-t">{"Lemon – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 8.8 kg, actual 9.0 kg, variance +1.8 % (₹18)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-frp-008" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Lemon"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-prawns">{"Grilled tiger prawns"}</a>
                                <span className="fd-sub">{"MN-145"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"118"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.03 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"8.8 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 40 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"8.8 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 3.1 + issues 10.8 − closing stock 4.9 = "}
                      <b>{"9.0 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-gro-034" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-gro-034-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-gro-034-t">{"Sugar – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 69.7 kg, actual 70.0 kg, variance +0.5 % (₹13)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-gro-034" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Sugar"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-sadya">{"Kerala sadya (Sunday lunch)"}</a>
                                <span className="fd-sub">{"MN-124"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"64"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.1 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"6.4 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-payasam">{"Palada payasam"}</a>
                                <span className="fd-sub">{"MN-170"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"189"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.06 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"11.3 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bsadya">{"Banquet wedding sadya (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D03"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"520"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.1 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"52.0 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"69.7 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 24.5 + issues 84.0 − closing stock 38.5 = "}
                      <b>{"70.0 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-frp-007" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-frp-007-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-frp-007-t">{"Curry leaves – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 9.9 kg, actual 10.0 kg, variance +1.4 % (₹12)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-frp-007" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Curry leaves"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-karimeen">{"Karimeen pollichathu"}</a>
                                <span className="fd-sub">{"MN-120"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"186"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.004 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"0.9 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-stew">{"Kerala chicken stew"}</a>
                                <span className="fd-sub">{"MN-121"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"221"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.004 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"1.0 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-fishcurry">{"Malabar fish curry"}</a>
                                <span className="fd-sub">{"MN-122"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"143"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.004 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"0.7 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-vegstew">{"Vegetable stew"}</a>
                                <span className="fd-sub">{"MN-123"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"97"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.004 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"0.5 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-sadya">{"Kerala sadya (Sunday lunch)"}</a>
                                <span className="fd-sub">{"MN-124"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"64"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.01 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"0.8 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-bsadya">{"Banquet wedding sadya (per plate)"}</a>
                                <span className="fd-sub">{"BQ-D03"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"520"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.01 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"6.1 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 85 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"9.9 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 3.5 + issues 12.0 − closing stock 5.5 = "}
                      <b>{"10.0 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-frp-003" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-frp-003-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-frp-003-t">{"Potato – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 43.1 kg, actual 42.8 kg, variance -0.6 % (−₹10)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-frp-003" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Potato"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-stew">{"Kerala chicken stew"}</a>
                                <span className="fd-sub">{"MN-121"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"221"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.1 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"26.0 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-vegstew">{"Vegetable stew"}</a>
                                <span className="fd-sub">{"MN-123"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"97"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.15 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"17.1 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 85 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"43.1 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 15.0 + issues 51.4 − closing stock 23.6 = "}
                      <b>{"42.8 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-gro-039" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-gro-039-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-gro-039-t">{"Black pepper – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 0.5 kg, actual 0.5 kg, variance +1.0 % (₹0)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-gro-039" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Black pepper"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-karimeen">{"Karimeen pollichathu"}</a>
                                <span className="fd-sub">{"MN-120"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"186"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.002 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"0.4 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-soup">{"Kozhi clear soup"}</a>
                                <span className="fd-sub">{"MN-102"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"76"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.001 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"0.1 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"0.5 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 0.2 + issues 0.6 − closing stock 0.3 = "}
                      <b>{"0.5 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal" id="drill-st-gro-040" data-code="CC-05-drill" role="dialog" aria-modal="true" aria-labelledby="drill-st-gro-040-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="drill-st-gro-040-t">{"Cardamom (green) – recipes and sales behind the potential use"}</h2>
                      <p className="modal__desc">{"1 – 21 Oct 2026 · potential 0.2 kg, actual 0.2 kg, variance +0.0 % (₹0)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="CC-05-drill-st-gro-040" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Recipes behind the potential use of Cardamom (green)"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Recipe"}</th>
                              <th scope="col" className="dt__th--right">{"Portions sold"}</th>
                              <th scope="col" className="dt__th--right">{"Quantity per portion"}</th>
                              <th scope="col" className="dt__th--right">{"Potential"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-stew">{"Kerala chicken stew"}</a>
                                <span className="fd-sub">{"MN-121"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"221"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.0005 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"0.1 kg"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Recipe" data-w2="" data-t="">
                                <a className="fd-link" href="/cost-control/cc-02-recipe-cards/#cc-p01-rc-payasam">{"Palada payasam"}</a>
                                <span className="fd-sub">{"MN-170"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Portions sold" data-w2="">{"189"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Quantity per portion" data-w2="">{"0.0004 kg"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="">{"0.1 kg"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" colSpan="3">
                                <b>{"Potential use"}</b>
                                <span className="fd-sub">{"calculated: portions × quantity ÷ yield 100 %"}</span>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Potential" data-w2="" data-t="">
                                <b>{"0.2 kg"}</b>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p className="cv-act">
                      {"Actual use = opening stock 0.1 + issues 0.2 − closing stock 0.1 = "}
                      <b>{"0.2 kg"}</b>
                      {" (Kitchen store, 1 – 21 Oct)."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Potential use is worked out every night from the POS sales and the recipe cards (CC-X02)."}</span>
                    <a className="btn btn--primary" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="fd-toast" id="t-saved" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Explanations saved"}
                  <small>{"2 explanations were written (Karimeen, Coconut oil). The ingredients show Explained and the alert is cleared for the Cost Controller. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="modal modal--sm" id="flow-filter" data-flow="flow-filter" role="dialog" aria-modal="true" aria-labelledby="flow-filter-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="flow-filter-t">{"Filter applied"}</h2>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close" />
                  </div>
                  <div className="modal__body">
                    <p className="field__hint">{"In the live system the list now shows only what matches your choices. The demo rows stay as they are until the system is connected."}</p>
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
