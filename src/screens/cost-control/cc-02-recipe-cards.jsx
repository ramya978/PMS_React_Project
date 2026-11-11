// GENERATED from public/cost-control/cc-02-recipe-cards/index.html by scripts/convert_legacy.py.
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
    "href": "/cost-control/cc-02-recipe-cards/cc-02-recipe-cards.css",
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

export default function CostControlCc02RecipeCards() {
  return (
    <ScreenShell title="Recipe Cards" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="CC-02" data-code="CC-02" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="CC-02" aria-current="page" title="Recipes" to={"/cost-control/cc-02-recipe-cards"}>
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
            <main className="app__content" id="main" data-code="CC-02" tabIndex="-1">
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
                        <span aria-current="page">{"Recipes"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Recipe Cards"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"CC-02"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="cc-02-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="cc-02-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" action="" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"Type"}</span>
                            <select className="hf-f__c" name="type">
                              <option>{"All"}</option>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Outlet"}</span>
                            <select className="hf-f__c" name="outlet">
                              <option>{"All"}</option>
                              <option>{"Travancore Restaurant"}</option>
                              <option>{"Seafood Grill"}</option>
                              <option>{"Cochin Trade Bar"}</option>
                              <option>{"In-room Dining"}</option>
                              <option>{"Pool Café"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Status"}</span>
                            <select className="hf-f__c" name="status">
                              <option>{"All"}</option>
                              <option>{"Current"}</option>
                              <option>{"Review due"}</option>
                              <option>{"Cost changed"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
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
                            {"Apply"}
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="page-header__actions">
                    <a className="btn ph-ic" href="/cost-control/cc-02-recipe-cards/#recosted">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#refresh" />
                      </svg>
                      {"Recost all"}
                    </a>
                    <Link className="btn ph-ic" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn btn--primary" href="/cost-control/cc-02-recipe-cards/#cc-p01" data-leads-to="CC-P01">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"New recipe"}
                    </a>
                  </div>
                </div>
              </header>
              <p className="field__hint" data-flow="cc02-rec">{"Recipe numbers REC-095 onward link each card to its menu item on Menu & Items (RTS-03)."}</p>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm pm--v" id="v-all" />
                <i className="pm pm--v" id="v-menu" />
                <i className="pm pm--v" id="v-sub" />
                <i className="pm pm--v" id="v-cock" />
                <i className="pm pm--v" id="v-banq" />
                <i className="pm pm--v" id="v-due" />
                <i className="pm pm--v" id="v-drift" />
                <i className="pm" id="recosted" />
                <i className="pm" id="added" />
                <i className="pm pm--s" id="saved-rc-karimeen" />
                <i className="pm pm--s" id="saved-rc-stew" />
                <i className="pm pm--s" id="saved-rc-fishcurry" />
                <i className="pm pm--s" id="saved-rc-vegstew" />
                <i className="pm pm--s" id="saved-rc-pbm" />
                <i className="pm pm--s" id="saved-rc-bchicken" />
                <i className="pm pm--s" id="saved-rc-prawns" />
                <i className="pm pm--s" id="saved-rc-biryani" />
                <i className="pm pm--s" id="saved-rc-soup" />
                <i className="pm pm--s" id="saved-rc-chillipaneer" />
                <i className="pm pm--s" id="saved-rc-sadya" />
                <i className="pm pm--s" id="saved-rc-mattarice" />
                <i className="pm pm--s" id="saved-rc-payasam" />
                <i className="pm pm--s" id="saved-rc-limesoda" />
                <i className="pm pm--s" id="saved-rc-rum" />
                <i className="pm pm--s" id="saved-rc-sunset" />
                <i className="pm pm--s" id="saved-rc-currybase" />
                <i className="pm pm--s" id="saved-rc-bbiryani" />
                <i className="pm pm--s" id="saved-rc-bsadya" />
              </div>
              <nav className="hv st-views" aria-label="Recipe views">
                <a className="hv__v" href="#v-all" data-v="v-all">
                  <span>{"All recipes"}</span>
                  <b className="num">{"19"}</b>
                </a>
                <a className="hv__v" href="#v-menu" data-v="v-menu">
                  <span>{"Menu items"}</span>
                  <b className="num">{"15"}</b>
                </a>
                <a className="hv__v" href="#v-sub" data-v="v-sub">
                  <span>{"Sub-recipes"}</span>
                  <b className="num">{"1"}</b>
                </a>
                <a className="hv__v" href="#v-cock" data-v="v-cock">
                  <span>{"Cocktails"}</span>
                  <b className="num">{"1"}</b>
                </a>
                <a className="hv__v" href="#v-banq" data-v="v-banq">
                  <span>{"Banquet dishes"}</span>
                  <b className="num">{"2"}</b>
                </a>
                <a className="hv__v" href="#v-due" data-v="v-due">
                  <span>{"Review due"}</span>
                  <b className="num">{"4"}</b>
                </a>
                <a className="hv__v" href="#v-drift" data-v="v-drift">
                  <span>{"Cost changed"}</span>
                  <b className="num">{"3"}</b>
                </a>
              </nav>
              <div className="cc-kpis-wrap">
                <ul className="cc-kpis">
                  <li className="cc-kpi">
                    <span className="cc-kpi__v">{"19"}</span>
                    <span className="cc-kpi__l">{"Recipe cards"}</span>
                    <span className="cc-kpi__s">{"15 menu items and cocktails · 1 sub-recipe · 2 banquet dishes"}</span>
                  </li>
                  <li className="cc-kpi cc-kpi--warn">
                    <span className="cc-kpi__v">{"4"}</span>
                    <span className="cc-kpi__l">{"Review due"}</span>
                    <span className="cc-kpi__s">{"older than 6 months (CCS-01)"}</span>
                  </li>
                  <li className="cc-kpi cc-kpi--warn">
                    <span className="cc-kpi__v">{"3"}</span>
                    <span className="cc-kpi__l">{"Cost changed by over 5 %"}</span>
                    <span className="cc-kpi__s">{"since the last review"}</span>
                  </li>
                  <li className="cc-kpi cc-kpi--ok">
                    <span className="cc-kpi__v">{"22-10-2026"}</span>
                    <span className="cc-kpi__l">{"Last recost, 02:00"}</span>
                    <span className="cc-kpi__s">{"latest rate · CC-X01"}</span>
                  </li>
                </ul>
              </div>
              <section className="fd-sec cc-sec" id="sec-recipes" data-code="CC-02-list">
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="dt__table" data-code="CC-02-recipes" data-nosort="" data-mc="">
                      <caption className="sr-only">{"Recipe cards with portion cost, selling price and cost percentage"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Recipe"}</th>
                          <th scope="col">{"Yield"}</th>
                          <th scope="col" className="dt__th--right">{"Portion cost"}</th>
                          <th scope="col" className="dt__th--right">{"Selling price (excl. tax)"}</th>
                          <th scope="col" className="dt__th--right">{"Cost %"}</th>
                          <th scope="col">{"Last reviewed"}</th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col">{"Open"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="rc-row rc-t-menu rc-drift" id="rc-karimeen">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-karimeen">
                              <b>{"Karimeen pollichathu"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-120 · TRV, SFG"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">
                            {"₹233.32"}
                            <span className="cc-was" title="Cost at the last review">{"was ₹215.24"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹780.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"29.9 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status" data-w2="">
                            <span className="pq-flag pq-flag--bad">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trending-up" />
                              </svg>
                              {"Cost +8.4 % since review"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-karimeen" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-karimeen"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu" id="rc-stew">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-stew">
                              <b>{"Kerala chicken stew"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-121 · TRV, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹148.43"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹540.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"27.5 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-stew" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-stew"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu rc-due" id="rc-fishcurry">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-fishcurry">
                              <b>{"Malabar fish curry"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-122 · TRV, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹206.92"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹620.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"33.4 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"03-03-2026"}</td>
                          <td className="dt__td" data-label="Status" data-w2="">
                            <span className="pq-flag pq-flag--warn">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Review due"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-fishcurry" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-fishcurry"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu rc-due" id="rc-vegstew">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-vegstew">
                              <b>{"Vegetable stew"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-123 · TRV, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹30.93"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹420.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"7.4 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"21-04-2026"}</td>
                          <td className="dt__td" data-label="Status" data-w2="">
                            <span className="pq-flag pq-flag--warn">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Review due"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-vegstew" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-vegstew"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu" id="rc-pbm">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-pbm">
                              <b>{"Paneer butter masala"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-130 · TRV, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹96.09"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹480.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"20.0 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-pbm" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-pbm"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu rc-drift" id="rc-bchicken">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-bchicken">
                              <b>{"Butter chicken"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-131 · TRV, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">
                            {"₹139.78"}
                            <span className="cc-was" title="Cost at the last review">{"was ₹131.99"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹560.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"25.0 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status" data-w2="">
                            <span className="pq-flag pq-flag--warn">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trending-up" />
                              </svg>
                              {"Cost +5.9 % since review"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-bchicken" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-bchicken"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu rc-drift" id="rc-prawns">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-prawns">
                              <b>{"Grilled tiger prawns"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-145 · SFG"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">
                            {"₹353.33"}
                            <span className="cc-was" title="Cost at the last review">{"was ₹331.14"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹1,450.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"24.4 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status" data-w2="">
                            <span className="pq-flag pq-flag--warn">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#trending-up" />
                              </svg>
                              {"Cost +6.7 % since review"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-prawns" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-prawns"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu" id="rc-biryani">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-biryani">
                              <b>{"Thalassery chicken biryani"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-161 · TRV, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹144.84"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹620.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"23.4 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-biryani" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-biryani"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu rc-due" id="rc-soup">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-soup">
                              <b>{"Kozhi clear soup"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-102 · TRV, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹28.39"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹360.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"7.9 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"14-02-2026"}</td>
                          <td className="dt__td" data-label="Status" data-w2="">
                            <span className="pq-flag pq-flag--warn">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Review due"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-soup" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-soup"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu rc-due" id="rc-chillipaneer">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-chillipaneer">
                              <b>{"Chilli paneer"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-111 · TRV, BAR, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹55.48"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹460.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"12.1 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"10-04-2026"}</td>
                          <td className="dt__td" data-label="Status" data-w2="">
                            <span className="pq-flag pq-flag--warn">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Review due"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-chillipaneer" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-chillipaneer"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu" id="rc-sadya">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-sadya">
                              <b>{"Kerala sadya (Sunday lunch)"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-124 · TRV"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹152.21"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹950.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"16.0 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"06-06-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-sadya" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-sadya"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu" id="rc-mattarice">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-mattarice">
                              <b>{"Kerala matta rice"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-160 · TRV, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹12.40"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹180.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"6.9 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-mattarice" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-mattarice"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu" id="rc-payasam">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-payasam">
                              <b>{"Palada payasam"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-170 · TRV, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹34.21"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹280.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"12.2 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-payasam" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-payasam"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu" id="rc-limesoda">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-limesoda">
                              <b>{"Fresh lime soda"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-180 · TRV, SFG, BAR, IRD"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹44.88"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹180.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"24.9 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-limesoda" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-limesoda"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-menu" id="rc-rum">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-rum">
                              <b>{"Old Monk rum 60 ml"}</b>
                            </a>
                            <span className="fd-sub">{"Menu item · MN-191 · BAR"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹100.80"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹340.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"29.6 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-rum" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-rum"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-cock" id="rc-sunset">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-sunset">
                              <b>{"Cochin Sunset (cocktail)"}</b>
                            </a>
                            <span className="fd-sub">{"Cocktail · MN-193 · BAR"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹160.74"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹520.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"30.9 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-sunset" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-sunset"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-sub" id="rc-currybase">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-currybase">
                              <b>{"Onion–tomato gravy base"}</b>
                            </a>
                            <span className="fd-sub">{"Sub-recipe · TRV, IRD, BNQ"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield">{"5 kg"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹45.75"}</td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-muted">{"–"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %" data-w2="">
                            <span className="fd-muted">{"not sold"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"15-07-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-currybase" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-currybase"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-banq" id="rc-bbiryani">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-bbiryani">
                              <b>{"Banquet chicken biryani (per plate)"}</b>
                            </a>
                            <span className="fd-sub">{"Banquet dish · BQ-D12 · BNQ"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹146.84"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹850.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"17.3 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"30-06-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-bbiryani" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-bbiryani"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
                          </td>
                        </tr>
                        <tr className="rc-row rc-t-banq" id="rc-bsadya">
                          <td className="dt__td" data-label="Recipe" data-w="" data-t="">
                            <a className="fd-link" href="#cc-p01-rc-bsadya">
                              <b>{"Banquet wedding sadya (per plate)"}</b>
                            </a>
                            <span className="fd-sub">{"Banquet dish · BQ-D03 · BNQ"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Yield" data-w2="">{"1 portion"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Portion cost" data-w2="">{"₹152.21"}</td>
                          <td className="dt__td dt__td--right nw" data-label="Selling price (excl. tax)" data-w2="">
                            <span className="num">{"₹1,150.00"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="Cost %">
                            <b className="num">{"13.2 %"}</b>
                          </td>
                          <td className="dt__td nw num" data-label="Last reviewed" data-w2="">{"30-06-2026"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pq-flag pq-flag--ok">
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Current"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#cc-p01-rc-bsadya" data-leads-to="CC-P01">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                            {" "}
                            <Link className="btn btn--sm" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-bsadya"}>
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#printer" />
                              </svg>
                              {"Print"}
                            </Link>
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
                  {"Selling prices are the menu prices of Restaurant POS Setup (GST is added on the bill). Portion cost = sum of the ingredient lines ÷ portions, each line worked out as quantity ÷ yield × latest rate (CCS-01 recost basis). The saved recipe is used for potential consumption from the next day."}
                </p>
              </section>
              <details className="hk-sys" data-code="CC-X01">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#cog" />
                  </svg>
                  {"System – what runs automatically on this screen"}
                </summary>
                <ul>
                  <li data-code="CC-X01">
                    <b>{"CC-X01 · Recipe recost"}</b>
                    {" – Recalculates the portion cost of every recipe with the latest purchase rates (nightly and on Recost all). A recipe whose cost moved by more than 5 % since its last review is marked on this list and on the dashboard."}
                  </li>
                </ul>
              </details>
              <div className="modal modal--full" id="cc-p01-rc-karimeen" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-karimeen-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-karimeen" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-karimeen-t">{"Karimeen pollichathu"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-karimeen-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-karimeen-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Karimeen pollichathu"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-karimeen-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-karimeen-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-karimeen-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-karimeen-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-120"} />
                          <span className="field__hint">{"TRV, SFG"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-karimeen-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-karimeen-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-karimeen-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Karimeen pollichathu"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-karimeen-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-karimeen-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-MSF-011 · Karimeen (pearl spot)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-karimeen-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.2"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-karimeen-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"62"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹219.35"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-karimeen-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-karimeen-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-karimeen-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.06"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-karimeen-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹2.53"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-karimeen-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-karimeen-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-002 · Tomato"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-karimeen-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.05"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-karimeen-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"95"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹2.32"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-karimeen-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-karimeen-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-004 · Green chilli"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-karimeen-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.01"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-karimeen-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"92"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.87"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-karimeen-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-karimeen-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-007 · Curry leaves"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-karimeen-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.004"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-karimeen-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"85"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.56"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-karimeen-i5">{"Ingredient – line 6"}</label>
                                  <input className="field__input rc-item" id="rc-karimeen-i5" name="item5" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-036 · Coconut oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-q5">{"Quantity used – line 6"}</label>
                                    <input className="field__input prs-n" id="rc-karimeen-q5" name="qty5" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.03"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-y5">{"Yield % – line 6"}</label>
                                    <input className="field__input prs-n--s" id="rc-karimeen-y5" name="yield5" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹6.30"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-karimeen-i6">{"Ingredient – line 7"}</label>
                                  <input className="field__input rc-item" id="rc-karimeen-i6" name="item6" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-039 · Black pepper"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-q6">{"Quantity used – line 7"}</label>
                                    <input className="field__input prs-n" id="rc-karimeen-q6" name="qty6" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.002"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-karimeen-y6">{"Yield % – line 7"}</label>
                                    <input className="field__input prs-n--s" id="rc-karimeen-y6" name="yield6" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.38"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹233.32"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹233.32"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"29.9 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹780.00 (from Restaurant POS Setup, MN-120)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-karimeen-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-karimeen-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-karimeen-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-karimeen-me" name="method" rows="3" maxLength="500" defaultValue={"Marinate the cleaned fish in chilli, turmeric and lime; shallow fry; wrap in banana leaf with the onion–tomato masala and steam."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-karimeen-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-karimeen-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" defaultChecked={true} />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 9 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-karimeen"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-stew" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-stew-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-stew" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-stew-t">{"Kerala chicken stew"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-stew-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-stew-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Kerala chicken stew"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-stew-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-stew-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-stew-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-stew-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-121"} />
                          <span className="field__hint">{"TRV, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-stew-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-stew-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-stew-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Kerala chicken stew"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-stew-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-stew-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-MSF-013 · Chicken (curry cut)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-stew-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.38"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-stew-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"70"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹127.57"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-stew-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-stew-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-003 · Potato"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-stew-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.1"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-stew-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"85"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹4.00"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-stew-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-stew-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-stew-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.05"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-stew-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹2.11"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-stew-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-stew-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-005 · Coconut"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-stew-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.15"} />
                                    <span>{"nos"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-stew-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"52"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹7.79"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-stew-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-stew-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-004 · Green chilli"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-stew-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.01"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-stew-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"92"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.87"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-stew-i5">{"Ingredient – line 6"}</label>
                                  <input className="field__input rc-item" id="rc-stew-i5" name="item5" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-007 · Curry leaves"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-q5">{"Quantity used – line 6"}</label>
                                    <input className="field__input prs-n" id="rc-stew-q5" name="qty5" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.004"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-y5">{"Yield % – line 6"}</label>
                                    <input className="field__input prs-n--s" id="rc-stew-y5" name="yield5" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"85"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.56"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-stew-i6">{"Ingredient – line 7"}</label>
                                  <input className="field__input rc-item" id="rc-stew-i6" name="item6" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-036 · Coconut oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-q6">{"Quantity used – line 7"}</label>
                                    <input className="field__input prs-n" id="rc-stew-q6" name="qty6" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.02"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-y6">{"Yield % – line 7"}</label>
                                    <input className="field__input prs-n--s" id="rc-stew-y6" name="yield6" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹4.20"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-stew-i7">{"Ingredient – line 8"}</label>
                                  <input className="field__input rc-item" id="rc-stew-i7" name="item7" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-040 · Cardamom (green)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-q7">{"Quantity used – line 8"}</label>
                                    <input className="field__input prs-n" id="rc-stew-q7" name="qty7" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.0005"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-stew-y7">{"Yield % – line 8"}</label>
                                    <input className="field__input prs-n--s" id="rc-stew-y7" name="yield7" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.32"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹148.43"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹148.43"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"27.5 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹540.00 (from Restaurant POS Setup, MN-121)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-stew-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-stew-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-stew-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-stew-me" name="method" rows="3" maxLength="500" defaultValue={"Cook the chicken and potato in thin coconut milk with whole spices; finish with thick coconut milk and curry leaves."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-stew-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-stew-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 10 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-stew"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-fishcurry" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-fishcurry-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-fishcurry" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-fishcurry-t">{"Malabar fish curry"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 03-03-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-fishcurry-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-fishcurry-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Malabar fish curry"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-fishcurry-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-fishcurry-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-fishcurry-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-fishcurry-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-122"} />
                          <span className="field__hint">{"TRV, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-fishcurry-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-fishcurry-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-fishcurry-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Malabar fish curry"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-fishcurry-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-fishcurry-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-MSF-015 · Seer fish (neymeen)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-fishcurry-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.1"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-fishcurry-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"60"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹191.67"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-fishcurry-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-fishcurry-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-005 · Coconut"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-fishcurry-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.1"} />
                                    <span>{"nos"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-fishcurry-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"52"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹5.19"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-fishcurry-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-fishcurry-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-fishcurry-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.05"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-fishcurry-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹2.11"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-fishcurry-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-fishcurry-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-002 · Tomato"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-fishcurry-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.05"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-fishcurry-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"95"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹2.32"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-fishcurry-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-fishcurry-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-004 · Green chilli"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-fishcurry-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.01"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-fishcurry-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"92"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.87"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-fishcurry-i5">{"Ingredient – line 6"}</label>
                                  <input className="field__input rc-item" id="rc-fishcurry-i5" name="item5" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-007 · Curry leaves"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-q5">{"Quantity used – line 6"}</label>
                                    <input className="field__input prs-n" id="rc-fishcurry-q5" name="qty5" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.004"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-y5">{"Yield % – line 6"}</label>
                                    <input className="field__input prs-n--s" id="rc-fishcurry-y5" name="yield5" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"85"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.56"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-fishcurry-i6">{"Ingredient – line 7"}</label>
                                  <input className="field__input rc-item" id="rc-fishcurry-i6" name="item6" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-036 · Coconut oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-q6">{"Quantity used – line 7"}</label>
                                    <input className="field__input prs-n" id="rc-fishcurry-q6" name="qty6" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.02"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-fishcurry-y6">{"Yield % – line 7"}</label>
                                    <input className="field__input prs-n--s" id="rc-fishcurry-y6" name="yield6" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹4.20"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹206.92"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹206.92"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"33.4 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹620.00 (from Restaurant POS Setup, MN-122)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-fishcurry-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-fishcurry-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-fishcurry-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-fishcurry-me" name="method" rows="3" maxLength="500" defaultValue={"Grind coconut with chilli and turmeric; simmer the seer fish steaks in the masala with kudampuli."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-fishcurry-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-fishcurry-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" defaultChecked={true} />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 9 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-fishcurry"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-vegstew" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-vegstew-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-vegstew" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-vegstew-t">{"Vegetable stew"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 21-04-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-vegstew-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-vegstew-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Vegetable stew"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-vegstew-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-vegstew-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-vegstew-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-vegstew-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-123"} />
                          <span className="field__hint">{"TRV, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-vegstew-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-vegstew-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-vegstew-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Vegetable stew"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-vegstew-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-vegstew-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-003 · Potato"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-vegstew-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.15"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-vegstew-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"85"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹6.00"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-vegstew-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-vegstew-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-vegstew-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.05"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-vegstew-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹2.11"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-vegstew-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-vegstew-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-004 · Green chilli"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-vegstew-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.01"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-vegstew-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"92"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.87"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-vegstew-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-vegstew-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-005 · Coconut"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-vegstew-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.25"} />
                                    <span>{"nos"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-vegstew-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"52"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹12.98"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-vegstew-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-vegstew-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-007 · Curry leaves"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-vegstew-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.004"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-vegstew-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"85"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.56"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-vegstew-i5">{"Ingredient – line 6"}</label>
                                  <input className="field__input rc-item" id="rc-vegstew-i5" name="item5" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-036 · Coconut oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-q5">{"Quantity used – line 6"}</label>
                                    <input className="field__input prs-n" id="rc-vegstew-q5" name="qty5" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.04"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-vegstew-y5">{"Yield % – line 6"}</label>
                                    <input className="field__input prs-n--s" id="rc-vegstew-y5" name="yield5" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹8.40"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹30.93"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹30.93"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"7.4 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹420.00 (from Restaurant POS Setup, MN-123)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-vegstew-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-vegstew-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-vegstew-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-vegstew-me" name="method" rows="3" maxLength="500" defaultValue={"Cook the vegetables in thin coconut milk; finish with thick milk."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-vegstew-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-vegstew-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 8 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-vegstew"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-pbm" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-pbm-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-pbm" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-pbm-t">{"Paneer butter masala"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-pbm-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-pbm-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Paneer butter masala"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-pbm-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-pbm-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-pbm-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-pbm-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-130"} />
                          <span className="field__hint">{"TRV, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-pbm-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-pbm-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-pbm-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Paneer butter masala"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-pbm-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-pbm-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-024 · Paneer"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-pbm-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-pbm-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.15"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-pbm-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-pbm-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"98"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹59.69"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-pbm-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-pbm-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-023 · Butter"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-pbm-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-pbm-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.03"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-pbm-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-pbm-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹15.90"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-pbm-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-pbm-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-025 · Fresh cream"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-pbm-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-pbm-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.04"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-pbm-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-pbm-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹12.40"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-pbm-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-pbm-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-002 · Tomato"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-pbm-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-pbm-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.12"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-pbm-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-pbm-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"95"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹5.56"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-pbm-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-pbm-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-pbm-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-pbm-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.06"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-pbm-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-pbm-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹2.53"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹96.09"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹96.09"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"20.0 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹480.00 (from Restaurant POS Setup, MN-130)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-pbm-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-pbm-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-pbm-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-pbm-me" name="method" rows="3" maxLength="500" defaultValue={"Cook the tomato–onion gravy, blend, add butter and cream, simmer the paneer cubes."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-pbm-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-pbm-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" defaultChecked={true} />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 7 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-pbm"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-bchicken" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-bchicken-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-bchicken" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-bchicken-t">{"Butter chicken"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-bchicken-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-bchicken-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Butter chicken"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-bchicken-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-bchicken-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-bchicken-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-bchicken-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-131"} />
                          <span className="field__hint">{"TRV, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-bchicken-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-bchicken-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-bchicken-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Butter chicken"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bchicken-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-bchicken-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-MSF-013 · Chicken (curry cut)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bchicken-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-bchicken-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.3"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bchicken-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-bchicken-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"70"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹100.71"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bchicken-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-bchicken-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-023 · Butter"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bchicken-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-bchicken-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.03"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bchicken-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-bchicken-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹15.90"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bchicken-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-bchicken-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-025 · Fresh cream"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bchicken-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-bchicken-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.05"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bchicken-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-bchicken-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹15.50"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bchicken-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-bchicken-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-002 · Tomato"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bchicken-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-bchicken-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.12"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bchicken-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-bchicken-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"95"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹5.56"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bchicken-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-bchicken-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bchicken-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-bchicken-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.05"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bchicken-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-bchicken-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹2.11"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹139.78"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹139.78"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"25.0 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹560.00 (from Restaurant POS Setup, MN-131)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-bchicken-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-bchicken-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-bchicken-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-bchicken-me" name="method" rows="3" maxLength="500" defaultValue={"Tandoor the marinated chicken; finish in the butter–tomato gravy with cream."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-bchicken-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-bchicken-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" defaultChecked={true} />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 7 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-bchicken"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-prawns" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-prawns-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-prawns" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-prawns-t">{"Grilled tiger prawns"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-prawns-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-prawns-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Grilled tiger prawns"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-prawns-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-prawns-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-prawns-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-prawns-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-145"} />
                          <span className="field__hint">{"SFG"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-prawns-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-prawns-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-prawns-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Grilled tiger prawns"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-prawns-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-prawns-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-MSF-012 · Tiger prawns 16/20"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-prawns-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-prawns-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.2"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-prawns-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-prawns-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"55"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹334.55"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-prawns-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-prawns-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-023 · Butter"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-prawns-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-prawns-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.02"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-prawns-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-prawns-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹10.60"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-prawns-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-prawns-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-008 · Lemon"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-prawns-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-prawns-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.03"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-prawns-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-prawns-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"40"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹6.75"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-prawns-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-prawns-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-033 · Sunflower oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-prawns-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-prawns-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.01"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-prawns-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-prawns-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.43"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹353.33"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹353.33"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"24.4 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹1,450.00 (from Restaurant POS Setup, MN-145)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-prawns-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-prawns-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-prawns-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-prawns-me" name="method" rows="3" maxLength="500" defaultValue={"Marinate in garlic, butter and lime; grill 3 minutes a side."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-prawns-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-prawns-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" defaultChecked={true} />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" defaultChecked={true} />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 6 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-prawns"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-biryani" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-biryani-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-biryani" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-biryani-t">{"Thalassery chicken biryani"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-biryani-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-biryani-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Thalassery chicken biryani"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-biryani-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-biryani-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-biryani-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-biryani-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-161"} />
                          <span className="field__hint">{"TRV, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-biryani-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-biryani-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-biryani-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Thalassery chicken biryani"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-biryani-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-biryani-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-MSF-013 · Chicken (curry cut)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-biryani-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.3"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-biryani-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"70"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹100.71"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-biryani-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-biryani-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-031 · Basmati rice 1121"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-biryani-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.12"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-biryani-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹24.00"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-biryani-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-biryani-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-biryani-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.08"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-biryani-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹3.38"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-biryani-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-biryani-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-023 · Butter"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-biryani-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.02"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-biryani-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹10.60"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-biryani-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-biryani-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-002 · Tomato"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-biryani-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.04"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-biryani-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"95"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.85"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-biryani-i5">{"Ingredient – line 6"}</label>
                                  <input className="field__input rc-item" id="rc-biryani-i5" name="item5" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-033 · Sunflower oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-q5">{"Quantity used – line 6"}</label>
                                    <input className="field__input prs-n" id="rc-biryani-q5" name="qty5" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.03"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-biryani-y5">{"Yield % – line 6"}</label>
                                    <input className="field__input prs-n--s" id="rc-biryani-y5" name="yield5" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹4.30"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹144.84"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹144.84"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"23.4 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹620.00 (from Restaurant POS Setup, MN-161)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-biryani-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-biryani-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-biryani-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-biryani-me" name="method" rows="3" maxLength="500" defaultValue={"Layer the masala chicken and the half-cooked rice; dum for 25 minutes."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-biryani-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-biryani-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" defaultChecked={true} />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 8 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-biryani"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-soup" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-soup-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-soup" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-soup-t">{"Kozhi clear soup"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 14-02-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-soup-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-soup-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Kozhi clear soup"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-soup-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-soup-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-soup-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-soup-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-102"} />
                          <span className="field__hint">{"TRV, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-soup-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-soup-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-soup-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Kozhi clear soup"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-soup-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-soup-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-MSF-013 · Chicken (curry cut)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-soup-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-soup-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.08"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-soup-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-soup-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"70"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹26.86"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-soup-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-soup-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-soup-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-soup-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.02"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-soup-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-soup-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.84"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-soup-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-soup-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-039 · Black pepper"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-soup-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-soup-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.001"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-soup-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-soup-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.69"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹28.39"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹28.39"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"7.9 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹360.00 (from Restaurant POS Setup, MN-102)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-soup-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-soup-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-soup-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-soup-me" name="method" rows="3" maxLength="500" defaultValue={"Simmer the chicken stock with onion and pepper; strain."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-soup-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-soup-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 5 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-soup"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-chillipaneer" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-chillipaneer-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-chillipaneer" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-chillipaneer-t">{"Chilli paneer"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 10-04-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-chillipaneer-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-chillipaneer-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Chilli paneer"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-chillipaneer-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-chillipaneer-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-chillipaneer-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-chillipaneer-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-111"} />
                          <span className="field__hint">{"TRV, BAR, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-chillipaneer-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-chillipaneer-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-chillipaneer-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Chilli paneer"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-chillipaneer-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-chillipaneer-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-024 · Paneer"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-chillipaneer-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-chillipaneer-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.12"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-chillipaneer-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-chillipaneer-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"98"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹47.76"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-chillipaneer-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-chillipaneer-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-chillipaneer-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-chillipaneer-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.04"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-chillipaneer-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-chillipaneer-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.69"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-chillipaneer-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-chillipaneer-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-004 · Green chilli"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-chillipaneer-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-chillipaneer-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.02"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-chillipaneer-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-chillipaneer-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"92"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.74"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-chillipaneer-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-chillipaneer-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-033 · Sunflower oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-chillipaneer-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-chillipaneer-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.03"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-chillipaneer-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-chillipaneer-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹4.30"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹55.48"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹55.48"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"12.1 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹460.00 (from Restaurant POS Setup, MN-111)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-chillipaneer-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-chillipaneer-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-chillipaneer-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-chillipaneer-me" name="method" rows="3" maxLength="500" defaultValue={"Fry the paneer cubes; toss with onion, green chilli and the sauce."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-chillipaneer-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-chillipaneer-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 6 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-chillipaneer"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-sadya" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-sadya-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-sadya" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-sadya-t">{"Kerala sadya (Sunday lunch)"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 06-06-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-sadya-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-sadya-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Kerala sadya (Sunday lunch)"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-sadya-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-sadya-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-sadya-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-sadya-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-124"} />
                          <span className="field__hint">{"TRV"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-sadya-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-sadya-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-sadya-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Kerala sadya (Sunday lunch)"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sadya-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-sadya-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-038 · Matta rice (Kerala red rice)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-sadya-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.25"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-sadya-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹15.50"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sadya-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-sadya-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-032 · Toor dal"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-sadya-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.12"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-sadya-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹17.04"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sadya-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-sadya-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-005 · Coconut"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-sadya-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.6"} />
                                    <span>{"nos"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-sadya-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"52"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹31.15"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sadya-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-sadya-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-006 · Raw banana (nendran)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-sadya-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.25"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-sadya-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"70"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹20.00"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sadya-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-sadya-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-007 · Curry leaves"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-sadya-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.01"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-sadya-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"85"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.41"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sadya-i5">{"Ingredient – line 6"}</label>
                                  <input className="field__input rc-item" id="rc-sadya-i5" name="item5" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-036 · Coconut oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-q5">{"Quantity used – line 6"}</label>
                                    <input className="field__input prs-n" id="rc-sadya-q5" name="qty5" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.15"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-y5">{"Yield % – line 6"}</label>
                                    <input className="field__input prs-n--s" id="rc-sadya-y5" name="yield5" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹31.50"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sadya-i6">{"Ingredient – line 7"}</label>
                                  <input className="field__input rc-item" id="rc-sadya-i6" name="item6" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-034 · Sugar"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-q6">{"Quantity used – line 7"}</label>
                                    <input className="field__input prs-n" id="rc-sadya-q6" name="qty6" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.1"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-y6">{"Yield % – line 7"}</label>
                                    <input className="field__input prs-n--s" id="rc-sadya-y6" name="yield6" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹4.40"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sadya-i7">{"Ingredient – line 8"}</label>
                                  <input className="field__input rc-item" id="rc-sadya-i7" name="item7" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-021 · Milk"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-q7">{"Quantity used – line 8"}</label>
                                    <input className="field__input prs-n" id="rc-sadya-q7" name="qty7" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.6"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sadya-y7">{"Yield % – line 8"}</label>
                                    <input className="field__input prs-n--s" id="rc-sadya-y7" name="yield7" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹31.20"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹152.21"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹152.21"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"16.0 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹950.00 (from Restaurant POS Setup, MN-124)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-sadya-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-sadya-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-sadya-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-sadya-me" name="method" rows="3" maxLength="500" defaultValue={"Rice with 18 vegetarian dishes served on a banana leaf."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-sadya-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-sadya-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" defaultChecked={true} />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 10 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-sadya"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-mattarice" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-mattarice-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-mattarice" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-mattarice-t">{"Kerala matta rice"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-mattarice-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-mattarice-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Kerala matta rice"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-mattarice-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-mattarice-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-mattarice-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-mattarice-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-160"} />
                          <span className="field__hint">{"TRV, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-mattarice-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-mattarice-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-mattarice-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Kerala matta rice"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-mattarice-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-mattarice-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-038 · Matta rice (Kerala red rice)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-mattarice-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-mattarice-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.2"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-mattarice-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-mattarice-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹12.40"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹12.40"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹12.40"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"6.9 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹180.00 (from Restaurant POS Setup, MN-160)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-mattarice-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-mattarice-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-mattarice-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-mattarice-me" name="method" rows="3" maxLength="500" defaultValue={"Boil in plenty of water; drain."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-mattarice-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-mattarice-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 3 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-mattarice"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-payasam" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-payasam-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-payasam" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-payasam-t">{"Palada payasam"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-payasam-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-payasam-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Palada payasam"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-payasam-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-payasam-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-payasam-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-payasam-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-170"} />
                          <span className="field__hint">{"TRV, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-payasam-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-payasam-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-payasam-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Palada payasam"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-payasam-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-payasam-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-021 · Milk"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-payasam-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-payasam-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.5"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-payasam-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-payasam-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹26.00"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-payasam-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-payasam-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-034 · Sugar"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-payasam-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-payasam-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.06"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-payasam-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-payasam-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹2.64"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-payasam-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-payasam-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-040 · Cardamom (green)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-payasam-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-payasam-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.0004"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-payasam-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-payasam-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.06"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-payasam-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-payasam-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-023 · Butter"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-payasam-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-payasam-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.005"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-payasam-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-payasam-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹2.65"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-payasam-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-payasam-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-038 · Matta rice (Kerala red rice)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-payasam-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-payasam-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.03"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-payasam-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-payasam-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.86"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹34.21"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹34.21"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"12.2 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹280.00 (from Restaurant POS Setup, MN-170)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-payasam-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-payasam-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-payasam-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-payasam-me" name="method" rows="3" maxLength="500" defaultValue={"Cook the rice ada in milk and sugar until pink; finish with cardamom."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-payasam-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-payasam-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" defaultChecked={true} />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 7 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-payasam"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-limesoda" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-limesoda-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-limesoda" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-limesoda-t">{"Fresh lime soda"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-limesoda-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-limesoda-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Fresh lime soda"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-limesoda-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-limesoda-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-limesoda-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-limesoda-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-180"} />
                          <span className="field__hint">{"TRV, SFG, BAR, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-limesoda-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-limesoda-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-limesoda-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Fresh lime soda"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-limesoda-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-limesoda-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-008 · Lemon"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-limesoda-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-limesoda-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.04"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-limesoda-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-limesoda-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"40"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹9.00"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-limesoda-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-limesoda-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-034 · Sugar"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-limesoda-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-limesoda-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.02"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-limesoda-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-limesoda-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.88"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-limesoda-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-limesoda-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-BEV-014 · Sparkling water 330 ml"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-limesoda-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-limesoda-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.5"} />
                                    <span>{"bottle"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-limesoda-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-limesoda-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹35.00"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹44.88"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹44.88"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"24.9 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹180.00 (from Restaurant POS Setup, MN-180)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-limesoda-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-limesoda-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"20"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-limesoda-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-limesoda-me" name="method" rows="3" maxLength="500" defaultValue={"Squeeze the lime over ice, add sugar syrup, top with sparkling water."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-limesoda-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-limesoda-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 5 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-limesoda"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-rum" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-rum-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-rum" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-rum-t">{"Old Monk rum 60 ml"}</h2>
                      <p className="modal__desc">{"Recipe card · Menu item · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-rum-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-rum-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Old Monk rum 60 ml"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-rum-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-rum-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-rum-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-rum-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-191"} />
                          <span className="field__hint">{"BAR"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-rum-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-rum-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-rum-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Old Monk rum 60 ml"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-rum-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-rum-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-LIQ-141 · Old Monk rum 750 ml"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-rum-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-rum-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"60"} />
                                    <span>{"ml"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-rum-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-rum-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹100.80"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹100.80"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹100.80"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"29.6 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹340.00 (from Restaurant POS Setup, MN-191)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-rum-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-rum-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"28"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-rum-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-rum-me" name="method" rows="3" maxLength="500" defaultValue={"Pour a 60 ml measure."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-rum-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-rum-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 3 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-rum"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-sunset" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-sunset-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-sunset" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-sunset-t">{"Cochin Sunset (cocktail)"}</h2>
                      <p className="modal__desc">{"Recipe card · Cocktail · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-sunset-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-sunset-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Cochin Sunset (cocktail)"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-sunset-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-sunset-t" name="type" required={true} defaultValue={"Cocktail"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-sunset-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-sunset-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"MN-193"} />
                          <span className="field__hint">{"BAR"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-sunset-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-sunset-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-sunset-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Cochin Sunset (cocktail)"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sunset-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-sunset-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-LIQ-141 · Old Monk rum 750 ml"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sunset-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-sunset-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"60"} />
                                    <span>{"ml"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sunset-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-sunset-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹100.80"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sunset-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-sunset-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-008 · Lemon"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sunset-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-sunset-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.02"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sunset-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-sunset-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"40"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹4.50"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sunset-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-sunset-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-034 · Sugar"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sunset-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-sunset-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.01"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sunset-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-sunset-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹0.44"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-sunset-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-sunset-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-BEV-031 · Fruit juice 200 ml"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sunset-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-sunset-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"1"} />
                                    <span>{"packet"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-sunset-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-sunset-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹55.00"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹160.74"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹160.74"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"30.9 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹520.00 (from Restaurant POS Setup, MN-193)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-sunset-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-sunset-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"28"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-sunset-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-sunset-me" name="method" rows="3" maxLength="500" defaultValue={"Shake rum, lime juice and sugar with ice; top with chilled juice."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-sunset-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-sunset-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 6 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-sunset"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-currybase" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-currybase-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-currybase" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-currybase-t">{"Onion–tomato gravy base"}</h2>
                      <p className="modal__desc">{"Recipe card · Sub-recipe · last reviewed 15-07-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-currybase-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-currybase-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Onion–tomato gravy base"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-currybase-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-currybase-t" name="type" required={true} defaultValue={"Sub-recipe"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-currybase-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-currybase-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={""} />
                          <span className="field__hint">{"TRV, IRD, BNQ"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-currybase-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-currybase-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"5"} />
                            <span>{"kg"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-currybase-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Onion–tomato gravy base"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-currybase-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-currybase-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-currybase-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-currybase-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"2"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-currybase-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-currybase-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹84.44"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-currybase-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-currybase-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-002 · Tomato"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-currybase-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-currybase-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"2"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-currybase-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-currybase-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"95"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹92.63"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-currybase-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-currybase-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-033 · Sunflower oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-currybase-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-currybase-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.3"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-currybase-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-currybase-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹43.00"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-currybase-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-currybase-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-004 · Green chilli"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-currybase-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-currybase-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.1"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-currybase-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-currybase-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"92"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹8.70"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹228.77"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹45.75"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 5"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"–"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"Not sold – used inside other recipes"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-currybase-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-currybase-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-currybase-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-currybase-me" name="method" rows="3" maxLength="500" defaultValue={"Sauté the onion, add tomato and chilli, cook down; yields 5 kg of base for butter chicken, paneer and curries."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-currybase-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-currybase-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 6 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-currybase"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-bbiryani" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-bbiryani-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-bbiryani" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-bbiryani-t">{"Banquet chicken biryani (per plate)"}</h2>
                      <p className="modal__desc">{"Recipe card · Banquet dish · last reviewed 30-06-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-bbiryani-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-bbiryani-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Banquet chicken biryani (per plate)"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-bbiryani-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-bbiryani-t" name="type" required={true} defaultValue={"Banquet dish"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-bbiryani-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-bbiryani-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"BQ-D12"} />
                          <span className="field__hint">{"BNQ"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-bbiryani-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-bbiryani-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-bbiryani-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Banquet chicken biryani (per plate)"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bbiryani-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-bbiryani-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-MSF-013 · Chicken (curry cut)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-bbiryani-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.3"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-bbiryani-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"70"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹100.71"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bbiryani-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-bbiryani-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-031 · Basmati rice 1121"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-bbiryani-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.13"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-bbiryani-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹26.00"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bbiryani-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-bbiryani-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-001 · Onion"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-bbiryani-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.08"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-bbiryani-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"90"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹3.38"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bbiryani-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-bbiryani-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-023 · Butter"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-bbiryani-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.02"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-bbiryani-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹10.60"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bbiryani-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-bbiryani-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-002 · Tomato"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-bbiryani-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.04"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-bbiryani-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"95"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.85"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bbiryani-i5">{"Ingredient – line 6"}</label>
                                  <input className="field__input rc-item" id="rc-bbiryani-i5" name="item5" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-033 · Sunflower oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-q5">{"Quantity used – line 6"}</label>
                                    <input className="field__input prs-n" id="rc-bbiryani-q5" name="qty5" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.03"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bbiryani-y5">{"Yield % – line 6"}</label>
                                    <input className="field__input prs-n--s" id="rc-bbiryani-y5" name="yield5" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹4.30"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹146.84"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹146.84"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"17.3 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹850.00 (from Restaurant POS Setup, BQ-D12)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-bbiryani-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-bbiryani-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-bbiryani-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-bbiryani-me" name="method" rows="3" maxLength="500" defaultValue={"As the restaurant biryani, cooked in 20 kg dum pots."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-bbiryani-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-bbiryani-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" defaultChecked={true} />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 8 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-bbiryani"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01-rc-bsadya" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-rc-bsadya-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#saved-rc-bsadya" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-rc-bsadya-t">{"Banquet wedding sadya (per plate)"}</h2>
                      <p className="modal__desc">{"Recipe card · Banquet dish · last reviewed 30-06-2026. Saving makes a new version used for potential consumption from tomorrow."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-bsadya-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rc-bsadya-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Banquet wedding sadya (per plate)"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="rc-bsadya-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="rc-bsadya-t" name="type" required={true} defaultValue={"Banquet dish"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                          <span className="field__hint">{"Sub-recipes are gravies, doughs and stocks used inside other recipes"}</span>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="rc-bsadya-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="rc-bsadya-m" name="menu" type="text" placeholder="MN-… (Restaurant POS) or BQ-D… (Banquet dish)" maxLength="40" defaultValue={"BQ-D03"} />
                          <span className="field__hint">{"BNQ"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-bsadya-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="rc-bsadya-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                          <span className="field__hint">{"Number of portions or kg this recipe makes"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <datalist id="dl-ing">
                        <option value="ST-FRP-001 · Onion">
                          <option value="ST-FRP-002 · Tomato">
                            <option value="ST-FRP-003 · Potato">
                              <option value="ST-FRP-004 · Green chilli">
                                <option value="ST-FRP-005 · Coconut">
                                  <option value="ST-FRP-006 · Raw banana (nendran)">
                                    <option value="ST-FRP-007 · Curry leaves">
                                      <option value="ST-FRP-008 · Lemon">
                                        <option value="ST-MSF-011 · Karimeen (pearl spot)">
                                          <option value="ST-MSF-012 · Tiger prawns 16/20">
                                            <option value="ST-MSF-013 · Chicken (curry cut)">
                                              <option value="ST-MSF-015 · Seer fish (neymeen)">
                                                <option value="ST-DRY-021 · Milk">
                                                  <option value="ST-DRY-023 · Butter">
                                                    <option value="ST-DRY-024 · Paneer">
                                                      <option value="ST-DRY-025 · Fresh cream">
                                                        <option value="ST-GRO-031 · Basmati rice 1121">
                                                          <option value="ST-GRO-032 · Toor dal">
                                                            <option value="ST-GRO-033 · Sunflower oil">
                                                              <option value="ST-GRO-034 · Sugar">
                                                                <option value="ST-GRO-036 · Coconut oil">
                                                                  <option value="ST-GRO-038 · Matta rice (Kerala red rice)">
                                                                    <option value="ST-GRO-039 · Black pepper">
                                                                      <option value="ST-GRO-040 · Cardamom (green)" />
                                                                    </option>
                                                                  </option>
                                                                </option>
                                                              </option>
                                                            </option>
                                                          </option>
                                                        </option>
                                                      </option>
                                                    </option>
                                                  </option>
                                                </option>
                                              </option>
                                            </option>
                                          </option>
                                        </option>
                                      </option>
                                    </option>
                                  </option>
                                </option>
                              </option>
                            </option>
                          </option>
                        </option>
                      </datalist>
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table" data-code="CC-P01-rc-bsadya-lines" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Ingredients of Banquet wedding sadya (per plate)"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Ingredient"}</th>
                                <th scope="col">{"Quantity used"}</th>
                                <th scope="col">{"Yield %"}</th>
                                <th scope="col" className="dt__th--right">{"Cost at latest rate"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bsadya-i0">{"Ingredient – line 1"}</label>
                                  <input className="field__input rc-item" id="rc-bsadya-i0" name="item0" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-038 · Matta rice (Kerala red rice)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-q0">{"Quantity used – line 1"}</label>
                                    <input className="field__input prs-n" id="rc-bsadya-q0" name="qty0" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.25"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-y0">{"Yield % – line 1"}</label>
                                    <input className="field__input prs-n--s" id="rc-bsadya-y0" name="yield0" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹15.50"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bsadya-i1">{"Ingredient – line 2"}</label>
                                  <input className="field__input rc-item" id="rc-bsadya-i1" name="item1" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-032 · Toor dal"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-q1">{"Quantity used – line 2"}</label>
                                    <input className="field__input prs-n" id="rc-bsadya-q1" name="qty1" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.12"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-y1">{"Yield % – line 2"}</label>
                                    <input className="field__input prs-n--s" id="rc-bsadya-y1" name="yield1" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹17.04"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bsadya-i2">{"Ingredient – line 3"}</label>
                                  <input className="field__input rc-item" id="rc-bsadya-i2" name="item2" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-005 · Coconut"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-q2">{"Quantity used – line 3"}</label>
                                    <input className="field__input prs-n" id="rc-bsadya-q2" name="qty2" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.6"} />
                                    <span>{"nos"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-y2">{"Yield % – line 3"}</label>
                                    <input className="field__input prs-n--s" id="rc-bsadya-y2" name="yield2" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"52"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹31.15"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bsadya-i3">{"Ingredient – line 4"}</label>
                                  <input className="field__input rc-item" id="rc-bsadya-i3" name="item3" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-006 · Raw banana (nendran)"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-q3">{"Quantity used – line 4"}</label>
                                    <input className="field__input prs-n" id="rc-bsadya-q3" name="qty3" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.25"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-y3">{"Yield % – line 4"}</label>
                                    <input className="field__input prs-n--s" id="rc-bsadya-y3" name="yield3" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"70"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹20.00"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bsadya-i4">{"Ingredient – line 5"}</label>
                                  <input className="field__input rc-item" id="rc-bsadya-i4" name="item4" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-FRP-007 · Curry leaves"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-q4">{"Quantity used – line 5"}</label>
                                    <input className="field__input prs-n" id="rc-bsadya-q4" name="qty4" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.01"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-y4">{"Yield % – line 5"}</label>
                                    <input className="field__input prs-n--s" id="rc-bsadya-y4" name="yield4" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"85"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹1.41"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bsadya-i5">{"Ingredient – line 6"}</label>
                                  <input className="field__input rc-item" id="rc-bsadya-i5" name="item5" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-036 · Coconut oil"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-q5">{"Quantity used – line 6"}</label>
                                    <input className="field__input prs-n" id="rc-bsadya-q5" name="qty5" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.15"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-y5">{"Yield % – line 6"}</label>
                                    <input className="field__input prs-n--s" id="rc-bsadya-y5" name="yield5" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹31.50"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bsadya-i6">{"Ingredient – line 7"}</label>
                                  <input className="field__input rc-item" id="rc-bsadya-i6" name="item6" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-GRO-034 · Sugar"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-q6">{"Quantity used – line 7"}</label>
                                    <input className="field__input prs-n" id="rc-bsadya-q6" name="qty6" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.1"} />
                                    <span>{"kg"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-y6">{"Yield % – line 7"}</label>
                                    <input className="field__input prs-n--s" id="rc-bsadya-y6" name="yield6" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹4.40"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Ingredient" data-w2="" data-t="">
                                  <label className="sr-only" htmlFor="rc-bsadya-i7">{"Ingredient – line 8"}</label>
                                  <input className="field__input rc-item" id="rc-bsadya-i7" name="item7" type="text" list="dl-ing" autoComplete="off" defaultValue={"ST-DRY-021 · Milk"} />
                                </td>
                                <td className="dt__td nw" data-label="Quantity used" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-q7">{"Quantity used – line 8"}</label>
                                    <input className="field__input prs-n" id="rc-bsadya-q7" name="qty7" type="number" min="0" step="any" inputMode="decimal" defaultValue={"0.6"} />
                                    <span>{"litre"}</span>
                                  </span>
                                </td>
                                <td className="dt__td nw" data-label="Yield %" data-w2="">
                                  <span className="cc-unit">
                                    <label className="sr-only" htmlFor="rc-bsadya-y7">{"Yield % – line 8"}</label>
                                    <input className="field__input prs-n--s" id="rc-bsadya-y7" name="yield7" type="number" min="1" max="100" step="0.5" inputMode="decimal" defaultValue={"100"} />
                                    <span>{"%"}</span>
                                  </span>
                                </td>
                                <td className="dt__td dt__td--right nw num" title="Calculated: quantity ÷ yield × latest rate" data-label="Cost at latest rate" data-w2="">{"₹31.20"}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Quantity is what ends up on the plate; the yield % (trim loss, from Yield Standards CCS-02) raises the quantity to buy. Cost uses the latest purchase rate (recost basis of CCS-01)."}
                      </p>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Cost and price"}</h3>
                      <ul className="cc-kpis">
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"₹152.21"}</span>
                          <span className="cc-kpi__l">{"Cost of the whole recipe"}</span>
                          <span className="cc-kpi__s">{"calculated, sum of the lines"}</span>
                        </li>
                        <li className="cc-kpi cc-kpi--ok">
                          <span className="cc-kpi__v">{"₹152.21"}</span>
                          <span className="cc-kpi__l">{"Portion cost"}</span>
                          <span className="cc-kpi__s">{"calculated: cost ÷ 1"}</span>
                        </li>
                        <li className="cc-kpi">
                          <span className="cc-kpi__v">{"13.2 %"}</span>
                          <span className="cc-kpi__l">{"Cost % of the selling price"}</span>
                          <span className="cc-kpi__s">{"₹1,150.00 (from Restaurant POS Setup, BQ-D03)"}</span>
                        </li>
                      </ul>
                      <div className="s-grid2">
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="rc-bsadya-tc">
                            {"Target cost % "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n--s" id="rc-bsadya-tc" name="target" type="number" min="5" max="90" step="0.5" required={true} inputMode="decimal" defaultValue={"30"} />
                            <span>{"%"}</span>
                          </span>
                          <span className="field__hint">{"From Targets & Tolerances (CCS-01) for the outlet and category; can be changed for this recipe"}</span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Method, photo and allergens"}</h3>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rc-bsadya-me">{"Method"}</label>
                        <textarea className="field__input" id="rc-bsadya-me" name="method" rows="3" maxLength="500" defaultValue={"Wedding sadya with payasam, served on a banana leaf."} />
                      </div>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="rc-bsadya-ph">{"Photo"}</label>
                          <input className="field__input" id="rc-bsadya-ph" name="photo" type="file" accept="image/*" />
                          <span className="field__hint">{"Printed on the recipe card (CC-O01)"}</span>
                        </div>
                        <fieldset className="field fd-fieldset">
                          <legend className="field__label">{"Allergens"}</legend>
                          <div className="row fd-multi">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Milk" defaultChecked={true} />
                              <span className="check__box" />
                              {"Milk"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Fish" />
                              <span className="check__box" />
                              {"Fish"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Crustacean" />
                              <span className="check__box" />
                              {"Crustacean"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Nuts" />
                              <span className="check__box" />
                              {"Nuts"}
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="allergen" value="Gluten" />
                              <span className="check__box" />
                              {"Gluten"}
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Saved as version 10 of this recipe. Written to the audit log with the user, time and the old and new values. (CC-X01 recosts it tonight.)"}</span>
                    <Link className="btn" data-leads-to="CC-O01" to={"/cost-control/cc-o01-recipe-card/rc-bsadya"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
                    </Link>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="cc-p01" data-code="CC-P01" role="dialog" aria-modal="true" aria-labelledby="cc-p01-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/cost-control/cc-02-recipe-cards/#added" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="cc-p01-t">{"New recipe card"}</h2>
                      <p className="modal__desc">{"Write down what goes into one portion. The cost is worked out from the ingredients; the selling price comes from the POS menu."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body vn-form">
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Recipe"}</h3>
                      <div className="s-grid2">
                        <div className="field">
                          <label className="field__label" htmlFor="nr-n">
                            {"Recipe name "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="nr-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Beef ularthiyathu"} />
                        </div>
                        <div className="field" data-fw="s">
                          <label className="field__label" htmlFor="nr-t">
                            {"Type "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="nr-t" name="type" required={true} defaultValue={"Menu item"}>
                              <option>{"Menu item"}</option>
                              <option>{"Sub-recipe"}</option>
                              <option>{"Cocktail"}</option>
                              <option>{"Banquet dish"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <div className="field">
                          <label className="field__label" htmlFor="nr-m">{"Linked menu item(s)"}</label>
                          <input className="field__input" id="nr-m" name="menu" type="text" placeholder="MN-… or BQ-D…" maxLength="40" defaultValue={"MN-110"} />
                          <span className="field__hint">{"Kerala beef fry · TRV, BAR, IRD"}</span>
                        </div>
                        <div className="field" data-fw="x">
                          <label className="field__label" htmlFor="nr-y">
                            {"Yield "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <span className="cc-unit">
                            <input className="field__input prs-n" id="nr-y" name="yield" type="number" min="1" step="any" required={true} inputMode="decimal" defaultValue={"1"} />
                            <span>{"portions"}</span>
                          </span>
                        </div>
                      </div>
                    </section>
                    <section className="vn-sec">
                      <h3 className="vn-sec__t">{"Ingredients"}</h3>
                      <p className="cc-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"Add one line for each item: type the item code or name, the quantity on the plate and the yield %. The cost is worked out when you save."}
                      </p>
                    </section>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"A new recipe is used for potential consumption from the next day. Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save recipe"}</button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="recosted-t" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recosted with the latest purchase rates"}
                  <small>{"19 recipes recosted at 22-10-2026 09:44. 3 changed by more than 5 % since their last review: Karimeen pollichathu, Butter chicken and Grilled tiger prawns. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-added" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#plus-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Beef ularthiyathu"}
                  <small>{"Version 1, linked to MN-110 Kerala beef fry (TRV, BAR, IRD). It is used for potential consumption from 23-10-2026 and recosted tonight. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-karimeen" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Karimeen pollichathu"}
                  <small>{"New version, portion cost ₹233.32 (29.9 % of ₹780). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-stew" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Kerala chicken stew"}
                  <small>{"New version, portion cost ₹148.43 (27.5 % of ₹540). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-fishcurry" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Malabar fish curry"}
                  <small>{"New version, portion cost ₹206.92 (33.4 % of ₹620). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-vegstew" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Vegetable stew"}
                  <small>{"New version, portion cost ₹30.93 (7.4 % of ₹420). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-pbm" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Paneer butter masala"}
                  <small>{"New version, portion cost ₹96.09 (20.0 % of ₹480). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-bchicken" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Butter chicken"}
                  <small>{"New version, portion cost ₹139.78 (25.0 % of ₹560). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-prawns" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Grilled tiger prawns"}
                  <small>{"New version, portion cost ₹353.33 (24.4 % of ₹1,450). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-biryani" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Thalassery chicken biryani"}
                  <small>{"New version, portion cost ₹144.84 (23.4 % of ₹620). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-soup" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Kozhi clear soup"}
                  <small>{"New version, portion cost ₹28.39 (7.9 % of ₹360). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-chillipaneer" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Chilli paneer"}
                  <small>{"New version, portion cost ₹55.48 (12.1 % of ₹460). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-sadya" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Kerala sadya (Sunday lunch)"}
                  <small>{"New version, portion cost ₹152.21 (16.0 % of ₹950). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-mattarice" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Kerala matta rice"}
                  <small>{"New version, portion cost ₹12.40 (6.9 % of ₹180). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-payasam" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Palada payasam"}
                  <small>{"New version, portion cost ₹34.21 (12.2 % of ₹280). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-limesoda" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Fresh lime soda"}
                  <small>{"New version, portion cost ₹44.88 (24.9 % of ₹180). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-rum" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Old Monk rum 60 ml"}
                  <small>{"New version, portion cost ₹100.80 (29.6 % of ₹340). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-sunset" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Cochin Sunset (cocktail)"}
                  <small>{"New version, portion cost ₹160.74 (30.9 % of ₹520). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-currybase" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Onion–tomato gravy base"}
                  <small>{"New version, portion cost ₹45.75. Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-bbiryani" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Banquet chicken biryani (per plate)"}
                  <small>{"New version, portion cost ₹146.84 (17.3 % of ₹850). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-s-rc-bsadya" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Recipe saved – Banquet wedding sadya (per plate)"}
                  <small>{"New version, portion cost ₹152.21 (13.2 % of ₹1,150). Used for potential consumption from 23-10-2026. Written to the audit log with the user, time and the old and new values."}</small>
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
