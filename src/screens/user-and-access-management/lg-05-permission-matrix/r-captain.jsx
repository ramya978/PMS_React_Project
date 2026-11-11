// GENERATED from public/user-and-access-management/lg-05-permission-matrix/r-captain.html by scripts/convert_legacy.py.
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

export default function UserAndAccessManagementLg05PermissionMatrixRCaptain() {
  return (
    <ScreenShell title="Permission Matrix – Captain" sheets={SHEETS} inlineCss={INLINE_CSS}>
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
                        <span aria-current="page">{"Captain"}</span>
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
                        {"Captain"}
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
                <Link className="hv__v" to={"/user-and-access-management/lg-05-permission-matrix/r-night-auditor"}>
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
                <Link className="hv__v" aria-current="page" to={"/user-and-access-management/lg-05-permission-matrix/r-captain"}>
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
                  <span className="cc-kpi__v">{"48"}</span>
                  <span className="cc-kpi__l">{"Actions allowed"}</span>
                  <span className="cc-kpi__s">{"Template"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"2"}</span>
                  <span className="cc-kpi__l">{"Modules with access"}</span>
                  <span className="cc-kpi__s">{"of 47"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"18"}</span>
                  <span className="cc-kpi__l">{"Screens"}</span>
                  <span className="cc-kpi__s">{"in those modules"}</span>
                </li>
                <li className="cc-kpi cc-kpi--ok">
                  <span className="cc-kpi__v">{"0"}</span>
                  <span className="cc-kpi__l">{"High-risk permissions"}</span>
                  <span className="cc-kpi__s">{"none"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"7"}</span>
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
                  {"Compare with Steward "}
                  <small>{"module access and scope"}</small>
                </h2>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="dt__table dt--hug" data-code="LG-05-compare-captain" data-nosort="" data-mc="">
                      <caption className="sr-only">{"Compare roles"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Code"}</th>
                          <th scope="col">{"Module"}</th>
                          <th scope="col">{"Captain"}</th>
                          <th scope="col">{"Steward"}</th>
                          <th scope="col">{"Difference"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="dt__td" data-label="Code" data-t="">
                            <b>{"RT"}</b>
                          </td>
                          <td className="dt__td" data-label="Module" data-w2="">{"Restaurant POS"}</td>
                          <td className="dt__td" data-label="Captain">{"View, Create, Edit, Print · Department"}</td>
                          <td className="dt__td" data-label="Steward">{"View, Create · Own records"}</td>
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
                            <b>{"KT"}</b>
                          </td>
                          <td className="dt__td" data-label="Module" data-w2="">{"Kitchen Display"}</td>
                          <td className="dt__td" data-label="Captain" data-w2="">{"View · Department"}</td>
                          <td className="dt__td" data-label="Steward" data-w2="">{"View · Department"}</td>
                          <td className="dt__td" data-label="Difference" data-w2="" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check" />
                              </svg>
                              {"Same"}
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
              <form className="prs-form lg-mx" action="/user-and-access-management/lg-05-permission-matrix/r-captain.html#saved" method="get">
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
                        <input className="check__input" type="checkbox" name="captain-rss-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-rss-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-rss-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-rss-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-rss-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-rss-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Reservation Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-rss-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Reservation Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="RS">
                  <summary>
                    <span className="ow-chip">{"RS"}</span>
                    <span className="lg-mod__n">
                      {"Reservations "}
                      <small>{"· no access · 23 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="captain-rs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Reservations"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-rs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Reservations"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-rs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Reservations"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-rs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Reservations"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-rs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Reservations"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-rs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Reservations"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-rs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Reservations"}</span>
                      </label>
                    </span>
                  </div>
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
                        <input className="check__input" type="checkbox" name="captain-fds-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-fds-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-fds-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-fds-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-fds-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-fds-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Front Desk Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-fds-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Front Desk Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="FD">
                  <summary>
                    <span className="ow-chip">{"FD"}</span>
                    <span className="lg-mod__n">
                      {"Front Desk "}
                      <small>{"· no access · 38 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="captain-fd-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Front Desk"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-fd-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Front Desk"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-fd-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Front Desk"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-fd-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Front Desk"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-fd-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Front Desk"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-fd-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Front Desk"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-fd-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Front Desk"}</span>
                      </label>
                    </span>
                  </div>
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
                        <input className="check__input" type="checkbox" name="captain-hks-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-hks-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-hks-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-hks-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-hks-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-hks-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Housekeeping Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-hks-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-hk-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-hk-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-hk-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-hk-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-hk-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-hk-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Housekeeping"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-hk-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-las-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-las-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-las-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-las-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-las-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-las-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Laundry Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-las-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-la-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Laundry"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-la-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Laundry"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-la-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Laundry"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-la-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Laundry"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-la-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Laundry"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-la-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Laundry"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-la-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-mbs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-mbs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-mbs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-mbs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-mbs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-mbs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Minibar Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-mbs-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-mb-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Minibar"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-mb-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Minibar"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-mb-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Minibar"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-mb-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Minibar"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-mb-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Minibar"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-mb-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Minibar"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-mb-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-lns-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-lns-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-lns-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-lns-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-lns-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-lns-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Linen & Amenities Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-lns-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-ln-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-ln-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-ln-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-ln-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-ln-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-ln-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Linen & Amenities"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-ln-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-lfs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-lfs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-lfs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-lfs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-lfs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-lfs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Lost & Found Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-lfs-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-lf-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-lf-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-lf-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-lf-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-lf-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-lf-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Lost & Found"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-lf-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-mts-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-mts-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-mts-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-mts-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-mts-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-mts-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Engineering Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-mts-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-mt-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-mt-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-mt-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-mt-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-mt-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-mt-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Engineering & Maintenance"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-mt-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-rts-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-rts-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-rts-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-rts-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-rts-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-rts-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Restaurant POS Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-rts-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Restaurant POS Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod" data-m="RT" open={true}>
                  <summary>
                    <span className="ow-chip">{"RT"}</span>
                    <span className="lg-mod__n">
                      {"Restaurant POS "}
                      <small>{"· 10 screens · scope Department"}</small>
                    </span>
                    {"View, Create, Edit, Print"}
                  </summary>
                  <div className="pgw">
                    <div className="s-scroll">
                      <table className="dt__table lg-grid" data-code="LG-05-RT" data-nosort="" data-mc="grid">
                        <caption className="sr-only">{"Restaurant POS permissions"}</caption>
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
                              <b className="num">{"RT-01"}</b>
                              {" "}
                              <Link className="fd-link" to={"/restaurant-pos/rt-01-pos-home"}>{"Pos home"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-01-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RT-01 Pos home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-01-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RT-01 Pos home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-01-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RT-01 Pos home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-01-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RT-01 Pos home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-01-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RT-01 Pos home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-01-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RT-01 Pos home"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-01-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RT-01 Pos home"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-rt-RT-01-s">{"Scope of RT-01"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-rt-RT-01-s" name="captain-rt-RT-01-s" defaultValue={"Department"}>
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
                              <b className="num">{"RT-02"}</b>
                              {" "}
                              <Link className="fd-link" to={"/restaurant-pos/rt-02-table-layout"}>{"Table layout"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-02-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RT-02 Table layout"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-02-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RT-02 Table layout"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-02-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RT-02 Table layout"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-02-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RT-02 Table layout"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-02-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RT-02 Table layout"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-02-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RT-02 Table layout"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-02-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RT-02 Table layout"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-rt-RT-02-s">{"Scope of RT-02"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-rt-RT-02-s" name="captain-rt-RT-02-s" defaultValue={"Department"}>
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
                              <b className="num">{"RT-03"}</b>
                              {" "}
                              <Link className="fd-link" to={"/restaurant-pos/rt-03-order-entry"}>{"Order entry"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-03-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RT-03 Order entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-03-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RT-03 Order entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-03-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RT-03 Order entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-03-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RT-03 Order entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-03-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RT-03 Order entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-03-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RT-03 Order entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-03-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RT-03 Order entry"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-rt-RT-03-s">{"Scope of RT-03"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-rt-RT-03-s" name="captain-rt-RT-03-s" defaultValue={"Department"}>
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
                              <b className="num">{"RT-05"}</b>
                              {" "}
                              <Link className="fd-link" to={"/restaurant-pos/rt-05-bill-and-settlement"}>{"Bill & settlement"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-05-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RT-05 Bill & settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-05-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RT-05 Bill & settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-05-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RT-05 Bill & settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-05-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RT-05 Bill & settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-05-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RT-05 Bill & settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-05-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RT-05 Bill & settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-05-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RT-05 Bill & settlement"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-rt-RT-05-s">{"Scope of RT-05"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-rt-RT-05-s" name="captain-rt-RT-05-s" defaultValue={"Department"}>
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
                              <b className="num">{"RT-06"}</b>
                              {" "}
                              <Link className="fd-link" to={"/restaurant-pos/rt-06-room-service-orders"}>{"Room service orders"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-06-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RT-06 Room service orders"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-06-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RT-06 Room service orders"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-06-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RT-06 Room service orders"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-06-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RT-06 Room service orders"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-06-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RT-06 Room service orders"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-06-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RT-06 Room service orders"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-06-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RT-06 Room service orders"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-rt-RT-06-s">{"Scope of RT-06"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-rt-RT-06-s" name="captain-rt-RT-06-s" defaultValue={"Department"}>
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
                              <b className="num">{"RT-07"}</b>
                              {" "}
                              <Link className="fd-link" to={"/restaurant-pos/rt-07-takeaway-counter-order"}>{"Takeaway counter order"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-07-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RT-07 Takeaway counter order"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-07-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RT-07 Takeaway counter order"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-07-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RT-07 Takeaway counter order"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-07-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RT-07 Takeaway counter order"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-07-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RT-07 Takeaway counter order"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-07-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RT-07 Takeaway counter order"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-07-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RT-07 Takeaway counter order"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-rt-RT-07-s">{"Scope of RT-07"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-rt-RT-07-s" name="captain-rt-RT-07-s" defaultValue={"Department"}>
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
                              <b className="num">{"RT-08"}</b>
                              {" "}
                              <Link className="fd-link" to={"/restaurant-pos/rt-08-table-booking"}>{"Table booking"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-08-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RT-08 Table booking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-08-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RT-08 Table booking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-08-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RT-08 Table booking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-08-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RT-08 Table booking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-08-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RT-08 Table booking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-08-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RT-08 Table booking"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-08-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RT-08 Table booking"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-rt-RT-08-s">{"Scope of RT-08"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-rt-RT-08-s" name="captain-rt-RT-08-s" defaultValue={"Department"}>
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
                              <b className="num">{"RT-09"}</b>
                              {" "}
                              <Link className="fd-link" to={"/restaurant-pos/rt-09-open-checks"}>{"Open checks"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-09-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RT-09 Open checks"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-09-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RT-09 Open checks"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-09-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RT-09 Open checks"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-09-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RT-09 Open checks"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-09-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RT-09 Open checks"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-09-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RT-09 Open checks"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-09-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RT-09 Open checks"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-rt-RT-09-s">{"Scope of RT-09"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-rt-RT-09-s" name="captain-rt-RT-09-s" defaultValue={"Department"}>
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
                              <b className="num">{"RT-10"}</b>
                              {" "}
                              <Link className="fd-link" to={"/restaurant-pos/rt-10-day-close"}>{"Day close"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-10-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RT-10 Day close"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-10-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RT-10 Day close"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-10-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RT-10 Day close"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-10-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RT-10 Day close"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-10-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RT-10 Day close"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-10-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RT-10 Day close"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-10-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RT-10 Day close"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-rt-RT-10-s">{"Scope of RT-10"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-rt-RT-10-s" name="captain-rt-RT-10-s" defaultValue={"Department"}>
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
                              <b className="num">{"RT-11"}</b>
                              {" "}
                              <Link className="fd-link" to={"/restaurant-pos/rt-11-outlet-reports"}>{"Outlet reports"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-11-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – RT-11 Outlet reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-11-1" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – RT-11 Outlet reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-11-2" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – RT-11 Outlet reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-11-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – RT-11 Outlet reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-11-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – RT-11 Outlet reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-11-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – RT-11 Outlet reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-rt-RT-11-6" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – RT-11 Outlet reports"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-rt-RT-11-s">{"Scope of RT-11"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-rt-RT-11-s" name="captain-rt-RT-11-s" defaultValue={"Department"}>
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
                    <legend className="field__label">{"Field masks in Restaurant POS"}</legend>
                    <div className="row fd-multi">
                      <label className="check">
                        <input className="check__input" type="checkbox" name="captain-rt-mask" value="Hide guest contact" defaultChecked={true} />
                        <span className="check__box" />
                        {"Hide guest contact"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="captain-rt-mask" value="Hide ID documents" />
                        <span className="check__box" />
                        {"Hide ID documents"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="captain-rt-mask" value="Hide card data" />
                        <span className="check__box" />
                        {"Hide card data"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="captain-rt-mask" value="Hide salary" />
                        <span className="check__box" />
                        {"Hide salary"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="captain-rt-mask" value="Hide bank details" />
                        <span className="check__box" />
                        {"Hide bank details"}
                      </label>
                    </div>
                  </fieldset>
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
                        <input className="check__input" type="checkbox" name="captain-kts-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-kts-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-kts-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-kts-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-kts-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-kts-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Kitchen Display Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-kts-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Kitchen Display Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod" data-m="KT" open={true}>
                  <summary>
                    <span className="ow-chip">{"KT"}</span>
                    <span className="lg-mod__n">
                      {"Kitchen Display "}
                      <small>{"· 8 screens · scope Department"}</small>
                    </span>
                    {"View"}
                  </summary>
                  <div className="pgw">
                    <div className="s-scroll">
                      <table className="dt__table lg-grid" data-code="LG-05-KT" data-nosort="" data-mc="grid">
                        <caption className="sr-only">{"Kitchen Display permissions"}</caption>
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
                              <b className="num">{"KT-01"}</b>
                              {" "}
                              <Link className="fd-link" to={"/kitchen-display/kt-01-kds-sign-in-and-station"}>{"Kds sign in & station"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-01-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – KT-01 Kds sign in & station"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-01-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – KT-01 Kds sign in & station"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-01-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – KT-01 Kds sign in & station"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-01-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – KT-01 Kds sign in & station"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-01-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – KT-01 Kds sign in & station"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-01-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – KT-01 Kds sign in & station"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-01-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – KT-01 Kds sign in & station"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-kt-KT-01-s">{"Scope of KT-01"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-kt-KT-01-s" name="captain-kt-KT-01-s" defaultValue={"Department"}>
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
                              <b className="num">{"KT-02"}</b>
                              {" "}
                              <Link className="fd-link" to={"/kitchen-display/kt-02-station-display"}>{"Station display"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-02-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – KT-02 Station display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-02-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – KT-02 Station display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-02-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – KT-02 Station display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-02-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – KT-02 Station display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-02-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – KT-02 Station display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-02-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – KT-02 Station display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-02-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – KT-02 Station display"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-kt-KT-02-s">{"Scope of KT-02"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-kt-KT-02-s" name="captain-kt-KT-02-s" defaultValue={"Department"}>
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
                              <b className="num">{"KT-03"}</b>
                              {" "}
                              <Link className="fd-link" to={"/kitchen-display/kt-03-expo-pass-display"}>{"Expo pass display"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-03-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – KT-03 Expo pass display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-03-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – KT-03 Expo pass display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-03-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – KT-03 Expo pass display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-03-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – KT-03 Expo pass display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-03-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – KT-03 Expo pass display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-03-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – KT-03 Expo pass display"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-03-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – KT-03 Expo pass display"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-kt-KT-03-s">{"Scope of KT-03"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-kt-KT-03-s" name="captain-kt-KT-03-s" defaultValue={"Department"}>
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
                              <b className="num">{"KT-04"}</b>
                              {" "}
                              <Link className="fd-link" to={"/kitchen-display/kt-04-all-day-count"}>{"All day count"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-04-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – KT-04 All day count"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-04-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – KT-04 All day count"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-04-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – KT-04 All day count"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-04-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – KT-04 All day count"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-04-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – KT-04 All day count"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-04-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – KT-04 All day count"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-04-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – KT-04 All day count"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-kt-KT-04-s">{"Scope of KT-04"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-kt-KT-04-s" name="captain-kt-KT-04-s" defaultValue={"Department"}>
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
                              <b className="num">{"KT-05"}</b>
                              {" "}
                              <Link className="fd-link" to={"/kitchen-display/kt-05-item-availability"}>{"Item availability"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-05-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – KT-05 Item availability"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-05-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – KT-05 Item availability"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-05-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – KT-05 Item availability"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-05-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – KT-05 Item availability"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-05-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – KT-05 Item availability"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-05-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – KT-05 Item availability"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-05-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – KT-05 Item availability"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-kt-KT-05-s">{"Scope of KT-05"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-kt-KT-05-s" name="captain-kt-KT-05-s" defaultValue={"Department"}>
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
                              <b className="num">{"KT-06"}</b>
                              {" "}
                              <Link className="fd-link" to={"/kitchen-display/kt-06-banquet-production-list"}>{"Banquet production list"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-06-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – KT-06 Banquet production list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-06-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – KT-06 Banquet production list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-06-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – KT-06 Banquet production list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-06-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – KT-06 Banquet production list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-06-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – KT-06 Banquet production list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-06-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – KT-06 Banquet production list"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-06-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – KT-06 Banquet production list"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-kt-KT-06-s">{"Scope of KT-06"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-kt-KT-06-s" name="captain-kt-KT-06-s" defaultValue={"Department"}>
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
                              <b className="num">{"KT-07"}</b>
                              {" "}
                              <Link className="fd-link" to={"/kitchen-display/kt-07-recall"}>{"Recall"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-07-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – KT-07 Recall"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-07-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – KT-07 Recall"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-07-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – KT-07 Recall"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-07-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – KT-07 Recall"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-07-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – KT-07 Recall"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-07-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – KT-07 Recall"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-07-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – KT-07 Recall"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-kt-KT-07-s">{"Scope of KT-07"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-kt-KT-07-s" name="captain-kt-KT-07-s" defaultValue={"Department"}>
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
                              <b className="num">{"KT-08"}</b>
                              {" "}
                              <Link className="fd-link" to={"/kitchen-display/kt-08-kitchen-performance"}>{"Kitchen performance"}</Link>
                            </td>
                            <td className="dt__td lg-c" data-label="View">
                              <label className="check" title="View">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-08-0" defaultChecked={true} />
                                <span className="check__box" />
                                <span className="sr-only">{"View – KT-08 Kitchen performance"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Create">
                              <label className="check" title="Create">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-08-1" />
                                <span className="check__box" />
                                <span className="sr-only">{"Create – KT-08 Kitchen performance"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Edit">
                              <label className="check" title="Edit">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-08-2" />
                                <span className="check__box" />
                                <span className="sr-only">{"Edit – KT-08 Kitchen performance"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c lg-c--hr" data-label="Delete / Void" data-w2="">
                              <label className="check" title="Delete / Void – high-risk">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-08-3" />
                                <span className="check__box" />
                                <span className="sr-only">{"Delete / Void – KT-08 Kitchen performance"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Approve" data-w2="">
                              <label className="check" title="Approve">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-08-4" />
                                <span className="check__box" />
                                <span className="sr-only">{"Approve – KT-08 Kitchen performance"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Export">
                              <label className="check" title="Export">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-08-5" />
                                <span className="check__box" />
                                <span className="sr-only">{"Export – KT-08 Kitchen performance"}</span>
                              </label>
                            </td>
                            <td className="dt__td lg-c" data-label="Print" data-m="">
                              <label className="check" title="Print">
                                <input className="check__input" type="checkbox" name="captain-kt-KT-08-6" />
                                <span className="check__box" />
                                <span className="sr-only">{"Print – KT-08 Kitchen performance"}</span>
                              </label>
                            </td>
                            <td className="dt__td" data-label="Scope" data-m="">
                              <label className="sr-only" htmlFor="captain-kt-KT-08-s">{"Scope of KT-08"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="captain-kt-KT-08-s" name="captain-kt-KT-08-s" defaultValue={"Department"}>
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
                    <legend className="field__label">{"Field masks in Kitchen Display"}</legend>
                    <div className="row fd-multi">
                      <label className="check">
                        <input className="check__input" type="checkbox" name="captain-kt-mask" value="Hide guest contact" />
                        <span className="check__box" />
                        {"Hide guest contact"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="captain-kt-mask" value="Hide ID documents" />
                        <span className="check__box" />
                        {"Hide ID documents"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="captain-kt-mask" value="Hide card data" />
                        <span className="check__box" />
                        {"Hide card data"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="captain-kt-mask" value="Hide salary" />
                        <span className="check__box" />
                        {"Hide salary"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="captain-kt-mask" value="Hide bank details" />
                        <span className="check__box" />
                        {"Hide bank details"}
                      </label>
                    </div>
                  </fieldset>
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
                        <input className="check__input" type="checkbox" name="captain-bqs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-bqs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-bqs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-bqs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-bqs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-bqs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Banquets & Events Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-bqs-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-bq-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-bq-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-bq-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-bq-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-bq-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-bq-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Banquets & Events"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-bq-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-prs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-prs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-prs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-prs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-prs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-prs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Purchase Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-prs-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-pr-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Purchase"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-pr-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Purchase"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-pr-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Purchase"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-pr-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Purchase"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-pr-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Purchase"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-pr-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Purchase"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-pr-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-sts-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-sts-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-sts-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-sts-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-sts-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-sts-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Stores Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-sts-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-st-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-st-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-st-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-st-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-st-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-st-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Stores & Inventory"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-st-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-ccs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-ccs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-ccs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-ccs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-ccs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-ccs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Cost Control Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-ccs-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-cc-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Cost Control"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-cc-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Cost Control"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-cc-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Cost Control"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-cc-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Cost Control"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-cc-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Cost Control"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-cc-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Cost Control"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-cc-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-fns-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-fns-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-fns-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-fns-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-fns-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-fns-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Finance Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-fns-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-fn-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-fn-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-fn-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-fn-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-fn-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-fn-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Receivables, Payables & Banking"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-fn-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-acs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-acs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-acs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-acs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-acs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-acs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – General Ledger Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-acs-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-ac-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – General Ledger"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-ac-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – General Ledger"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-ac-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – General Ledger"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-ac-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – General Ledger"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-ac-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – General Ledger"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-ac-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – General Ledger"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-ac-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-txs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-txs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-txs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-txs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-txs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-txs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Tax Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-txs-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Tax Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="TX">
                  <summary>
                    <span className="ow-chip">{"TX"}</span>
                    <span className="lg-mod__n">
                      {"Tax & Compliance "}
                      <small>{"· no access · 9 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="captain-tx-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Tax & Compliance"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-tx-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Tax & Compliance"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-tx-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Tax & Compliance"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-tx-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Tax & Compliance"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-tx-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Tax & Compliance"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-tx-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Tax & Compliance"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-tx-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Tax & Compliance"}</span>
                      </label>
                    </span>
                  </div>
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
                        <input className="check__input" type="checkbox" name="captain-hrs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-hrs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-hrs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-hrs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-hrs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-hrs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – HR & Payroll Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-hrs-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-hr-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-hr-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-hr-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-hr-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-hr-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-hr-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – HR & Payroll"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-hr-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-rvs-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-rvs-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-rvs-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-rvs-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-rvs-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-rvs-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Revenue Management Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-rvs-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-rv-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-rv-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-rv-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-rv-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-rv-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-rv-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Revenue Management"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-rv-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-das-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-das-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-das-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-das-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-das-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-das-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Dashboards & Approvals Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-das-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-da-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-da-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-da-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-da-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-da-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-da-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Dashboards & Approvals"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-da-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-ans-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-ans-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-ans-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-ans-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-ans-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-ans-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Analytics & Reports Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-ans-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Analytics & Reports Setup"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <details className="lg-mod lg-mod--none" data-m="AN">
                  <summary>
                    <span className="ow-chip">{"AN"}</span>
                    <span className="lg-mod__n">
                      {"Analytics & Reports "}
                      <small>{"· no access · 10 screens"}</small>
                    </span>
                  </summary>
                  <div className="lg-none">
                    <span className="fd-muted">{"Tick the actions to give this role access to every screen of the module; fine-tune each screen after saving."}</span>
                    <span className="lg-boxes">
                      <label className="check" title="View">
                        <input className="check__input" type="checkbox" name="captain-an-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Analytics & Reports"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-an-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Analytics & Reports"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-an-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Analytics & Reports"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-an-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Analytics & Reports"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-an-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Analytics & Reports"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-an-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Analytics & Reports"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-an-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – Analytics & Reports"}</span>
                      </label>
                    </span>
                  </div>
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
                        <input className="check__input" type="checkbox" name="captain-mss-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-mss-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-mss-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-mss-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-mss-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-mss-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – MIS & Budgeting Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-mss-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-ms-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-ms-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-ms-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-ms-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-ms-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-ms-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – MIS & Budgeting"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-ms-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-ows-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-ows-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-ows-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-ows-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-ows-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-ows-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Owner App & Multi-property Setup"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-ows-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-ow-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-ow-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-ow-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-ow-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-ow-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-ow-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – Owner App & Multi-property"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-ow-m6" />
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
                        <input className="check__input" type="checkbox" name="captain-lg-m0" />
                        <span className="check__box" />
                        <span className="sr-only">{"View – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Create">
                        <input className="check__input" type="checkbox" name="captain-lg-m1" />
                        <span className="check__box" />
                        <span className="sr-only">{"Create – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Edit">
                        <input className="check__input" type="checkbox" name="captain-lg-m2" />
                        <span className="check__box" />
                        <span className="sr-only">{"Edit – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Delete / Void">
                        <input className="check__input" type="checkbox" name="captain-lg-m3" />
                        <span className="check__box" />
                        <span className="sr-only">{"Delete / Void – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Approve">
                        <input className="check__input" type="checkbox" name="captain-lg-m4" />
                        <span className="check__box" />
                        <span className="sr-only">{"Approve – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Export">
                        <input className="check__input" type="checkbox" name="captain-lg-m5" />
                        <span className="check__box" />
                        <span className="sr-only">{"Export – User & Access Management"}</span>
                      </label>
                      <label className="check" title="Print">
                        <input className="check__input" type="checkbox" name="captain-lg-m6" />
                        <span className="check__box" />
                        <span className="sr-only">{"Print – User & Access Management"}</span>
                      </label>
                    </span>
                  </div>
                </details>
                <div className="fd-formfoot">
                  <span className="fd-spacer">{"Saved permissions apply at the next action. Nobody can change their own permissions (BR-01)."}</span>
                  <Link className="btn" to={"/user-and-access-management/lg-04-roles"}>{"Cancel"}</Link>
                  <a className="btn" href="#compare">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#columns" />
                    </svg>
                    {"Compare with Steward"}
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
                  {"Permissions saved"}
                  <small>{"Captain – applies at the next action of its 7 users (LG-X01); written to the change history (LG-R03)."}</small>
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
                  {"Captain created from its template"}
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
