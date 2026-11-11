// GENERATED from public/restaurant-pos-setup/rts-03-menu-and-items/index.html by scripts/convert_legacy.py.
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
    "href": "/restaurant-pos-setup/rts-03-menu-and-items/rts-03-menu-and-items.css",
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

export default function RestaurantPosSetupRts03MenuAndItems() {
  return (
    <ScreenShell title="Menu & Items" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RTS-03" data-code="RTS-03" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="RTS-01" aria-current="page" title="Restaurant POS Setup Home" to={"/restaurant-pos-setup/rts-01-pos-setup-home"}>
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
            <main className="app__content" id="main" data-code="RTS-03" tabIndex="-1">
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
                        <Link to={"/restaurant-pos-setup/rts-01-pos-setup-home"}>{"Restaurant POS Setup"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Menu & items"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Menu & Items"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RTS-03"}</span>
                  <div className="page-header__actions">
                    <a className="btn" href="#copy">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#copy" />
                      </svg>
                      {"Copy to outlet"}
                    </a>
                    <a className="btn ph-ic" href="/restaurant-pos-setup/rts-01-pos-setup-home/#rts-p03" data-leads-to="RTS-P03">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#upload" />
                      </svg>
                      {"Import"}
                    </a>
                    <a className="btn btn--primary" href="#rts-p01" data-leads-to="RTS-P01">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add item"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="added" />
                <i className="pm" id="saved-rec" />
                <i className="pm" id="copied" />
              </div>
              <p className="ln-k">
                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                {"35 items (2 are 86’d today, 1 inactive). Price shown is the Normal level; In-room dining adds 10 % (RTS-05). Every sellable item needs a price, a tax class with HSN / SAC and a kitchen station (BR-01)."}
              </p>
              <div className="pgw">
                <div className="s-scroll">
                  <table className="dt__table" data-code="RTS-03-list" data-mc="">
                    <caption className="sr-only">{"Menu items by category"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">{"Item"}</th>
                        <th scope="col">{"Veg / non-veg"}</th>
                        <th scope="col">{"Outlets"}</th>
                        <th scope="col" className="dt__th--right">{"Price"}</th>
                        <th scope="col">{"Station / tax"}</th>
                        <th scope="col">{"Status"}</th>
                        <th scope="col">
                          <span className="sr-only">{"Edit"}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Breakfast · 5"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-095" data-leads-to="RTS-P01">
                            <strong>{"Breakfast buffet (non-resident)"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Buffet"}</span>
                          <span className="fd-sub">{"MN-095 · Gluten, Dairy, Egg"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹799.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-095" aria-label="Edit Breakfast buffet (non-resident)">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-096" data-leads-to="RTS-P01">
                            <strong>{"Masala omelette"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Egg dishes"}</span>
                          <span className="fd-sub">{"MN-096 · Egg"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--egg" title="Egg">
                            <i />
                            {"Egg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹220.00"}
                          <span className="fd-sub">{"IRD ₹242.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-096" aria-label="Edit Masala omelette">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-097" data-leads-to="RTS-P01">
                            <strong>{"Idli and vada"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"South Indian"}</span>
                          <span className="fd-sub">{"MN-097"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹240.00"}
                          <span className="fd-sub">{"IRD ₹264.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-097" aria-label="Edit Idli and vada">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-098" data-leads-to="RTS-P01">
                            <strong>{"Puttu and kadala curry"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Kerala"}</span>
                          <span className="fd-sub">{"MN-098"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹260.00"}
                          <span className="fd-sub">{"IRD ₹286.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-098" aria-label="Edit Puttu and kadala curry">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-099" data-leads-to="RTS-P01">
                            <strong>{"Continental breakfast"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Continental"}</span>
                          <span className="fd-sub">{"MN-099 · Gluten, Dairy, Egg"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹650.00"}
                          <span className="fd-sub">{"IRD ₹715.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax">
                          {"Cold kitchen / pastry"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-099" aria-label="Edit Continental breakfast">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Soups · 2"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-101" data-leads-to="RTS-P01">
                            <strong>{"Tomato rasam soup"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Vegetarian"}</span>
                          <span className="fd-sub">{"MN-101"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹320.00"}
                          <span className="fd-sub">{"IRD ₹352.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-101" aria-label="Edit Tomato rasam soup">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-102" data-leads-to="RTS-P01">
                            <strong>{"Kozhi clear soup"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Chicken"}</span>
                          <span className="fd-sub">{"MN-102"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹360.00"}
                          <span className="fd-sub">{"IRD ₹396.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-102" aria-label="Edit Kozhi clear soup">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Starters · 3"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-110" data-leads-to="RTS-P01">
                            <strong>{"Kerala beef fry"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Beef"}</span>
                          <span className="fd-sub">{"MN-110"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"BAR"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹520.00"}
                          <span className="fd-sub">{"IRD ₹572.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-110" aria-label="Edit Kerala beef fry">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-111" data-leads-to="RTS-P01">
                            <strong>{"Chilli paneer"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Paneer"}</span>
                          <span className="fd-sub">{"MN-111 · Dairy, Soy"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"BAR"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹460.00"}
                          <span className="fd-sub">{"IRD ₹506.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-111" aria-label="Edit Chilli paneer">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-112" data-leads-to="RTS-P01">
                            <strong>{"Prawn tempura"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Seafood"}</span>
                          <span className="fd-sub">{"MN-112 · Shellfish, Gluten, Egg"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"SFG"}</span>
                            <span className="mt-tag">{"BAR"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹690.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Grill"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-112" aria-label="Edit Prawn tempura">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Mains – Kerala · 5"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-120" data-leads-to="RTS-P01">
                            <strong>{"Karimeen pollichathu"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Seafood"}</span>
                          <span className="fd-sub">{"MN-120"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"SFG"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹780.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-120" aria-label="Edit Karimeen pollichathu">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-121" data-leads-to="RTS-P01">
                            <strong>{"Kerala chicken stew"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Chicken"}</span>
                          <span className="fd-sub">{"MN-121"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹540.00"}
                          <span className="fd-sub">{"IRD ₹594.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-121" aria-label="Edit Kerala chicken stew">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-122" data-leads-to="RTS-P01">
                            <strong>{"Malabar fish curry"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Seafood"}</span>
                          <span className="fd-sub">{"MN-122"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹620.00"}
                          <span className="fd-sub">{"IRD ₹682.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-122" aria-label="Edit Malabar fish curry">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-123" data-leads-to="RTS-P01">
                            <strong>{"Vegetable stew"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Vegetarian"}</span>
                          <span className="fd-sub">{"MN-123"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹420.00"}
                          <span className="fd-sub">{"IRD ₹462.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-123" aria-label="Edit Vegetable stew">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-124" data-leads-to="RTS-P01">
                            <strong>{"Kerala sadya (Sunday lunch)"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Vegetarian"}</span>
                          <span className="fd-sub">{"MN-124 · Dairy"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹950.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-124" aria-label="Edit Kerala sadya (Sunday lunch)">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Mains – Indian · 2"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-130" data-leads-to="RTS-P01">
                            <strong>{"Paneer butter masala"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Vegetarian"}</span>
                          <span className="fd-sub">{"MN-130 · Dairy, Nuts"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹480.00"}
                          <span className="fd-sub">{"IRD ₹528.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-130" aria-label="Edit Paneer butter masala">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-131" data-leads-to="RTS-P01">
                            <strong>{"Butter chicken"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Chicken"}</span>
                          <span className="fd-sub">{"MN-131 · Dairy, Nuts"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹560.00"}
                          <span className="fd-sub">{"IRD ₹616.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Tandoor"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-131" aria-label="Edit Butter chicken">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Mains – Continental · 5"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-140" data-leads-to="RTS-P01">
                            <strong>{"Grilled chicken, herb jus"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Chicken"}</span>
                          <span className="fd-sub">{"MN-140 · Dairy"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹640.00"}
                          <span className="fd-sub">{"IRD ₹704.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Grill"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-140" aria-label="Edit Grilled chicken, herb jus">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-141" data-leads-to="RTS-P01">
                            <strong>{"Spaghetti aglio olio"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Pasta"}</span>
                          <span className="fd-sub">{"MN-141 · Gluten"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹460.00"}
                          <span className="fd-sub">{"IRD ₹506.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-141" aria-label="Edit Spaghetti aglio olio">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="is-off">
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-142" data-leads-to="RTS-P01">
                            <strong>{"Fish and chips"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Seafood"}</span>
                          <span className="fd-sub">{"MN-142 · Gluten, Egg"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹590.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#pause" />
                            </svg>
                            {"Inactive"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-142" aria-label="Edit Fish and chips">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-145" data-leads-to="RTS-P01">
                            <strong>{"Grilled tiger prawns"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Seafood"}</span>
                          <span className="fd-sub">{"MN-145 · Shellfish, Dairy"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"SFG"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹1,450.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Grill"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-145" aria-label="Edit Grilled tiger prawns">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-146" data-leads-to="RTS-P01">
                            <strong>{"Catch of the day (per 100 g)"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Seafood"}</span>
                          <span className="fd-sub">{"MN-146"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"SFG"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹380.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Grill"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#x-circle" />
                            </svg>
                            {"86'd"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-146" aria-label="Edit Catch of the day (per 100 g)">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Breads · 3"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-150" data-leads-to="RTS-P01">
                            <strong>{"Malabar parotta"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Kerala breads"}</span>
                          <span className="fd-sub">{"MN-150 · Gluten"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"BAR"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹90.00"}
                          <span className="fd-sub">{"IRD ₹99.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-150" aria-label="Edit Malabar parotta">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-151" data-leads-to="RTS-P01">
                            <strong>{"Appam (2)"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Kerala breads"}</span>
                          <span className="fd-sub">{"MN-151"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹120.00"}
                          <span className="fd-sub">{"IRD ₹132.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-151" aria-label="Edit Appam (2)">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-152" data-leads-to="RTS-P01">
                            <strong>{"Butter naan"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Tandoor breads"}</span>
                          <span className="fd-sub">{"MN-152 · Gluten, Dairy"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹110.00"}
                          <span className="fd-sub">{"IRD ₹121.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Tandoor"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-152" aria-label="Edit Butter naan">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Rice · 2"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-160" data-leads-to="RTS-P01">
                            <strong>{"Kerala matta rice"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Plain rice"}</span>
                          <span className="fd-sub">{"MN-160"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹180.00"}
                          <span className="fd-sub">{"IRD ₹198.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-160" aria-label="Edit Kerala matta rice">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-161" data-leads-to="RTS-P01">
                            <strong>{"Thalassery chicken biryani"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Biryani"}</span>
                          <span className="fd-sub">{"MN-161 · Nuts, Dairy"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹620.00"}
                          <span className="fd-sub">{"IRD ₹682.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-161" aria-label="Edit Thalassery chicken biryani">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Desserts · 2"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-170" data-leads-to="RTS-P01">
                            <strong>{"Palada payasam"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Kerala sweets"}</span>
                          <span className="fd-sub">{"MN-170 · Dairy"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹280.00"}
                          <span className="fd-sub">{"IRD ₹308.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax">
                          {"Cold kitchen / pastry"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-170" aria-label="Edit Palada payasam">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-171" data-leads-to="RTS-P01">
                            <strong>{"Tender coconut pudding"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Puddings"}</span>
                          <span className="fd-sub">{"MN-171 · Dairy"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"SFG"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹320.00"}
                          <span className="fd-sub">{"IRD ₹352.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax">
                          {"Cold kitchen / pastry"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#x-circle" />
                            </svg>
                            {"86'd"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-171" aria-label="Edit Tender coconut pudding">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Beverages · 3"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-180" data-leads-to="RTS-P01">
                            <strong>{"Fresh lime soda"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Cold drinks"}</span>
                          <span className="fd-sub">{"MN-180"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"SFG"}</span>
                            <span className="mt-tag">{"BAR"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹180.00"}
                          <span className="fd-sub">{"IRD ₹198.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax">
                          {"Beverage counter"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-180" aria-label="Edit Fresh lime soda">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-181" data-leads-to="RTS-P01">
                            <strong>{"South Indian filter coffee"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Hot drinks"}</span>
                          <span className="fd-sub">{"MN-181 · Dairy"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹150.00"}
                          <span className="fd-sub">{"IRD ₹165.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax">
                          {"Beverage counter"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-181" aria-label="Edit South Indian filter coffee">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-182" data-leads-to="RTS-P01">
                            <strong>{"Masala chai"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Hot drinks"}</span>
                          <span className="fd-sub">{"MN-182 · Dairy"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹130.00"}
                          <span className="fd-sub">{"IRD ₹143.00"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax">
                          {"Beverage counter"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-182" aria-label="Edit Masala chai">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="pl-grp">
                        <th colSpan="7" scope="rowgroup">{"Liquor · 4"}</th>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-190" data-leads-to="RTS-P01">
                            <strong>{"Kingfisher Premium beer 650 ml"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Beer"}</span>
                          <span className="fd-sub">{"MN-190 · Gluten"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"BAR"}</span>
                            <span className="mt-tag">{"SFG"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹420.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Bar"}
                          <span className="fd-sub">{"outside GST"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-190" aria-label="Edit Kingfisher Premium beer 650 ml">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-191" data-leads-to="RTS-P01">
                            <strong>{"Old Monk rum 60 ml"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Rum"}</span>
                          <span className="fd-sub">{"MN-191"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"BAR"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹340.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Bar"}
                          <span className="fd-sub">{"outside GST"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-191" aria-label="Edit Old Monk rum 60 ml">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-192" data-leads-to="RTS-P01">
                            <strong>{"House red wine (glass)"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Wine"}</span>
                          <span className="fd-sub">{"MN-192"}</span>
                          <span className="mt-warn">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"Travancore has no liquor licence (BR-04)"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"BAR"}</span>
                            <span className="mt-tag">{"SFG"}</span>
                            <span className="mt-tag">{"TRV"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹650.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          {"Bar"}
                          <span className="fd-sub">{"outside GST"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-192" aria-label="Edit House red wine (glass)">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <a className="fd-link" href="#rts-p01-mn-193" data-leads-to="RTS-P01">
                            <strong>{"Cochin Sunset (cocktail)"}</strong>
                          </a>
                          <span className="mt-ss" title="Sub-sub-category">{"Cocktails"}</span>
                          <span className="fd-sub">{"MN-193"}</span>
                          <span className="mt-warn">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"No station (BR-01)"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--veg" title="Veg">
                            <i />
                            {"Veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"BAR"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num nw" data-label="Price" data-w2="">
                          {"₹520.00"}
                          <span className="fd-sub">{"IRD –"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Station / tax" data-w2="">
                          <span className="la-late">{"–"}</span>
                          <span className="fd-sub">{"outside GST"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#rts-p01-mn-193" aria-label="Edit Cochin Sunset (cocktail)">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="la-new">
                        <td className="dt__td" data-label="Item" data-w="" data-t="">
                          <strong>{"Kappa and fish curry"}</strong>
                          <span className="fd-sub">{"MN-194 · added just now"}</span>
                        </td>
                        <td className="dt__td" data-label="Veg / non-veg" data-w2="">
                          <span className="rd rd--nonveg" title="Non-veg">
                            <i />
                            {"Non-veg"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Outlets" data-w2="">
                          <span className="mt-tags">
                            <span className="mt-tag">{"TRV"}</span>
                            <span className="mt-tag">{"IRD"}</span>
                          </span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Price" data-w2="">
                          {"₹540.00"}
                          <span className="fd-sub">{"IRD ₹594.00"}</span>
                        </td>
                        <td className="dt__td" data-label="Station / tax" data-w2="">
                          {"Hot kitchen"}
                          <span className="fd-sub">{"5 % · 996331"}</span>
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
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
                </div>
              </div>
              <div className="modal modal--full" id="rts-p01" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#added" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-t">{"Add item"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-194"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-n" name="name" type="text" required={true} maxLength="50" defaultValue={""} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={""} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-p" name="price" type="number" required={true} min="1" step="1" defaultValue={""} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-r" name="recipe">
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-194">{"REC-194 · new"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-a">
                          <input id="rts-p01-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-x">
                          <input id="rts-p01-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-095" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-095-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-095-t">{"Edit item · MN-095 · Breakfast buffet (non-resident)"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-095-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-095-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-095"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-095-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-095-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Breakfast buffet (non-resident)"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-095-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-095-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-095-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-095-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-095-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-095-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Buffet"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-095-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-095-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"799"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-095-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-095-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-095-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-095-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-095-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-095-r" name="recipe" defaultValue={"REC-095"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-095">{"REC-095 · Breakfast buffet (non-resident)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-095-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-095-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" defaultChecked={true} />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" defaultChecked={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-095-a">
                          <input id="rts-p01-mn-095-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-095-x">
                          <input id="rts-p01-mn-095-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-096" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-096-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-096-t">{"Edit item · MN-096 · Masala omelette"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-096-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-096-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-096"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-096-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-096-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Masala omelette"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-096-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-096-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-096-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-096-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-096-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-096-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Egg dishes"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-096-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-096-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"220"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-096-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-096-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-096-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-096-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-096-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-096-r" name="recipe" defaultValue={"REC-096"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-096">{"REC-096 · Masala omelette"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-096-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-096-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" defaultChecked={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" defaultChecked={true} />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-096-a">
                          <input id="rts-p01-mn-096-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-096-x">
                          <input id="rts-p01-mn-096-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-097" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-097-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-097-t">{"Edit item · MN-097 · Idli and vada"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-097-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-097-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-097"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-097-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-097-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Idli and vada"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-097-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-097-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-097-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-097-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-097-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-097-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"South Indian"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-097-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-097-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"240"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-097-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-097-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-097-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-097-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-097-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-097-r" name="recipe" defaultValue={"REC-097"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-097">{"REC-097 · Idli and vada"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-097-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-097-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-097-a">
                          <input id="rts-p01-mn-097-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-097-x">
                          <input id="rts-p01-mn-097-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-098" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-098-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-098-t">{"Edit item · MN-098 · Puttu and kadala curry"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-098-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-098-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-098"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-098-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-098-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Puttu and kadala curry"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-098-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-098-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-098-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-098-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-098-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-098-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Kerala"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-098-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-098-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"260"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-098-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-098-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-098-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-098-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-098-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-098-r" name="recipe" defaultValue={"REC-098"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-098">{"REC-098 · Puttu and kadala curry"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-098-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-098-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-098-a">
                          <input id="rts-p01-mn-098-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-098-x">
                          <input id="rts-p01-mn-098-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-099" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-099-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-099-t">{"Edit item · MN-099 · Continental breakfast"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-099-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-099-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-099"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-099-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-099-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Continental breakfast"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-099-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-099-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-099-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-099-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-099-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-099-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Continental"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-099-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-099-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"650"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-099-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-099-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-099-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-099-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-099-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-099-r" name="recipe" defaultValue={"REC-099"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-099">{"REC-099 · Continental breakfast"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-099-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-099-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" defaultChecked={true} />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" defaultChecked={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" defaultChecked={true} />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" defaultChecked={true} />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-099-a">
                          <input id="rts-p01-mn-099-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-099-x">
                          <input id="rts-p01-mn-099-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-101" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-101-t">{"Edit item · MN-101 · Tomato rasam soup"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-101-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-101-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-101"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-101-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-101-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Tomato rasam soup"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-101-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-101-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-101-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-101-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-101-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-101-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Vegetarian"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-101-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-101-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"320"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-101-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-101-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-101-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-101-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-101-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-101-r" name="recipe" defaultValue={"REC-101"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-101">{"REC-101 · Tomato rasam soup"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-101-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-101-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-101-a">
                          <input id="rts-p01-mn-101-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-101-x">
                          <input id="rts-p01-mn-101-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-102" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-102-t">{"Edit item · MN-102 · Kozhi clear soup"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-102-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-102-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-102"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-102-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-102-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Kozhi clear soup"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-102-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-102-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-102-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-102-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-102-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-102-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Chicken"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-102-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-102-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"360"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-102-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-102-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-102-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-102-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-102-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-102-r" name="recipe" defaultValue={"REC-102"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-102">{"REC-102 · Kozhi clear soup"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-102-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-102-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-102-a">
                          <input id="rts-p01-mn-102-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-102-x">
                          <input id="rts-p01-mn-102-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-110" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-110-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-110-t">{"Edit item · MN-110 · Kerala beef fry"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-110-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-110-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-110"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-110-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-110-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Kerala beef fry"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-110-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-110-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-110-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-110-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-110-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-110-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Beef"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-110-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-110-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"520"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-110-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-110-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-110-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-110-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-110-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-110-r" name="recipe" defaultValue={"REC-110"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-110">{"REC-110 · Kerala beef fry"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-110-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-110-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" defaultChecked={true} />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-110-a">
                          <input id="rts-p01-mn-110-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-110-x">
                          <input id="rts-p01-mn-110-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-111" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-111-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-111-t">{"Edit item · MN-111 · Chilli paneer"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-111-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-111-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-111"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-111-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-111-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Chilli paneer"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-111-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-111-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-111-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-111-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-111-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-111-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Paneer"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-111-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-111-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"460"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-111-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-111-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-111-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-111-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-111-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-111-r" name="recipe" defaultValue={"REC-111"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-111">{"REC-111 · Chilli paneer"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-111-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-111-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" defaultChecked={true} />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-111-a">
                          <input id="rts-p01-mn-111-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-111-x">
                          <input id="rts-p01-mn-111-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-112" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-112-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-112-t">{"Edit item · MN-112 · Prawn tempura"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-112-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-112-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-112"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-112-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-112-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Prawn tempura"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-112-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-112-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-112-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-112-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-112-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-112-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Seafood"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-112-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-112-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"690"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-112-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-112-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-112-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-112-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-112-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-112-r" name="recipe" defaultValue={"REC-112"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-112">{"REC-112 · Prawn tempura"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-112-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-112-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" defaultChecked={true} />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" defaultChecked={true} />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" defaultChecked={true} />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" defaultChecked={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-112-a">
                          <input id="rts-p01-mn-112-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-112-x">
                          <input id="rts-p01-mn-112-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-120" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-120-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-120-t">{"Edit item · MN-120 · Karimeen pollichathu"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-120-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-120-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-120"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-120-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-120-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Karimeen pollichathu"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-120-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-120-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-120-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-120-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-120-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-120-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Seafood"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-120-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-120-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"780"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-120-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-120-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-120-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-120-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-120-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-120-r" name="recipe" defaultValue={"REC-120"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-120">{"REC-120 · Karimeen pollichathu"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-120-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-120-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" defaultChecked={true} />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" defaultChecked={true} />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" defaultChecked={true} />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-120-a">
                          <input id="rts-p01-mn-120-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-120-x">
                          <input id="rts-p01-mn-120-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-121" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-121-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-121-t">{"Edit item · MN-121 · Kerala chicken stew"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-121-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-121-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-121"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-121-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-121-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Kerala chicken stew"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-121-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-121-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-121-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-121-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-121-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-121-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Chicken"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-121-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-121-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"540"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-121-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-121-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-121-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-121-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-121-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-121-r" name="recipe" defaultValue={"REC-121"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-121">{"REC-121 · Kerala chicken stew"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-121-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-121-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" defaultChecked={true} />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-121-a">
                          <input id="rts-p01-mn-121-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-121-x">
                          <input id="rts-p01-mn-121-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-122" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-122-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-122-t">{"Edit item · MN-122 · Malabar fish curry"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-122-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-122-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-122"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-122-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-122-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Malabar fish curry"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-122-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-122-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-122-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-122-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-122-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-122-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Seafood"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-122-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-122-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"620"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-122-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-122-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-122-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-122-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-122-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-122-r" name="recipe" defaultValue={"REC-122"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-122">{"REC-122 · Malabar fish curry"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-122-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-122-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" defaultChecked={true} />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" defaultChecked={true} />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-122-a">
                          <input id="rts-p01-mn-122-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-122-x">
                          <input id="rts-p01-mn-122-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-123" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-123-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-123-t">{"Edit item · MN-123 · Vegetable stew"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-123-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-123-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-123"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-123-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-123-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Vegetable stew"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-123-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-123-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-123-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-123-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-123-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-123-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Vegetarian"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-123-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-123-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"420"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-123-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-123-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-123-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-123-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-123-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-123-r" name="recipe" defaultValue={"REC-123"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-123">{"REC-123 · Vegetable stew"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-123-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-123-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" defaultChecked={true} />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-123-a">
                          <input id="rts-p01-mn-123-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-123-x">
                          <input id="rts-p01-mn-123-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-124" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-124-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-124-t">{"Edit item · MN-124 · Kerala sadya (Sunday lunch)"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-124-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-124-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-124"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-124-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-124-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Kerala sadya (Sunday lunch)"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-124-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-124-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-124-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-124-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-124-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-124-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Vegetarian"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-124-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-124-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"950"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-124-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-124-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-124-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-124-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-124-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-124-r" name="recipe" defaultValue={"REC-124"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-124">{"REC-124 · Kerala sadya (Sunday lunch)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-124-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-124-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-124-a">
                          <input id="rts-p01-mn-124-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-124-x">
                          <input id="rts-p01-mn-124-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-130" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-130-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-130-t">{"Edit item · MN-130 · Paneer butter masala"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-130-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-130-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-130"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-130-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-130-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Paneer butter masala"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-130-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-130-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-130-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-130-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-130-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-130-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Vegetarian"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-130-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-130-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"480"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-130-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-130-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-130-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-130-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-130-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-130-r" name="recipe" defaultValue={"REC-130"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-130">{"REC-130 · Paneer butter masala"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-130-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-130-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" defaultChecked={true} />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" defaultChecked={true} />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-130-a">
                          <input id="rts-p01-mn-130-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-130-x">
                          <input id="rts-p01-mn-130-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-131" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-131-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-131-t">{"Edit item · MN-131 · Butter chicken"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-131-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-131-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-131"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-131-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-131-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Butter chicken"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-131-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-131-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-131-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-131-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-131-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-131-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Chicken"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-131-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-131-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"560"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-131-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-131-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-131-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-131-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-131-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-131-r" name="recipe" defaultValue={"REC-131"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-131">{"REC-131 · Butter chicken"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-131-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-131-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" defaultChecked={true} />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" defaultChecked={true} />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-131-a">
                          <input id="rts-p01-mn-131-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-131-x">
                          <input id="rts-p01-mn-131-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-140" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-140-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-140-t">{"Edit item · MN-140 · Grilled chicken, herb jus"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-140-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-140-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-140"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-140-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-140-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Grilled chicken, herb jus"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-140-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-140-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-140-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-140-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-140-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-140-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Chicken"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-140-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-140-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"640"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-140-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-140-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-140-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-140-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-140-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-140-r" name="recipe" defaultValue={"REC-140"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-140">{"REC-140 · Grilled chicken, herb jus"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-140-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-140-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-140-a">
                          <input id="rts-p01-mn-140-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-140-x">
                          <input id="rts-p01-mn-140-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-141" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-141-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-141-t">{"Edit item · MN-141 · Spaghetti aglio olio"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-141-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-141-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-141"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-141-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-141-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Spaghetti aglio olio"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-141-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-141-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-141-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-141-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-141-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-141-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Pasta"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-141-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-141-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"460"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-141-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-141-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-141-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-141-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-141-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-141-r" name="recipe" defaultValue={"REC-141"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-141">{"REC-141 · Spaghetti aglio olio"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-141-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-141-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" defaultChecked={true} />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" defaultChecked={true} />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-141-a">
                          <input id="rts-p01-mn-141-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-141-x">
                          <input id="rts-p01-mn-141-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-142" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-142-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-142-t">{"Edit item · MN-142 · Fish and chips"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-142-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-142-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-142"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-142-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-142-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Fish and chips"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-142-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-142-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-142-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-142-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-142-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-142-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Seafood"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-142-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-142-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"590"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-142-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-142-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-142-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-142-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-142-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-142-r" name="recipe" defaultValue={"REC-142"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-142">{"REC-142 · Fish and chips"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-142-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-142-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" defaultChecked={true} />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" defaultChecked={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-142-a">
                          <input id="rts-p01-mn-142-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-142-x">
                          <input id="rts-p01-mn-142-x" type="checkbox" role="switch" name="active" />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-145" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-145-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-145-t">{"Edit item · MN-145 · Grilled tiger prawns"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-145-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-145-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-145"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-145-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-145-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Grilled tiger prawns"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-145-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-145-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-145-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-145-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-145-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-145-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Seafood"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-145-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-145-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"1450"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-145-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-145-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-145-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-145-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-145-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-145-r" name="recipe" defaultValue={"REC-145"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-145">{"REC-145 · Grilled tiger prawns"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-145-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-145-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" defaultChecked={true} />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" defaultChecked={true} />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" defaultChecked={true} />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-145-a">
                          <input id="rts-p01-mn-145-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-145-x">
                          <input id="rts-p01-mn-145-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-146" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-146-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-146-t">{"Edit item · MN-146 · Catch of the day (per 100 g)"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-146-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-146-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-146"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-146-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-146-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Catch of the day (per 100 g)"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-146-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-146-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-146-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-146-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-146-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-146-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Seafood"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-146-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-146-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"380"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-146-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-146-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-146-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-146-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-146-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-146-r" name="recipe">
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-146">{"REC-146 · Catch of the day (per 100 g)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-146-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-146-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" defaultChecked={true} />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" defaultChecked={true} />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-146-a">
                          <input id="rts-p01-mn-146-a" type="checkbox" role="switch" name="available" />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-146-x">
                          <input id="rts-p01-mn-146-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-150" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-150-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-150-t">{"Edit item · MN-150 · Malabar parotta"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-150-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-150-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-150"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-150-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-150-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Malabar parotta"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-150-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-150-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-150-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-150-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-150-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-150-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Kerala breads"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-150-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-150-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"90"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-150-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-150-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-150-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-150-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-150-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-150-r" name="recipe" defaultValue={"REC-150"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-150">{"REC-150 · Malabar parotta"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-150-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-150-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" defaultChecked={true} />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-150-a">
                          <input id="rts-p01-mn-150-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-150-x">
                          <input id="rts-p01-mn-150-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-151" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-151-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-151-t">{"Edit item · MN-151 · Appam (2)"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-151-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-151-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-151"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-151-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-151-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Appam (2)"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-151-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-151-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-151-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-151-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-151-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-151-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Kerala breads"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-151-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-151-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"120"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-151-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-151-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-151-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-151-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-151-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-151-r" name="recipe" defaultValue={"REC-151"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-151">{"REC-151 · Appam (2)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-151-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-151-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-151-a">
                          <input id="rts-p01-mn-151-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-151-x">
                          <input id="rts-p01-mn-151-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-152" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-152-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-152-t">{"Edit item · MN-152 · Butter naan"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-152-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-152-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-152"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-152-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-152-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Butter naan"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-152-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-152-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-152-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-152-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-152-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-152-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Tandoor breads"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-152-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-152-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"110"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-152-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-152-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-152-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-152-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-152-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-152-r" name="recipe" defaultValue={"REC-152"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-152">{"REC-152 · Butter naan"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-152-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-152-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" defaultChecked={true} />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-152-a">
                          <input id="rts-p01-mn-152-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-152-x">
                          <input id="rts-p01-mn-152-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-160" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-160-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-160-t">{"Edit item · MN-160 · Kerala matta rice"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-160-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-160-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-160"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-160-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-160-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Kerala matta rice"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-160-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-160-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-160-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-160-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-160-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-160-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Plain rice"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-160-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-160-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"180"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-160-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-160-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-160-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-160-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-160-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-160-r" name="recipe" defaultValue={"REC-160"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-160">{"REC-160 · Kerala matta rice"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-160-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-160-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-160-a">
                          <input id="rts-p01-mn-160-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-160-x">
                          <input id="rts-p01-mn-160-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-161" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-161-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-161-t">{"Edit item · MN-161 · Thalassery chicken biryani"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-161-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-161-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-161"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-161-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-161-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Thalassery chicken biryani"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-161-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-161-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-161-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-161-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-161-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-161-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Biryani"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-161-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-161-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"620"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-161-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-161-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-161-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-161-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-161-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-161-r" name="recipe" defaultValue={"REC-161"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-161">{"REC-161 · Thalassery chicken biryani"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-161-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-161-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" defaultChecked={true} />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-161-a">
                          <input id="rts-p01-mn-161-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-161-x">
                          <input id="rts-p01-mn-161-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-170" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-170-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-170-t">{"Edit item · MN-170 · Palada payasam"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-170-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-170-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-170"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-170-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-170-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Palada payasam"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-170-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-170-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-170-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-170-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-170-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-170-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Kerala sweets"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-170-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-170-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"280"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-170-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-170-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-170-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-170-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-170-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-170-r" name="recipe" defaultValue={"REC-170"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-170">{"REC-170 · Palada payasam"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-170-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-170-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-170-a">
                          <input id="rts-p01-mn-170-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-170-x">
                          <input id="rts-p01-mn-170-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-171" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-171-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-171-t">{"Edit item · MN-171 · Tender coconut pudding"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-171-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-171-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-171"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-171-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-171-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Tender coconut pudding"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-171-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-171-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-171-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-171-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-171-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-171-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Puddings"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-171-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-171-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"320"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-171-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-171-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-171-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-171-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-171-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-171-r" name="recipe" defaultValue={"REC-171"}>
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-171">{"REC-171 · Tender coconut pudding"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-171-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-171-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" defaultChecked={true} />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-171-a">
                          <input id="rts-p01-mn-171-a" type="checkbox" role="switch" name="available" />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-171-x">
                          <input id="rts-p01-mn-171-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-180" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-180-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-180-t">{"Edit item · MN-180 · Fresh lime soda"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-180-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-180-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-180"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-180-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-180-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Fresh lime soda"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-180-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-180-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-180-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-180-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-180-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-180-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Cold drinks"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-180-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-180-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"180"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-180-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-180-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-180-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-180-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-180-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-180-r" name="recipe">
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-180">{"REC-180 · Fresh lime soda"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-180-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-180-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" defaultChecked={true} />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-180-a">
                          <input id="rts-p01-mn-180-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-180-x">
                          <input id="rts-p01-mn-180-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-181" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-181-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-181-t">{"Edit item · MN-181 · South Indian filter coffee"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-181-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-181-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-181"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-181-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-181-n" name="name" type="text" required={true} maxLength="50" defaultValue={"South Indian filter coffee"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-181-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-181-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-181-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-181-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-181-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-181-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Hot drinks"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-181-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-181-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"150"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-181-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-181-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-181-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-181-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-181-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-181-r" name="recipe">
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-181">{"REC-181 · South Indian filter coffee"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-181-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-181-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" defaultChecked={true} />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-181-a">
                          <input id="rts-p01-mn-181-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-181-x">
                          <input id="rts-p01-mn-181-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-182" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-182-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-182-t">{"Edit item · MN-182 · Masala chai"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-182-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-182-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-182"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-182-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-182-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Masala chai"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-182-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-182-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-182-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-182-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-182-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-182-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Hot drinks"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-182-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-182-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"130"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-182-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-182-t" name="tax" required={true} defaultValue={"F"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-182-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-182-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-182-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-182-r" name="recipe">
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-182">{"REC-182 · Masala chai"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-182-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-182-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" defaultChecked={true} />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" defaultChecked={true} />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" defaultChecked={true} />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-182-a">
                          <input id="rts-p01-mn-182-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-182-x">
                          <input id="rts-p01-mn-182-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-190" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-190-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-190-t">{"Edit item · MN-190 · Kingfisher Premium beer 650 ml"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-190-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-190-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-190"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-190-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-190-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Kingfisher Premium beer 650 ml"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-190-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-190-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-190-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-190-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-190-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-190-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Beer"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-190-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-190-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"420"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-190-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-190-t" name="tax" required={true} defaultValue={"L"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-190-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-190-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-190-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-190-r" name="recipe">
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-190">{"REC-190 · Kingfisher Premium beer 650 ml"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-190-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-190-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" defaultChecked={true} />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" defaultChecked={true} />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-190-a">
                          <input id="rts-p01-mn-190-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-190-x">
                          <input id="rts-p01-mn-190-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-191" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-191-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-191-t">{"Edit item · MN-191 · Old Monk rum 60 ml"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-191-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-191-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-191"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-191-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-191-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Old Monk rum 60 ml"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-191-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-191-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-191-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-191-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-191-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-191-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Rum"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-191-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-191-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"340"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-191-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-191-t" name="tax" required={true} defaultValue={"L"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-191-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-191-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-191-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-191-r" name="recipe">
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-191">{"REC-191 · Old Monk rum 60 ml"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-191-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-191-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-191-a">
                          <input id="rts-p01-mn-191-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-191-x">
                          <input id="rts-p01-mn-191-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-192" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-192-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-192-t">{"Edit item · MN-192 · House red wine (glass)"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-192-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-192-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-192"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-192-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-192-n" name="name" type="text" required={true} maxLength="50" defaultValue={"House red wine (glass)"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-192-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-192-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-192-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-192-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-192-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-192-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Wine"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-192-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-192-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"650"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-192-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-192-t" name="tax" required={true} defaultValue={"L"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-192-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-192-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-192-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-192-r" name="recipe">
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-192">{"REC-192 · House red wine (glass)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-192-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-192-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" defaultChecked={true} />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" defaultChecked={true} />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-192-a">
                          <input id="rts-p01-mn-192-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-192-x">
                          <input id="rts-p01-mn-192-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="rts-p01-mn-193" data-code="RTS-P01" role="dialog" aria-modal="true" aria-labelledby="rts-p01-mn-193-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="rts-p01-mn-193-t">{"Edit item · MN-193 · Cochin Sunset (cocktail)"}</h2>
                      <p className="modal__desc">{"Create or edit a menu item – published to the POS on save (RTS-X02). Written to the setup audit log (RTS-X03) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-193-c">
                          {"Item code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-193-c" name="code" type="text" required={true} maxLength="8" pattern={"MN-[0-9]{3}"} defaultValue={"MN-193"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-193-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-193-n" name="name" type="text" required={true} maxLength="50" defaultValue={"Cochin Sunset (cocktail)"} />
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="rts-p01-mn-193-d">{"Description"}</label>
                        <textarea className="field__input" id="rts-p01-mn-193-d" name="description" rows="3" maxLength="200" defaultValue={""} />
                        <span className="field__hint">{"Shown on the printed menu and the QR menu"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="rts-p01-mn-193-g">
                          {"Category / sub-category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-193-g" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="Breakfast">{"Breakfast"}</option>
                            <option value="Soups">{"Soups"}</option>
                            <option value="Starters">{"Starters"}</option>
                            <option value="Mains – Kerala">{"Mains – Kerala"}</option>
                            <option value="Mains – Indian">{"Mains – Indian"}</option>
                            <option value="Mains – Continental">{"Mains – Continental"}</option>
                            <option value="Breads">{"Breads"}</option>
                            <option value="Rice">{"Rice"}</option>
                            <option value="Desserts">{"Desserts"}</option>
                            <option value="Beverages">{"Beverages"}</option>
                            <option value="Liquor">{"Liquor"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-193-ss">{"Sub-sub-category"}</label>
                        <input className="field__input" id="rts-p01-mn-193-ss" name="subsubcategory" type="text" list="dl-mss" maxLength="40" autoComplete="off" placeholder="e.g. Seafood" defaultValue={"Cocktails"} />
                        <span className="field__hint">{"Optional third level – pick one or type a new one (e.g. Seafood, Chicken, Vegetarian)"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="rts-p01-mn-193-p">
                          {"Price – Normal (₹) "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="rts-p01-mn-193-p" name="price" type="number" required={true} min="1" step="1" defaultValue={"520"} />
                        <span className="field__hint">{"Room service +10 %, member −10 %, happy hour −30 % on liquor (RTS-05)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-193-t">
                          {"Tax class / HSN-SAC "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-193-t" name="tax" required={true} defaultValue={"L"}>
                            <option value="F">{"Restaurant service 5 % · SAC 996331"}</option>
                            <option value="L">{"Liquor – outside GST (KGST) · –"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From Tax Setup – every sellable item needs one (BR-01)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-193-s">
                          {"Station "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-193-s" name="station" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Kitchen station for the KOT"}</option>
                            <option value="Hot kitchen">{"Hot kitchen"}</option>
                            <option value="Tandoor">{"Tandoor"}</option>
                            <option value="Cold kitchen / pastry">{"Cold kitchen / pastry"}</option>
                            <option value="Grill">{"Grill"}</option>
                            <option value="Bar">{"Bar"}</option>
                            <option value="Beverage counter">{"Beverage counter"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Kitchen Display Setup stations (KTS)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-193-r">{"Recipe"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="rts-p01-mn-193-r" name="recipe">
                            <option value="">{"No recipe yet"}</option>
                            <option value="REC-193">{"REC-193 · Cochin Sunset (cocktail)"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Cost Control recipe – optional"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="rts-p01-mn-193-i">{"Picture"}</label>
                        <input className="field__input" id="rts-p01-mn-193-i" type="file" name="picture" accept="image/*" />
                      </div>
                      <fieldset className="field fd-fieldset field--wide ">
                        <legend className="field__label">
                          {"Veg / non-veg / egg "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="V" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="N" required={true} />
                            <span className="check__box" />
                            {"Non-veg"}
                          </label>
                          <label className="check check--radio ">
                            <input className="check__input" type="radio" name="diet" value="E" required={true} />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                        </div>
                        <span className="field__hint">{"Shown with the symbol"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Outlets / menus "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Travancore Restaurant" />
                            <span className="check__box" />
                            {"Travancore Restaurant"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Seafood Grill" />
                            <span className="check__box" />
                            {"Seafood Grill"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="Cochin Trade Bar" defaultChecked={true} />
                            <span className="check__box" />
                            {"Cochin Trade Bar"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="outlets" value="In-room Dining" />
                            <span className="check__box" />
                            {"In-room Dining"}
                          </label>
                        </div>
                        <span className="field__hint">{"Where it is sold – liquor only in licensed outlets (BR-04)"}</span>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Allergens"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Nuts" />
                            <span className="check__box" />
                            {"Nuts"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Gluten" />
                            <span className="check__box" />
                            {"Gluten"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Dairy" />
                            <span className="check__box" />
                            {"Dairy"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Shellfish" />
                            <span className="check__box" />
                            {"Shellfish"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Egg" />
                            <span className="check__box" />
                            {"Egg"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="allergens" value="Soy" />
                            <span className="check__box" />
                            {"Soy"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">{"Modifier groups"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Spice level" />
                            <span className="check__box" />
                            {"Spice level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Cooking level" />
                            <span className="check__box" />
                            {"Cooking level"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Choice of side" />
                            <span className="check__box" />
                            {"Choice of side"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Add-ons" />
                            <span className="check__box" />
                            {"Add-ons"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Egg style" />
                            <span className="check__box" />
                            {"Egg style"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="modifiers" value="Milk choice" />
                            <span className="check__box" />
                            {"Milk choice"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="rts-p01-mn-193-a">
                          <input id="rts-p01-mn-193-a" type="checkbox" role="switch" name="available" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Available today (86)"}
                        </label>
                        <span className="field__hint">{"Off = 86’d – not available today; set from the POS or the kitchen screen."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="rts-p01-mn-193-x">
                          <input id="rts-p01-mn-193-x" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Items no longer sold are made inactive, never deleted."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="copy" data-code="RTS-03-copy" role="dialog" aria-modal="true" aria-labelledby="copy-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/restaurant-pos-setup/rts-03-menu-and-items/#copied" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="copy-t">{"Copy to outlet"}</h2>
                      <p className="modal__desc">{"Copies the chosen items to another outlet with their prices."}</p>
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
                        <label className="field__label" htmlFor="cp-f">
                          {"From outlet "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="cp-f" name="from" required={true} defaultValue={"TRV"}>
                            <option value="TRV">{"Travancore Restaurant"}</option>
                            <option value="SFG">{"Seafood Grill"}</option>
                            <option value="BAR">{"Cochin Trade Bar"}</option>
                            <option value="IRD">{"In-room Dining"}</option>
                            <option>{"Pool Café"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="cp-t">
                          {"To outlet "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="cp-t" name="to" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose"}</option>
                            <option value="SFG">{"Seafood Grill"}</option>
                            <option value="BAR">{"Cochin Trade Bar"}</option>
                            <option value="IRD">{"In-room Dining"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset field--wide">
                        <legend className="field__label">
                          {"Categories "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="cats" value="Breakfast" />
                            <span className="check__box" />
                            {"Breakfast"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="cats" value="Soups" />
                            <span className="check__box" />
                            {"Soups"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="cats" value="Starters" />
                            <span className="check__box" />
                            {"Starters"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="cats" value="Mains – Kerala" />
                            <span className="check__box" />
                            {"Mains – Kerala"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="cats" value="Mains – Indian" />
                            <span className="check__box" />
                            {"Mains – Indian"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="cats" value="Mains – Continental" />
                            <span className="check__box" />
                            {"Mains – Continental"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="cats" value="Breads" />
                            <span className="check__box" />
                            {"Breads"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="cats" value="Rice" />
                            <span className="check__box" />
                            {"Rice"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="cats" value="Desserts" />
                            <span className="check__box" />
                            {"Desserts"}
                          </label>
                        </div>
                        <span className="field__hint">{"Liquor only to licensed outlets (BR-04)"}</span>
                      </fieldset>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Copy"}</button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="t-added" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#plus-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Item added and published"}
                  <small>{"MN-194 Kappa and fish curry (Travancore, IRD) · ₹540.00 · hot kitchen. The menu publisher (RTS-X02) pushed the change to the 6 POS terminals."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-rec" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Item saved and published"}
                  <small>{"The menu publisher (RTS-X02) pushed the change to the 6 POS terminals. Bills keep the price at the time of ordering (BR-03)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-copied" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#copy" />
                </svg>
                <div className="fd-toast__text">
                  {"Items copied"}
                  <small>{"Beverages copied from Travancore Restaurant – 3 items now on the new outlet’s menu. The menu publisher (RTS-X02) pushed the change to the 6 POS terminals."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <datalist id="dl-mss">
                <option value="Buffet" />
                <option value="Egg dishes" />
                <option value="South Indian" />
                <option value="Kerala" />
                <option value="Continental" />
                <option value="Vegetarian" />
                <option value="Chicken" />
                <option value="Beef" />
                <option value="Paneer" />
                <option value="Seafood" />
                <option value="Pasta" />
                <option value="Kerala breads" />
                <option value="Tandoor breads" />
                <option value="Plain rice" />
                <option value="Biryani" />
                <option value="Kerala sweets" />
                <option value="Puddings" />
                <option value="Cold drinks" />
                <option value="Hot drinks" />
                <option value="Beer" />
                <option value="Rum" />
                <option value="Wine" />
                <option value="Cocktails" />
              </datalist>
            </main>
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}
