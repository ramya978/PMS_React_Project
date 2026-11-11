// GENERATED from public/user-and-access-management/lg-05-permission-matrix/r-night-auditor.html by scripts/convert_legacy.py.
// Markup converted to JSX. Legacy page scripts and inline on* handlers are not ported yet.
import { Link } from '../../../lib/router.jsx';
import ScreenShell from '../../../components/ScreenShell.jsx';

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
    "href": "/css/aviv/finance.css",
    "media": null
  },
  {
    "href": "/css/aviv/dashboard.css",
    "media": null
  },
  {
    "href": "/css/aviv/ledger.css",
    "media": null
  },
  {
    "href": "/css/aviv/revenue.css",
    "media": null
  },
  {
    "href": "/css/aviv/hr.css",
    "media": null
  },
  {
    "href": "/css/aviv/approvals.css",
    "media": null
  },
  {
    "href": "/css/aviv/mis.css",
    "media": null
  },
  {
    "href": "/css/aviv/owner.css",
    "media": null
  },
  {
    "href": "/css/aviv/access.css",
    "media": null
  },
  {
    "href": "/user-and-access-management/lg-05-permission-matrix/lg-05-permission-matrix.css",
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

export default function UserAndAccessManagementLg05PermissionMatrixRNightAuditor() {
  return (
    <ScreenShell title="Permission Matrix – Night Auditor" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="LG-05" data-code="LG-05" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="lg" open={true}>
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
                  <Link className="nav__item is-active" data-nav="LG-04" aria-current="page" title="Roles" to={"/user-and-access-management/lg-04-roles"}>
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
            <main className="app__content" id="main" data-code="LG-05" tabIndex="-1">
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
                        <Link to={"/user-and-access-management/lg-01-super-admin-home"}>{"User & Access"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <Link to={"/user-and-access-management/lg-04-roles"}>{"Roles"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Night Auditor"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">
                      {"Permission Matrix"}
                      <span className="pt-more">
                        <span className="pt-sep">{" – "}</span>
                        {"Night Auditor"}
                      </span>
                    </h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"LG-05"}</span>
                  <div className="page-header__actions">
                    <Link className="btn pb-back" data-leads-to="LG-04" to={"/user-and-access-management/lg-04-roles"}>{"← Roles"}</Link>
                  </div>
                </div>
              </header>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="saved" />
                <i className="pm" id="created" />
                <i className="pm" id="compare" />
                <i className="pm" id="cmp-x" />
              </div>
              <nav className="hv st-views lg-rolenav" aria-label="Role">
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-reservation-agent"}>
                  <span>{"Reservation Agent"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-front-desk-agent"}>
                  <span>{"Front Desk Agent"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-cashier"}>
                  <span>{"Cashier"}</span>
                </Link>
                <Link className="hv__v" aria-current="page" to={"/user-and-access-management/lg-05-permission-matrix/r-night-auditor"}>
                  <span>{"Night Auditor"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-fo-manager"}>
                  <span>{"FO Manager"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-room-attendant"}>
                  <span>{"Room Attendant"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-floor-supervisor"}>
                  <span>{"Floor Supervisor"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-executive-housekeeper"}>
                  <span>{"Executive Housekeeper"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-steward"}>
                  <span>{"Steward"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-captain"}>
                  <span>{"Captain"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-outlet-cashier"}>
                  <span>{"Outlet Cashier"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-f-b-manager"}>
                  <span>{"F&B Manager"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-chef"}>
                  <span>{"Chef"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-stores-keeper"}>
                  <span>{"Stores Keeper"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-purchase"}>
                  <span>{"Purchase"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-accountant"}>
                  <span>{"Accounts Executive"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-fc"}>
                  <span>{"FC"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-hr"}>
                  <span>{"HR"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-chief-engineer"}>
                  <span>{"Chief Engineer"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-technician"}>
                  <span>{"Technician"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-revenue-manager"}>
                  <span>{"Revenue Manager"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-sales"}>
                  <span>{"Sales"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-gm"}>
                  <span>{"GM"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-owner"}>
                  <span>{"Owner"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-auditor"}>
                  <span>{"Auditor"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-super-admin"}>
                  <span>{"Super Admin"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-duty-manager"}>
                  <span>{"Duty Manager"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-user-administrator"}>
                  <span>{"User Administrator"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-laundry-attendant"}>
                  <span>{"Laundry Attendant"}</span>
                </Link>
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-vendor-support"}>
                  <span>{"Vendor Support"}</span>
                </Link>
              </nav>
              <ul className="cc-kpis">
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"290"}</span>
                  <span className="cc-kpi__l">{"Actions allowed"}</span>
                  <span className="cc-kpi__s">{"Template"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"4"}</span>
                  <span className="cc-kpi__l">{"Modules with access"}</span>
                  <span className="cc-kpi__s">{"of 47"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"80"}</span>
                  <span className="cc-kpi__l">{"Screens"}</span>
                  <span className="cc-kpi__s">{"in those modules"}</span>
                </li>
                <li className="cc-kpi cc-kpi--warn">
                  <span className="cc-kpi__v">{"39"}</span>
                  <span className="cc-kpi__l">{"High-risk permissions"}</span>
                  <span className="cc-kpi__s">{"void, refund, rate override, export guest data, change permissions"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"2"}</span>
                  <span className="cc-kpi__l">{"Users"}</span>
                  <span className="cc-kpi__s">{"in this role"}</span>
                </li>
              </ul>
              <div className="lg-legend">
                <span>
                  <i className="lg-k1" />
                  {"Changed – not saved yet"}
                </span>
                <span>
                  <i className="lg-k2" />
                  {"High-risk action (needs the GM)"}
                </span>
                <span>
                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#info" />
                  </svg>
                  {" Scope per screen; field masks per module"}
                </span>
              </div>
              <section className="ow-card lg-cmp" data-code="LG-05-compare">
                <h2 className="ow-card__h">
                  {"Compare with Cashier "}
                  <small>{"module access and scope"}</small>
                </h2>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="dt__table dt--hug" data-code="LG-05-compare-night-auditor" data-nosort="" data-mc="">
                      <caption className="sr-only">{"Compare roles"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Code"}</th>
                          <th scope="col">{"Module"}</th>
                          <th scope="col">{"Night Auditor"}</th>
                          <th scope="col">{"Cashier"}</th>
                          <th scope="col">{"Difference"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="dt__td" data-label="Code" data-t="">
                            <b>{"RS"}</b>
                          </td>
                          <td className="dt__td" data-label="Module" data-w2="">{"Reservations"}</td>
                          <td className="dt__td" data-label="Night Auditor" data-w2="">{"View · Property"}</td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                            <span className="pill hk-pill cc--warn">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Different"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Code" data-t="">
                            <b>{"FD"}</b>
                          </td>
                          <td className="dt__td" data-label="Module" data-w2="">{"Front Desk"}</td>
                          <td className="dt__td" data-label="Night Auditor">{"View, Create, Edit, Delete / Void, Export, Print · Property"}</td>
                          <td className="dt__td" data-label="Cashier">{"View, Create, Edit, Print · Property"}</td>
                          <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                            <span className="pill hk-pill cc--warn">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Different"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Code" data-t="">
                            <b>{"RT"}</b>
                          </td>
                          <td className="dt__td" data-label="Module" data-w2="">{"Restaurant POS"}</td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td" data-label="Cashier" data-w2="">{"View · Property"}</td>
                          <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                            <span className="pill hk-pill cc--warn">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Different"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Code" data-t="">
                            <b>{"FN"}</b>
                          </td>
                          <td className="dt__td" data-label="Module">{"Receivables, Payables & Banking"}</td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td" data-label="Cashier">{"View, Create, Print · Department"}</td>
                          <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                            <span className="pill hk-pill cc--warn">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Different"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Code" data-t="">
                            <b>{"TX"}</b>
                          </td>
                          <td className="dt__td" data-label="Module" data-w2="">{"Tax & Compliance"}</td>
                          <td className="dt__td" data-label="Night Auditor" data-w2="">{"View · Property"}</td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                            <span className="pill hk-pill cc--warn">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Different"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Code" data-t="">
                            <b>{"AN"}</b>
                          </td>
                          <td className="dt__td" data-label="Module" data-w2="">{"Analytics & Reports"}</td>
                          <td className="dt__td" data-label="Night Auditor">{"View, Export, Print · Property"}</td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                            <span className="pill hk-pill cc--warn">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Different"}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <a className="btn btn--sm" href="#cmp-x">
                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#download" />
                    </svg>
                    {"Export comparison"}
                  </a>
                  <a className="btn btn--sm" href="#main">
                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#x" />
                    </svg>
                    {"Close"}
                  </a>
                </div>
              </section>
              <form className="prs-form lg-mx" action="/user-and-access-management/lg-05-permission-matrix/r-night-auditor.html#saved" method="get">
                <details className="lg-mod lg-mod--none" data-m="RSS">
                  <summary>
                    <span className="ow-chip">{"RSS"}</span>
                    <span className="lg-mod__n">
                      {"Reservation Setup "}
                      <small>{"· no access · 26 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-rss-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-rss-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-rss-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-rss-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-rss-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-rss-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-rss-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Reservation Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod" data-m="RS" open={true}>
                  <summary>
                    <span className="ow-chip">{"RS"}</span>
                    <span className="lg-mod__n">
                      {"Reservations "}
                      <small>{"· 23 screens · scope Property"}</small>
                    </span>
                    {"View"}
                  </summary>
                  <div className="pgw">
                    <div className="s-scroll">
                      <table className="dt__table lg-grid" data-code="LG-05-RS" data-nosort="" data-mc="grid">
                        <caption className="sr-only">{"Reservations permissions"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Screen"}</th>
                            <th scope="col" className="lg-c">{"View"}</th>
                            <th scope="col" className="lg-c">{"Create"}</th>
                            <th scope="col" className="lg-c">{"Edit"}</th>
                            <th scope="col" className="lg-c">{"Delete / Void"}</th>
                            <th scope="col" className="lg-c">{"Approve"}</th>
                            <th scope="col" className="lg-c">{"Export"}</th>
                            <th scope="col" className="lg-c">{"Print"}</th>
                            <th scope="col">{"Scope"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-01"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-01-reservation-dashboard"}>{"Reservation dashboard"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-01-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-01 Reservation dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-01-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-01 Reservation dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-01-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-01 Reservation dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-01-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-01 Reservation dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-01-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-01 Reservation dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-01-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-01 Reservation dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-01-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-01 Reservation dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-01-s">{"Scope of RS-01"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-01-s" name="night-auditor-rs-RS-01-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-02"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-02-enquiry-entry"}>{"Enquiry entry"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-02-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-02 Enquiry entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-02-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-02 Enquiry entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-02-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-02 Enquiry entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-02-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-02 Enquiry entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-02-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-02 Enquiry entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Export">
                              <label className="check" title="Export – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-02-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-02 Enquiry entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-02-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-02 Enquiry entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-02-s">{"Scope of RS-02"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-02-s" name="night-auditor-rs-RS-02-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-03"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-03-enquiry-list"}>{"Enquiry list"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-03-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-03 Enquiry list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-03-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-03 Enquiry list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-03-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-03 Enquiry list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-03-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-03 Enquiry list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-03-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-03 Enquiry list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-03-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-03 Enquiry list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-03-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-03 Enquiry list"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-03-s">{"Scope of RS-03"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-03-s" name="night-auditor-rs-RS-03-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-04"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-04-availability-and-rate-search"}>{"Availability & rate search"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-04-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-04 Availability & rate search"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-04-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-04 Availability & rate search"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-04-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-04 Availability & rate search"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-04-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-04 Availability & rate search"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-04-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-04 Availability & rate search"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-04-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-04 Availability & rate search"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-04-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-04 Availability & rate search"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-04-s">{"Scope of RS-04"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-04-s" name="night-auditor-rs-RS-04-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-05"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-05-new-reservation"}>{"New reservation"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-05-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-05 New reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-05-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-05 New reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-05-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-05 New reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-05-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-05 New reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-05-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-05 New reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-05-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-05 New reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-05-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-05 New reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-05-s">{"Scope of RS-05"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-05-s" name="night-auditor-rs-RS-05-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-06"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-06-reservation-search-list"}>{"Reservation search list"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-06-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-06 Reservation search list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-06-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-06 Reservation search list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-06-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-06 Reservation search list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-06-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-06 Reservation search list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-06-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-06 Reservation search list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-06-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-06 Reservation search list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-06-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-06 Reservation search list"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-06-s">{"Scope of RS-06"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-06-s" name="night-auditor-rs-RS-06-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-07"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-07-reservation-details"}>{"Reservation details"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-07-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-07 Reservation details"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-07-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-07 Reservation details"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-07-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-07 Reservation details"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-07-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-07 Reservation details"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-07-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-07 Reservation details"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-07-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-07 Reservation details"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-07-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-07 Reservation details"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-07-s">{"Scope of RS-07"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-07-s" name="night-auditor-rs-RS-07-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-08"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-08-modify-reservation"}>{"Modify reservation"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-08-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-08 Modify reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-08-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-08 Modify reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-08-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-08 Modify reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-08-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-08 Modify reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-08-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-08 Modify reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-08-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-08 Modify reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-08-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-08 Modify reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-08-s">{"Scope of RS-08"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-08-s" name="night-auditor-rs-RS-08-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-09"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-09-room-assignment"}>{"Room assignment"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-09-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-09 Room assignment"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-09-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-09 Room assignment"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-09-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-09 Room assignment"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-09-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-09 Room assignment"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-09-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-09 Room assignment"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-09-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-09 Room assignment"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-09-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-09 Room assignment"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-09-s">{"Scope of RS-09"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-09-s" name="night-auditor-rs-RS-09-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-10"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-10-payments-and-deposits"}>{"Payments & deposits"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-10-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-10 Payments & deposits"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-10-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-10 Payments & deposits"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-10-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-10 Payments & deposits"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-10-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-10 Payments & deposits"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-10-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-10 Payments & deposits"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-10-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-10 Payments & deposits"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-10-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-10 Payments & deposits"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-10-s">{"Scope of RS-10"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-10-s" name="night-auditor-rs-RS-10-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-11"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-11-confirmation-and-voucher"}>{"Confirmation & voucher"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-11-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-11 Confirmation & voucher"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-11-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-11 Confirmation & voucher"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-11-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-11 Confirmation & voucher"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-11-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-11 Confirmation & voucher"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-11-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-11 Confirmation & voucher"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-11-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-11 Confirmation & voucher"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-11-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-11 Confirmation & voucher"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-11-s">{"Scope of RS-11"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-11-s" name="night-auditor-rs-RS-11-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-12"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-12-cancellation"}>{"Cancellation"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-12-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-12 Cancellation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-12-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-12 Cancellation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-12-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-12 Cancellation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-12-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-12 Cancellation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-12-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-12 Cancellation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-12-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-12 Cancellation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-12-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-12 Cancellation"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-12-s">{"Scope of RS-12"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-12-s" name="night-auditor-rs-RS-12-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-13"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-13-no-show-and-reinstate"}>{"No show & reinstate"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-13-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-13 No show & reinstate"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-13-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-13 No show & reinstate"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-13-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-13 No show & reinstate"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-13-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-13 No show & reinstate"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-13-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-13 No show & reinstate"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-13-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-13 No show & reinstate"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-13-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-13 No show & reinstate"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-13-s">{"Scope of RS-13"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-13-s" name="night-auditor-rs-RS-13-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-14"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-14-group-reservation"}>{"Group reservation"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-14-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-14 Group reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-14-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-14 Group reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-14-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-14 Group reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-14-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-14 Group reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-14-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-14 Group reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-14-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-14 Group reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-14-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-14 Group reservation"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-14-s">{"Scope of RS-14"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-14-s" name="night-auditor-rs-RS-14-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-15"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-15-rooming-list"}>{"Rooming list"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-15-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-15 Rooming list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-15-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-15 Rooming list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-15-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-15 Rooming list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-15-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-15 Rooming list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-15-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-15 Rooming list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-15-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-15 Rooming list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-15-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-15 Rooming list"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-15-s">{"Scope of RS-15"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-15-s" name="night-auditor-rs-RS-15-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-16"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-16-waitlist"}>{"Waitlist"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-16-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-16 Waitlist"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-16-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-16 Waitlist"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-16-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-16 Waitlist"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-16-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-16 Waitlist"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-16-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-16 Waitlist"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-16-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-16 Waitlist"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-16-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-16 Waitlist"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-16-s">{"Scope of RS-16"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-16-s" name="night-auditor-rs-RS-16-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-17"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-17-room-calendar-tape-chart"}>{"Room calendar tape chart"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-17-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-17 Room calendar tape chart"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-17-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-17 Room calendar tape chart"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-17-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-17 Room calendar tape chart"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-17-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-17 Room calendar tape chart"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-17-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-17 Room calendar tape chart"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-17-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-17 Room calendar tape chart"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-17-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-17 Room calendar tape chart"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-17-s">{"Scope of RS-17"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-17-s" name="night-auditor-rs-RS-17-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-18"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-18-guest-profile"}>{"Guest profile"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-18-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-18 Guest profile"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-18-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-18 Guest profile"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-18-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-18 Guest profile"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-18-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-18 Guest profile"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-18-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-18 Guest profile"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-18-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-18 Guest profile"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-18-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-18 Guest profile"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-18-s">{"Scope of RS-18"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-18-s" name="night-auditor-rs-RS-18-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-19"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-19-company-travel-agent-account"}>{"Company travel agent account"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-19-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-19 Company travel agent account"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-19-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-19 Company travel agent account"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-19-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-19 Company travel agent account"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-19-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-19 Company travel agent account"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-19-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-19 Company travel agent account"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-19-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-19 Company travel agent account"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-19-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-19 Company travel agent account"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-19-s">{"Scope of RS-19"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-19-s" name="night-auditor-rs-RS-19-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-20"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-20-approvals"}>{"Approvals"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-20-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-20 Approvals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-20-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-20 Approvals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-20-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-20 Approvals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-20-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-20 Approvals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-20-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-20 Approvals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-20-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-20 Approvals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-20-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-20 Approvals"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-20-s">{"Scope of RS-20"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-20-s" name="night-auditor-rs-RS-20-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-21"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Reservation reports"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-21-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-21 Reservation reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-21-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-21 Reservation reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-21-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-21 Reservation reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-21-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-21 Reservation reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-21-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-21 Reservation reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-21-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-21 Reservation reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-21-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-21 Reservation reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-21-s">{"Scope of RS-21"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-21-s" name="night-auditor-rs-RS-21-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-23"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-23-channel-booking-queue"}>{"Channel booking queue"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-23-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-23 Channel booking queue"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-23-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-23 Channel booking queue"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-23-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-23 Channel booking queue"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-23-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-23 Channel booking queue"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-23-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-23 Channel booking queue"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-23-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-23 Channel booking queue"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-23-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-23 Channel booking queue"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-23-s">{"Scope of RS-23"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-23-s" name="night-auditor-rs-RS-23-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"RS-24"}</b>
                              {" "}
                              <Link className="fd-link" to={"/reservation/rs-24-service-view"}>{"Service view"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-24-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RS-24 Service view"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-24-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RS-24 Service view"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-24-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RS-24 Service view"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-24-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RS-24 Service view"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-24-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RS-24 Service view"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-24-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RS-24 Service view"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-rs-RS-24-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RS-24 Service view"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-rs-RS-24-s">{"Scope of RS-24"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-rs-RS-24-s" name="night-auditor-rs-RS-24-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <fieldset className="field fd-fieldset field--wide lg-masks">
                    <legend className="field__label">{"Field masks in Reservations"}</legend>
                    <div className="row fd-multi">
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-rs-mask" value="Hide guest contact" />
                        <span className="check__box" />
                        {"Hide guest contact"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-rs-mask" value="Hide ID documents" />
                        <span className="check__box" />
                        {"Hide ID documents"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-rs-mask" value="Hide card data" />
                        <span className="check__box" />
                        {"Hide card data"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-rs-mask" value="Hide salary" />
                        <span className="check__box" />
                        {"Hide salary"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-rs-mask" value="Hide bank details" />
                        <span className="check__box" />
                        {"Hide bank details"}
                      </label>
                    </div>
                  </fieldset>
                </details>
                <details className="lg-mod lg-mod--none" data-m="FDS">
                  <summary>
                    <span className="ow-chip">{"FDS"}</span>
                    <span className="lg-mod__n">
                      {"Front Desk Setup "}
                      <small>{"· no access · 29 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-fds-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-fds-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-fds-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-fds-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-fds-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-fds-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-fds-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Front Desk Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod" data-m="FD" open={true}>
                  <summary>
                    <span className="ow-chip">{"FD"}</span>
                    <span className="lg-mod__n">
                      {"Front Desk "}
                      <small>{"· 38 screens · scope Property"}</small>
                    </span>
                    {"View, Create, Edit, Delete / Void, Export, Print"}
                  </summary>
                  <div className="pgw">
                    <div className="s-scroll">
                      <table className="dt__table lg-grid" data-code="LG-05-FD" data-nosort="" data-mc="grid">
                        <caption className="sr-only">{"Front Desk permissions"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Screen"}</th>
                            <th scope="col" className="lg-c">{"View"}</th>
                            <th scope="col" className="lg-c">{"Create"}</th>
                            <th scope="col" className="lg-c">{"Edit"}</th>
                            <th scope="col" className="lg-c">{"Delete / Void"}</th>
                            <th scope="col" className="lg-c">{"Approve"}</th>
                            <th scope="col" className="lg-c">{"Export"}</th>
                            <th scope="col" className="lg-c">{"Print"}</th>
                            <th scope="col">{"Scope"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-01"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-01-front-desk-home"}>{"Front desk home"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-01-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-01 Front desk home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-01-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-01 Front desk home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-01-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-01 Front desk home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-01-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-01 Front desk home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-01-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-01 Front desk home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-01-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-01 Front desk home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-01-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-01 Front desk home"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-01-s">{"Scope of FD-01"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-01-s" name="night-auditor-fd-FD-01-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-02"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-02-arrivals"}>{"Arrivals"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-02-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-02 Arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-02-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-02 Arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-02-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-02 Arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-02-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-02 Arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-02-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-02 Arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-02-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-02 Arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-02-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-02 Arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-02-s">{"Scope of FD-02"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-02-s" name="night-auditor-fd-FD-02-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-03"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-03-check-in"}>{"Check in"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-03-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-03 Check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-03-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-03 Check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-03-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-03 Check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-03-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-03 Check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-03-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-03 Check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-03-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-03 Check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-03-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-03 Check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-03-s">{"Scope of FD-03"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-03-s" name="night-auditor-fd-FD-03-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-04"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-04-walk-in-check-in"}>{"Walk in check in"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-04-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-04 Walk in check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-04-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-04 Walk in check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-04-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-04 Walk in check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-04-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-04 Walk in check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-04-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-04 Walk in check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-04-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-04 Walk in check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-04-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-04 Walk in check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-04-s">{"Scope of FD-04"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-04-s" name="night-auditor-fd-FD-04-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-05"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-05-group-check-in"}>{"Group check in"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-05-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-05 Group check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-05-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-05 Group check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-05-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-05 Group check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-05-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-05 Group check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-05-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-05 Group check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Export">
                              <label className="check" title="Export – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-05-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-05 Group check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-05-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-05 Group check in"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-05-s">{"Scope of FD-05"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-05-s" name="night-auditor-fd-FD-05-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-06"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-06-room-board"}>{"Room board"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-06-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-06 Room board"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-06-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-06 Room board"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-06-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-06 Room board"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-06-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-06 Room board"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-06-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-06 Room board"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-06-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-06 Room board"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-06-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-06 Room board"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-06-s">{"Scope of FD-06"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-06-s" name="night-auditor-fd-FD-06-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-07"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-07-in-house-guests"}>{"In house guests"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-07-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-07 In house guests"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-07-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-07 In house guests"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-07-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-07 In house guests"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-07-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-07 In house guests"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-07-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-07 In house guests"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-07-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-07 In house guests"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-07-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-07 In house guests"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-07-s">{"Scope of FD-07"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-07-s" name="night-auditor-fd-FD-07-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-08"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-08-guest-folio"}>{"Guest folio"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-08-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-08 Guest folio"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-08-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-08 Guest folio"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-08-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-08 Guest folio"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-08-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-08 Guest folio"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-08-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-08 Guest folio"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-08-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-08 Guest folio"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-08-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-08 Guest folio"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-08-s">{"Scope of FD-08"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-08-s" name="night-auditor-fd-FD-08-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-09"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-09-room-move"}>{"Room move"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-09-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-09 Room move"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-09-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-09 Room move"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-09-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-09 Room move"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-09-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-09 Room move"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-09-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-09 Room move"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-09-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-09 Room move"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-09-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-09 Room move"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-09-s">{"Scope of FD-09"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-09-s" name="night-auditor-fd-FD-09-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-10"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-10-extend-shorten-stay"}>{"Extend shorten stay"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-10-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-10 Extend shorten stay"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-10-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-10 Extend shorten stay"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-10-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-10 Extend shorten stay"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-10-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-10 Extend shorten stay"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-10-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-10 Extend shorten stay"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-10-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-10 Extend shorten stay"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-10-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-10 Extend shorten stay"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-10-s">{"Scope of FD-10"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-10-s" name="night-auditor-fd-FD-10-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-11"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-11-requests-complaints"}>{"Requests complaints"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-11-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-11 Requests complaints"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-11-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-11 Requests complaints"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-11-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-11 Requests complaints"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-11-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-11 Requests complaints"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-11-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-11 Requests complaints"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-11-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-11 Requests complaints"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-11-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-11 Requests complaints"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-11-s">{"Scope of FD-11"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-11-s" name="night-auditor-fd-FD-11-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-12"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-12-messages-wake-up-calls"}>{"Messages wake up calls"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-12-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-12 Messages wake up calls"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-12-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-12 Messages wake up calls"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-12-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-12 Messages wake up calls"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-12-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-12 Messages wake up calls"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-12-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-12 Messages wake up calls"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-12-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-12 Messages wake up calls"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-12-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-12 Messages wake up calls"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-12-s">{"Scope of FD-12"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-12-s" name="night-auditor-fd-FD-12-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-13"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-13-paid-outs"}>{"Paid outs"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-13-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-13 Paid outs"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-13-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-13 Paid outs"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-13-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-13 Paid outs"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-13-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-13 Paid outs"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-13-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-13 Paid outs"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-13-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-13 Paid outs"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-13-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-13 Paid outs"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-13-s">{"Scope of FD-13"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-13-s" name="night-auditor-fd-FD-13-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-14"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-14-departures"}>{"Departures"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-14-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-14 Departures"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-14-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-14 Departures"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-14-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-14 Departures"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-14-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-14 Departures"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-14-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-14 Departures"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-14-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-14 Departures"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-14-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-14 Departures"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-14-s">{"Scope of FD-14"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-14-s" name="night-auditor-fd-FD-14-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-15"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-15-check-out-settlement"}>{"Check out settlement"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-15-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-15 Check out settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-15-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-15 Check out settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-15-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-15 Check out settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-15-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-15 Check out settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-15-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-15 Check out settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-15-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-15 Check out settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-15-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-15 Check out settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-15-s">{"Scope of FD-15"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-15-s" name="night-auditor-fd-FD-15-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-16"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-16-invoices-credit-notes"}>{"Invoices credit notes"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-16-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-16 Invoices credit notes"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-16-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-16 Invoices credit notes"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-16-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-16 Invoices credit notes"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-16-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-16 Invoices credit notes"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-16-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-16 Invoices credit notes"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-16-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-16 Invoices credit notes"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-16-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-16 Invoices credit notes"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-16-s">{"Scope of FD-16"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-16-s" name="night-auditor-fd-FD-16-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-17"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-17-company-billing-city-ledger-transfer"}>{"Company billing city ledger transfer"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-17-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-17 Company billing city ledger transfer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-17-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-17 Company billing city ledger transfer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-17-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-17 Company billing city ledger transfer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-17-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-17 Company billing city ledger transfer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-17-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-17 Company billing city ledger transfer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-17-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-17 Company billing city ledger transfer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-17-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-17 Company billing city ledger transfer"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-17-s">{"Scope of FD-17"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-17-s" name="night-auditor-fd-FD-17-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-18"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-18-cashier-shift"}>{"Cashier shift"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-18-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-18 Cashier shift"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-18-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-18 Cashier shift"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-18-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-18 Cashier shift"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-18-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-18 Cashier shift"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-18-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-18 Cashier shift"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-18-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-18 Cashier shift"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-18-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-18 Cashier shift"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-18-s">{"Scope of FD-18"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-18-s" name="night-auditor-fd-FD-18-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-19"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-19-foreign-exchange"}>{"Foreign exchange"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-19-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-19 Foreign exchange"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-19-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-19 Foreign exchange"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-19-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-19 Foreign exchange"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-19-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-19 Foreign exchange"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-19-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-19 Foreign exchange"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-19-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-19 Foreign exchange"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-19-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-19 Foreign exchange"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-19-s">{"Scope of FD-19"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-19-s" name="night-auditor-fd-FD-19-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-20"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-20-form-c-form-iii-register"}>{"Form c form iii register"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-20-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-20 Form c form iii register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-20-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-20 Form c form iii register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-20-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-20 Form c form iii register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-20-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-20 Form c form iii register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-20-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-20 Form c form iii register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-20-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-20 Form c form iii register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-20-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-20 Form c form iii register"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-20-s">{"Scope of FD-20"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-20-s" name="night-auditor-fd-FD-20-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-21"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-21-night-audit-console"}>{"Night audit console"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-21-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-21 Night audit console"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-21-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-21 Night audit console"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-21-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-21 Night audit console"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-21-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-21 Night audit console"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-21-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-21 Night audit console"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-21-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-21 Night audit console"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-21-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-21 Night audit console"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-21-s">{"Scope of FD-21"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-21-s" name="night-auditor-fd-FD-21-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-22"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-22-front-desk-reports"}>{"Front desk reports"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-22-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-22 Front desk reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-22-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-22 Front desk reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-22-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-22 Front desk reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-22-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-22 Front desk reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-22-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-22 Front desk reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-22-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-22 Front desk reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-22-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-22 Front desk reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-22-s">{"Scope of FD-22"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-22-s" name="night-auditor-fd-FD-22-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-23"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-23-lost-found"}>{"Lost found"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-23-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-23 Lost found"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-23-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-23 Lost found"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-23-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-23 Lost found"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-23-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-23 Lost found"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-23-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-23 Lost found"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-23-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-23 Lost found"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-23-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-23 Lost found"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-23-s">{"Scope of FD-23"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-23-s" name="night-auditor-fd-FD-23-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-24"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-24-left-luggage"}>{"Left luggage"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-24-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-24 Left luggage"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-24-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-24 Left luggage"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-24-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-24 Left luggage"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-24-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-24 Left luggage"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-24-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-24 Left luggage"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-24-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-24 Left luggage"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-24-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-24 Left luggage"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-24-s">{"Scope of FD-24"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-24-s" name="night-auditor-fd-FD-24-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-25"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-25-safe-deposit-lockers"}>{"Safe deposit lockers"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-25-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-25 Safe deposit lockers"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-25-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-25 Safe deposit lockers"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-25-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-25 Safe deposit lockers"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-25-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-25 Safe deposit lockers"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-25-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-25 Safe deposit lockers"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-25-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-25 Safe deposit lockers"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-25-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-25 Safe deposit lockers"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-25-s">{"Scope of FD-25"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-25-s" name="night-auditor-fd-FD-25-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-26"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-26-visitor-register"}>{"Visitor register"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-26-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-26 Visitor register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-26-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-26 Visitor register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-26-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-26 Visitor register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-26-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-26 Visitor register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-26-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-26 Visitor register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-26-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-26 Visitor register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-26-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-26 Visitor register"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-26-s">{"Scope of FD-26"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-26-s" name="night-auditor-fd-FD-26-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-27"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-27-front-office-log-book"}>{"Front office log book"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-27-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-27 Front office log book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-27-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-27 Front office log book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-27-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-27 Front office log book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-27-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-27 Front office log book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-27-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-27 Front office log book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-27-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-27 Front office log book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-27-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-27 Front office log book"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-27-s">{"Scope of FD-27"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-27-s" name="night-auditor-fd-FD-27-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-28"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-28-traces"}>{"Traces"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-28-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-28 Traces"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-28-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-28 Traces"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-28-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-28 Traces"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-28-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-28 Traces"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-28-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-28 Traces"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-28-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-28 Traces"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-28-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-28 Traces"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-28-s">{"Scope of FD-28"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-28-s" name="night-auditor-fd-FD-28-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-29"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-29-online-check-in-arrivals"}>{"Online check in arrivals"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-29-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-29 Online check in arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-29-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-29 Online check in arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-29-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-29 Online check in arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-29-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-29 Online check in arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-29-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-29 Online check in arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-29-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-29 Online check in arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-29-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-29 Online check in arrivals"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-29-s">{"Scope of FD-29"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-29-s" name="night-auditor-fd-FD-29-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-30"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-30-concierge-services"}>{"Concierge services"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-30-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-30 Concierge services"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-30-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-30 Concierge services"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-30-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-30 Concierge services"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-30-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-30 Concierge services"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-30-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-30 Concierge services"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-30-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-30 Concierge services"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-30-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-30 Concierge services"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-30-s">{"Scope of FD-30"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-30-s" name="night-auditor-fd-FD-30-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-31"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-31-loyalty-desk"}>{"Loyalty desk"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-31-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-31 Loyalty desk"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-31-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-31 Loyalty desk"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-31-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-31 Loyalty desk"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-31-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-31 Loyalty desk"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-31-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-31 Loyalty desk"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-31-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-31 Loyalty desk"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-31-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-31 Loyalty desk"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-31-s">{"Scope of FD-31"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-31-s" name="night-auditor-fd-FD-31-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-32"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-32-house-status-live"}>{"House status live"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-32-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-32 House status live"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-32-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-32 House status live"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-32-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-32 House status live"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-32-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-32 House status live"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-32-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-32 House status live"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-32-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-32 House status live"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-32-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-32 House status live"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-32-s">{"Scope of FD-32"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-32-s" name="night-auditor-fd-FD-32-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-33"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-33-paymaster-house-accounts"}>{"Paymaster house accounts"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-33-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-33 Paymaster house accounts"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-33-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-33 Paymaster house accounts"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-33-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-33 Paymaster house accounts"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-33-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-33 Paymaster house accounts"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-33-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-33 Paymaster house accounts"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-33-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-33 Paymaster house accounts"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-33-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-33 Paymaster house accounts"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-33-s">{"Scope of FD-33"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-33-s" name="night-auditor-fd-FD-33-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-34"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-34-folio-history-tracking"}>{"Folio history tracking"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-34-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-34 Folio history tracking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-34-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-34 Folio history tracking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-34-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-34 Folio history tracking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-34-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-34 Folio history tracking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-34-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-34 Folio history tracking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-34-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-34 Folio history tracking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-34-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-34 Folio history tracking"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-34-s">{"Scope of FD-34"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-34-s" name="night-auditor-fd-FD-34-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-35"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"Advance deposit ledger"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-35-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-35 Advance deposit ledger"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-35-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-35 Advance deposit ledger"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-35-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-35 Advance deposit ledger"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-35-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-35 Advance deposit ledger"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-35-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-35 Advance deposit ledger"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-35-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-35 Advance deposit ledger"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-35-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-35 Advance deposit ledger"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-35-s">{"Scope of FD-35"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-35-s" name="night-auditor-fd-FD-35-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-36"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-36-front-desk-cash-book"}>{"Front desk cash book"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-36-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-36 Front desk cash book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-36-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-36 Front desk cash book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-36-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-36 Front desk cash book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-36-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-36 Front desk cash book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-36-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-36 Front desk cash book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-36-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-36 Front desk cash book"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-36-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-36 Front desk cash book"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-36-s">{"Scope of FD-36"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-36-s" name="night-auditor-fd-FD-36-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-37"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-37-account-posting"}>{"Account posting"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-37-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-37 Account posting"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-37-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-37 Account posting"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-37-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-37 Account posting"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-37-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-37 Account posting"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-37-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-37 Account posting"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-37-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-37 Account posting"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-37-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-37 Account posting"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-37-s">{"Scope of FD-37"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-37-s" name="night-auditor-fd-FD-37-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"FD-38"}</b>
                              {" "}
                              <Link className="fd-link" to={"/front-desk/fd-38-guest-communication"}>{"Guest communication"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-38-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – FD-38 Guest communication"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-38-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – FD-38 Guest communication"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-38-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – FD-38 Guest communication"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-38-3" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – FD-38 Guest communication"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-38-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – FD-38 Guest communication"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-38-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – FD-38 Guest communication"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-fd-FD-38-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – FD-38 Guest communication"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-fd-FD-38-s">{"Scope of FD-38"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-fd-FD-38-s" name="night-auditor-fd-FD-38-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <fieldset className="field fd-fieldset field--wide lg-masks">
                    <legend className="field__label">{"Field masks in Front Desk"}</legend>
                    <div className="row fd-multi">
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-fd-mask" value="Hide guest contact" />
                        <span className="check__box" />
                        {"Hide guest contact"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-fd-mask" value="Hide ID documents" />
                        <span className="check__box" />
                        {"Hide ID documents"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-fd-mask" value="Hide card data" />
                        <span className="check__box" />
                        {"Hide card data"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-fd-mask" value="Hide salary" />
                        <span className="check__box" />
                        {"Hide salary"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-fd-mask" value="Hide bank details" />
                        <span className="check__box" />
                        {"Hide bank details"}
                      </label>
                    </div>
                  </fieldset>
                </details>
                <details className="lg-mod lg-mod--none" data-m="HKS">
                  <summary>
                    <span className="ow-chip">{"HKS"}</span>
                    <span className="lg-mod__n">
                      {"Housekeeping Setup "}
                      <small>{"· no access · 17 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-hks-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-hks-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-hks-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-hks-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-hks-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-hks-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-hks-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Housekeeping Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="HK">
                  <summary>
                    <span className="ow-chip">{"HK"}</span>
                    <span className="lg-mod__n">
                      {"Housekeeping "}
                      <small>{"· no access · 23 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-hk-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-hk-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-hk-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-hk-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-hk-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-hk-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-hk-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Housekeeping"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="LAS">
                  <summary>
                    <span className="ow-chip">{"LAS"}</span>
                    <span className="lg-mod__n">
                      {"Laundry Setup "}
                      <small>{"· no access · 10 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-las-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-las-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-las-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-las-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-las-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-las-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-las-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Laundry Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="LA">
                  <summary>
                    <span className="ow-chip">{"LA"}</span>
                    <span className="lg-mod__n">
                      {"Laundry "}
                      <small>{"· no access · 11 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-la-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Laundry"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-la-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Laundry"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-la-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Laundry"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-la-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Laundry"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-la-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Laundry"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-la-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Laundry"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-la-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Laundry"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="MBS">
                  <summary>
                    <span className="ow-chip">{"MBS"}</span>
                    <span className="lg-mod__n">
                      {"Minibar Setup "}
                      <small>{"· no access · 7 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-mbs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-mbs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-mbs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-mbs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-mbs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-mbs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-mbs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Minibar Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="MB">
                  <summary>
                    <span className="ow-chip">{"MB"}</span>
                    <span className="lg-mod__n">
                      {"Minibar "}
                      <small>{"· no access · 9 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-mb-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Minibar"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-mb-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Minibar"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-mb-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Minibar"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-mb-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Minibar"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-mb-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Minibar"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-mb-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Minibar"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-mb-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Minibar"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="LNS">
                  <summary>
                    <span className="ow-chip">{"LNS"}</span>
                    <span className="lg-mod__n">
                      {"Linen & Amenities Setup "}
                      <small>{"· no access · 7 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-lns-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-lns-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-lns-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-lns-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-lns-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-lns-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-lns-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Linen & Amenities Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="LN">
                  <summary>
                    <span className="ow-chip">{"LN"}</span>
                    <span className="lg-mod__n">
                      {"Linen & Amenities "}
                      <small>{"· no access · 11 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-ln-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-ln-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-ln-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-ln-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-ln-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-ln-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-ln-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Linen & Amenities"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="LFS">
                  <summary>
                    <span className="ow-chip">{"LFS"}</span>
                    <span className="lg-mod__n">
                      {"Lost & Found Setup "}
                      <small>{"· no access · 6 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-lfs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-lfs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-lfs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-lfs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-lfs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-lfs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-lfs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Lost & Found Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="LF">
                  <summary>
                    <span className="ow-chip">{"LF"}</span>
                    <span className="lg-mod__n">
                      {"Lost & Found "}
                      <small>{"· no access · 9 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-lf-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-lf-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-lf-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-lf-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-lf-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-lf-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-lf-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Lost & Found"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="MTS">
                  <summary>
                    <span className="ow-chip">{"MTS"}</span>
                    <span className="lg-mod__n">
                      {"Engineering Setup "}
                      <small>{"· no access · 12 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-mts-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-mts-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-mts-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-mts-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-mts-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-mts-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-mts-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Engineering Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="MT">
                  <summary>
                    <span className="ow-chip">{"MT"}</span>
                    <span className="lg-mod__n">
                      {"Engineering & Maintenance "}
                      <small>{"· no access · 14 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-mt-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-mt-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-mt-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-mt-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-mt-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-mt-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-mt-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Engineering & Maintenance"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="RTS">
                  <summary>
                    <span className="ow-chip">{"RTS"}</span>
                    <span className="lg-mod__n">
                      {"Restaurant POS Setup "}
                      <small>{"· no access · 10 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-rts-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-rts-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-rts-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-rts-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-rts-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-rts-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-rts-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Restaurant POS Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="RT">
                  <summary>
                    <span className="ow-chip">{"RT"}</span>
                    <span className="lg-mod__n">
                      {"Restaurant POS "}
                      <small>{"· no access · 10 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-rt-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Restaurant POS"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-rt-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Restaurant POS"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-rt-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Restaurant POS"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-rt-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Restaurant POS"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-rt-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Restaurant POS"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-rt-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Restaurant POS"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-rt-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Restaurant POS"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="KTS">
                  <summary>
                    <span className="ow-chip">{"KTS"}</span>
                    <span className="lg-mod__n">
                      {"Kitchen Display Setup "}
                      <small>{"· no access · 3 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-kts-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-kts-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-kts-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-kts-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-kts-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-kts-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-kts-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Kitchen Display Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="KT">
                  <summary>
                    <span className="ow-chip">{"KT"}</span>
                    <span className="lg-mod__n">
                      {"Kitchen Display "}
                      <small>{"· no access · 8 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-kt-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Kitchen Display"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-kt-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Kitchen Display"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-kt-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Kitchen Display"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-kt-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Kitchen Display"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-kt-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Kitchen Display"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-kt-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Kitchen Display"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-kt-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Kitchen Display"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="BQS">
                  <summary>
                    <span className="ow-chip">{"BQS"}</span>
                    <span className="lg-mod__n">
                      {"Banquets & Events Setup "}
                      <small>{"· no access · 7 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-bqs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-bqs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-bqs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-bqs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-bqs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-bqs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-bqs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Banquets & Events Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="BQ">
                  <summary>
                    <span className="ow-chip">{"BQ"}</span>
                    <span className="lg-mod__n">
                      {"Banquets & Events "}
                      <small>{"· no access · 9 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-bq-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-bq-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-bq-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-bq-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-bq-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-bq-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-bq-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Banquets & Events"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="PRS">
                  <summary>
                    <span className="ow-chip">{"PRS"}</span>
                    <span className="lg-mod__n">
                      {"Purchase Setup "}
                      <small>{"· no access · 5 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-prs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-prs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-prs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-prs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-prs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-prs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-prs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Purchase Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="PR">
                  <summary>
                    <span className="ow-chip">{"PR"}</span>
                    <span className="lg-mod__n">
                      {"Purchase "}
                      <small>{"· no access · 11 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-pr-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Purchase"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-pr-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Purchase"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-pr-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Purchase"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-pr-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Purchase"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-pr-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Purchase"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-pr-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Purchase"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-pr-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Purchase"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="STS">
                  <summary>
                    <span className="ow-chip">{"STS"}</span>
                    <span className="lg-mod__n">
                      {"Stores Setup "}
                      <small>{"· no access · 6 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-sts-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-sts-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-sts-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-sts-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-sts-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-sts-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-sts-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Stores Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="ST">
                  <summary>
                    <span className="ow-chip">{"ST"}</span>
                    <span className="lg-mod__n">
                      {"Stores & Inventory "}
                      <small>{"· no access · 10 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-st-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-st-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-st-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-st-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-st-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-st-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-st-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Stores & Inventory"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="CCS">
                  <summary>
                    <span className="ow-chip">{"CCS"}</span>
                    <span className="lg-mod__n">
                      {"Cost Control Setup "}
                      <small>{"· no access · 5 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-ccs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-ccs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-ccs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-ccs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-ccs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-ccs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-ccs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Cost Control Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="CC">
                  <summary>
                    <span className="ow-chip">{"CC"}</span>
                    <span className="lg-mod__n">
                      {"Cost Control "}
                      <small>{"· no access · 9 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-cc-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Cost Control"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-cc-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Cost Control"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-cc-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Cost Control"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-cc-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Cost Control"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-cc-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Cost Control"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-cc-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Cost Control"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-cc-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Cost Control"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="FNS">
                  <summary>
                    <span className="ow-chip">{"FNS"}</span>
                    <span className="lg-mod__n">
                      {"Finance Setup "}
                      <small>{"· no access · 6 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-fns-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-fns-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-fns-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-fns-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-fns-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-fns-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-fns-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Finance Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="FN">
                  <summary>
                    <span className="ow-chip">{"FN"}</span>
                    <span className="lg-mod__n">
                      {"Receivables, Payables & Banking "}
                      <small>{"· no access · 10 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-fn-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-fn-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-fn-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-fn-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-fn-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-fn-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-fn-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Receivables, Payables & Banking"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="ACS">
                  <summary>
                    <span className="ow-chip">{"ACS"}</span>
                    <span className="lg-mod__n">
                      {"General Ledger Setup "}
                      <small>{"· no access · 5 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-acs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-acs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-acs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-acs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-acs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-acs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-acs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – General Ledger Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="AC">
                  <summary>
                    <span className="ow-chip">{"AC"}</span>
                    <span className="lg-mod__n">
                      {"General Ledger "}
                      <small>{"· no access · 12 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-ac-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – General Ledger"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-ac-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – General Ledger"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-ac-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – General Ledger"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-ac-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – General Ledger"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-ac-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – General Ledger"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-ac-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – General Ledger"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-ac-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – General Ledger"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="TXS">
                  <summary>
                    <span className="ow-chip">{"TXS"}</span>
                    <span className="lg-mod__n">
                      {"Tax Setup "}
                      <small>{"· no access · 7 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-txs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-txs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-txs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-txs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-txs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-txs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-txs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Tax Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod" data-m="TX" open={true}>
                  <summary>
                    <span className="ow-chip">{"TX"}</span>
                    <span className="lg-mod__n">
                      {"Tax & Compliance "}
                      <small>{"· 9 screens · scope Property"}</small>
                    </span>
                    {"View"}
                  </summary>
                  <div className="pgw">
                    <div className="s-scroll">
                      <table className="dt__table lg-grid" data-code="LG-05-TX" data-nosort="" data-mc="grid">
                        <caption className="sr-only">{"Tax & Compliance permissions"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Screen"}</th>
                            <th scope="col" className="lg-c">{"View"}</th>
                            <th scope="col" className="lg-c">{"Create"}</th>
                            <th scope="col" className="lg-c">{"Edit"}</th>
                            <th scope="col" className="lg-c">{"Delete / Void"}</th>
                            <th scope="col" className="lg-c">{"Approve"}</th>
                            <th scope="col" className="lg-c">{"Export"}</th>
                            <th scope="col" className="lg-c">{"Print"}</th>
                            <th scope="col">{"Scope"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"TX-01"}</b>
                              {" "}
                              <Link className="fd-link" to={"/tax-and-compliance/tx-01-tax-dashboard"}>{"Tax dashboard"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-01-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – TX-01 Tax dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-01-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – TX-01 Tax dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-01-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – TX-01 Tax dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-01-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – TX-01 Tax dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-01-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – TX-01 Tax dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-01-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – TX-01 Tax dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-01-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – TX-01 Tax dashboard"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-tx-TX-01-s">{"Scope of TX-01"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-tx-TX-01-s" name="night-auditor-tx-TX-01-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"TX-02"}</b>
                              {" "}
                              <Link className="fd-link" to={"/tax-and-compliance/tx-02-gst-outward-register"}>{"Gst outward register"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-02-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – TX-02 Gst outward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-02-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – TX-02 Gst outward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-02-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – TX-02 Gst outward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-02-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – TX-02 Gst outward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-02-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – TX-02 Gst outward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-02-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – TX-02 Gst outward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-02-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – TX-02 Gst outward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-tx-TX-02-s">{"Scope of TX-02"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-tx-TX-02-s" name="night-auditor-tx-TX-02-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"TX-03"}</b>
                              {" "}
                              <Link className="fd-link" to={"/tax-and-compliance/tx-03-gst-inward-register"}>{"Gst inward register"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-03-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – TX-03 Gst inward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-03-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – TX-03 Gst inward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-03-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – TX-03 Gst inward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-03-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – TX-03 Gst inward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-03-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – TX-03 Gst inward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-03-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – TX-03 Gst inward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-03-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – TX-03 Gst inward register"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-tx-TX-03-s">{"Scope of TX-03"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-tx-TX-03-s" name="night-auditor-tx-TX-03-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"TX-04"}</b>
                              {" "}
                              <Link className="fd-link" to={"/tax-and-compliance/tx-04-gstr-1-and-gstr-3b-data"}>{"Gstr 1 & gstr 3b data"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-04-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – TX-04 Gstr 1 & gstr 3b data"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-04-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – TX-04 Gstr 1 & gstr 3b data"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-04-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – TX-04 Gstr 1 & gstr 3b data"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-04-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – TX-04 Gstr 1 & gstr 3b data"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-04-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – TX-04 Gstr 1 & gstr 3b data"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-04-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – TX-04 Gstr 1 & gstr 3b data"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-04-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – TX-04 Gstr 1 & gstr 3b data"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-tx-TX-04-s">{"Scope of TX-04"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-tx-TX-04-s" name="night-auditor-tx-TX-04-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"TX-05"}</b>
                              {" "}
                              <Link className="fd-link" to={"/tax-and-compliance/tx-05-itc-reconciliation-gstr-2b"}>{"Itc reconciliation gstr 2b"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-05-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – TX-05 Itc reconciliation gstr 2b"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-05-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – TX-05 Itc reconciliation gstr 2b"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-05-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – TX-05 Itc reconciliation gstr 2b"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-05-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – TX-05 Itc reconciliation gstr 2b"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-05-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – TX-05 Itc reconciliation gstr 2b"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-05-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – TX-05 Itc reconciliation gstr 2b"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-05-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – TX-05 Itc reconciliation gstr 2b"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-tx-TX-05-s">{"Scope of TX-05"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-tx-TX-05-s" name="night-auditor-tx-TX-05-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"TX-06"}</b>
                              {" "}
                              <Link className="fd-link" to={"/tax-and-compliance/tx-06-e-invoice-register"}>{"E invoice register"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-06-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – TX-06 E invoice register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-06-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – TX-06 E invoice register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-06-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – TX-06 E invoice register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-06-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – TX-06 E invoice register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-06-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – TX-06 E invoice register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-06-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – TX-06 E invoice register"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-06-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – TX-06 E invoice register"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-tx-TX-06-s">{"Scope of TX-06"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-tx-TX-06-s" name="night-auditor-tx-TX-06-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"TX-07"}</b>
                              {" "}
                              <Link className="fd-link" to={"/tax-and-compliance/tx-07-tds-deducted-challans-and-returns"}>{"Tds deducted challans & returns"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-07-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – TX-07 Tds deducted challans & returns"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-07-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – TX-07 Tds deducted challans & returns"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-07-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – TX-07 Tds deducted challans & returns"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-07-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – TX-07 Tds deducted challans & returns"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-07-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – TX-07 Tds deducted challans & returns"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-07-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – TX-07 Tds deducted challans & returns"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-07-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – TX-07 Tds deducted challans & returns"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-tx-TX-07-s">{"Scope of TX-07"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-tx-TX-07-s" name="night-auditor-tx-TX-07-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"TX-08"}</b>
                              {" "}
                              <Link className="fd-link" to={"/tax-and-compliance/tx-08-tds-receivable-26as-ais"}>{"Tds receivable 26as ais"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-08-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – TX-08 Tds receivable 26as ais"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-08-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – TX-08 Tds receivable 26as ais"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-08-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – TX-08 Tds receivable 26as ais"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-08-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – TX-08 Tds receivable 26as ais"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-08-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – TX-08 Tds receivable 26as ais"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-08-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – TX-08 Tds receivable 26as ais"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-08-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – TX-08 Tds receivable 26as ais"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-tx-TX-08-s">{"Scope of TX-08"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-tx-TX-08-s" name="night-auditor-tx-TX-08-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"TX-09"}</b>
                              {" "}
                              <Link className="fd-link" to={"/tax-and-compliance/tx-09-tax-reports"}>{"Tax reports"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-09-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – TX-09 Tax reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-09-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – TX-09 Tax reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-09-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – TX-09 Tax reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-09-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – TX-09 Tax reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-09-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – TX-09 Tax reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-09-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – TX-09 Tax reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-tx-TX-09-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – TX-09 Tax reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-tx-TX-09-s">{"Scope of TX-09"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-tx-TX-09-s" name="night-auditor-tx-TX-09-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <fieldset className="field fd-fieldset field--wide lg-masks">
                    <legend className="field__label">{"Field masks in Tax & Compliance"}</legend>
                    <div className="row fd-multi">
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-tx-mask" value="Hide guest contact" />
                        <span className="check__box" />
                        {"Hide guest contact"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-tx-mask" value="Hide ID documents" />
                        <span className="check__box" />
                        {"Hide ID documents"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-tx-mask" value="Hide card data" />
                        <span className="check__box" />
                        {"Hide card data"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-tx-mask" value="Hide salary" />
                        <span className="check__box" />
                        {"Hide salary"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-tx-mask" value="Hide bank details" />
                        <span className="check__box" />
                        {"Hide bank details"}
                      </label>
                    </div>
                  </fieldset>
                </details>
                <details className="lg-mod lg-mod--none" data-m="HRS">
                  <summary>
                    <span className="ow-chip">{"HRS"}</span>
                    <span className="lg-mod__n">
                      {"HR & Payroll Setup "}
                      <small>{"· no access · 8 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-hrs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-hrs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-hrs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-hrs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-hrs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-hrs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-hrs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – HR & Payroll Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="HR">
                  <summary>
                    <span className="ow-chip">{"HR"}</span>
                    <span className="lg-mod__n">
                      {"HR & Payroll "}
                      <small>{"· no access · 12 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-hr-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-hr-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-hr-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-hr-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-hr-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-hr-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-hr-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – HR & Payroll"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="RVS">
                  <summary>
                    <span className="ow-chip">{"RVS"}</span>
                    <span className="lg-mod__n">
                      {"Revenue Management Setup "}
                      <small>{"· no access · 7 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-rvs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-rvs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-rvs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-rvs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-rvs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-rvs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-rvs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Revenue Management Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="RV">
                  <summary>
                    <span className="ow-chip">{"RV"}</span>
                    <span className="lg-mod__n">
                      {"Revenue Management "}
                      <small>{"· no access · 12 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-rv-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-rv-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-rv-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-rv-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-rv-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-rv-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-rv-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Revenue Management"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="DAS">
                  <summary>
                    <span className="ow-chip">{"DAS"}</span>
                    <span className="lg-mod__n">
                      {"Dashboards & Approvals Setup "}
                      <small>{"· no access · 4 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-das-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-das-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-das-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-das-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-das-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-das-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-das-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Dashboards & Approvals Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="DA">
                  <summary>
                    <span className="ow-chip">{"DA"}</span>
                    <span className="lg-mod__n">
                      {"Dashboards & Approvals "}
                      <small>{"· no access · 9 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-da-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-da-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-da-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-da-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-da-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-da-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-da-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Dashboards & Approvals"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="ANS">
                  <summary>
                    <span className="ow-chip">{"ANS"}</span>
                    <span className="lg-mod__n">
                      {"Analytics & Reports Setup "}
                      <small>{"· no access · 5 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-ans-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-ans-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-ans-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-ans-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-ans-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-ans-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-ans-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Analytics & Reports Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod" data-m="AN" open={true}>
                  <summary>
                    <span className="ow-chip">{"AN"}</span>
                    <span className="lg-mod__n">
                      {"Analytics & Reports "}
                      <small>{"· 10 screens · scope Property"}</small>
                    </span>
                    {"View, Export, Print"}
                  </summary>
                  <div className="pgw">
                    <div className="s-scroll">
                      <table className="dt__table lg-grid" data-code="LG-05-AN" data-nosort="" data-mc="grid">
                        <caption className="sr-only">{"Analytics & Reports permissions"}</caption>
                        <thead>
                          <tr>
                            <th scope="col">{"Screen"}</th>
                            <th scope="col" className="lg-c">{"View"}</th>
                            <th scope="col" className="lg-c">{"Create"}</th>
                            <th scope="col" className="lg-c">{"Edit"}</th>
                            <th scope="col" className="lg-c">{"Delete / Void"}</th>
                            <th scope="col" className="lg-c">{"Approve"}</th>
                            <th scope="col" className="lg-c">{"Export"}</th>
                            <th scope="col" className="lg-c">{"Print"}</th>
                            <th scope="col">{"Scope"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"AN-01"}</b>
                              {" "}
                              <Link className="fd-link" to={"/analytics-and-reports/an-01-report-library"}>{"Report library"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-01-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – AN-01 Report library"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-01-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – AN-01 Report library"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-01-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – AN-01 Report library"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-01-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – AN-01 Report library"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-01-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – AN-01 Report library"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-01-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – AN-01 Report library"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-01-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – AN-01 Report library"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-an-AN-01-s">{"Scope of AN-01"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-an-AN-01-s" name="night-auditor-an-AN-01-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"AN-02"}</b>
                              {" "}
                              <Link className="fd-link" to={"/analytics-and-reports/an-02-report-viewer"}>{"Report viewer"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-02-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – AN-02 Report viewer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-02-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – AN-02 Report viewer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-02-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – AN-02 Report viewer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-02-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – AN-02 Report viewer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-02-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – AN-02 Report viewer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-02-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – AN-02 Report viewer"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-02-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – AN-02 Report viewer"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-an-AN-02-s">{"Scope of AN-02"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-an-AN-02-s" name="night-auditor-an-AN-02-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"AN-03"}</b>
                              {" "}
                              <Link className="fd-link" to={"/analytics-and-reports/an-03-flash-report"}>{"Flash report"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-03-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – AN-03 Flash report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-03-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – AN-03 Flash report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-03-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – AN-03 Flash report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-03-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – AN-03 Flash report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-03-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – AN-03 Flash report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-03-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – AN-03 Flash report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-03-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – AN-03 Flash report"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-an-AN-03-s">{"Scope of AN-03"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-an-AN-03-s" name="night-auditor-an-AN-03-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"AN-04"}</b>
                              {" "}
                              <Link className="fd-link" to={"/analytics-and-reports/an-04-manager-s-report"}>{"Manager s report"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-04-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – AN-04 Manager s report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-04-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – AN-04 Manager s report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-04-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – AN-04 Manager s report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-04-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – AN-04 Manager s report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-04-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – AN-04 Manager s report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-04-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – AN-04 Manager s report"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-04-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – AN-04 Manager s report"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-an-AN-04-s">{"Scope of AN-04"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-an-AN-04-s" name="night-auditor-an-AN-04-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"AN-05"}</b>
                              {" "}
                              <Link className="fd-link" to={"/analytics-and-reports/an-05-occupancy-and-revenue-statistics"}>{"Occupancy & revenue statistics"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-05-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – AN-05 Occupancy & revenue statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-05-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – AN-05 Occupancy & revenue statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-05-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – AN-05 Occupancy & revenue statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-05-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – AN-05 Occupancy & revenue statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-05-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – AN-05 Occupancy & revenue statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-05-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – AN-05 Occupancy & revenue statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-05-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – AN-05 Occupancy & revenue statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-an-AN-05-s">{"Scope of AN-05"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-an-AN-05-s" name="night-auditor-an-AN-05-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"AN-06"}</b>
                              {" "}
                              <Link className="fd-link" to={"/analytics-and-reports/an-06-guest-statistics"}>{"Guest statistics"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-06-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – AN-06 Guest statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-06-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – AN-06 Guest statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-06-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – AN-06 Guest statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-06-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – AN-06 Guest statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-06-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – AN-06 Guest statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-06-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – AN-06 Guest statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-06-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – AN-06 Guest statistics"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-an-AN-06-s">{"Scope of AN-06"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-an-AN-06-s" name="night-auditor-an-AN-06-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"AN-07"}</b>
                              {" "}
                              <Link className="fd-link" to={"/analytics-and-reports/an-07-collections-and-outstanding"}>{"Collections & outstanding"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-07-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – AN-07 Collections & outstanding"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-07-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – AN-07 Collections & outstanding"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-07-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – AN-07 Collections & outstanding"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-07-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – AN-07 Collections & outstanding"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-07-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – AN-07 Collections & outstanding"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-07-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – AN-07 Collections & outstanding"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-07-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – AN-07 Collections & outstanding"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-an-AN-07-s">{"Scope of AN-07"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-an-AN-07-s" name="night-auditor-an-AN-07-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"AN-08"}</b>
                              {" "}
                              <Link className="fd-link" to={"/analytics-and-reports/an-08-audit-trail-reports"}>{"Audit trail reports"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-08-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – AN-08 Audit trail reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-08-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – AN-08 Audit trail reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-08-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – AN-08 Audit trail reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-08-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – AN-08 Audit trail reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-08-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – AN-08 Audit trail reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-08-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – AN-08 Audit trail reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-08-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – AN-08 Audit trail reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-an-AN-08-s">{"Scope of AN-08"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-an-AN-08-s" name="night-auditor-an-AN-08-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"AN-09"}</b>
                              {" "}
                              <Link className="fd-link" to={"/analytics-and-reports/an-09-my-scheduled-reports"}>{"My scheduled reports"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-09-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – AN-09 My scheduled reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-09-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – AN-09 My scheduled reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-09-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – AN-09 My scheduled reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-09-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – AN-09 My scheduled reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-09-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – AN-09 My scheduled reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-09-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – AN-09 My scheduled reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-09-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – AN-09 My scheduled reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-an-AN-09-s">{"Scope of AN-09"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-an-AN-09-s" name="night-auditor-an-AN-09-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="dt__td" data-label="Screen" data-w2="" data-t="">
                              <input className="mc-more" type="checkbox" aria-label="Show all details" />
                              <b className="num">{"AN-10"}</b>
                              {" "}
                              <Link className="fd-link" to={"/analytics-and-reports/an-10-ad-hoc-analysis"}>{"Ad hoc analysis"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-10-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – AN-10 Ad hoc analysis"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-10-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – AN-10 Ad hoc analysis"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-10-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – AN-10 Ad hoc analysis"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-10-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – AN-10 Ad hoc analysis"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-10-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – AN-10 Ad hoc analysis"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-10-5" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – AN-10 Ad hoc analysis"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="night-auditor-an-AN-10-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – AN-10 Ad hoc analysis"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="night-auditor-an-AN-10-s">{"Scope of AN-10"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="night-auditor-an-AN-10-s" name="night-auditor-an-AN-10-s" defaultValue={"Property"}>
                                  <option value="Own records">{"Own records"}</option>
                                  <option value="Department">{"Department"}</option>
                                  <option value="Property">{"Property"}</option>
                                  <option value="All properties">{"All properties"}</option>
                                </select>
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <fieldset className="field fd-fieldset field--wide lg-masks">
                    <legend className="field__label">{"Field masks in Analytics & Reports"}</legend>
                    <div className="row fd-multi">
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-an-mask" value="Hide guest contact" />
                        <span className="check__box" />
                        {"Hide guest contact"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-an-mask" value="Hide ID documents" />
                        <span className="check__box" />
                        {"Hide ID documents"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-an-mask" value="Hide card data" />
                        <span className="check__box" />
                        {"Hide card data"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-an-mask" value="Hide salary" />
                        <span className="check__box" />
                        {"Hide salary"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="night-auditor-an-mask" value="Hide bank details" />
                        <span className="check__box" />
                        {"Hide bank details"}
                      </label>
                    </div>
                  </fieldset>
                </details>
                <details className="lg-mod lg-mod--none" data-m="MSS">
                  <summary>
                    <span className="ow-chip">{"MSS"}</span>
                    <span className="lg-mod__n">
                      {"MIS & Budgeting Setup "}
                      <small>{"· no access · 5 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-mss-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-mss-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-mss-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-mss-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-mss-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-mss-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-mss-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – MIS & Budgeting Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="MS">
                  <summary>
                    <span className="ow-chip">{"MS"}</span>
                    <span className="lg-mod__n">
                      {"MIS & Budgeting "}
                      <small>{"· no access · 8 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-ms-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-ms-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-ms-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-ms-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-ms-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-ms-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-ms-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – MIS & Budgeting"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="OWS">
                  <summary>
                    <span className="ow-chip">{"OWS"}</span>
                    <span className="lg-mod__n">
                      {"Owner App & Multi-property Setup "}
                      <small>{"· no access · 5 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-ows-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-ows-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-ows-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-ows-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-ows-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-ows-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-ows-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Owner App & Multi-property Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="OW">
                  <summary>
                    <span className="ow-chip">{"OW"}</span>
                    <span className="lg-mod__n">
                      {"Owner App & Multi-property "}
                      <small>{"· no access · 9 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-ow-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-ow-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-ow-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-ow-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-ow-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-ow-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-ow-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Owner App & Multi-property"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="LG">
                  <summary>
                    <span className="ow-chip">{"LG"}</span>
                    <span className="lg-mod__n">
                      {"User & Access Management "}
                      <small>{"· no access · 11 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="night-auditor-lg-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="night-auditor-lg-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="night-auditor-lg-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="night-auditor-lg-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="night-auditor-lg-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="night-auditor-lg-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="night-auditor-lg-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – User & Access Management"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <div className="fd-formfoot">
                  <span className="fd-spacer">{"High-risk changes are sent to the GM for approval (BR-02). Nobody can change their own permissions (BR-01)."}</span>
                  <Link className="btn" to={"/user-and-access-management/lg-04-roles"}>{"Cancel"}</Link>
                  <a className="btn" href="#compare">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#columns" />
                    </svg>
                    {"Compare with Cashier"}
                  </a>
                  <button className="btn btn--primary" type="submit">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#check" />
                    </svg>
                    {"Save"}
                  </button>
                </div>
              </form>
              <details className="hk-sys" data-code="LG-X01">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#cog" />
                  </svg>
                  {"System – what runs automatically on this screen"}
                </summary>
                <ul>
                  <li data-code="LG-X01">
                    <b>{"LG-X01 · Authorisation service"}</b>
                    {" – Checks the role permissions, scope, field masks and limits of the signed-in user on every screen and action of every module."}
                  </li>
                  <li data-code="LG-R03">
                    <b>{"LG-R03 · Change history"}</b>
                    {" – Every saved change is kept with the old and new value, the user and the approver."}
                  </li>
                </ul>
              </details>
              <div className="fd-toast" id="t-saved" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Changes sent to the GM"}
                  <small>{"Night Auditor has high-risk permissions – the change waits in the Approvals inbox (DA-03); the change history keeps the old and new values (LG-R03)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-created" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#plus-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Night Auditor created from its template"}
                  <small>{"Change the permissions and save – the GM approves the new role (DA-03)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-cmp-x" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#download" />
                </svg>
                <div className="fd-toast__text">
                  {"Comparison exported"}
                  <small>{"PDF and Excel are in your downloads."}</small>
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
