// GENERATED from public/engineering-setup/mts-06-assets/index.html by scripts/convert_legacy.py.
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
    "href": "/engineering-setup/mts-06-assets/mts-06-assets.css",
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

export default function EngineeringSetupMts06Assets() {
  return (
    <ScreenShell title="Assets" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="MTS-06" data-code="MTS-06" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="MTS-01" aria-current="page" title="Engineering Setup Home" to={"/engineering-setup/mts-01-engineering-setup-home"}>
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
            <main className="app__content" id="main" data-code="MTS-06" tabIndex="-1">
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
                        <Link to={"/engineering-setup/mts-01-engineering-setup-home"}>{"Engineering Setup"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Assets"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Assets"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"MTS-06"}</span>
                  <div className="page-header__actions">
                    <a className="btn ph-ic" href="/engineering-setup/mts-01-engineering-setup-home/#mts-p03" data-leads-to="MTS-P03">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#upload" />
                      </svg>
                      {"Import"}
                    </a>
                    <Link className="btn" data-leads-to="MTS-O01" to={"/engineering-setup/mts-o01-asset-and-location-qr-labels"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"QR labels"}
                    </Link>
                    <a className="btn btn--primary" href="#mts-p02" data-leads-to="MTS-P02">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add asset"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="added" />
                <i className="pm" id="saved-rec" />
              </div>
              <p className="ln-k">
                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                {"26 assets imported on 12 Oct 2026 (MTS-P03) · 17 critical · 3 critical assets still need a PM schedule (BR-01). Laundry machines keep their Laundry Setup numbers (LAS-07)."}
              </p>
              <div className="pgw">
                <div className="s-scroll">
                  <table className="dt__table" data-code="MTS-06-list" data-mc="">
                    <caption className="sr-only">{"Asset master"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">{"Asset no."}</th>
                        <th scope="col">{"Name / category / make"}</th>
                        <th scope="col">{"Location"}</th>
                        <th scope="col">{"Installed / warranty"}</th>
                        <th scope="col">{"AMC"}</th>
                        <th scope="col">{"Status"}</th>
                        <th scope="col">
                          <span className="sr-only">{"Edit"}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-001" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-001"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1103"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"DG set 1"}</strong>
                          <span className="fd-sub">{"DG set · Kirloskar KG2-500 · SN KG5-21877 · 500 kVA"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"DG room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"12 Mar 2019"}
                          <span className="fd-sub">{"warranty to 11 Mar 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-02"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-001" aria-label="Edit AS-ENG-001">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-002" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-002"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1104"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"DG set 2"}</strong>
                          <span className="fd-sub">{"DG set · Kirloskar KG1-320 · SN KG3-30412 · 320 kVA"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"DG room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"12 Mar 2019"}
                          <span className="fd-sub">{"warranty to 11 Mar 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-02"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-002" aria-label="Edit AS-ENG-002">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-003" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-003"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1101"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make" data-w="">
                          <strong>{"Transformer"}</strong>
                          <span className="fd-sub">{"Transformer · Kirloskar Electric · 1000 kVA · 11 kV / 433 V"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"HT yard and LT panel room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"2 Jan 2019"}
                          <span className="fd-sub">{"warranty to 1 Jan 2024"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-eng-003" aria-label="Edit AS-ENG-003">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-004" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-004"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1102"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Main LT panel"}</strong>
                          <span className="fd-sub">{"Panel · Siemens · 2500 A ACB"}</span>
                          <span className="mt-warn">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"No PM (BR-01)"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"HT yard and LT panel room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"2 Jan 2019"}
                          <span className="fd-sub">{"warranty to 1 Jan 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-eng-004" aria-label="Edit AS-ENG-004">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-005" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-005"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1240"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"UPS – front office and IT"}</strong>
                          <span className="fd-sub">{"UPS · APC Galaxy VS · 60 kVA"}</span>
                          <span className="mt-warn">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"No PM (BR-01)"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Location">{"Security and fire control room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"28 Sep 2023"}
                          <span className="fd-sub">{"warranty to 30 Sep 2026"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--cancelled">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"Expired"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-005" aria-label="Edit AS-ENG-005">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-006" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-006"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1120"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make" data-w="">
                          <strong>{"VRV outdoor bank A (floors 1–3)"}</strong>
                          <span className="fd-sub">{"Chiller / VRV outdoor · Daikin VRV X · 6 × 20 HP"}</span>
                        </td>
                        <td className="dt__td" data-label="Location">{"Terrace – VRV yard and water tanks"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"15 Feb 2019"}
                          <span className="fd-sub">{"warranty to 14 Feb 2024"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2025-07"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-006" aria-label="Edit AS-ENG-006">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-007" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-007"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1121"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make" data-w="">
                          <strong>{"VRV outdoor bank B (floors 4–5)"}</strong>
                          <span className="fd-sub">{"Chiller / VRV outdoor · Daikin VRV X · 4 × 20 HP"}</span>
                        </td>
                        <td className="dt__td" data-label="Location">{"Terrace – VRV yard and water tanks"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"15 Feb 2019"}
                          <span className="fd-sub">{"warranty to 14 Feb 2024"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2025-07"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-007" aria-label="Edit AS-ENG-007">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-008" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-008"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1122"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"AHU – lobby"}</strong>
                          <span className="fd-sub">{"AHU / FCU · Daikin · 12,000 CFM"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Lobby"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"15 Feb 2019"}
                          <span className="fd-sub">{"warranty to 14 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2025-07"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-008" aria-label="Edit AS-ENG-008">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-009" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-009"}</strong>
                          </a>
                          <span className="fd-sub">{"FA-1301"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Split AC – Ayurvedic Centre"}</strong>
                          <span className="fd-sub">{"Split AC · Daikin FTKF · 2 TR"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Ayurvedic Centre"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"10 Jun 2024"}
                          <span className="fd-sub">{"warranty to 9 Jun 2027"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-eng-009" aria-label="Edit AS-ENG-009">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-010" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-010"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1130"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Domestic transfer pump 1"}</strong>
                          <span className="fd-sub">{"Pump · Kirloskar KDS · 7.5 HP"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Pump room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"20 Jan 2019"}
                          <span className="fd-sub">{"warranty to 19 Jan 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-eng-010" aria-label="Edit AS-ENG-010">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-011" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-011"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1135"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make" data-w="">
                          <strong>{"Heat pump water heater"}</strong>
                          <span className="fd-sub">{"Boiler / heat pump · Racold ThermoHeat · 2 × 3,000 L/h"}</span>
                          <span className="mt-warn">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"No PM (BR-01)"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Heat pump room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"5 Mar 2019"}
                          <span className="fd-sub">{"warranty to 4 Mar 2022"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-eng-011" aria-label="Edit AS-ENG-011">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-012" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-012"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1140"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Lift 1 (guest)"}</strong>
                          <span className="fd-sub">{"Lift · Kone MonoSpace 500 · 13 persons"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Lift machine room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"1 Mar 2019"}
                          <span className="fd-sub">{"warranty to 28 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-01"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-012" aria-label="Edit AS-ENG-012">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-013" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-013"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1141"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Lift 2 (guest)"}</strong>
                          <span className="fd-sub">{"Lift · Kone MonoSpace 500 · 13 persons"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Lift machine room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"1 Mar 2019"}
                          <span className="fd-sub">{"warranty to 28 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-01"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-013" aria-label="Edit AS-ENG-013">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-014" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-014"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1142"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Lift 3 (service)"}</strong>
                          <span className="fd-sub">{"Lift · Kone MonoSpace · 1,600 kg"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Lift machine room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"1 Mar 2019"}
                          <span className="fd-sub">{"warranty to 28 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-01"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-014" aria-label="Edit AS-ENG-014">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-015" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-015"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1150"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make" data-w="">
                          <strong>{"Fire pump set (main + jockey)"}</strong>
                          <span className="fd-sub">{"Fire pump / sprinkler · Kirloskar · 2,280 LPM"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Fire pump room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"10 Feb 2019"}
                          <span className="fd-sub">{"warranty to 9 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-03"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-015" aria-label="Edit AS-ENG-015">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-016" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-016"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1151"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Fire alarm panel"}</strong>
                          <span className="fd-sub">{"Fire alarm panel · Honeywell Notifier · 4 loops"}</span>
                        </td>
                        <td className="dt__td" data-label="Location">{"Security and fire control room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"10 Feb 2019"}
                          <span className="fd-sub">{"warranty to 9 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-03"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-016" aria-label="Edit AS-ENG-016">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-017" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-017"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1160"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make" data-w2="">
                          <strong>{"STP"}</strong>
                          <span className="fd-sub">{"STP · MBBR · 120 KLD"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"STP"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"1 Feb 2019"}
                          <span className="fd-sub">{"warranty to 31 Jan 2020"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-05"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-017" aria-label="Edit AS-ENG-017">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-018" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-018"}</strong>
                          </a>
                          <span className="fd-sub">{"FA-1161"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"WTP and softener"}</strong>
                          <span className="fd-sub">{"WTP · Ion Exchange · 5 m³/h"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"WTP and softener"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"1 Feb 2019"}
                          <span className="fd-sub">{"warranty to 31 Jan 2020"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-05"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-018" aria-label="Edit AS-ENG-018">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-019" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-019"}</strong>
                          </a>
                          <span className="fd-sub">{"Critical · FA-1170"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make" data-w="">
                          <strong>{"Cold room – kitchen"}</strong>
                          <span className="fd-sub">{"Cold room · Blue Star · 2 chambers (+2 °C / −18 °C)"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Main kitchen"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"20 Feb 2019"}
                          <span className="fd-sub">{"warranty to 19 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-06"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-019" aria-label="Edit AS-ENG-019">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-020" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-020"}</strong>
                          </a>
                          <span className="fd-sub">{"FA-1235"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Combi oven"}</strong>
                          <span className="fd-sub">{"Kitchen equipment · Rational iCombi Pro 10-1/1"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Main kitchen"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"18 Aug 2023"}
                          <span className="fd-sub">{"warranty to 17 Aug 2025"}</span>
                        </td>
                        <td className="dt__td nw" data-label="AMC" data-w2="">{"AMC-2026-06"}</td>
                        <td className="dt__td nw" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Active"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn btn--sm" href="#mts-p02-as-eng-020" aria-label="Edit AS-ENG-020">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-ldy-001" data-leads-to="MTS-P02">
                            <strong>{"AS-LDY-001"}</strong>
                          </a>
                          <span className="fd-sub">{"FA-1180"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make" data-w="">
                          <strong>{"WE-01 washer extractor 25 kg"}</strong>
                          <span className="fd-sub">{"Laundry machine · Electrolux WH6-27 · 25 kg (Laundry Setup LAS-07)"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Laundry"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"1 Mar 2019"}
                          <span className="fd-sub">{"warranty to 28 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-ldy-001" aria-label="Edit AS-LDY-001">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-ldy-004" data-leads-to="MTS-P02">
                            <strong>{"AS-LDY-004"}</strong>
                          </a>
                          <span className="fd-sub">{"FA-1183"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make" data-w="">
                          <strong>{"TD-01 tumble dryer 35 kg"}</strong>
                          <span className="fd-sub">{"Laundry machine · Electrolux TD6-37 · 35 kg (LAS-07)"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Laundry"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"1 Mar 2019"}
                          <span className="fd-sub">{"warranty to 28 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-ldy-004" aria-label="Edit AS-LDY-004">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-021" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-021"}</strong>
                          </a>
                          <span className="fd-sub">{"FA-1190"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Guest room TVs (92)"}</strong>
                          <span className="fd-sub">{"TV · Samsung HG43 hospitality · 43 inch"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Guest rooms"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"1 Mar 2019"}
                          <span className="fd-sub">{"warranty to 28 Feb 2022"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-eng-021" aria-label="Edit AS-ENG-021">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-022" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-022"}</strong>
                          </a>
                          <span className="fd-sub">{"FA-1191"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make" data-w="">
                          <strong>{"Guest room door locks (92)"}</strong>
                          <span className="fd-sub">{"Door lock · ASSA ABLOY VingCard Essence · RFID"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Guest rooms"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"1 Mar 2019"}
                          <span className="fd-sub">{"warranty to 28 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-eng-022" aria-label="Edit AS-ENG-022">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-023" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-023"}</strong>
                          </a>
                          <span className="fd-sub">{"FA-1192"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Guest room safes (92)"}</strong>
                          <span className="fd-sub">{"Safe · Hafele · digital, 20 L"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Guest rooms"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"1 Mar 2019"}
                          <span className="fd-sub">{"warranty to 28 Feb 2021"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-eng-023" aria-label="Edit AS-ENG-023">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="is-off">
                        <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                          <a className="fd-link" href="#mts-p02-as-eng-024" data-leads-to="MTS-P02">
                            <strong>{"AS-ENG-024"}</strong>
                          </a>
                          <span className="fd-sub">{"FA-0861"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"DG set 3 (old)"}</strong>
                          <span className="fd-sub">{"DG set · Kirloskar · 125 kVA"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"DG room"}</td>
                        <td className="dt__td nw" data-label="Installed / warranty">
                          {"5 May 2012"}
                          <span className="fd-sub">{"warranty to 4 May 2014"}</span>
                        </td>
                        <td className="dt__td nw" data-e="">
                          <span className="fd-muted">{"–"}</span>
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
                          <a className="btn btn--sm" href="#mts-p02-as-eng-024" aria-label="Edit AS-ENG-024">{"Edit"}</a>
                        </td>
                      </tr>
                      <tr className="la-new">
                        <td className="dt__td nw" data-label="Asset no." data-w="" data-t="">
                          <strong>{"AS-ENG-025"}</strong>
                          <span className="fd-sub">{"Critical · FA-1251"}</span>
                        </td>
                        <td className="dt__td" data-label="Name / category / make">
                          <strong>{"Pool filtration pump"}</strong>
                          <span className="fd-sub">{"Pump · Kirloskar · 5 HP"}</span>
                        </td>
                        <td className="dt__td" data-label="Location" data-w2="">{"Pool deck"}</td>
                        <td className="dt__td" data-label="Installed / warranty">
                          {"22 Oct 2026"}
                          <span className="fd-sub">{"warranty to 21 Oct 2028"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
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
              <div className="modal modal--full" id="mts-p02" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#added" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-t">{"Add asset"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-025"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-n" name="name" type="text" required={true} maxLength="60" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-m" name="make" type="text" maxLength="120" defaultValue={""} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-i" name="install" type="text" maxLength="11" defaultValue={""} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-w" name="warranty" type="text" maxLength="11" defaultValue={""} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-f" name="fixed_asset" type="text" maxLength="10" defaultValue={""} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-k">
                          <input id="mts-p02-k" type="checkbox" role="switch" name="critical" />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-s">
                          <input id="mts-p02-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-001" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-001-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-001-t">{"Edit asset · AS-ENG-001 · DG set 1"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-001-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-001-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-001"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-001-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-001-n" name="name" type="text" required={true} maxLength="60" defaultValue={"DG set 1"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-001-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-001-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-001-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-001-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-001-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-001-m" name="make" type="text" maxLength="120" defaultValue={"Kirloskar KG2-500 · SN KG5-21877 · 500 kVA"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-001-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-001-i" name="install" type="text" maxLength="11" defaultValue={"12 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-001-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-001-w" name="warranty" type="text" maxLength="11" defaultValue={"11 Mar 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-001-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-001-a" name="amc" defaultValue={"AMC-2026-02"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-001-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-001-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1103"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-001-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-001-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-001-k">
                          <input id="mts-p02-as-eng-001-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-001-s">
                          <input id="mts-p02-as-eng-001-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-002" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-002-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-002-t">{"Edit asset · AS-ENG-002 · DG set 2"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-002-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-002-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-002"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-002-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-002-n" name="name" type="text" required={true} maxLength="60" defaultValue={"DG set 2"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-002-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-002-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-002-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-002-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-002-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-002-m" name="make" type="text" maxLength="120" defaultValue={"Kirloskar KG1-320 · SN KG3-30412 · 320 kVA"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-002-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-002-i" name="install" type="text" maxLength="11" defaultValue={"12 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-002-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-002-w" name="warranty" type="text" maxLength="11" defaultValue={"11 Mar 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-002-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-002-a" name="amc" defaultValue={"AMC-2026-02"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-002-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-002-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1104"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-002-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-002-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-002-k">
                          <input id="mts-p02-as-eng-002-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-002-s">
                          <input id="mts-p02-as-eng-002-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-003" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-003-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-003-t">{"Edit asset · AS-ENG-003 · Transformer"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-003-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-003-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-003"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-003-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-003-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Transformer"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-003-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-003-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-003-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-003-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-003-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-003-m" name="make" type="text" maxLength="120" defaultValue={"Kirloskar Electric · 1000 kVA · 11 kV / 433 V"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-003-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-003-i" name="install" type="text" maxLength="11" defaultValue={"2 Jan 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-003-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-003-w" name="warranty" type="text" maxLength="11" defaultValue={"1 Jan 2024"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-003-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-003-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-003-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-003-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1101"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-003-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-003-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-003-k">
                          <input id="mts-p02-as-eng-003-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-003-s">
                          <input id="mts-p02-as-eng-003-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-004" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-004-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-004-t">{"Edit asset · AS-ENG-004 · Main LT panel"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-004-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-004-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-004"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-004-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-004-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Main LT panel"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-004-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-004-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-004-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-004-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-004-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-004-m" name="make" type="text" maxLength="120" defaultValue={"Siemens · 2500 A ACB"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-004-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-004-i" name="install" type="text" maxLength="11" defaultValue={"2 Jan 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-004-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-004-w" name="warranty" type="text" maxLength="11" defaultValue={"1 Jan 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-004-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-004-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-004-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-004-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1102"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-004-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-004-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-004-k">
                          <input id="mts-p02-as-eng-004-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-004-s">
                          <input id="mts-p02-as-eng-004-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-005" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-005-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-005-t">{"Edit asset · AS-ENG-005 · UPS – front office and IT"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-005-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-005-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-005"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-005-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-005-n" name="name" type="text" required={true} maxLength="60" defaultValue={"UPS – front office and IT"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-005-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-005-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-005-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-005-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-005-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-005-m" name="make" type="text" maxLength="120" defaultValue={"APC Galaxy VS · 60 kVA"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-005-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-005-i" name="install" type="text" maxLength="11" defaultValue={"28 Sep 2023"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-005-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-005-w" name="warranty" type="text" maxLength="11" defaultValue={"30 Sep 2026"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-005-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-005-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-005-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-005-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1240"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-005-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-005-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-005-k">
                          <input id="mts-p02-as-eng-005-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-005-s">
                          <input id="mts-p02-as-eng-005-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-006" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-006-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-006-t">{"Edit asset · AS-ENG-006 · VRV outdoor bank A (floors 1–3)"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-006-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-006-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-006"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-006-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-006-n" name="name" type="text" required={true} maxLength="60" defaultValue={"VRV outdoor bank A (floors 1–3)"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-006-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-006-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-006-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-006-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-006-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-006-m" name="make" type="text" maxLength="120" defaultValue={"Daikin VRV X · 6 × 20 HP"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-006-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-006-i" name="install" type="text" maxLength="11" defaultValue={"15 Feb 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-006-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-006-w" name="warranty" type="text" maxLength="11" defaultValue={"14 Feb 2024"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-006-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-006-a" name="amc" defaultValue={"AMC-2025-07"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-006-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-006-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1120"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-006-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-006-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-006-k">
                          <input id="mts-p02-as-eng-006-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-006-s">
                          <input id="mts-p02-as-eng-006-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-007" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-007-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-007-t">{"Edit asset · AS-ENG-007 · VRV outdoor bank B (floors 4–5)"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-007-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-007-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-007"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-007-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-007-n" name="name" type="text" required={true} maxLength="60" defaultValue={"VRV outdoor bank B (floors 4–5)"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-007-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-007-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-007-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-007-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-007-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-007-m" name="make" type="text" maxLength="120" defaultValue={"Daikin VRV X · 4 × 20 HP"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-007-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-007-i" name="install" type="text" maxLength="11" defaultValue={"15 Feb 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-007-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-007-w" name="warranty" type="text" maxLength="11" defaultValue={"14 Feb 2024"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-007-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-007-a" name="amc" defaultValue={"AMC-2025-07"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-007-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-007-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1121"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-007-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-007-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-007-k">
                          <input id="mts-p02-as-eng-007-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-007-s">
                          <input id="mts-p02-as-eng-007-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-008" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-008-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-008-t">{"Edit asset · AS-ENG-008 · AHU – lobby"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-008-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-008-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-008"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-008-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-008-n" name="name" type="text" required={true} maxLength="60" defaultValue={"AHU – lobby"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-008-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-008-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-008-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-008-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-008-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-008-m" name="make" type="text" maxLength="120" defaultValue={"Daikin · 12,000 CFM"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-008-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-008-i" name="install" type="text" maxLength="11" defaultValue={"15 Feb 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-008-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-008-w" name="warranty" type="text" maxLength="11" defaultValue={"14 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-008-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-008-a" name="amc" defaultValue={"AMC-2025-07"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-008-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-008-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1122"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-008-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-008-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-008-k">
                          <input id="mts-p02-as-eng-008-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-008-s">
                          <input id="mts-p02-as-eng-008-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-009" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-009-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-009-t">{"Edit asset · AS-ENG-009 · Split AC – Ayurvedic Centre"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-009-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-009-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-009"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-009-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-009-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Split AC – Ayurvedic Centre"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-009-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-009-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-009-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-009-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-009-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-009-m" name="make" type="text" maxLength="120" defaultValue={"Daikin FTKF · 2 TR"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-009-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-009-i" name="install" type="text" maxLength="11" defaultValue={"10 Jun 2024"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-009-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-009-w" name="warranty" type="text" maxLength="11" defaultValue={"9 Jun 2027"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-009-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-009-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-009-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-009-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1301"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-009-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-009-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-009-k">
                          <input id="mts-p02-as-eng-009-k" type="checkbox" role="switch" name="critical" />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-009-s">
                          <input id="mts-p02-as-eng-009-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-010" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-010-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-010-t">{"Edit asset · AS-ENG-010 · Domestic transfer pump 1"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-010-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-010-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-010"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-010-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-010-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Domestic transfer pump 1"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-010-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-010-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-010-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-010-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-010-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-010-m" name="make" type="text" maxLength="120" defaultValue={"Kirloskar KDS · 7.5 HP"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-010-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-010-i" name="install" type="text" maxLength="11" defaultValue={"20 Jan 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-010-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-010-w" name="warranty" type="text" maxLength="11" defaultValue={"19 Jan 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-010-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-010-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-010-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-010-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1130"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-010-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-010-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-010-k">
                          <input id="mts-p02-as-eng-010-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-010-s">
                          <input id="mts-p02-as-eng-010-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-011" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-011-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-011-t">{"Edit asset · AS-ENG-011 · Heat pump water heater"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-011-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-011-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-011"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-011-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-011-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Heat pump water heater"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-011-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-011-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-011-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-011-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-011-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-011-m" name="make" type="text" maxLength="120" defaultValue={"Racold ThermoHeat · 2 × 3,000 L/h"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-011-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-011-i" name="install" type="text" maxLength="11" defaultValue={"5 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-011-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-011-w" name="warranty" type="text" maxLength="11" defaultValue={"4 Mar 2022"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-011-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-011-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-011-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-011-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1135"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-011-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-011-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-011-k">
                          <input id="mts-p02-as-eng-011-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-011-s">
                          <input id="mts-p02-as-eng-011-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-012" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-012-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-012-t">{"Edit asset · AS-ENG-012 · Lift 1 (guest)"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-012-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-012-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-012"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-012-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-012-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Lift 1 (guest)"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-012-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-012-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-012-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-012-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-012-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-012-m" name="make" type="text" maxLength="120" defaultValue={"Kone MonoSpace 500 · 13 persons"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-012-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-012-i" name="install" type="text" maxLength="11" defaultValue={"1 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-012-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-012-w" name="warranty" type="text" maxLength="11" defaultValue={"28 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-012-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-012-a" name="amc" defaultValue={"AMC-2026-01"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-012-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-012-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1140"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-012-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-012-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-012-k">
                          <input id="mts-p02-as-eng-012-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-012-s">
                          <input id="mts-p02-as-eng-012-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-013" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-013-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-013-t">{"Edit asset · AS-ENG-013 · Lift 2 (guest)"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-013-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-013-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-013"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-013-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-013-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Lift 2 (guest)"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-013-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-013-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-013-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-013-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-013-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-013-m" name="make" type="text" maxLength="120" defaultValue={"Kone MonoSpace 500 · 13 persons"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-013-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-013-i" name="install" type="text" maxLength="11" defaultValue={"1 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-013-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-013-w" name="warranty" type="text" maxLength="11" defaultValue={"28 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-013-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-013-a" name="amc" defaultValue={"AMC-2026-01"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-013-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-013-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1141"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-013-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-013-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-013-k">
                          <input id="mts-p02-as-eng-013-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-013-s">
                          <input id="mts-p02-as-eng-013-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-014" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-014-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-014-t">{"Edit asset · AS-ENG-014 · Lift 3 (service)"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-014-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-014-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-014"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-014-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-014-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Lift 3 (service)"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-014-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-014-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-014-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-014-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-014-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-014-m" name="make" type="text" maxLength="120" defaultValue={"Kone MonoSpace · 1,600 kg"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-014-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-014-i" name="install" type="text" maxLength="11" defaultValue={"1 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-014-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-014-w" name="warranty" type="text" maxLength="11" defaultValue={"28 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-014-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-014-a" name="amc" defaultValue={"AMC-2026-01"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-014-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-014-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1142"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-014-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-014-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-014-k">
                          <input id="mts-p02-as-eng-014-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-014-s">
                          <input id="mts-p02-as-eng-014-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-015" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-015-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-015-t">{"Edit asset · AS-ENG-015 · Fire pump set (main + jockey)"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-015-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-015-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-015"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-015-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-015-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Fire pump set (main + jockey)"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-015-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-015-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-015-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-015-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-015-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-015-m" name="make" type="text" maxLength="120" defaultValue={"Kirloskar · 2,280 LPM"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-015-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-015-i" name="install" type="text" maxLength="11" defaultValue={"10 Feb 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-015-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-015-w" name="warranty" type="text" maxLength="11" defaultValue={"9 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-015-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-015-a" name="amc" defaultValue={"AMC-2026-03"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-015-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-015-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1150"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-015-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-015-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-015-k">
                          <input id="mts-p02-as-eng-015-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-015-s">
                          <input id="mts-p02-as-eng-015-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-016" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-016-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-016-t">{"Edit asset · AS-ENG-016 · Fire alarm panel"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-016-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-016-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-016"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-016-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-016-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Fire alarm panel"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-016-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-016-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-016-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-016-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-016-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-016-m" name="make" type="text" maxLength="120" defaultValue={"Honeywell Notifier · 4 loops"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-016-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-016-i" name="install" type="text" maxLength="11" defaultValue={"10 Feb 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-016-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-016-w" name="warranty" type="text" maxLength="11" defaultValue={"9 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-016-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-016-a" name="amc" defaultValue={"AMC-2026-03"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-016-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-016-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1151"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-016-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-016-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-016-k">
                          <input id="mts-p02-as-eng-016-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-016-s">
                          <input id="mts-p02-as-eng-016-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-017" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-017-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-017-t">{"Edit asset · AS-ENG-017 · STP"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-017-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-017-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-017"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-017-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-017-n" name="name" type="text" required={true} maxLength="60" defaultValue={"STP"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-017-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-017-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-017-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-017-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-017-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-017-m" name="make" type="text" maxLength="120" defaultValue={"MBBR · 120 KLD"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-017-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-017-i" name="install" type="text" maxLength="11" defaultValue={"1 Feb 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-017-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-017-w" name="warranty" type="text" maxLength="11" defaultValue={"31 Jan 2020"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-017-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-017-a" name="amc" defaultValue={"AMC-2026-05"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-017-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-017-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1160"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-017-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-017-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-017-k">
                          <input id="mts-p02-as-eng-017-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-017-s">
                          <input id="mts-p02-as-eng-017-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-018" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-018-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-018-t">{"Edit asset · AS-ENG-018 · WTP and softener"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-018-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-018-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-018"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-018-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-018-n" name="name" type="text" required={true} maxLength="60" defaultValue={"WTP and softener"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-018-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-018-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-018-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-018-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-018-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-018-m" name="make" type="text" maxLength="120" defaultValue={"Ion Exchange · 5 m³/h"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-018-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-018-i" name="install" type="text" maxLength="11" defaultValue={"1 Feb 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-018-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-018-w" name="warranty" type="text" maxLength="11" defaultValue={"31 Jan 2020"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-018-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-018-a" name="amc" defaultValue={"AMC-2026-05"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-018-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-018-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1161"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-018-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-018-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-018-k">
                          <input id="mts-p02-as-eng-018-k" type="checkbox" role="switch" name="critical" />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-018-s">
                          <input id="mts-p02-as-eng-018-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-019" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-019-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-019-t">{"Edit asset · AS-ENG-019 · Cold room – kitchen"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-019-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-019-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-019"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-019-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-019-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Cold room – kitchen"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-019-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-019-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-019-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-019-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-019-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-019-m" name="make" type="text" maxLength="120" defaultValue={"Blue Star · 2 chambers (+2 °C / −18 °C)"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-019-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-019-i" name="install" type="text" maxLength="11" defaultValue={"20 Feb 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-019-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-019-w" name="warranty" type="text" maxLength="11" defaultValue={"19 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-019-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-019-a" name="amc" defaultValue={"AMC-2026-06"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-019-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-019-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1170"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-019-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-019-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-019-k">
                          <input id="mts-p02-as-eng-019-k" type="checkbox" role="switch" name="critical" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-019-s">
                          <input id="mts-p02-as-eng-019-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-020" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-020-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-020-t">{"Edit asset · AS-ENG-020 · Combi oven"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-020-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-020-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-020"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-020-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-020-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Combi oven"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-020-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-020-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-020-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-020-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-020-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-020-m" name="make" type="text" maxLength="120" defaultValue={"Rational iCombi Pro 10-1/1"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-020-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-020-i" name="install" type="text" maxLength="11" defaultValue={"18 Aug 2023"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-020-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-020-w" name="warranty" type="text" maxLength="11" defaultValue={"17 Aug 2025"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-020-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-020-a" name="amc" defaultValue={"AMC-2026-06"}>
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-020-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-020-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1235"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-020-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-020-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-020-k">
                          <input id="mts-p02-as-eng-020-k" type="checkbox" role="switch" name="critical" />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-020-s">
                          <input id="mts-p02-as-eng-020-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-ldy-001" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-ldy-001-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-ldy-001-t">{"Edit asset · AS-LDY-001 · WE-01 washer extractor 25 kg"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-001-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-ldy-001-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-LDY-001"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-001-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-ldy-001-n" name="name" type="text" required={true} maxLength="60" defaultValue={"WE-01 washer extractor 25 kg"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-001-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-ldy-001-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-001-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-ldy-001-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-001-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-ldy-001-m" name="make" type="text" maxLength="120" defaultValue={"Electrolux WH6-27 · 25 kg (Laundry Setup LAS-07)"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-001-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-ldy-001-i" name="install" type="text" maxLength="11" defaultValue={"1 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-001-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-ldy-001-w" name="warranty" type="text" maxLength="11" defaultValue={"28 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-001-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-ldy-001-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-001-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-ldy-001-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1180"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-001-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-ldy-001-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-ldy-001-k">
                          <input id="mts-p02-as-ldy-001-k" type="checkbox" role="switch" name="critical" />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-ldy-001-s">
                          <input id="mts-p02-as-ldy-001-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-ldy-004" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-ldy-004-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-ldy-004-t">{"Edit asset · AS-LDY-004 · TD-01 tumble dryer 35 kg"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-004-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-ldy-004-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-LDY-004"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-004-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-ldy-004-n" name="name" type="text" required={true} maxLength="60" defaultValue={"TD-01 tumble dryer 35 kg"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-004-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-ldy-004-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-004-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-ldy-004-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-004-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-ldy-004-m" name="make" type="text" maxLength="120" defaultValue={"Electrolux TD6-37 · 35 kg (LAS-07)"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-004-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-ldy-004-i" name="install" type="text" maxLength="11" defaultValue={"1 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-004-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-ldy-004-w" name="warranty" type="text" maxLength="11" defaultValue={"28 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-004-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-ldy-004-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-004-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-ldy-004-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1183"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-ldy-004-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-ldy-004-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-ldy-004-k">
                          <input id="mts-p02-as-ldy-004-k" type="checkbox" role="switch" name="critical" />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-ldy-004-s">
                          <input id="mts-p02-as-ldy-004-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-021" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-021-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-021-t">{"Edit asset · AS-ENG-021 · Guest room TVs (92)"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-021-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-021-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-021"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-021-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-021-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Guest room TVs (92)"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-021-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-021-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-021-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-021-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-021-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-021-m" name="make" type="text" maxLength="120" defaultValue={"Samsung HG43 hospitality · 43 inch"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-021-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-021-i" name="install" type="text" maxLength="11" defaultValue={"1 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-021-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-021-w" name="warranty" type="text" maxLength="11" defaultValue={"28 Feb 2022"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-021-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-021-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-021-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-021-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1190"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-021-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-021-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-021-k">
                          <input id="mts-p02-as-eng-021-k" type="checkbox" role="switch" name="critical" />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-021-s">
                          <input id="mts-p02-as-eng-021-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-022" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-022-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-022-t">{"Edit asset · AS-ENG-022 · Guest room door locks (92)"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-022-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-022-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-022"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-022-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-022-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Guest room door locks (92)"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-022-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-022-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-022-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-022-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-022-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-022-m" name="make" type="text" maxLength="120" defaultValue={"ASSA ABLOY VingCard Essence · RFID"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-022-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-022-i" name="install" type="text" maxLength="11" defaultValue={"1 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-022-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-022-w" name="warranty" type="text" maxLength="11" defaultValue={"28 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-022-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-022-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-022-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-022-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1191"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-022-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-022-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-022-k">
                          <input id="mts-p02-as-eng-022-k" type="checkbox" role="switch" name="critical" />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-022-s">
                          <input id="mts-p02-as-eng-022-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-023" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-023-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-023-t">{"Edit asset · AS-ENG-023 · Guest room safes (92)"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-023-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-023-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-023"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-023-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-023-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Guest room safes (92)"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-023-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-023-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-023-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-023-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-023-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-023-m" name="make" type="text" maxLength="120" defaultValue={"Hafele · digital, 20 L"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-023-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-023-i" name="install" type="text" maxLength="11" defaultValue={"1 Mar 2019"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-023-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-023-w" name="warranty" type="text" maxLength="11" defaultValue={"28 Feb 2021"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-023-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-023-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-023-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-023-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-1192"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-023-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-023-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-023-k">
                          <input id="mts-p02-as-eng-023-k" type="checkbox" role="switch" name="critical" />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-023-s">
                          <input id="mts-p02-as-eng-023-s" type="checkbox" role="switch" name="active" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--full" id="mts-p02-as-eng-024" data-code="MTS-P02" role="dialog" aria-modal="true" aria-labelledby="mts-p02-as-eng-024-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/engineering-setup/mts-06-assets/#saved-rec" method="get">
                  <div className="modal__head">
                    <a className="modal__back" href="#main">{"← Back"}</a>
                    <div>
                      <h2 className="modal__title" id="mts-p02-as-eng-024-t">{"Edit asset · AS-ENG-024 · DG set 3 (old)"}</h2>
                      <p className="modal__desc">{"Create or edit an asset – saving prints its QR label. Written to the setup audit log (MTS-X02) with the old and new values."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-024-no">
                          {"Asset no. "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-024-no" name="asset_no" type="text" required={true} maxLength="12" pattern={"AS-[A-Z]{3}-[0-9]{3}"} defaultValue={"AS-ENG-024"} />
                        <span className="field__hint">{"Unique · AS-ENG-nnn (laundry machines AS-LDY-nnn)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-024-n">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="mts-p02-as-eng-024-n" name="name" type="text" required={true} maxLength="60" defaultValue={"DG set 3 (old)"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-024-c">
                          {"Category "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-024-c" name="category" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Choose a category"}</option>
                            <option value="DG set">{"DG set"}</option>
                            <option value="Transformer">{"Transformer"}</option>
                            <option value="Panel">{"Panel"}</option>
                            <option value="UPS">{"UPS"}</option>
                            <option value="Chiller / VRV outdoor">{"Chiller / VRV outdoor"}</option>
                            <option value="AHU / FCU">{"AHU / FCU"}</option>
                            <option value="Split AC">{"Split AC"}</option>
                            <option value="Pump">{"Pump"}</option>
                            <option value="Boiler / heat pump">{"Boiler / heat pump"}</option>
                            <option value="Lift">{"Lift"}</option>
                            <option value="Fire pump / sprinkler">{"Fire pump / sprinkler"}</option>
                            <option value="Fire alarm panel">{"Fire alarm panel"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP">{"WTP"}</option>
                            <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                            <option value="Laundry machine">{"Laundry machine"}</option>
                            <option value="Cold room">{"Cold room"}</option>
                            <option value="TV">{"TV"}</option>
                            <option value="Door lock">{"Door lock"}</option>
                            <option value="Safe">{"Safe"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-024-l">
                          {"Location "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-024-l" name="location" required={true} defaultValue={""}>
                            <option value="" disabled={true}>{"Location or room"}</option>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Front desk">{"Front desk"}</option>
                            <option value="Travancore Restaurant">{"Travancore Restaurant"}</option>
                            <option value="Cochin Trade Bar">{"Cochin Trade Bar"}</option>
                            <option value="Seafood Grill (pool side)">{"Seafood Grill (pool side)"}</option>
                            <option value="Periyar hall">{"Periyar hall"}</option>
                            <option value="Meenachil hall">{"Meenachil hall"}</option>
                            <option value="Pool deck">{"Pool deck"}</option>
                            <option value="Gym / fitness centre">{"Gym / fitness centre"}</option>
                            <option value="Ayurvedic Centre">{"Ayurvedic Centre"}</option>
                            <option value="Car park">{"Car park"}</option>
                            <option value="Main kitchen">{"Main kitchen"}</option>
                            <option value="Laundry">{"Laundry"}</option>
                            <option value="Linen room">{"Linen room"}</option>
                            <option value="Main store">{"Main store"}</option>
                            <option value="Staff cafeteria">{"Staff cafeteria"}</option>
                            <option value="Locker rooms">{"Locker rooms"}</option>
                            <option value="DG room">{"DG room"}</option>
                            <option value="HT yard and LT panel room">{"HT yard and LT panel room"}</option>
                            <option value="Pump room">{"Pump room"}</option>
                            <option value="STP">{"STP"}</option>
                            <option value="WTP and softener">{"WTP and softener"}</option>
                            <option value="Fire pump room">{"Fire pump room"}</option>
                            <option value="Heat pump room">{"Heat pump room"}</option>
                            <option value="Terrace – VRV yard and water tanks">{"Terrace – VRV yard and water tanks"}</option>
                            <option value="Lift machine room">{"Lift machine room"}</option>
                            <option value="Security and fire control room">{"Security and fire control room"}</option>
                            <option value="Guest rooms">{"Guest rooms"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Locations of MTS-05 or a guest room"}</span>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="mts-p02-as-eng-024-m">{"Make / model / serial / capacity"}</label>
                        <input className="field__input" id="mts-p02-as-eng-024-m" name="make" type="text" maxLength="120" defaultValue={"Kirloskar · 125 kVA"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-024-i">{"Install date"}</label>
                        <input className="field__input" id="mts-p02-as-eng-024-i" name="install" type="text" maxLength="11" defaultValue={"5 May 2012"} />
                        <span className="field__hint">{"DD-MM-YYYY"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-024-w">{"Warranty until"}</label>
                        <input className="field__input" id="mts-p02-as-eng-024-w" name="warranty" type="text" maxLength="11" defaultValue={"4 May 2014"} />
                        <span className="field__hint">{"An ended warranty shows as Expired"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-024-a">{"AMC contract"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="mts-p02-as-eng-024-a" name="amc">
                            <option value="">{"No AMC"}</option>
                            <option value="AMC-2026-01">{"AMC-2026-01 · Lift AMC"}</option>
                            <option value="AMC-2026-02">{"AMC-2026-02 · DG AMC"}</option>
                            <option value="AMC-2025-07">{"AMC-2025-07 · AC / VRV AMC"}</option>
                            <option value="AMC-2026-03">{"AMC-2026-03 · Fire system AMC"}</option>
                            <option value="AMC-2026-04">{"AMC-2026-04 · Pest control"}</option>
                            <option value="AMC-2026-05">{"AMC-2026-05 · Water treatment (STP / WTP)"}</option>
                            <option value="AMC-2026-06">{"AMC-2026-06 · Kitchen equipment AMC"}</option>
                            <option value="AMC-2025-04">{"AMC-2025-04 · CCTV"}</option>
                          </select>
                          <svg className="icon field__chevron" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Contracts of MTS-10"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="mts-p02-as-eng-024-f">{"Fixed asset link"}</label>
                        <input className="field__input" id="mts-p02-as-eng-024-f" name="fixed_asset" type="text" maxLength="10" defaultValue={"FA-0861"} />
                        <span className="field__hint">{"Accounts fixed asset no."}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="mts-p02-as-eng-024-doc">{"Documents"}</label>
                        <input className="field__input" id="mts-p02-as-eng-024-doc" type="file" name="documents" accept=".pdf,image/*" multiple={true} />
                        <span className="field__hint">{"Manual, warranty card, test certificate"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="mts-p02-as-eng-024-k">
                          <input id="mts-p02-as-eng-024-k" type="checkbox" role="switch" name="critical" />
                          <span className="sw__track" />
                          {"Critical"}
                        </label>
                        <span className="field__hint">{"Critical assets must have at least one PM schedule (BR-01)."}</span>
                      </div>
                      <div className="field field--toggle" data-fw="x">
                        <label className="sw" htmlFor="mts-p02-as-eng-024-s">
                          <input id="mts-p02-as-eng-024-s" type="checkbox" role="switch" name="active" />
                          <span className="sw__track" />
                          {"Active"}
                        </label>
                        <span className="field__hint">{"Disposed or unused assets are made inactive, never deleted (BR-03)."}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print QR">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#qr-code" />
                      </svg>
                      {"Save & print"}
                      <span className="ph-x">{" QR"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="t-added" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#qr-code" />
                </svg>
                <div className="fd-toast__text">
                  {"Asset added – QR label printed"}
                  <small>{"AS-ENG-025 Pool filtration pump (critical) – add it to a PM schedule (MTS-07). Written to the setup audit log (MTS-X02) with the old and new values."}</small>
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
                  {"Asset saved – QR label printed"}
                  <small>{"Written to the setup audit log (MTS-X02) with the old and new values."}</small>
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
