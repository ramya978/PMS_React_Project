// GENERATED from public/minibar-setup/mbs-02-minibar-items-and-prices/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/minibar.css",
    "media": null
  },
  {
    "href": "/minibar-setup/mbs-02-minibar-items-and-prices/mbs-02-minibar-items-and-prices.css",
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

export default function MinibarSetupMbs02MinibarItemsAndPrices() {
  return (
    <ScreenShell title="Minibar Items & Prices" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="MBS-02" data-code="MBS-02" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="MBS-01" aria-current="page" title="Minibar Setup Home" to={"/minibar-setup/mbs-01-minibar-setup-home"}>
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
            <main className="app__content" id="main" data-code="MBS-02" tabIndex="-1">
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
                        <Link to={"/minibar-setup/mbs-01-minibar-setup-home"}>{"Minibar Setup"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Items & prices"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Minibar Items & Prices"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"MBS-02"}</span>
                  <div className="page-header__actions">
                    <Link className="btn ph-ic" data-leads-to="MBS-O01" to={"/minibar-setup/mbs-o01-minibar-menu-card"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Menu card"}
                    </Link>
                    <a className="btn" href="#pending">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#copy" />
                      </svg>
                      {"New price version"}
                    </a>
                    <a className="btn btn--primary" href="#mbs-p01" data-leads-to="MBS-P01">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add item"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="saved-item" />
                <i className="pm" id="added" />
                <i className="pm" id="pending" />
              </div>
              <section className="card pl-ver" data-code="MBS-02-versions" aria-labelledby="pl-ver-t">
                <div className="pl-ver__h">
                  <h2 className="s-card-title" id="pl-ver-t">{"Price versions"}</h2>
                  <span className="fd-muted">{"Draft → Pending approval → Approved → Active from the valid-from date (MBS-X02) → Superseded. Postings use the price of the day they are made."}</span>
                </div>
                <ol className="pv-list">
                  <li className="pvr pvr--superseded">
                    <span className="pvr__id">{"MPV-2025-01"}</span>
                    <span className="pill pill--ooo">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#archive" />
                      </svg>
                      {"Superseded"}
                    </span>
                    <b>{"from 01 Apr 2025"}</b>
                    <small>{"Approved by Vikram Nathan 20 Mar 2025"}</small>
                    <small>{"Replaced by MPV-2026-02 on 01 Apr 2026"}</small>
                  </li>
                  <li className="pvr pvr--active">
                    <span className="pvr__id">{"MPV-2026-02"}</span>
                    <span className="pill pill--ready">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check-circle" />
                      </svg>
                      {"Active"}
                    </span>
                    <b>{"from 01 Apr 2026"}</b>
                    <small>{"Approved by Vikram Nathan 25 Mar 2026"}</small>
                    <small>{"13 priced items · switched on by MBS-X02"}</small>
                  </li>
                  <li className="pvr pvr--approved">
                    <span className="pvr__id">{"MPV-2026-03"}</span>
                    <span className="pill pill--occupied">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#shield-check" />
                      </svg>
                      {"Approved"}
                    </span>
                    <b>{"from 01 Nov 2026"}</b>
                    <small>{"Approved by Vikram Nathan 18 Oct 2026"}</small>
                    <small>{"Soft drink ₹130 → ₹140, fruit juice ₹150 → ₹160 – switches on 01 Nov"}</small>
                  </li>
                  <li className="pvr pvr--pending">
                    <span className="pvr__id">{"MPV-2026-04"}</span>
                    <span className="pill pill--tentative">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#clock" />
                      </svg>
                      {"Pending approval"}
                    </span>
                    <b>{"from 15 Nov 2026"}</b>
                    <small>{"Sent to Vikram Nathan 21 Oct 2026 16:10"}</small>
                    <small>{"Adds masala peanuts ₹150; beer ₹350 → ₹375"}</small>
                  </li>
                  <li className="pvr pvr--draft">
                    <span className="pvr__id">{"MPV-2027-01"}</span>
                    <span className="pill pill--ooo">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#pen-line" />
                      </svg>
                      {"Draft"}
                    </span>
                    <b>{"from 01 Jan 2027"}</b>
                    <small>{"Being prepared by Rahul Varghese"}</small>
                    <small>{"New-year review – nothing changed yet"}</small>
                  </li>
                </ol>
                <div className="hks-pending pl-pend">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#shield-alert" />
                  </svg>
                  <span>
                    <strong>{"New version MPV-2027-02 sent for approval."}</strong>
                    {" Copy of MPV-2026-02 with valid-from 01 Feb 2027 – waiting for Vikram Nathan (GM) in the approvals inbox. "}
                    <Link className="fd-link" to={"/reservation/rs-20-approvals"}>{"Open approvals"}</Link>
                  </span>
                </div>
                <details className="mb-sys" data-code="MBS-X02">
                  <summary>
                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#cog" />
                    </svg>
                    {"System · price version switch (MBS-X02)"}
                  </summary>
                  <ul>
                    <li>{"At the start of the valid-from date (business date) the approved version becomes Active and the old one Superseded."}</li>
                    <li>{"Next switch: MPV-2026-03 on Sun 01 Nov 2026 – soft drink ₹140.00, fruit juice ₹160.00."}</li>
                    <li>{"Every change is written to the setup audit log (MBS-X03) with the old and new values."}</li>
                  </ul>
                </details>
              </section>
              <input className="sr-only mi-v" type="radio" name="mi-view" id="mv-all" defaultChecked={true} />
              <input className="sr-only mi-v" type="radio" name="mi-view" id="mv-bev" />
              <input className="sr-only mi-v" type="radio" name="mi-view" id="mv-snk" />
              <input className="sr-only mi-v" type="radio" name="mi-view" id="mv-liq" />
              <input className="sr-only mi-v" type="radio" name="mi-view" id="mv-miss" />
              <input className="sr-only mi-v" type="radio" name="mi-view" id="mv-off" />
              <div className="mi-bar">
                <div className="hv mi-views" role="group" aria-label="Show items">
                  <label className="hv__v" htmlFor="mv-all">
                    {"All items"}
                    <span className="tabs__count">{"15"}</span>
                  </label>
                  <label className="hv__v" htmlFor="mv-bev">
                    {"Beverages"}
                    <span className="tabs__count">{"5"}</span>
                  </label>
                  <label className="hv__v" htmlFor="mv-snk">
                    {"Snacks"}
                    <span className="tabs__count">{"8"}</span>
                  </label>
                  <label className="hv__v" htmlFor="mv-liq">
                    {"Liquor"}
                    <span className="tabs__count">{"2"}</span>
                  </label>
                  <label className="hv__v" htmlFor="mv-miss">
                    {"No price"}
                    <span className="tabs__count">{"1"}</span>
                  </label>
                  <label className="hv__v" htmlFor="mv-off">
                    {"Inactive"}
                    <span className="tabs__count">{"1"}</span>
                  </label>
                </div>
                <span className="fd-muted">
                  {"Prices of "}
                  <b>{"MPV-2026-02"}</b>
                  {" (active since 01 Apr 2026), excluding tax · 14 active items"}
                </span>
              </div>
              <div className="pgw">
                <div className="s-scroll">
                  <table className="dt__table mi-t" data-code="MBS-02-list" data-mc="">
                    <caption className="sr-only">{"Minibar items with category, price, tax, charge code and shelf life"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">{"Item"}</th>
                        <th scope="col">{"Category"}</th>
                        <th scope="col">{"Store item"}</th>
                        <th scope="col" className="dt__th--right">{"Selling price"}</th>
                        <th scope="col">{"Tax"}</th>
                        <th scope="col">{"Code"}</th>
                        <th scope="col" className="dt__th--right">{"Shelf life"}</th>
                        <th scope="col">{"Alcohol"}</th>
                        <th scope="col">{"Status"}</th>
                        <th scope="col">
                          <span className="sr-only">{"Edit"}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="mi-r k-bev" id="r-mi-01">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--bev" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#minibar" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-01" data-leads-to="MBS-P01">
                                <strong>{"Mineral water 500 ml"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-01 · Bottle · 500 ml"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Beverage › Soft drinks & water"}
                          <span className="fd-sub">{"Still water"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-BEV-011"}
                          <span className="fd-sub">{"Packaged drinking water 500 ml"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹60.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 2201"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"365 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-01" aria-label="Edit Mineral water 500 ml">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-bev" id="r-mi-02">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--bev" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#minibar" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-02" data-leads-to="MBS-P01">
                                <strong>{"Sparkling water 330 ml"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-02 · Bottle · 330 ml"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Beverage › Soft drinks & water"}
                          <span className="fd-sub">{"Sparkling water"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-BEV-014"}
                          <span className="fd-sub">{"Sparkling water 330 ml"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹180.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 2201"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"365 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-02" aria-label="Edit Sparkling water 330 ml">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-bev" id="r-mi-03">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--bev" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#minibar" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-03" data-leads-to="MBS-P01">
                                <strong>{"Soft drink can 330 ml"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-03 · Can · 330 ml"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Beverage › Soft drinks & water"}
                          <span className="fd-sub">{"Cola & lemon drinks"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-BEV-021"}
                          <span className="fd-sub">{"Soft drink can 330 ml (cola / lemon)"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price">
                          {"₹130.00"}
                          <span className="fd-sub">{"₹140.00 from 01 Nov"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 2202"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"270 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-03" aria-label="Edit Soft drink can 330 ml">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-bev" id="r-mi-04">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--bev" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#minibar" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-04" data-leads-to="MBS-P01">
                                <strong>{"Fruit juice 200 ml"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-04 · Pack · 200 ml"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Beverage › Soft drinks & water"}
                          <span className="fd-sub">{"Fruit juice"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-BEV-031"}
                          <span className="fd-sub">{"Fruit juice tetra pack 200 ml"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price">
                          {"₹150.00"}
                          <span className="fd-sub">{"₹160.00 from 01 Nov"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 2009"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"180 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-04" aria-label="Edit Fruit juice 200 ml">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-bev" id="r-mi-05">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--bev" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#minibar" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-05" data-leads-to="MBS-P01">
                                <strong>{"Energy drink 250 ml"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-05 · Can · 250 ml"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Beverage › Soft drinks & water"}
                          <span className="fd-sub">{"Energy drinks"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-BEV-041"}
                          <span className="fd-sub">{"Energy drink can 250 ml"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹190.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 2202"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"365 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-05" aria-label="Edit Energy drink 250 ml">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-liq" id="r-mi-06">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--liq" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#minibar" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-06" data-leads-to="MBS-P01">
                                <strong>{"Beer can 330 ml"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-06 · Can · 330 ml"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Beverage › Liquor, beer & wine"}
                          <span className="fd-sub">{"Beer"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-LIQ-101"}
                          <span className="fd-sub">{"Beer can 330 ml (lager)"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">
                          {"₹350.00"}
                          <span className="fd-sub mi-pend">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"₹375.00 pending"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"Outside GST"}
                          <span className="fd-sub">{"State excise"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"BAR"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"180 days"}</td>
                        <td className="dt__td nw" data-label="Alcohol" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"Alcohol"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Status">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-06" aria-label="Edit Beer can 330 ml">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-liq" id="r-mi-07">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--liq" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#minibar" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-07" data-leads-to="MBS-P01">
                                <strong>{"Miniature spirits 50 ml"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-07 · Bottle · 50 ml"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Beverage › Liquor, beer & wine"}
                          <span className="fd-sub">{"Whisky"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-LIQ-111"}
                          <span className="fd-sub">{"Whisky miniature 50 ml"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹450.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"Outside GST"}
                          <span className="fd-sub">{"State excise"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"BAR"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Alcohol" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"Alcohol"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Status">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-07" aria-label="Edit Miniature spirits 50 ml">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-snk" id="r-mi-08">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--snk" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-08" data-leads-to="MBS-P01">
                                <strong>{"Potato chips 52 g"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-08 · Pack · 52 g"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Food › Snacks & confectionery"}
                          <span className="fd-sub">{"Chips & namkeen"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-SNK-201"}
                          <span className="fd-sub">{"Potato chips 52 g"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹140.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 2005"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"120 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-08" aria-label="Edit Potato chips 52 g">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-snk" id="r-mi-09">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--snk" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-09" data-leads-to="MBS-P01">
                                <strong>{"Salted cashew nuts 50 g"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-09 · Pack · 50 g"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Food › Snacks & confectionery"}
                          <span className="fd-sub">{"Nuts"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-SNK-211"}
                          <span className="fd-sub">{"Cashew nuts salted 50 g"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹160.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 2008"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"180 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-09" aria-label="Edit Salted cashew nuts 50 g">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-snk" id="r-mi-10">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--snk" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-10" data-leads-to="MBS-P01">
                                <strong>{"Banana chips 100 g"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-10 · Pack · 100 g"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Food › Snacks & confectionery"}
                          <span className="fd-sub">{"Chips & namkeen"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-SNK-221"}
                          <span className="fd-sub">{"Kerala banana chips 100 g"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹120.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 2008"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"60 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-10" aria-label="Edit Banana chips 100 g">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-snk" id="r-mi-11">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--snk" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-11" data-leads-to="MBS-P01">
                                <strong>{"Chocolate bar 40 g"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-11 · Bar · 40 g"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Food › Snacks & confectionery"}
                          <span className="fd-sub">{"Chocolate"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-SNK-231"}
                          <span className="fd-sub">{"Milk chocolate bar 40 g"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹120.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 1806"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"270 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-11" aria-label="Edit Chocolate bar 40 g">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-snk" id="r-mi-12">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--snk" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-12" data-leads-to="MBS-P01">
                                <strong>{"Cookies 75 g"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-12 · Pack · 75 g"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Food › Snacks & confectionery"}
                          <span className="fd-sub">{"Biscuits & cookies"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-SNK-241"}
                          <span className="fd-sub">{"Butter cookies 75 g"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹110.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 1905"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"180 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-12" aria-label="Edit Cookies 75 g">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-snk" id="r-mi-13">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--snk" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-13" data-leads-to="MBS-P01">
                                <strong>{"Instant noodles cup"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-13 · Cup · 70 g"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Food › Snacks & confectionery"}
                          <span className="fd-sub">{"Instant noodles"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-SNK-251"}
                          <span className="fd-sub">{"Instant noodles cup 70 g"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹180.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 1902"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"240 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-13" aria-label="Edit Instant noodles cup">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-snk is-missing" id="r-mi-14">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--snk" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-14" data-leads-to="MBS-P01">
                                <strong>{"Masala peanuts 50 g"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-14 · Pack · 50 g"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Food › Snacks & confectionery"}
                          <span className="fd-sub">{"Nuts"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-SNK-261"}
                          <span className="fd-sub">{"Masala peanuts 50 g"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">
                          <span className="mi-miss">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"No price"}
                          </span>
                          <span className="fd-sub mi-pend">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"₹150.00 pending"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 2008"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"120 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-14" aria-label="Edit Masala peanuts 50 g">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r k-snk is-off" id="r-mi-15">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--snk" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                            </span>
                            <span>
                              <a className="fd-link" href="#mbs-p01-mi-15" data-leads-to="MBS-P01">
                                <strong>{"Premium dark chocolate 100 g"}</strong>
                              </a>
                              <span className="fd-sub">{"MI-15 · Bar · 100 g"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category">
                          {"Food › Snacks & confectionery"}
                          <span className="fd-sub">{"Chocolate"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Store item">
                          {"ST-SNK-235"}
                          <span className="fd-sub">{"Dark chocolate 100 g"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Selling price" data-w2="">{"₹280.00"}</td>
                        <td className="dt__td nw" data-label="Tax" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 1806"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Code">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Shelf life" data-w2="" data-m="">{"270 days"}</td>
                        <td className="dt__td nw" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#pause" />
                            </svg>
                            {"Inactive"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mbs-p01-mi-15" aria-label="Edit Premium dark chocolate 100 g">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="mi-r mi-new k-snk" id="r-new">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <span className="mi-cell">
                            <span className="mi-pic mi-pic--snk" aria-hidden="true">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                            </span>
                            <span>
                              <strong>{"Trail mix 50 g"}</strong>
                              <span className="fd-sub">{"MI-16 · Pack · added just now"}</span>
                            </span>
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Category" data-w2="">
                          {"ST-SNK-271"}
                          <span className="fd-sub">{"Trail mix 50 g"}</span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Store item">
                          {"₹170.00"}
                          <span className="fd-sub">{"in draft MPV-2027-01"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Selling price" data-w2="">
                          {"GST 18 %"}
                          <span className="fd-sub">{"HSN 2008"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Tax">
                          <strong>{"MB"}</strong>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Code" data-w2="">{"120 days"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-label="Alcohol" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td" data-e="" />
                      </tr>
                    </tbody>
                  </table>
                  <div className="mi-empty">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#check-circle" />
                    </svg>
                    <span>{"Nothing to show here."}</span>
                  </div>
                </div>
              </div>
              <div className="modal modal--full" id="mbs-p01" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#added" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-t">{"Add item"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-n" name="item" type="text" required={true} maxLength="60" defaultValue={""} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-cat" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-sub" name="subcategory" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-ssub" name="subsubcategory" defaultValue={""}>
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-ty" name="type" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={""} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-u" name="unit" required={true} aria-label="Measuring unit" defaultValue={""}>
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram">{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre">{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={""} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={""} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-al">
                          <input id="mbs-p01-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-ac">
                          <input id="mbs-p01-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-01" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-01-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-01-t">{"Edit item · MI-01 · Mineral water 500 ml"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-01-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Mineral water 500 ml"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-01-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-01-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-01-cat" name="category" required={true} defaultValue={"Beverage"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-01-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery">{"Snacks & confectionery"}</option>
                            </optgroup>
                            <optgroup label="Beverage">
                              <option value="Soft drinks & water" selected={true}>{"Soft drinks & water"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-01-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water" selected={true}>{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-01-ty" name="type" required={true} defaultValue={"Bottle"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-01-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"500"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-01-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram">{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre" selected={true}>{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-01-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"60"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-01-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-01-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-01-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-01-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-01-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-01-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"365"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-01-al">
                          <input id="mbs-p01-mi-01-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-01-ac">
                          <input id="mbs-p01-mi-01-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-02" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-02-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-02-t">{"Edit item · MI-02 · Sparkling water 330 ml"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-02-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Sparkling water 330 ml"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-02-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-02-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-02-cat" name="category" required={true} defaultValue={"Beverage"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-02-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery">{"Snacks & confectionery"}</option>
                            </optgroup>
                            <optgroup label="Beverage">
                              <option value="Soft drinks & water" selected={true}>{"Soft drinks & water"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-02-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water" selected={true}>{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-02-ty" name="type" required={true} defaultValue={"Bottle"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-02-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"330"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-02-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram">{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre" selected={true}>{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-02-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"180"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-02-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-02-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-02-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-02-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-02-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-02-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"365"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-02-al">
                          <input id="mbs-p01-mi-02-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-02-ac">
                          <input id="mbs-p01-mi-02-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-03" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-03-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-03-t">{"Edit item · MI-03 · Soft drink can 330 ml"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-03-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Soft drink can 330 ml"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-03-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-03-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-03-cat" name="category" required={true} defaultValue={"Beverage"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-03-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery">{"Snacks & confectionery"}</option>
                            </optgroup>
                            <optgroup label="Beverage">
                              <option value="Soft drinks & water" selected={true}>{"Soft drinks & water"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-03-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks" selected={true}>{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-03-ty" name="type" required={true} defaultValue={"Can"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-03-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"330"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-03-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram">{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre" selected={true}>{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-03-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"130"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-03-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-03-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-03-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-03-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-03-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-03-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"270"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-03-al">
                          <input id="mbs-p01-mi-03-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-03-ac">
                          <input id="mbs-p01-mi-03-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-04" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-04-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-04-t">{"Edit item · MI-04 · Fruit juice 200 ml"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-04-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Fruit juice 200 ml"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-04-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-04-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-04-cat" name="category" required={true} defaultValue={"Beverage"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-04-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery">{"Snacks & confectionery"}</option>
                            </optgroup>
                            <optgroup label="Beverage">
                              <option value="Soft drinks & water" selected={true}>{"Soft drinks & water"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-04-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice" selected={true}>{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-04-ty" name="type" required={true} defaultValue={"Pack"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-04-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"200"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-04-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram">{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre" selected={true}>{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-04-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"150"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-04-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-04-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-04-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-04-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-04-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-04-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"180"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-04-al">
                          <input id="mbs-p01-mi-04-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-04-ac">
                          <input id="mbs-p01-mi-04-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-05" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-05-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-05-t">{"Edit item · MI-05 · Energy drink 250 ml"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-05-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Energy drink 250 ml"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-05-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-05-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-05-cat" name="category" required={true} defaultValue={"Beverage"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-05-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery">{"Snacks & confectionery"}</option>
                            </optgroup>
                            <optgroup label="Beverage">
                              <option value="Soft drinks & water" selected={true}>{"Soft drinks & water"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-05-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks" selected={true}>{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-05-ty" name="type" required={true} defaultValue={"Can"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-05-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"250"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-05-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram">{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre" selected={true}>{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-05-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"190"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-05-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-05-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-05-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-05-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-05-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-05-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"365"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-05-al">
                          <input id="mbs-p01-mi-05-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-05-ac">
                          <input id="mbs-p01-mi-05-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-06" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-06-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-06-t">{"Edit item · MI-06 · Beer can 330 ml"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-06-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Beer can 330 ml"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-06-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-06-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-06-cat" name="category" required={true} defaultValue={"Beverage"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-06-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
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
                              <option value="Liquor, beer & wine" selected={true}>{"Liquor, beer & wine"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-06-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer" selected={true}>{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-06-ty" name="type" required={true} defaultValue={"Can"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-06-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"330"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-06-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram">{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre" selected={true}>{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-06-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"350"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-06-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-06-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-06-tx" name="tax" required={true} defaultValue={"Liquor – state excise, outside GST (BAR)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-06-cc" name="charge_code" required={true} defaultValue={"BAR"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-06-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-06-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"180"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-06-al">
                          <input id="mbs-p01-mi-06-al" type="checkbox" role="switch" name="alcohol" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-06-ac">
                          <input id="mbs-p01-mi-06-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-07" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-07-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-07-t">{"Edit item · MI-07 · Miniature spirits 50 ml"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-07-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Miniature spirits 50 ml"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-07-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-07-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-07-cat" name="category" required={true} defaultValue={"Beverage"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-07-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
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
                              <option value="Liquor, beer & wine" selected={true}>{"Liquor, beer & wine"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-07-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky" selected={true}>{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-07-ty" name="type" required={true} defaultValue={"Bottle"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-07-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"50"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-07-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram">{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre" selected={true}>{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-07-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"450"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-07-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-07-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-07-tx" name="tax" required={true} defaultValue={"Liquor – state excise, outside GST (BAR)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-07-cc" name="charge_code" required={true} defaultValue={"BAR"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-07-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-07-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={""} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-07-al">
                          <input id="mbs-p01-mi-07-al" type="checkbox" role="switch" name="alcohol" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-07-ac">
                          <input id="mbs-p01-mi-07-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-08" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-08-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-08-t">{"Edit item · MI-08 · Potato chips 52 g"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-08-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Potato chips 52 g"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-08-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-08-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-08-cat" name="category" required={true} defaultValue={"Food"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-08-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery" selected={true}>{"Snacks & confectionery"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-08-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen" selected={true}>{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-08-ty" name="type" required={true} defaultValue={"Pack"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-08-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"52"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-08-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram" selected={true}>{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre">{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-08-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"140"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-08-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-08-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-08-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-08-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-08-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-08-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"120"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-08-al">
                          <input id="mbs-p01-mi-08-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-08-ac">
                          <input id="mbs-p01-mi-08-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-09" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-09-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-09-t">{"Edit item · MI-09 · Salted cashew nuts 50 g"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-09-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Salted cashew nuts 50 g"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-09-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-09-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-09-cat" name="category" required={true} defaultValue={"Food"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-09-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery" selected={true}>{"Snacks & confectionery"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-09-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts" selected={true}>{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-09-ty" name="type" required={true} defaultValue={"Pack"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-09-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"50"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-09-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram" selected={true}>{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre">{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-09-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"160"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-09-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-09-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-09-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-09-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-09-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-09-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"180"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-09-al">
                          <input id="mbs-p01-mi-09-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-09-ac">
                          <input id="mbs-p01-mi-09-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-10" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-10-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-10-t">{"Edit item · MI-10 · Banana chips 100 g"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-10-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Banana chips 100 g"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-10-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-10-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-10-cat" name="category" required={true} defaultValue={"Food"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-10-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery" selected={true}>{"Snacks & confectionery"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-10-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen" selected={true}>{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-10-ty" name="type" required={true} defaultValue={"Pack"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-10-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"100"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-10-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram" selected={true}>{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre">{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-10-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"120"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-10-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-10-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-10-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-10-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-10-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-10-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"60"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-10-al">
                          <input id="mbs-p01-mi-10-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-10-ac">
                          <input id="mbs-p01-mi-10-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-11" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-11-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-11-t">{"Edit item · MI-11 · Chocolate bar 40 g"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-11-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Chocolate bar 40 g"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-11-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-11-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-11-cat" name="category" required={true} defaultValue={"Food"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-11-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery" selected={true}>{"Snacks & confectionery"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-11-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate" selected={true}>{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-11-ty" name="type" required={true} defaultValue={"Bar"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-11-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"40"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-11-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram" selected={true}>{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre">{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-11-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"120"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-11-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-11-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-11-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-11-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-11-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-11-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"270"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-11-al">
                          <input id="mbs-p01-mi-11-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-11-ac">
                          <input id="mbs-p01-mi-11-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-12" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-12-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-12-t">{"Edit item · MI-12 · Cookies 75 g"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-12-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Cookies 75 g"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-12-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-12-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-12-cat" name="category" required={true} defaultValue={"Food"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-12-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery" selected={true}>{"Snacks & confectionery"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-12-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies" selected={true}>{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-12-ty" name="type" required={true} defaultValue={"Pack"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-12-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"75"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-12-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram" selected={true}>{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre">{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-12-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"110"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-12-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-12-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-12-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-12-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-12-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-12-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"180"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-12-al">
                          <input id="mbs-p01-mi-12-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-12-ac">
                          <input id="mbs-p01-mi-12-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-13" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-13-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-13-t">{"Edit item · MI-13 · Instant noodles cup"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-13-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Instant noodles cup"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-13-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-13-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-13-cat" name="category" required={true} defaultValue={"Food"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-13-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery" selected={true}>{"Snacks & confectionery"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-13-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles" selected={true}>{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-13-ty" name="type" required={true} defaultValue={"Cup"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-13-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"70"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-13-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram" selected={true}>{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre">{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-13-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"180"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-13-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-13-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-13-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-13-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-13-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-13-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"240"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-13-al">
                          <input id="mbs-p01-mi-13-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-13-ac">
                          <input id="mbs-p01-mi-13-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-14" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-14-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-14-t">{"Edit item · MI-14 · Masala peanuts 50 g"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-14-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Masala peanuts 50 g"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-14-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-14-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-14-cat" name="category" required={true} defaultValue={"Food"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-14-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery" selected={true}>{"Snacks & confectionery"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-14-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts" selected={true}>{"Nuts"}</option>
                              <option value="Chocolate">{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-14-ty" name="type" required={true} defaultValue={"Pack"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-14-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"50"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-14-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram" selected={true}>{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre">{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-14-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={""} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-14-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-14-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-14-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-14-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-14-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-14-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"120"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-14-al">
                          <input id="mbs-p01-mi-14-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-14-ac">
                          <input id="mbs-p01-mi-14-ac" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mbs-p01-mi-15" data-code="MBS-P01" role="dialog" aria-modal="true" aria-labelledby="mbs-p01-mi-15-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/minibar-setup/mbs-02-minibar-items-and-prices/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mbs-p01-mi-15-t">{"Edit item · MI-15 · Premium dark chocolate 100 g"}</h2>
                      <p className="modal__desc">{"Create or edit a minibar item. Price changes are saved in a draft price version and need GM approval (BR-02)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-15-n" name="item" type="text" required={true} maxLength="60" defaultValue={"Premium dark chocolate 100 g"} />
                        <span className="field__hint">{"e.g. Mineral water 500 ml, Soft drink can, Beer can, Chips, Chocolate bar"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-img">{"Picture"}</label>
                        <input className="field__input" id="mbs-p01-mi-15-img" type="file" name="picture" accept="image/*" />
                        <span className="field__hint">{"Photo on file – shown on the attendants’ phones"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-st">
                          {"Store item "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-15-st" name="store_item" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Search the Stores items"}</option>
                            <option value="ST-BEV-011 · Packaged drinking water 500 ml">{"ST-BEV-011 · Packaged drinking water 500 ml"}</option>
                            <option value="ST-BEV-014 · Sparkling water 330 ml">{"ST-BEV-014 · Sparkling water 330 ml"}</option>
                            <option value="ST-BEV-021 · Soft drink can 330 ml (cola / lemon)">{"ST-BEV-021 · Soft drink can 330 ml (cola / lemon)"}</option>
                            <option value="ST-BEV-031 · Fruit juice tetra pack 200 ml">{"ST-BEV-031 · Fruit juice tetra pack 200 ml"}</option>
                            <option value="ST-BEV-041 · Energy drink can 250 ml">{"ST-BEV-041 · Energy drink can 250 ml"}</option>
                            <option value="ST-LIQ-101 · Beer can 330 ml (lager)">{"ST-LIQ-101 · Beer can 330 ml (lager)"}</option>
                            <option value="ST-LIQ-111 · Whisky miniature 50 ml">{"ST-LIQ-111 · Whisky miniature 50 ml"}</option>
                            <option value="ST-SNK-201 · Potato chips 52 g">{"ST-SNK-201 · Potato chips 52 g"}</option>
                            <option value="ST-SNK-211 · Cashew nuts salted 50 g">{"ST-SNK-211 · Cashew nuts salted 50 g"}</option>
                            <option value="ST-SNK-221 · Kerala banana chips 100 g">{"ST-SNK-221 · Kerala banana chips 100 g"}</option>
                            <option value="ST-SNK-231 · Milk chocolate bar 40 g">{"ST-SNK-231 · Milk chocolate bar 40 g"}</option>
                            <option value="ST-SNK-241 · Butter cookies 75 g">{"ST-SNK-241 · Butter cookies 75 g"}</option>
                            <option value="ST-SNK-251 · Instant noodles cup 70 g">{"ST-SNK-251 · Instant noodles cup 70 g"}</option>
                            <option value="ST-SNK-261 · Masala peanuts 50 g">{"ST-SNK-261 · Masala peanuts 50 g"}</option>
                            <option value="ST-SNK-235 · Dark chocolate 100 g">{"ST-SNK-235 · Dark chocolate 100 g"}</option>
                            <option value="ST-BEV-051 · Iced tea can 300 ml">{"ST-BEV-051 · Iced tea can 300 ml"}</option>
                            <option value="ST-SNK-271 · Trail mix 50 g">{"ST-SNK-271 · Trail mix 50 g"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Item in Stores – gives the cost and the stock (BR-01)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-cat">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-15-cat" name="category" required={true} defaultValue={"Food"}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Top level – from "}
                          <Link className="fd-link" to={"/stores-setup/sts-02-categories-and-gl-mapping"}>{"Stores Setup › Categories"}</Link>
                          {", where you can add more"}
                        </span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-sub">
                          {"Sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-15-sub" name="subcategory" required={true}>
                            <option value="" disabled={true}>{"Choose a sub-category"}</option>
                            <optgroup label="Food">
                              <option value="Kitchen disposables & packaging">{"Kitchen disposables & packaging"}</option>
                              <option value="Vegetables & fruits">{"Vegetables & fruits"}</option>
                              <option value="Meat & seafood">{"Meat & seafood"}</option>
                              <option value="Dairy">{"Dairy"}</option>
                              <option value="Grocery">{"Grocery"}</option>
                              <option value="Snacks & confectionery" selected={true}>{"Snacks & confectionery"}</option>
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
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Grouped by category, e.g. Beverage › Coca-Cola range"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-ssub">{"Sub-sub-category"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-15-ssub" name="subsubcategory">
                            <option value="" disabled={true}>{"None"}</option>
                            <optgroup label="Food › Vegetables & fruits">
                              <option value="Vegetables">{"Vegetables"}</option>
                              <option value="Fruit, coconut & herbs">{"Fruit, coconut & herbs"}</option>
                            </optgroup>
                            <optgroup label="Food › Meat & seafood">
                              <option value="Fish & prawns">{"Fish & prawns"}</option>
                              <option value="Meat & poultry">{"Meat & poultry"}</option>
                            </optgroup>
                            <optgroup label="Food › Dairy">
                              <option value="Milk & curd">{"Milk & curd"}</option>
                              <option value="Butter, cream & paneer">{"Butter, cream & paneer"}</option>
                            </optgroup>
                            <optgroup label="Food › Grocery">
                              <option value="Rice & flour">{"Rice & flour"}</option>
                              <option value="Pulses">{"Pulses"}</option>
                              <option value="Oils">{"Oils"}</option>
                              <option value="Sugar & sweeteners">{"Sugar & sweeteners"}</option>
                              <option value="Spices & tea">{"Spices & tea"}</option>
                            </optgroup>
                            <optgroup label="Food › Snacks & confectionery">
                              <option value="Chips & namkeen">{"Chips & namkeen"}</option>
                              <option value="Nuts">{"Nuts"}</option>
                              <option value="Chocolate" selected={true}>{"Chocolate"}</option>
                              <option value="Biscuits & cookies">{"Biscuits & cookies"}</option>
                              <option value="Instant noodles">{"Instant noodles"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Soft drinks & water">
                              <option value="Still water">{"Still water"}</option>
                              <option value="Sparkling water">{"Sparkling water"}</option>
                              <option value="Cola & lemon drinks">{"Cola & lemon drinks"}</option>
                              <option value="Fruit juice">{"Fruit juice"}</option>
                              <option value="Energy drinks">{"Energy drinks"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Coca-Cola range">
                              <option value="Original (normal)">{"Original (normal)"}</option>
                              <option value="Zero Sugar">{"Zero Sugar"}</option>
                              <option value="Diet Coke">{"Diet Coke"}</option>
                              <option value="Black">{"Black"}</option>
                            </optgroup>
                            <optgroup label="Beverage › Liquor, beer & wine">
                              <option value="Beer">{"Beer"}</option>
                              <option value="Whisky">{"Whisky"}</option>
                              <option value="Wine">{"Wine"}</option>
                              <option value="Brandy">{"Brandy"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Cleaning chemicals">
                              <option value="Room & washroom cleaners">{"Room & washroom cleaners"}</option>
                              <option value="Laundry chemicals">{"Laundry chemicals"}</option>
                            </optgroup>
                            <optgroup label="Housekeeping supplies › Room & washroom supplies">
                              <option value="Paper & disposables">{"Paper & disposables"}</option>
                              <option value="Cleaning tools">{"Cleaning tools"}</option>
                            </optgroup>
                            <optgroup label="Guest amenities › Guest amenities">
                              <option value="Bath & body">{"Bath & body"}</option>
                              <option value="Kits">{"Kits"}</option>
                              <option value="Room accessories">{"Room accessories"}</option>
                              <option value="Tea & coffee">{"Tea & coffee"}</option>
                            </optgroup>
                            <optgroup label="Linen › Linen">
                              <option value="Towels, mats & robes">{"Towels, mats & robes"}</option>
                              <option value="Bed linen">{"Bed linen"}</option>
                              <option value="Duvets & pillows">{"Duvets & pillows"}</option>
                              <option value="F&B linen">{"F&B linen"}</option>
                            </optgroup>
                            <optgroup label="Engineering spares › Electrical, plumbing & HVAC spares">
                              <option value="Electrical">{"Electrical"}</option>
                              <option value="Plumbing">{"Plumbing"}</option>
                              <option value="HVAC & refrigeration">{"HVAC & refrigeration"}</option>
                              <option value="Building & IT">{"Building & IT"}</option>
                            </optgroup>
                            <optgroup label="Printing & stationery › Printing & stationery">
                              <option value="Cards & forms">{"Cards & forms"}</option>
                              <option value="Paper & stationery">{"Paper & stationery"}</option>
                            </optgroup>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Optional – e.g. Zero Sugar, Diet Coke, Black under Coca-Cola range"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-ty">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-15-ty" name="type" required={true} defaultValue={"Bar"}>
                            <option value="" disabled={true}>{"Choose a type"}</option>
                            <option value="Bottle">{"Bottle"}</option>
                            <option value="Can">{"Can"}</option>
                            <option value="Pack">{"Pack"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Cup">{"Cup"}</option>
                            <option value="Sachet">{"Sachet"}</option>
                            <option value="Tin">{"Tin"}</option>
                            <option value="Box">{"Box"}</option>
                            <option value="Roll">{"Roll"}</option>
                            <option value="Kit">{"Kit"}</option>
                            <option value="Tray">{"Tray"}</option>
                            <option value="Piece">{"Piece"}</option>
                            <option value="Pair">{"Pair"}</option>
                            <option value="Bag">{"Bag"}</option>
                            <option value="Set">{"Set"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">
                          {"Bottle, can, pack, bar … – add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-types">{"Stores Setup › Item types"}</a>
                        </span>
                      </div>
                      <div className="field mi-size">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-q">
                          {"Unit "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="mi-size__row">
                          <input className="field__input" id="mbs-p01-mi-15-q" name="unit_qty" type="number" min="0" step="any" required={true} placeholder="Quantity" aria-label="Quantity" defaultValue={"100"} />
                          <div className="field__wrap">
                            <select className="field__input field__input--select" id="mbs-p01-mi-15-u" name="unit" required={true} aria-label="Measuring unit">
                              <option value="" disabled={true}>{"Unit"}</option>
                              <optgroup label="Weight – gram, kilogram">
                                <option value="g" title="Gram" selected={true}>{"g"}</option>
                                <option value="kg" title="Kilogram">{"kg"}</option>
                              </optgroup>
                              <optgroup label="Volume – millilitre, litre">
                                <option value="ml" title="Millilitre">{"ml"}</option>
                                <option value="litre" title="Litre">{"litre"}</option>
                              </optgroup>
                              <optgroup label="Length – metre">
                                <option value="m" title="Metre">{"m"}</option>
                              </optgroup>
                              <optgroup label="Count – numbers (pieces), dozen">
                                <option value="nos" title="Numbers (pieces)">{"nos"}</option>
                                <option value="dozen" title="Dozen">{"dozen"}</option>
                              </optgroup>
                              <option>{"tray"}</option>
                              <option>{"bottle"}</option>
                              <option>{"can"}</option>
                              <option>{"pair"}</option>
                              <option>{"roll"}</option>
                              <option>{"sachet"}</option>
                              <option>{"kit"}</option>
                              <option>{"packet"}</option>
                              <option>{"case"}</option>
                              <option>{"box"}</option>
                            </select>
                            <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </div>
                        </div>
                        <span className="field__hint">
                          {"Size of one item – grams, millilitres, litres … Add your own in "}
                          <a className="fd-link" href="/stores-setup/sts-03-units-and-conversions/#sec-units">{"Stores Setup › Units"}</a>
                        </span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-p">
                          {"Selling price (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mbs-p01-mi-15-p" name="price" type="number" required={true} min="0" step="0.01" defaultValue={"280"} />
                        <span className="field__hint">{"Saved in the draft price version MPV-2027-01 – applies after GM approval from its valid-from date (BR-02)"}</span>
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Price is "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-15-pt" value="excl" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Excluding tax"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="mbs-p01-mi-15-pt" value="incl" required={true} />
                            <span className="check__box" />
                            {"Including tax"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-tx">
                          {"Tax category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-15-tx" name="tax" required={true} defaultValue={"GST 18 % · HSN from the charge code (MB)"}>
                            <option value="GST 18 % · HSN from the charge code (MB)">{"GST 18 % · HSN from the charge code (MB)"}</option>
                            <option value="Liquor – state excise, outside GST (BAR)">{"Liquor – state excise, outside GST (BAR)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"GST rate and HSN come from the charge code; liquor follows the state excise rule (no GST)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-cc">
                          {"Charge code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mbs-p01-mi-15-cc" name="charge_code" required={true} defaultValue={"MB"}>
                            <option value="MB">{"MB · Minibar · SAC 996331 · GST 18 %"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar (liquor) · outside GST"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Front Desk Setup charge codes (FDS-08) – MB for food and beverage, BAR for liquor"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="mbs-p01-mi-15-sl">{"Shelf life (days)"}</label>
                        <input className="field__input" id="mbs-p01-mi-15-sl" name="shelf_life" type="number" min="1" max="1095" defaultValue={"270"} />
                        <span className="field__hint">{"Used for the expiry warning (MBS-06)"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mbs-p01-mi-15-al">
                          <input id="mbs-p01-mi-15-al" type="checkbox" role="switch" name="alcohol" />
                          <span className="sw__track" />
                          {"Alcohol"}
                        </label>
                        <span className="field__hint">{"Removed from alcohol-free rooms; needs the liquor licence (BR-03)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mbs-p01-mi-15-ac">
                          <input id="mbs-p01-mi-15-ac" type="checkbox" role="switch" name="active" />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items in use are made inactive, never deleted (BR-04)."}</span>
                      </div>
                      <p className="mi-alc field--wide">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#shield-alert" />
                        </svg>
                        {"Alcohol item: choose the charge code "}
                        <b>{"BAR"}</b>
                        {" and the liquor tax category – it is only sold while the liquor licence (FL-3) covers in-room sale."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="t-item" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Item saved in the draft price version"}
                  <small>{"MPV-2027-01 now holds the change; it applies after GM approval from its valid-from date. Written to the setup audit log (MBS-X03)."}</small>
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
                  {"Item added"}
                  <small>{"MI-16 Trail mix 50 g (ST-SNK-271, MB) is added; its price ₹170.00 waits in the draft version MPV-2027-01. The row is highlighted."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-pend" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#shield-alert" />
                </svg>
                <div className="fd-toast__text">
                  {"New price version sent for approval"}
                  <small>{"MPV-2027-02 (copy of MPV-2026-02, valid from 01 Feb 2027) is in the approvals inbox of the GM, Vikram Nathan. On approval MBS-X02 switches the prices on that date."}</small>
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
