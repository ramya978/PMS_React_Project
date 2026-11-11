// GENERATED from public/engineering-and-maintenance/mt-05-preventive-maintenance-calendar/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/engineering.css",
    "media": null
  },
  {
    "href": "/engineering-and-maintenance/mt-05-preventive-maintenance-calendar/mt-05-preventive-maintenance-calendar.css",
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

export default function EngineeringAndMaintenanceMt05PreventiveMaintenanceCalendar() {
  return (
    <ScreenShell title="Preventive Maintenance Calendar" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="MT-05" data-code="MT-05" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="engineering" open={true}>
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
                  <Link className="nav__item is-active" data-nav="MT-05" aria-current="page" title="Preventive" to={"/engineering-and-maintenance/mt-05-preventive-maintenance-calendar"}>
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
            <main className="app__content" id="main" data-code="MT-05" tabIndex="-1">
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
                        <Link to={"/engineering-and-maintenance/mt-01-engineering-dashboard"}>{"Engineering & Maintenance"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Preventive"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Preventive Maintenance Calendar"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"MT-05"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="mt-05-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="mt-05-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" action="" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"From"}</span>
                            <input className="hf-f__c" type="date" name="from" defaultValue={"2026-10-22"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"To"}</span>
                            <input className="hf-f__c" type="date" name="to" defaultValue={"2026-11-30"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Trade"}</span>
                            <select className="hf-f__c" name="trade">
                              <option>{"All"}</option>
                              <option>{"Electrical"}</option>
                              <option>{"Plumbing"}</option>
                              <option>{"HVAC"}</option>
                              <option>{"Carpentry"}</option>
                              <option>{"Civil"}</option>
                              <option>{"Lift"}</option>
                              <option>{"Fire safety"}</option>
                              <option>{"General"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Status"}</span>
                            <select className="hf-f__c" name="status">
                              <option>{"All"}</option>
                              <option>{"Planned"}</option>
                              <option>{"Due"}</option>
                              <option>{"Overdue"}</option>
                              <option>{"Done"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Assigned to"}</span>
                            <select className="hf-f__c" name="assigned-to">
                              <option>{"All"}</option>
                              <option>{"Shift Engineer"}</option>
                              <option>{"Electrician"}</option>
                              <option>{"Plumber"}</option>
                              <option>{"AC technician"}</option>
                              <option>{"Contractor"}</option>
                              <option>{"Rajeev Krishnan"}</option>
                              <option>{"Manoj Varghese"}</option>
                              <option>{"Sajan Thomas"}</option>
                              <option>{"Faisal K"}</option>
                              <option>{"Vinod P"}</option>
                              <option>{"Shibu M"}</option>
                              <option>{"Babu Raj"}</option>
                              <option>{"Renjith R"}</option>
                              <option>{"Sooraj S"}</option>
                              <option>{"Jose Antony"}</option>
                              <option>{"Suresh K"}</option>
                              <option>{"Nikhil Dev"}</option>
                              <option>{"Shaji V"}</option>
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
                    <Link className="btn" data-leads-to="MT-06" to={"/engineering-and-maintenance/mt-06-guest-room-pm"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#bed" />
                      </svg>
                      {"Guest room PM"}
                    </Link>
                    <a className="btn btn--primary" href="#generated" data-leads-to="MT-X02">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#refresh" />
                      </svg>
                      {"Generate jobs"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="law pmw">
                <div className="hb-mks" aria-hidden="true">
                  <i className="pm" id="generated" />
                  <i className="pm" id="v-month" />
                  <i className="pm" id="done-1019-01" />
                  <i className="pm" id="done-1020-01" />
                  <i className="pm" id="done-1021-01" />
                  <i className="pm" id="done-1021-02" />
                  <i className="pm" id="done-1022-01" />
                  <i className="pm" id="done-1022-02" />
                  <i className="pm" id="done-1023-01" />
                  <i className="pm" id="done-1020-02" />
                  <i className="pm" id="done-1015-01" />
                  <i className="pm" id="done-1012-01" />
                  <i className="pm" id="done-1026-01" />
                  <i className="pm" id="done-1028-01" />
                  <i className="pm" id="done-1005-01" />
                  <i className="pm" id="done-1024-01" />
                  <i className="pm" id="moved-1022-02" />
                  <i className="pm" id="moved-1023-01" />
                  <i className="pm" id="moved-1020-02" />
                  <i className="pm" id="moved-1015-01" />
                  <i className="pm" id="moved-1026-01" />
                  <i className="pm" id="moved-1028-01" />
                  <i className="pm" id="moved-1024-01" />
                </div>
                <nav className="hv la-views" aria-label="Views">
                  <a className="hv__v pm-v1" href="#main">
                    <span>{"Week 19–25 Oct"}</span>
                    <b className="num">{"9"}</b>
                  </a>
                  <a className="hv__v pm-v2" href="#v-month">
                    <span>{"October list"}</span>
                    <b className="num">{"14"}</b>
                  </a>
                </nav>
                <div className="pmc-w" data-code="MT-05-week">
                  <section className="pmc-d">
                    <h3>
                      {"Mon "}
                      <b>{"19"}</b>
                    </h3>
                    <a className="pmj pmj--done" href="#p05-1019-01" data-leads-to="MT-P05">
                      <b>{"PM-01 · DG weekly run"}</b>
                      <small>{"DG set 1 + DG set 2"}</small>
                      <span className="pill hk-pill ls--ok">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Done"}
                      </span>
                    </a>
                  </section>
                  <section className="pmc-d">
                    <h3>
                      {"Tue "}
                      <b>{"20"}</b>
                    </h3>
                    <a className="pmj pmj--done" href="#p05-1020-01" data-leads-to="MT-P05">
                      <b>{"PM-09 · Pump check"}</b>
                      <small>{"Domestic transfer pump 1"}</small>
                      <span className="pill hk-pill ls--ok">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Done"}
                      </span>
                    </a>
                    <a className="pmj pmj--due" href="#p05-1020-02" data-leads-to="MT-P05">
                      <b>{"PM-04 · AHU filter clean"}</b>
                      <small>{"AHU – lobby"}</small>
                      <span className="pill hk-pill ls--pend">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#clock" />
                        </svg>
                        {"Due"}
                      </span>
                    </a>
                  </section>
                  <section className="pmc-d">
                    <h3>
                      {"Wed "}
                      <b>{"21"}</b>
                    </h3>
                    <a className="pmj pmj--done" href="#p05-1021-01" data-leads-to="MT-P05">
                      <b>{"PM-10 · Fire pump weekly run"}</b>
                      <small>{"Fire pump set"}</small>
                      <span className="pill hk-pill ls--ok">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Done"}
                      </span>
                    </a>
                    <a className="pmj pmj--done" href="#p05-1021-02" data-leads-to="MT-P05">
                      <b>{"PM-06 · Lift monthly (AMC)"}</b>
                      <small>{"Lifts 1–3"}</small>
                      <span className="pill hk-pill ls--ok">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#check-circle" />
                        </svg>
                        {"Done"}
                      </span>
                    </a>
                  </section>
                  <section className="pmc-d pmc-d--today">
                    <h3>
                      {"Thu "}
                      <b>{"22"}</b>
                      {" · today"}
                    </h3>
                    <a className="pmj pmj--in-progress" href="#p05-1022-01" data-leads-to="MT-P05">
                      <b>{"PM-13 · STP daily log"}</b>
                      <small>{"STP"}</small>
                      <span className="pill hk-pill lo--proc">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#wrench" />
                        </svg>
                        {"In progress"}
                      </span>
                    </a>
                    <a className="pmj pmj--due" href="#p05-1022-02" data-leads-to="MT-P05">
                      <b>{"PM-14 · Cold room monthly"}</b>
                      <small>{"Cold room – kitchen"}</small>
                      <span className="pill hk-pill ls--pend">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#clock" />
                        </svg>
                        {"Due"}
                      </span>
                    </a>
                  </section>
                  <section className="pmc-d">
                    <h3>
                      {"Fri "}
                      <b>{"23"}</b>
                    </h3>
                    <a className="pmj pmj--due" href="#p05-1023-01" data-leads-to="MT-P05">
                      <b>{"PM-02 · DG monthly service"}</b>
                      <small>{"DG set 1 + DG set 2"}</small>
                      <span className="pill hk-pill ls--pend">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#clock" />
                        </svg>
                        {"Due"}
                      </span>
                    </a>
                  </section>
                  <section className="pmc-d">
                    <h3>
                      {"Sat "}
                      <b>{"24"}</b>
                    </h3>
                    <a className="pmj pmj--due" href="#p05-1024-01" data-leads-to="MT-P05">
                      <b>{"PM-03 · DG oil change"}</b>
                      <small>{"DG set 1 (4,982 run-hours)"}</small>
                      <span className="pill hk-pill ls--pend">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#clock" />
                        </svg>
                        {"Due"}
                      </span>
                    </a>
                  </section>
                  <section className="pmc-d">
                    <h3>
                      {"Sun "}
                      <b>{"25"}</b>
                    </h3>
                    <p className="fd-muted">{"No PM"}</p>
                  </section>
                </div>
                <div className="pgw pm-list">
                  <div className="s-scroll">
                    <table className="dt__table" data-code="MT-05-list" data-mc="">
                      <caption className="sr-only">{"PM jobs"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"PM job / asset"}</th>
                          <th scope="col">{"Frequency"}</th>
                          <th scope="col">{"Due / window"}</th>
                          <th scope="col">{"Assigned to"}</th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col">
                            <span className="sr-only">{"Reschedule"}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr id="r-1005-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1005-01" data-leads-to="MT-P05">
                              <strong>{"PM-05 VRV quarterly service"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1005-01 · VRV banks A + B"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Quarterly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Mon 5 Oct"}
                            <span className="fd-sub">{"± 7 days"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Daikin (AMC)"}</td>
                          <td className="dt__td" data-label="Status" data-w2="" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--ok">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Done"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub" />
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr id="r-1012-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1012-01" data-leads-to="MT-P05">
                              <strong>{"PM-15 Washer extractor monthly"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1012-01 · WE-01 + TD-01"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Monthly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Mon 12 Oct"}
                            <span className="fd-sub">{"± 3 days"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Suresh K"}</td>
                          <td className="dt__td" data-label="Status" data-w="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--draft">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#minus" />
                                </svg>
                                {"Skipped"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub">{"Skipped – machines needed for the wedding linen; moved to 2 Nov (approved Rajeev Krishnan)"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr id="r-1015-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1015-01" data-leads-to="MT-P05">
                              <strong>{"PM-07 Fire extinguisher check"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1015-01 · 64 fire extinguishers"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Monthly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Thu 15 Oct"}
                            <span className="fd-sub">{"± 3 days"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Faisal K"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--rej">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#alert" />
                                </svg>
                                {"Overdue"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub">{"Window ended 18 Oct – 40 of 64 checked"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#rs-1015-01">{"Reschedule"}</a>
                          </td>
                        </tr>
                        <tr id="r-1019-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1019-01" data-leads-to="MT-P05">
                              <strong>{"PM-01 DG weekly run"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1019-01 · DG set 1 + DG set 2"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Weekly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Mon 19 Oct"}
                            <span className="fd-sub">{"± 1 day"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Manoj Varghese"}</td>
                          <td className="dt__td" data-label="Status">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--ok">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Done"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub">{"Fault found: DG 1 battery 23.1 V → WO-2225"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr id="r-1020-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1020-01" data-leads-to="MT-P05">
                              <strong>{"PM-09 Pump check"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1020-01 · Domestic transfer pump 1"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Weekly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Tue 20 Oct"}
                            <span className="fd-sub">{"± 1 day"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Babu Raj"}</td>
                          <td className="dt__td" data-label="Status" data-w2="" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--ok">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Done"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub" />
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr id="r-1020-02">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1020-02" data-leads-to="MT-P05">
                              <strong>{"PM-04 AHU filter clean"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1020-02 · AHU – lobby"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Monthly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Tue 20 Oct"}
                            <span className="fd-sub">{"± 3 days"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Renjith R"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub">{"Window ends 23 Oct"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#rs-1020-02">{"Reschedule"}</a>
                          </td>
                        </tr>
                        <tr id="r-1021-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1021-01" data-leads-to="MT-P05">
                              <strong>{"PM-10 Fire pump weekly run"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1021-01 · Fire pump set"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Weekly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Wed 21 Oct"}
                            <span className="fd-sub">{"± 1 day"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Faisal K"}</td>
                          <td className="dt__td" data-label="Status" data-w2="" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--ok">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Done"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub" />
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr id="r-1021-02">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1021-02" data-leads-to="MT-P05">
                              <strong>{"PM-06 Lift monthly (AMC)"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1021-02 · Lifts 1–3"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Monthly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Wed 21 Oct"}
                            <span className="fd-sub">{"± 3 days"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Kone (AMC)"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--ok">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Done"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub">{"Visit report KON/26/1021"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr id="r-1022-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1022-01" data-leads-to="MT-P05">
                              <strong>{"PM-13 STP daily log"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1022-01 · STP"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Daily"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Thu 22 Oct"}
                            <span className="fd-sub">{"± 0 days"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Aqua Enviro (AMC)"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill lo--proc">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#wrench" />
                                </svg>
                                {"In progress"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub">{"MLSS reading taken 09:00"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr id="r-1022-02">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1022-02" data-leads-to="MT-P05">
                              <strong>{"PM-14 Cold room monthly"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1022-02 · Cold room – kitchen"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Monthly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Thu 22 Oct"}
                            <span className="fd-sub">{"± 3 days"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to">{"Hotel Kitchen Systems (AMC)"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub">{"Do together with WO-2235"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#rs-1022-02">{"Reschedule"}</a>
                          </td>
                        </tr>
                        <tr id="r-1023-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1023-01" data-leads-to="MT-P05">
                              <strong>{"PM-02 DG monthly service"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1023-01 · DG set 1 + DG set 2"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Monthly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Fri 23 Oct"}
                            <span className="fd-sub">{"± 3 days"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Sree Gokulam (AMC)"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub" />
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#rs-1023-01">{"Reschedule"}</a>
                          </td>
                        </tr>
                        <tr id="r-1024-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1024-01" data-leads-to="MT-P05">
                              <strong>{"PM-03 DG oil change"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1024-01 · DG set 1 (4,982 run-hours)"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Every N run-hours (250)"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Sat 24 Oct"}
                            <span className="fd-sub">{"± 0 days"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Sree Gokulam (AMC)"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub">{"Oil change at 5,000 h"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#rs-1024-01">{"Reschedule"}</a>
                          </td>
                        </tr>
                        <tr id="r-1026-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1026-01" data-leads-to="MT-P05">
                              <strong>{"PM-01 DG weekly run"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1026-01 · DG set 1 + DG set 2"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Weekly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Mon 26 Oct"}
                            <span className="fd-sub">{"± 1 day"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to" data-w2="">{"Manoj Varghese"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub" />
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#rs-1026-01">{"Reschedule"}</a>
                          </td>
                        </tr>
                        <tr id="r-1028-01">
                          <td className="dt__td nw" data-label="PM job / asset" data-w="" data-t="">
                            <a className="fd-link" href="#p05-1028-01" data-leads-to="MT-P05">
                              <strong>{"PM-11 Fire alarm panel test"}</strong>
                            </a>
                            <span className="fd-sub">{"PMJ-1028-01 · Fire alarm panel"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Frequency" data-w2="">{"Quarterly"}</td>
                          <td className="dt__td nw" data-label="Due / window" data-w2="">
                            {"Wed 28 Oct"}
                            <span className="fd-sub">{"± 7 days"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Assigned to">{"Kerala Fire Protection (AMC)"}</td>
                          <td className="dt__td" data-label="Status" data-s="">
                            <span className="pm-st">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="pm-st2">
                              <span className="pill hk-pill ls--pend">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#clock" />
                                </svg>
                                {"Due"}
                              </span>
                            </span>
                            <span className="fd-sub" />
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#rs-1028-01">{"Reschedule"}</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="ln-done pm-gen">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#refresh" />
                  </svg>
                  <span>
                    <strong>{"PM jobs generated for 26 Oct – 22 Nov (MT-X02)"}</strong>
                    {" – 87 jobs from 15 schedules and the room PM rotation (25 rooms); run-hour jobs from DG 1 at 4,982 h. They appear on the calendar and the technicians’ phones."}
                  </span>
                </div>
                <details className="hk-sys">
                  <summary>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#cog" />
                    </svg>
                    {"System – what runs automatically on this screen"}
                  </summary>
                  <ul>
                    <li>
                      <b>{"MT-X02 PM job generator"}</b>
                      {" – every Sunday night and on Generate jobs: creates the PM jobs of the next period from the schedules of Engineering Setup (MTS-07, calendar or run-hours) and the guest room PM rotation (MTS-08)."}
                    </li>
                    <li>{"Jobs not done by the end of their window turn Overdue; skipping a job needs the Chief Engineer (GM approval)."}</li>
                  </ul>
                </details>
                <div className="modal modal--full" id="p05-1019-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1019-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1019-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1019-01-t">
                          {"PM job · PM-01 DG weekly run "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-01 · DG weekly run – DG set 1 + DG set 2"}</b>
                            <small>{"PMJ-1019-01 · due Mon 19 Oct ± 1 d · Weekly · Manoj Varghese"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Oil and coolant level"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} defaultChecked={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Battery voltage"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r1" aria-label="Battery voltage reading" defaultValue={"25.4"} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"24–28 V"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Run 30 minutes on load"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c2" value="pass" required={true} defaultChecked={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c2" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Frequency"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r3" aria-label="Frequency reading" defaultValue={"50.0"} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"49.5–50.5 Hz"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1019-01">
                            <input id="p05-f-1019-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1019-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1019-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1019-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1019-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s01" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1020-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1020-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1020-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1020-01-t">
                          {"PM job · PM-09 Pump check "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-09 · Pump check – Domestic transfer pump 1"}</b>
                            <small>{"PMJ-1020-01 · due Tue 20 Oct ± 1 d · Weekly · Babu Raj"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Gland leak"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} defaultChecked={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Motor current"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r1" aria-label="Motor current reading" defaultValue={""} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"≤ 11 A"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Pressure"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r2" aria-label="Pressure reading" defaultValue={""} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"3–4 bar"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1020-01">
                            <input id="p05-f-1020-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1020-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1020-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1020-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1020-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s09" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1021-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1021-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1021-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1021-01-t">
                          {"PM job · PM-10 Fire pump weekly run "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-10 · Fire pump weekly run – Fire pump set"}</b>
                            <small>{"PMJ-1021-01 · due Wed 21 Oct ± 1 d · Weekly · Faisal K"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w="" data-t="">{"Auto start on pressure drop"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} defaultChecked={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Header pressure"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r1" aria-label="Header pressure reading" defaultValue={""} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"7–8 bar"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1021-01">
                            <input id="p05-f-1021-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1021-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1021-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1021-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1021-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s10" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1021-02" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1021-02-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1021-02" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1021-02-t">
                          {"PM job · PM-06 Lift monthly (AMC) "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-06 · Lift monthly (AMC) – Lifts 1–3"}</b>
                            <small>{"PMJ-1021-02 · due Wed 21 Oct ± 3 d · Monthly · Kone (AMC)"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Brakes and ropes"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} defaultChecked={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Levelling"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r1" aria-label="Levelling reading" defaultValue={""} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"± 5 mm"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Rescue device"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c2" value="pass" required={true} defaultChecked={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c2" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1021-02">
                            <input id="p05-f-1021-02" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1021-02">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1021-02" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1021-02">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1021-02" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s06" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1022-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1022-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1022-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1022-01-t">
                          {"PM job · PM-13 STP daily log "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-13 · STP daily log – STP"}</b>
                            <small>{"PMJ-1022-01 · due Thu 22 Oct ± 0 d · Daily · Aqua Enviro (AMC)"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-t="">{"MLSS"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r0" aria-label="MLSS reading" defaultValue={""} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"2,500–3,500 mg/l"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Treated water clear"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1022-01">
                            <input id="p05-f-1022-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1022-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1022-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1022-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1022-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s13" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1022-02" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1022-02-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1022-02" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1022-02-t">
                          {"PM job · PM-14 Cold room monthly "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-14 · Cold room monthly – Cold room – kitchen"}</b>
                            <small>{"PMJ-1022-02 · due Thu 22 Oct ± 3 d · Monthly · Hotel Kitchen Systems (AMC)"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Chamber temperature"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r0" aria-label="Chamber temperature reading" defaultValue={""} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"+2 / −18 °C"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Door gasket"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1022-02">
                            <input id="p05-f-1022-02" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1022-02">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1022-02" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1022-02">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1022-02" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s14" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1023-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1023-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1023-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1023-01-t">
                          {"PM job · PM-02 DG monthly service "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-02 · DG monthly service – DG set 1 + DG set 2"}</b>
                            <small>{"PMJ-1023-01 · due Fri 23 Oct ± 3 d · Monthly · Sree Gokulam (AMC)"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Air filter clean"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w="" data-t="">{"Fuel filter / water separator"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Load test"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r2" aria-label="Load test reading" defaultValue={""} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"≥ 70 % of rating"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1023-01">
                            <input id="p05-f-1023-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1023-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1023-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1023-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1023-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s02" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1020-02" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1020-02-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1020-02" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1020-02-t">
                          {"PM job · PM-04 AHU filter clean "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-04 · AHU filter clean – AHU – lobby"}</b>
                            <small>{"PMJ-1020-02 · due Tue 20 Oct ± 3 d · Monthly · Renjith R"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Filters washed"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Drain tray clear"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Supply air temperature"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r2" aria-label="Supply air temperature reading" defaultValue={""} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"12–16 °C"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1020-02">
                            <input id="p05-f-1020-02" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1020-02">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1020-02" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1020-02">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1020-02" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s04" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1015-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1015-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1015-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1015-01-t">
                          {"PM job · PM-07 Fire extinguisher check "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-07 · Fire extinguisher check – 64 fire extinguishers"}</b>
                            <small>{"PMJ-1015-01 · due Thu 15 Oct ± 3 d · Monthly · Faisal K"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Pressure gauge in green"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Seal and tag"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Access clear"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c2" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c2" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1015-01">
                            <input id="p05-f-1015-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1015-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1015-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1015-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1015-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s07" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1012-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1012-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1012-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1012-01-t">
                          {"PM job · PM-15 Washer extractor monthly "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-15 · Washer extractor monthly – WE-01 + TD-01"}</b>
                            <small>{"PMJ-1012-01 · due Mon 12 Oct ± 3 d · Monthly · Suresh K"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Door seal"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Drain valve"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c1" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1012-01">
                            <input id="p05-f-1012-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1012-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1012-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1012-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1012-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s15" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1026-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1026-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1026-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1026-01-t">
                          {"PM job · PM-01 DG weekly run "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-01 · DG weekly run – DG set 1 + DG set 2"}</b>
                            <small>{"PMJ-1026-01 · due Mon 26 Oct ± 1 d · Weekly · Manoj Varghese"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Oil and coolant level"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Battery voltage"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r1" aria-label="Battery voltage reading" defaultValue={"25.4"} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"24–28 V"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Run 30 minutes on load"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c2" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c2" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Frequency"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r3" aria-label="Frequency reading" defaultValue={"50.0"} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"49.5–50.5 Hz"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1026-01">
                            <input id="p05-f-1026-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1026-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1026-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1026-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1026-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s01" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1028-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1028-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1028-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1028-01-t">
                          {"PM job · PM-11 Fire alarm panel test "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-11 · Fire alarm panel test – Fire alarm panel"}</b>
                            <small>{"PMJ-1028-01 · due Wed 28 Oct ± 7 d · Quarterly · Kerala Fire Protection (AMC)"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Detectors tested (25 %)"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Battery backup"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r1" aria-label="Battery backup reading" defaultValue={"25.4"} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"≥ 24 h"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1028-01">
                            <input id="p05-f-1028-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1028-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1028-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1028-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1028-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s11" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1005-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1005-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1005-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1005-01-t">
                          {"PM job · PM-05 VRV quarterly service "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-05 · VRV quarterly service – VRV banks A + B"}</b>
                            <small>{"PMJ-1005-01 · due Mon 5 Oct ± 7 d · Quarterly · Daikin (AMC)"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Coil clean"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} defaultChecked={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Refrigerant pressure"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r1" aria-label="Refrigerant pressure reading" defaultValue={""} />
                                </td>
                                <td className="dt__td nw" data-label="Normal range" data-w2="">{"per maker"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Error log checked"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c2" value="pass" required={true} defaultChecked={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c2" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1005-01">
                            <input id="p05-f-1005-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1005-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1005-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1005-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1005-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s05" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--full" id="p05-1024-01" data-code="MT-P05" role="dialog" aria-modal="true" aria-labelledby="p05-1024-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#done-1024-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="p05-1024-01-t">
                          {"PM job · PM-03 DG oil change "}
                          <span className="code-chip">{"MT-P05"}</span>
                        </h2>
                        <p className="modal__desc">{"Do and record the planned maintenance job with its checklist and readings."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="pr field--wide">
                          <span className="pr__no">
                            <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calendar" />
                            </svg>
                          </span>
                          <span className="pr__t">
                            <b>{"PM-03 · DG oil change – DG set 1 (4,982 run-hours)"}</b>
                            <small>{"PMJ-1024-01 · due Sat 24 Oct ± 0 d · Every N run-hours (250) · Sree Gokulam (AMC)"}</small>
                          </span>
                        </div>
                        <div className="field field--wide">
                          <table className="dt__table dt--hug" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Checklist"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Check"}</th>
                                <th scope="col">{"Result / reading"}</th>
                                <th scope="col">{"Normal range"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Oil and filter changed"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="pass" required={true} />
                                    <span className="check__box" />
                                    {"Pass"}
                                  </label>
                                  {" "}
                                  <label className="check">
                                    <input className="check__input" type="radio" name="c0" value="fail" required={true} />
                                    <span className="check__box" />
                                    {"Fail"}
                                  </label>
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Check" data-w2="" data-t="">{"Run hours at change"}</td>
                                <td className="dt__td nw" data-label="Result / reading" data-w2="">
                                  <input className="field__input num pm-in" type="text" name="r1" aria-label="Run hours at change reading" defaultValue={""} />
                                </td>
                                <td className="dt__td nw" data-e="">{"–"}</td>
                              </tr>
                            </tbody>
                          </table>
                          <span className="field__hint">{"Readings outside the normal range are flagged"}</span>
                        </div>
                        <div className="field field--toggle" data-fw="s">
                          <label className="sw" htmlFor="p05-f-1024-01">
                            <input id="p05-f-1024-01" type="checkbox" role="switch" name="fault" />
                            <span className="sw__track" />
                            {"Fault found"}
                          </label>
                          <span className="field__hint">{"Creates a corrective work order (MT-P01) when the job is completed."}</span>
                        </div>
                        <div className="field " data-fw="x">
                          <label className="field__label" htmlFor="p05-h-1024-01">{"Hours"}</label>
                          <input className="field__input" id="p05-h-1024-01" name="hours" type="number" min="0" step="0.25" defaultValue={"1"} />
                          <span className="field__hint">{"Labour hours"}</span>
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="p05-p-1024-01">{"Parts used"}</label>
                          <input className="field__input" id="p05-p-1024-01" name="parts" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Store item and quantity (optional)"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="/engineering-and-maintenance/mt-o03-pm-checklist-sheet/#s03" data-leads-to="MT-O03" aria-label="Paper checklist">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        <span className="ph-x">{"Paper "}</span>
                        <span className="ph-c">{"checklist"}</span>
                      </a>
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Complete"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--sm" id="rs-1022-02" data-code="MT-05-reschedule" role="dialog" aria-modal="true" aria-labelledby="rs-1022-02-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#moved-1022-02" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="rs-1022-02-t">
                          {"Reschedule · PM-14 Cold room monthly "}
                          <span className="code-chip">{"MT-05-reschedule"}</span>
                        </h2>
                        <p className="modal__desc">{"Within the window (± 3 days) no reason is needed; outside it the Chief Engineer approves."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="field " data-fw="s">
                          <label className="field__label" htmlFor="rs-d-1022-02">
                            {"New date "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rs-d-1022-02" name="date" type="date" required={true} min="2026-10-22" defaultValue={"2026-10-22"} />
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="rs-r-1022-02">{"Reason"}</label>
                          <input className="field__input" id="rs-r-1022-02" name="reason" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Required outside the window"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Move"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--sm" id="rs-1023-01" data-code="MT-05-reschedule" role="dialog" aria-modal="true" aria-labelledby="rs-1023-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#moved-1023-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="rs-1023-01-t">
                          {"Reschedule · PM-02 DG monthly service "}
                          <span className="code-chip">{"MT-05-reschedule"}</span>
                        </h2>
                        <p className="modal__desc">{"Within the window (± 3 days) no reason is needed; outside it the Chief Engineer approves."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="field " data-fw="s">
                          <label className="field__label" htmlFor="rs-d-1023-01">
                            {"New date "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rs-d-1023-01" name="date" type="date" required={true} min="2026-10-22" defaultValue={"2026-10-23"} />
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="rs-r-1023-01">{"Reason"}</label>
                          <input className="field__input" id="rs-r-1023-01" name="reason" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Required outside the window"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Move"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--sm" id="rs-1020-02" data-code="MT-05-reschedule" role="dialog" aria-modal="true" aria-labelledby="rs-1020-02-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#moved-1020-02" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="rs-1020-02-t">
                          {"Reschedule · PM-04 AHU filter clean "}
                          <span className="code-chip">{"MT-05-reschedule"}</span>
                        </h2>
                        <p className="modal__desc">{"Within the window (± 3 days) no reason is needed; outside it the Chief Engineer approves."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="field " data-fw="s">
                          <label className="field__label" htmlFor="rs-d-1020-02">
                            {"New date "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rs-d-1020-02" name="date" type="date" required={true} min="2026-10-22" defaultValue={"2026-10-20"} />
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="rs-r-1020-02">{"Reason"}</label>
                          <input className="field__input" id="rs-r-1020-02" name="reason" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Required outside the window"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Move"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--sm" id="rs-1015-01" data-code="MT-05-reschedule" role="dialog" aria-modal="true" aria-labelledby="rs-1015-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#moved-1015-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="rs-1015-01-t">
                          {"Reschedule · PM-07 Fire extinguisher check "}
                          <span className="code-chip">{"MT-05-reschedule"}</span>
                        </h2>
                        <p className="modal__desc">{"Within the window (± 3 days) no reason is needed; outside it the Chief Engineer approves."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="field " data-fw="s">
                          <label className="field__label" htmlFor="rs-d-1015-01">
                            {"New date "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rs-d-1015-01" name="date" type="date" required={true} min="2026-10-22" defaultValue={"2026-10-15"} />
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="rs-r-1015-01">{"Reason"}</label>
                          <input className="field__input" id="rs-r-1015-01" name="reason" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Required outside the window"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Move"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--sm" id="rs-1026-01" data-code="MT-05-reschedule" role="dialog" aria-modal="true" aria-labelledby="rs-1026-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#moved-1026-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="rs-1026-01-t">
                          {"Reschedule · PM-01 DG weekly run "}
                          <span className="code-chip">{"MT-05-reschedule"}</span>
                        </h2>
                        <p className="modal__desc">{"Within the window (± 1 days) no reason is needed; outside it the Chief Engineer approves."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="field " data-fw="s">
                          <label className="field__label" htmlFor="rs-d-1026-01">
                            {"New date "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rs-d-1026-01" name="date" type="date" required={true} min="2026-10-22" defaultValue={"2026-10-26"} />
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="rs-r-1026-01">{"Reason"}</label>
                          <input className="field__input" id="rs-r-1026-01" name="reason" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Required outside the window"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Move"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--sm" id="rs-1028-01" data-code="MT-05-reschedule" role="dialog" aria-modal="true" aria-labelledby="rs-1028-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#moved-1028-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="rs-1028-01-t">
                          {"Reschedule · PM-11 Fire alarm panel test "}
                          <span className="code-chip">{"MT-05-reschedule"}</span>
                        </h2>
                        <p className="modal__desc">{"Within the window (± 7 days) no reason is needed; outside it the Chief Engineer approves."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="field " data-fw="s">
                          <label className="field__label" htmlFor="rs-d-1028-01">
                            {"New date "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rs-d-1028-01" name="date" type="date" required={true} min="2026-10-22" defaultValue={"2026-10-28"} />
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="rs-r-1028-01">{"Reason"}</label>
                          <input className="field__input" id="rs-r-1028-01" name="reason" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Required outside the window"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Move"}</button>
                    </div>
                  </form>
                </div>
                <div className="modal modal--sm" id="rs-1024-01" data-code="MT-05-reschedule" role="dialog" aria-modal="true" aria-labelledby="rs-1024-01-t">
                  <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                  <form className="modal__box" action="#moved-1024-01" method="get">
                    <div className="modal__head">
                      <a className="modal__back" href="#main">{"← Back"}</a>
                      <div>
                        <h2 className="modal__title" id="rs-1024-01-t">
                          {"Reschedule · PM-03 DG oil change "}
                          <span className="code-chip">{"MT-05-reschedule"}</span>
                        </h2>
                        <p className="modal__desc">{"Within the window (± 0 days) no reason is needed; outside it the Chief Engineer approves."}</p>
                      </div>
                      <a className="modal__close" href="#main" aria-label="Close">
                        <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x" />
                        </svg>
                      </a>
                    </div>
                    <div className="modal__body">
                      <div className="s-grid2">
                        <div className="field " data-fw="s">
                          <label className="field__label" htmlFor="rs-d-1024-01">
                            {"New date "}
                            <span className="field__req" title="Required">{"*"}</span>
                          </label>
                          <input className="field__input" id="rs-d-1024-01" name="date" type="date" required={true} min="2026-10-22" defaultValue={"2026-10-24"} />
                        </div>
                        <div className="field ">
                          <label className="field__label" htmlFor="rs-r-1024-01">{"Reason"}</label>
                          <input className="field__input" id="rs-r-1024-01" name="reason" type="text" maxLength="80" defaultValue={""} />
                          <span className="field__hint">{"Required outside the window"}</span>
                        </div>
                      </div>
                    </div>
                    <div className="modal__foot">
                      <a className="btn" href="#main">{"Cancel"}</a>
                      <button className="btn btn--primary" type="submit">{"Move"}</button>
                    </div>
                  </form>
                </div>
                <div className="fd-toast" id="t-done-1019-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-01 DG weekly run completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1020-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-09 Pump check completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1021-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-10 Fire pump weekly run completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1021-02" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-06 Lift monthly (AMC) completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1022-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-13 STP daily log completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1022-02" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-14 Cold room monthly completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1023-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-02 DG monthly service completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1020-02" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-04 AHU filter clean completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1015-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-07 Fire extinguisher check completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1012-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-15 Washer extractor monthly completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1026-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-01 DG weekly run completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1028-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-11 Fire alarm panel test completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1005-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-05 VRV quarterly service completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-done-1024-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#check-circle" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM-03 DG oil change completed"}
                    <small>{"Checklist and readings saved – next due date set from the frequency. A fault found raises a work order (MT-P01)."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-moved-1022-02" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#calendar" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM job moved"}
                    <small>{"The new date is on the calendar and the technician’s phone."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-moved-1023-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#calendar" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM job moved"}
                    <small>{"The new date is on the calendar and the technician’s phone."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-moved-1020-02" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#calendar" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM job moved"}
                    <small>{"The new date is on the calendar and the technician’s phone."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-moved-1015-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#calendar" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM job moved"}
                    <small>{"The new date is on the calendar and the technician’s phone."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-moved-1026-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#calendar" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM job moved"}
                    <small>{"The new date is on the calendar and the technician’s phone."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-moved-1028-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#calendar" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM job moved"}
                    <small>{"The new date is on the calendar and the technician’s phone."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
                <div className="fd-toast" id="t-moved-1024-01" role="status" aria-live="polite">
                  <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#calendar" />
                  </svg>
                  <div className="fd-toast__text">
                    {"PM job moved"}
                    <small>{"The new date is on the calendar and the technician’s phone."}</small>
                  </div>
                  <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                    <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                  </a>
                </div>
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
