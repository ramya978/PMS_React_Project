// GENERATED from public/laundry-setup/las-03-items-and-price-list/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/choices.css",
    "media": null
  },
  {
    "href": "/laundry-setup/las-03-items-and-price-list/las-03-items-and-price-list.css",
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

export default function LaundrySetupLas03ItemsAndPriceList() {
  return (
    <ScreenShell title="Items & Price List" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="LAS-03" data-code="LAS-03" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="LAS-01" aria-current="page" title="Laundry Setup Home" to={"/laundry-setup/las-01-laundry-setup-home"}>
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
            <main className="app__content" id="main" data-code="LAS-03" tabIndex="-1">
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
                        <Link to={"/laundry-setup/las-01-laundry-setup-home"}>{"Laundry Setup"}</Link>
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
                    <h1 className="page-header__title">{"Items & Price List"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"LAS-03"}</span>
                  <div className="page-header__actions">
                    <Link className="btn ph-ic" data-leads-to="LAS-O01" to={"/laundry-setup/las-o01-guest-laundry-list-room-form"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print laundry list"}
                    </Link>
                    <a className="btn" href="#pending">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#copy" />
                      </svg>
                      {"New price version"}
                    </a>
                    <a className="btn btn--primary" href="#las-p02" data-leads-to="LAS-P02">
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
                <i className="pm" id="pending" />
              </div>
              <section className="card pl-ver" data-code="LAS-03-versions" aria-labelledby="pl-ver-t">
                <div className="pl-ver__h">
                  <h2 className="s-card-title" id="pl-ver-t">{"Price versions"}</h2>
                  <span className="fd-muted">{"Draft → Pending approval → Active from the valid-from date (LAS-X02) → Superseded. Orders keep the price of their pickup date."}</span>
                </div>
                <ol className="pv-list">
                  <li className="pvr pvr--superseded">
                    <span className="pvr__id">{"PV-2025-01"}</span>
                    <span className="pill pill--ooo">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#archive" />
                      </svg>
                      {"Superseded"}
                    </span>
                    <b>{"from 01 Apr 2025"}</b>
                    <small>{"Replaced by PV-2026-01 on 01 Apr 2026 (LAS-X02)"}</small>
                    <small>{"Approved Sunita Ranjan 18 Mar 2025"}</small>
                  </li>
                  <li className="pvr pvr--active">
                    <span className="pvr__id">{"PV-2026-01"}</span>
                    <span className="pill pill--ready">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check-circle" />
                      </svg>
                      {"Active"}
                    </span>
                    <b>{"from 01 Apr 2026"}</b>
                    <small>{"Current prices – used by every order picked up from 01 Apr 2026"}</small>
                    <small>{"Approved Sunita Ranjan 20 Mar 2026"}</small>
                  </li>
                  <li className="pvr pvr--pending">
                    <span className="pvr__id">{"PV-2026-02"}</span>
                    <span className="pill pill--tentative">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#clock" />
                      </svg>
                      {"Pending approval"}
                    </span>
                    <b>{"from 01 Nov 2026"}</b>
                    <small>{"+5 % on dry clean (vendor rate increase)"}</small>
                    <small>{"Submitted 20 Oct 2026 – waiting for Sunita Ranjan"}</small>
                  </li>
                  <li className="pvr pvr--draft">
                    <span className="pvr__id">{"PV-2027-01"}</span>
                    <span className="pill pill--occupied">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#pen-line" />
                      </svg>
                      {"Draft"}
                    </span>
                    <b>{"from 01 Jan 2027"}</b>
                    <small>{"Festive season review – not submitted"}</small>
                    <small>{"Saved 21 Oct 2026"}</small>
                  </li>
                </ol>
                <div className="hks-pending pl-pend">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#shield-alert" />
                  </svg>
                  <span>
                    <strong>{"New version PV-2027-02 sent for approval."}</strong>
                    {" Copy of PV-2026-01 with valid-from 01 Feb 2027 – waiting for Sunita Ranjan in the approvals inbox. "}
                    <Link className="fd-link" to={"/reservation/rs-20-approvals"}>{"Open approvals"}</Link>
                  </span>
                </div>
              </section>
              <div className="pl-bar">
                <span className="pl-bar__k">
                  <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#calendar" />
                  </svg>
                  {"Showing "}
                  <b>{"PV-2026-01"}</b>
                  {" · valid from 01 Apr 2026 · 27 items"}
                </span>
                <span className="fd-muted">{"Express and Same-day columns are calculated from the Regular rate (+50 %, +25 %)."}</span>
              </div>
              <div className="pgw">
                <div className="s-scroll">
                  <table className="dt__table pl-t" data-code="LAS-03-grid" data-mc="">
                    <caption className="sr-only">{"Items and prices"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">{"Item"}</th>
                        <th scope="col" className="dt__th--right">
                          {"Wash & press"}
                          <br />
                          <small>{"REG"}</small>
                        </th>
                        <th scope="col" className="dt__th--right">
                          {"Express"}
                          <br />
                          <small>{"+50 %"}</small>
                        </th>
                        <th scope="col" className="dt__th--right">
                          {"Same-day"}
                          <br />
                          <small>{"+25 %"}</small>
                        </th>
                        <th scope="col" className="dt__th--right">
                          {"Press only"}
                          <br />
                          <small>{"PRMS"}</small>
                        </th>
                        <th scope="col" className="dt__th--right">
                          {"Dry clean"}
                          <br />
                          <small>{"DRY"}</small>
                        </th>
                        <th scope="col">
                          <span className="sr-only">{"Edit"}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="pl-grp">
                        <th colSpan="8" scope="rowgroup">{"Gentlemen · 15 items"}</th>
                      </tr>
                      <tr id="it-gen-shirt">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-gen-shirt" data-leads-to="LAS-P02">
                            <strong>{"Shirt"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹150.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹225.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹187.50"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹80.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹250.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-shirt" aria-label="Edit Shirt">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-tshirt">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-gen-tshirt" data-leads-to="LAS-P02">
                            <strong>{"T-shirt"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹120.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹180.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹150.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹70.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-tshirt" aria-label="Edit T-shirt">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-trousers">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-gen-trousers" data-leads-to="LAS-P02">
                            <strong>{"Trousers"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹180.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹270.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹225.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹90.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹280.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-trousers" aria-label="Edit Trousers">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-jeans">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-gen-jeans" data-leads-to="LAS-P02">
                            <strong>{"Jeans"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹200.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹300.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹250.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹100.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-jeans" aria-label="Edit Jeans">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-shorts">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-gen-shorts" data-leads-to="LAS-P02">
                            <strong>{"Shorts"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹120.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹180.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹150.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹60.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-shorts" aria-label="Edit Shorts">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-suit2pc">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#las-p02-gen-suit2pc" data-leads-to="LAS-P02">
                            <strong>{"Suit (2 pc)"}</strong>
                          </a>
                          <span className="pl-dco">{"Dry-clean only"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹300.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹750.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-suit2pc" aria-label="Edit Suit (2 pc)">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-blazer">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-gen-blazer" data-leads-to="LAS-P02">
                            <strong>{"Blazer"}</strong>
                          </a>
                          <span className="pl-dco">{"Dry-clean only"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹180.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹450.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-blazer" aria-label="Edit Blazer">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-tie">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-gen-tie" data-leads-to="LAS-P02">
                            <strong>{"Tie"}</strong>
                          </a>
                          <span className="pl-dco">{"Dry-clean only"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹60.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹120.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-tie" aria-label="Edit Tie">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-kurta">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-gen-kurta" data-leads-to="LAS-P02">
                            <strong>{"Kurta"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹180.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹270.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹225.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹90.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹280.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-kurta" aria-label="Edit Kurta">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-nightsuit">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-gen-nightsuit" data-leads-to="LAS-P02">
                            <strong>{"Night suit"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹180.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹270.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹225.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹90.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-nightsuit" aria-label="Edit Night suit">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-undergarment">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-gen-undergarment" data-leads-to="LAS-P02">
                            <strong>{"Undergarment"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹60.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹90.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹75.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-undergarment" aria-label="Edit Undergarment">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-sockspair">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-gen-sockspair" data-leads-to="LAS-P02">
                            <strong>{"Socks (pair)"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹50.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹75.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹62.50"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-sockspair" aria-label="Edit Socks (pair)">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-handkerchief">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-gen-handkerchief" data-leads-to="LAS-P02">
                            <strong>{"Handkerchief"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹30.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹45.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹37.50"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹20.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-handkerchief" aria-label="Edit Handkerchief">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-jacket">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-gen-jacket" data-leads-to="LAS-P02">
                            <strong>{"Jacket"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹320.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹480.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹400.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹180.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹550.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-jacket" aria-label="Edit Jacket">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-gen-sweater">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-gen-sweater" data-leads-to="LAS-P02">
                            <strong>{"Sweater"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹220.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹330.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹275.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹110.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹380.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-gen-sweater" aria-label="Edit Sweater">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="8" scope="rowgroup">{"Ladies · 7 items"}</th>
                      </tr>
                      <tr id="it-lad-saree">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-lad-saree" data-leads-to="LAS-P02">
                            <strong>{"Saree"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹300.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹450.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹375.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹150.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹500.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-lad-saree" aria-label="Edit Saree">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-lad-salwarsuit">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-lad-salwarsuit" data-leads-to="LAS-P02">
                            <strong>{"Salwar suit"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹280.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹420.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹350.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹140.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹450.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-lad-salwarsuit" aria-label="Edit Salwar suit">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-lad-dress">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-lad-dress" data-leads-to="LAS-P02">
                            <strong>{"Dress"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹250.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹375.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹312.50"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹120.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹400.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-lad-dress" aria-label="Edit Dress">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-lad-skirt">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-lad-skirt" data-leads-to="LAS-P02">
                            <strong>{"Skirt"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹160.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹240.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹200.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹80.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹260.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-lad-skirt" aria-label="Edit Skirt">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-lad-blouse">
                        <td className="dt__td nw" data-label="Item" data-t="">
                          <a className="fd-link" href="#las-p02-lad-blouse" data-leads-to="LAS-P02">
                            <strong>{"Blouse"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹140.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹210.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹175.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹70.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Dry clean DRY" data-w2="">{"₹240.00"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-lad-blouse" aria-label="Edit Blouse">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-lad-nightdress">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-lad-nightdress" data-leads-to="LAS-P02">
                            <strong>{"Night dress"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹180.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹270.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹225.00"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹90.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-lad-nightdress" aria-label="Edit Night dress">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-lad-undergarment">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-lad-undergarment" data-leads-to="LAS-P02">
                            <strong>{"Undergarment"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹60.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹90.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹75.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-lad-undergarment" aria-label="Edit Undergarment">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="8" scope="rowgroup">{"Children · 3 items"}</th>
                      </tr>
                      <tr id="it-chi-shirttshirt">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-chi-shirttshirt" data-leads-to="LAS-P02">
                            <strong>{"Shirt / T-shirt"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹90.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹135.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹112.50"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹50.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-chi-shirttshirt" aria-label="Edit Shirt / T-shirt">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-chi-shortstrousers">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-chi-shortstrousers" data-leads-to="LAS-P02">
                            <strong>{"Shorts / trousers"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹90.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹135.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹112.50"}</td>
                        <td className="dt__td dt__td--right num" data-label="Press only PRMS" data-w2="">{"₹50.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-chi-shortstrousers" aria-label="Edit Shorts / trousers">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-chi-frock" className="is-missing">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#las-p02-chi-frock" data-leads-to="LAS-P02">
                            <strong>{"Frock"}</strong>
                          </a>
                          <span className="pl-miss">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"No price – not offered"}
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-chi-frock" aria-label="Edit Frock">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="8" scope="rowgroup">{"Household · 2 items"}</th>
                      </tr>
                      <tr id="it-hou-shawl" className="is-missing">
                        <td className="dt__td nw" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#las-p02-hou-shawl" data-leads-to="LAS-P02">
                            <strong>{"Shawl"}</strong>
                          </a>
                          <span className="pl-miss">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"No price – not offered"}
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-hou-shawl" aria-label="Edit Shawl">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr id="it-hou-ownbathtowel">
                        <td className="dt__td nw" data-label="Item" data-w2="" data-t="">
                          <a className="fd-link" href="#las-p02-hou-ownbathtowel" data-leads-to="LAS-P02">
                            <strong>{"Own bath towel"}</strong>
                          </a>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Wash & press REG" data-w2="">{"₹80.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Express +50 %" data-w2="">{"₹120.00"}</td>
                        <td className="dt__td dt__td--right num is-calc" data-label="Same-day +25 %" data-w2="">{"₹100.00"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right num" data-e="">{"–"}</td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#las-p02-hou-ownbathtowel" aria-label="Edit Own bath towel">{"Edit"}</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal modal--lg" id="las-p02" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-t">{"Add item"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-n" name="item" type="text" required={true} maxLength="40" defaultValue={""} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 %"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-dco">
                          <input id="las-p02-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-so" name="sort" type="number" min="0" max="999" defaultValue={"300"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-shirt" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-shirt-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-shirt-t">{"Edit item · Gentlemen · Shirt"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-shirt-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-shirt-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Shirt"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-shirt-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-shirt-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"150"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"80"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"250"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹225.00 and ₹187.50"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-shirt-dco">
                          <input id="las-p02-gen-shirt-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-shirt-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-shirt-so" name="sort" type="number" min="0" max="999" defaultValue={"10"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-shirt-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-shirt-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-tshirt" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-tshirt-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-tshirt-t">{"Edit item · Gentlemen · T-shirt"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-tshirt-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-tshirt-n" name="item" type="text" required={true} maxLength="40" defaultValue={"T-shirt"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-tshirt-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-tshirt-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"120"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"70"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹180.00 and ₹150.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-tshirt-dco">
                          <input id="las-p02-gen-tshirt-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-tshirt-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-tshirt-so" name="sort" type="number" min="0" max="999" defaultValue={"20"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-tshirt-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-tshirt-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-trousers" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-trousers-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-trousers-t">{"Edit item · Gentlemen · Trousers"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-trousers-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-trousers-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Trousers"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-trousers-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-trousers-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"180"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"90"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"280"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹270.00 and ₹225.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-trousers-dco">
                          <input id="las-p02-gen-trousers-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-trousers-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-trousers-so" name="sort" type="number" min="0" max="999" defaultValue={"30"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-trousers-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-trousers-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-jeans" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-jeans-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-jeans-t">{"Edit item · Gentlemen · Jeans"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-jeans-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-jeans-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Jeans"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-jeans-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-jeans-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"200"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"100"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹300.00 and ₹250.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-jeans-dco">
                          <input id="las-p02-gen-jeans-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-jeans-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-jeans-so" name="sort" type="number" min="0" max="999" defaultValue={"40"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-jeans-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-jeans-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-shorts" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-shorts-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-shorts-t">{"Edit item · Gentlemen · Shorts"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-shorts-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-shorts-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Shorts"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-shorts-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-shorts-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"120"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"60"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹180.00 and ₹150.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-shorts-dco">
                          <input id="las-p02-gen-shorts-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-shorts-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-shorts-so" name="sort" type="number" min="0" max="999" defaultValue={"50"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-shorts-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-shorts-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-suit2pc" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-suit2pc-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-suit2pc-t">{"Edit item · Gentlemen · Suit (2 pc)"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-suit2pc-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-suit2pc-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Suit (2 pc)"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-suit2pc-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-suit2pc-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"300"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"750"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 %"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-suit2pc-dco">
                          <input id="las-p02-gen-suit2pc-dco" type="checkbox" role="switch" name="dry_clean_only" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-suit2pc-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-suit2pc-so" name="sort" type="number" min="0" max="999" defaultValue={"60"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-suit2pc-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-suit2pc-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-blazer" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-blazer-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-blazer-t">{"Edit item · Gentlemen · Blazer"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-blazer-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-blazer-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Blazer"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-blazer-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-blazer-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"180"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"450"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 %"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-blazer-dco">
                          <input id="las-p02-gen-blazer-dco" type="checkbox" role="switch" name="dry_clean_only" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-blazer-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-blazer-so" name="sort" type="number" min="0" max="999" defaultValue={"70"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-blazer-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-blazer-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-tie" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-tie-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-tie-t">{"Edit item · Gentlemen · Tie"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-tie-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-tie-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Tie"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-tie-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-tie-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"60"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"120"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 %"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-tie-dco">
                          <input id="las-p02-gen-tie-dco" type="checkbox" role="switch" name="dry_clean_only" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-tie-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-tie-so" name="sort" type="number" min="0" max="999" defaultValue={"80"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-tie-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-tie-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-kurta" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-kurta-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-kurta-t">{"Edit item · Gentlemen · Kurta"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-kurta-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-kurta-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Kurta"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-kurta-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-kurta-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"180"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"90"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"280"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹270.00 and ₹225.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-kurta-dco">
                          <input id="las-p02-gen-kurta-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-kurta-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-kurta-so" name="sort" type="number" min="0" max="999" defaultValue={"90"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-kurta-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-kurta-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-nightsuit" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-nightsuit-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-nightsuit-t">{"Edit item · Gentlemen · Night suit"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-nightsuit-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-nightsuit-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Night suit"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-nightsuit-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-nightsuit-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"180"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"90"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹270.00 and ₹225.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-nightsuit-dco">
                          <input id="las-p02-gen-nightsuit-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-nightsuit-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-nightsuit-so" name="sort" type="number" min="0" max="999" defaultValue={"100"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-nightsuit-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-nightsuit-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-undergarment" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-undergarment-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-undergarment-t">{"Edit item · Gentlemen · Undergarment"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-undergarment-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-undergarment-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Undergarment"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-undergarment-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-undergarment-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"60"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹90.00 and ₹75.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-undergarment-dco">
                          <input id="las-p02-gen-undergarment-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-undergarment-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-undergarment-so" name="sort" type="number" min="0" max="999" defaultValue={"110"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-undergarment-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-undergarment-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-sockspair" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-sockspair-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-sockspair-t">{"Edit item · Gentlemen · Socks (pair)"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-sockspair-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-sockspair-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Socks (pair)"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-sockspair-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-sockspair-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"50"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹75.00 and ₹62.50"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-sockspair-dco">
                          <input id="las-p02-gen-sockspair-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-sockspair-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-sockspair-so" name="sort" type="number" min="0" max="999" defaultValue={"120"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-sockspair-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-sockspair-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-handkerchief" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-handkerchief-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-handkerchief-t">{"Edit item · Gentlemen · Handkerchief"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-handkerchief-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-handkerchief-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Handkerchief"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-handkerchief-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-handkerchief-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"30"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"20"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹45.00 and ₹37.50"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-handkerchief-dco">
                          <input id="las-p02-gen-handkerchief-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-handkerchief-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-handkerchief-so" name="sort" type="number" min="0" max="999" defaultValue={"130"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-handkerchief-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-handkerchief-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-jacket" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-jacket-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-jacket-t">{"Edit item · Gentlemen · Jacket"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-jacket-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-jacket-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Jacket"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-jacket-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-jacket-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"320"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"180"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"550"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹480.00 and ₹400.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-jacket-dco">
                          <input id="las-p02-gen-jacket-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-jacket-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-jacket-so" name="sort" type="number" min="0" max="999" defaultValue={"140"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-jacket-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-jacket-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-gen-sweater" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-gen-sweater-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-gen-sweater-t">{"Edit item · Gentlemen · Sweater"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-gen-sweater-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-gen-sweater-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Sweater"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-sweater-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-gen-sweater-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"220"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"110"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"380"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹330.00 and ₹275.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-gen-sweater-dco">
                          <input id="las-p02-gen-sweater-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-gen-sweater-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-gen-sweater-so" name="sort" type="number" min="0" max="999" defaultValue={"150"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-gen-sweater-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-gen-sweater-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-lad-saree" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-lad-saree-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-lad-saree-t">{"Edit item · Ladies · Saree"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-lad-saree-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-lad-saree-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Saree"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-saree-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-lad-saree-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"300"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"150"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"500"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹450.00 and ₹375.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-lad-saree-dco">
                          <input id="las-p02-lad-saree-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-lad-saree-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-lad-saree-so" name="sort" type="number" min="0" max="999" defaultValue={"160"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-saree-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-lad-saree-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-lad-salwarsuit" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-lad-salwarsuit-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-lad-salwarsuit-t">{"Edit item · Ladies · Salwar suit"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-lad-salwarsuit-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-lad-salwarsuit-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Salwar suit"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-salwarsuit-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-lad-salwarsuit-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"280"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"140"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"450"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹420.00 and ₹350.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-lad-salwarsuit-dco">
                          <input id="las-p02-lad-salwarsuit-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-lad-salwarsuit-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-lad-salwarsuit-so" name="sort" type="number" min="0" max="999" defaultValue={"170"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-salwarsuit-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-lad-salwarsuit-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-lad-dress" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-lad-dress-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-lad-dress-t">{"Edit item · Ladies · Dress"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-lad-dress-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-lad-dress-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Dress"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-dress-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-lad-dress-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"250"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"120"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"400"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹375.00 and ₹312.50"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-lad-dress-dco">
                          <input id="las-p02-lad-dress-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-lad-dress-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-lad-dress-so" name="sort" type="number" min="0" max="999" defaultValue={"180"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-dress-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-lad-dress-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-lad-skirt" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-lad-skirt-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-lad-skirt-t">{"Edit item · Ladies · Skirt"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-lad-skirt-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-lad-skirt-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Skirt"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-skirt-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-lad-skirt-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"160"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"80"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"260"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹240.00 and ₹200.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-lad-skirt-dco">
                          <input id="las-p02-lad-skirt-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-lad-skirt-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-lad-skirt-so" name="sort" type="number" min="0" max="999" defaultValue={"190"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-skirt-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-lad-skirt-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-lad-blouse" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-lad-blouse-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-lad-blouse-t">{"Edit item · Ladies · Blouse"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-lad-blouse-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-lad-blouse-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Blouse"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-blouse-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-lad-blouse-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"140"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"70"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={"240"} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹210.00 and ₹175.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-lad-blouse-dco">
                          <input id="las-p02-lad-blouse-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-lad-blouse-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-lad-blouse-so" name="sort" type="number" min="0" max="999" defaultValue={"200"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-blouse-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-lad-blouse-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-lad-nightdress" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-lad-nightdress-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-lad-nightdress-t">{"Edit item · Ladies · Night dress"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-lad-nightdress-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-lad-nightdress-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Night dress"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-nightdress-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-lad-nightdress-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"180"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"90"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹270.00 and ₹225.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-lad-nightdress-dco">
                          <input id="las-p02-lad-nightdress-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-lad-nightdress-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-lad-nightdress-so" name="sort" type="number" min="0" max="999" defaultValue={"210"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-nightdress-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-lad-nightdress-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-lad-undergarment" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-lad-undergarment-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-lad-undergarment-t">{"Edit item · Ladies · Undergarment"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-lad-undergarment-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-lad-undergarment-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Undergarment"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-undergarment-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-lad-undergarment-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"60"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹90.00 and ₹75.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-lad-undergarment-dco">
                          <input id="las-p02-lad-undergarment-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-lad-undergarment-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-lad-undergarment-so" name="sort" type="number" min="0" max="999" defaultValue={"220"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-lad-undergarment-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-lad-undergarment-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-chi-shirttshirt" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-chi-shirttshirt-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-chi-shirttshirt-t">{"Edit item · Children · Shirt / T-shirt"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-chi-shirttshirt-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-chi-shirttshirt-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Shirt / T-shirt"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-chi-shirttshirt-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-chi-shirttshirt-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"90"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"50"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹135.00 and ₹112.50"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-chi-shirttshirt-dco">
                          <input id="las-p02-chi-shirttshirt-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-chi-shirttshirt-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-chi-shirttshirt-so" name="sort" type="number" min="0" max="999" defaultValue={"230"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-chi-shirttshirt-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-chi-shirttshirt-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-chi-shortstrousers" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-chi-shortstrousers-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-chi-shortstrousers-t">{"Edit item · Children · Shorts / trousers"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-chi-shortstrousers-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-chi-shortstrousers-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Shorts / trousers"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-chi-shortstrousers-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-chi-shortstrousers-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"90"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={"50"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹135.00 and ₹112.50"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-chi-shortstrousers-dco">
                          <input id="las-p02-chi-shortstrousers-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-chi-shortstrousers-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-chi-shortstrousers-so" name="sort" type="number" min="0" max="999" defaultValue={"240"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-chi-shortstrousers-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-chi-shortstrousers-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-chi-frock" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-chi-frock-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-chi-frock-t">{"Edit item · Children · Frock"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-chi-frock-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-chi-frock-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Frock"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-chi-frock-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-chi-frock-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 %"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-chi-frock-dco">
                          <input id="las-p02-chi-frock-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-chi-frock-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-chi-frock-so" name="sort" type="number" min="0" max="999" defaultValue={"250"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-chi-frock-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-chi-frock-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-hou-shawl" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-hou-shawl-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-hou-shawl-t">{"Edit item · Household · Shawl"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-hou-shawl-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-hou-shawl-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Shawl"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-hou-shawl-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-hou-shawl-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 %"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-hou-shawl-dco">
                          <input id="las-p02-hou-shawl-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-hou-shawl-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-hou-shawl-so" name="sort" type="number" min="0" max="999" defaultValue={"260"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-hou-shawl-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-hou-shawl-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="las-p02-hou-ownbathtowel" data-code="LAS-P02" role="dialog" aria-modal="true" aria-labelledby="las-p02-hou-ownbathtowel-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/laundry-setup/las-03-items-and-price-list/#saved-item" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="las-p02-hou-ownbathtowel-t">{"Edit item · Household · Own bath towel"}</h2>
                      <p className="modal__desc">{"Prices are saved in the draft version PV-2027-01; they apply after approval from its valid-from date (BR-02)."}</p>
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
                        <label className="field__label" htmlFor="las-p02-hou-ownbathtowel-n">
                          {"Item name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="las-p02-hou-ownbathtowel-n" name="item" type="text" required={true} maxLength="40" defaultValue={"Own bath towel"} />
                        <span className="field__hint">{"Unique in its category"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-hou-ownbathtowel-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="las-p02-hou-ownbathtowel-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="Gentlemen">{"Gentlemen"}</option>
                            <option value="Ladies">{"Ladies"}</option>
                            <option value="Children">{"Children"}</option>
                            <option value="Household">{"Household"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Prices (₹) – blank = not offered"}</legend>
                        <div className="pl-prices">
                          <label className="pl-pr">
                            <span>{"Wash & press (REG)"}</span>
                            <input className="field__input num" type="number" name="price_REG" min="0" step="1" aria-label="Wash & press (REG) price" defaultValue={"80"} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Press only (PRMS)"}</span>
                            <input className="field__input num" type="number" name="price_PRMS" min="0" step="1" aria-label="Press only (PRMS) price" defaultValue={""} />
                          </label>
                          <label className="pl-pr">
                            <span>{"Dry clean (DRY)"}</span>
                            <input className="field__input num" type="number" name="price_DRY" min="0" step="1" aria-label="Dry clean (DRY) price" defaultValue={""} />
                          </label>
                          <p className="pl-calc">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Express and Same-day are calculated: REG + 50 % and REG + 25 % → ₹120.00 and ₹100.00"}
                          </p>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="las-p02-hou-ownbathtowel-dco">
                          <input id="las-p02-hou-ownbathtowel-dco" type="checkbox" role="switch" name="dry_clean_only" />
                          <span className="sw__track" />
                          {"Dry-clean only"}
                        </label>
                        <span className="field__hint">{"The item can be booked only with the Dry clean service."}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="las-p02-hou-ownbathtowel-so">{"Sort order"}</label>
                        <input className="field__input" id="las-p02-hou-ownbathtowel-so" name="sort" type="number" min="0" max="999" defaultValue={"270"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="las-p02-hou-ownbathtowel-img">{"Image"}</label>
                        <input className="field__input" id="las-p02-hou-ownbathtowel-img" type="file" name="image" accept="image/*" />
                        <span className="field__hint">{"Shown on the mobile pickup screen"}</span>
                      </div>
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
                  <small>{"PV-2027-01 now holds the change; it applies after approval from its valid-from date. Written to the setup audit log (LAS-X03)."}</small>
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
                  <small>{"PV-2027-02 (copy of PV-2026-01, valid from 01 Feb 2027) is in the approvals inbox of Sunita Ranjan; on approval LAS-X02 switches prices on that date."}</small>
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
