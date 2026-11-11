// GENERATED from public/hr-and-payroll/hr-06-attendance/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/hr.css",
    "media": null
  },
  {
    "href": "/hr-and-payroll/hr-06-attendance/hr-06-attendance.css",
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

export default function HrAndPayrollHr06Attendance() {
  return (
    <ScreenShell title="Attendance" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="HR-06" data-code="HR-06" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="hr" open={true}>
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
                  <Link className="nav__item is-active" data-nav="HR-06" aria-current="page" title="Attendance" to={"/hr-and-payroll/hr-06-attendance"}>
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
            <main className="app__content" id="main" data-code="HR-06" tabIndex="-1">
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
                        <Link to={"/hr-and-payroll/hr-01-hr-dashboard"}>{"HR & Payroll"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Attendance"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Attendance"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"HR-06"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="hr-06-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hr-06-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" action="/hr-and-payroll/hr-06-attendance/" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"Date"}</span>
                            <input className="hf-f__c" type="date" name="date" defaultValue={"2026-10-22"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Department"}</span>
                            <select className="hf-f__c" name="dept">
                              <option>{"All departments"}</option>
                              <option>{"Front office"}</option>
                              <option>{"Housekeeping"}</option>
                              <option>{"F&B service"}</option>
                              <option>{"Kitchen"}</option>
                              <option>{"Engineering"}</option>
                              <option>{"Security"}</option>
                              <option>{"Sales & marketing"}</option>
                              <option>{"Accounts"}</option>
                              <option>{"HR"}</option>
                              <option>{"IT"}</option>
                              <option>{"Stores & purchase"}</option>
                              <option>{"Management"}</option>
                              <option>{"Laundry"}</option>
                              <option>{"Spa"}</option>
                            </select>
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
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
                    <a className="btn ph-ic" href="#hr-x01">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#refresh" />
                      </svg>
                      {"Import punches"}
                    </a>
                    <a className="btn" href="#hr-p04">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check-circle" />
                      </svg>
                      {"Approve overtime"}
                    </a>
                    <a className="btn ph-ic" href="#hr-p03">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#pen-line" />
                      </svg>
                      {"Regularise"}
                    </a>
                    <a className="btn btn--primary" href="#hr-lock">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#lock" />
                      </svg>
                      {"Lock month"}
                    </a>
                  </div>
                </div>
              </header>
              <p className="field__hint" data-flow="hr06-hol">{"A holiday from HRS-06 shows as HOL; work on a holiday earns a compensatory off or holiday pay as set in HRS-06."}</p>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm pm--v" id="v-all" />
                <i className="pm pm--v" id="v-exc" />
                <i className="pm pm--v" id="v-pres" />
                <i className="pm pm--v" id="v-leave" />
                <i className="pm pm--v" id="v-off" />
                <i className="pm pm--v" id="v-due" />
              </div>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="reg-sent" />
                <i className="pm" id="imported" />
                <i className="pm" id="locked" />
                <i className="pm" id="ot-ok-0176" />
                <i className="pm" id="ot-no-0176" />
                <i className="pm" id="ot-ok-0177" />
                <i className="pm" id="ot-no-0177" />
              </div>
              <ul className="cc-kpis">
                <li className="cc-kpi cc-kpi--ok">
                  <span className="cc-kpi__v">{"107"}</span>
                  <span className="cc-kpi__l">{"Present"}</span>
                  <span className="cc-kpi__s">{"3 of them late"}</span>
                </li>
                <li className="cc-kpi cc-kpi--bad">
                  <span className="cc-kpi__v">{"7"}</span>
                  <span className="cc-kpi__l">{"Exceptions"}</span>
                  <span className="cc-kpi__s">{"2 missing punch · 3 late · 2 absent"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"4"}</span>
                  <span className="cc-kpi__l">{"On leave"}</span>
                  <span className="cc-kpi__s">{"approved leave today"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"23"}</span>
                  <span className="cc-kpi__l">{"Weekly off"}</span>
                  <span className="cc-kpi__s">{"rostered"}</span>
                </li>
                <li className="cc-kpi cc-kpi--warn">
                  <span className="cc-kpi__v">{"2"}</span>
                  <span className="cc-kpi__l">{"Overtime waiting"}</span>
                  <span className="cc-kpi__s">{"approve before the lock"}</span>
                </li>
              </ul>
              <div className="fd-banner fd-banner--warn cc-banner">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#alert" />
                </svg>
                <div className="fd-banner__t">
                  <strong>{"Biometric device BIO-03 (Laundry) is offline since 06:12"}</strong>
                  {"Punches of the laundry staff are missing until the device is back. Regularise them below or import after the device is repaired (Engineering work order opened)."}
                </div>
              </div>
              <section className="fd-sec cc-sec" data-code="HR-06-exceptions">
                <h2 className="fd-sec__t">{"Exceptions to fix"}</h2>
                <p className="fd-sec__d">{"Missing punch, late beyond grace and absent without leave. Regularise sends the correction to the HOD."}</p>
                <ul className="pq-l hr-two">
                  <li>
                    <span className="pq-l__m">
                      <span className="hr-who">
                        <span className="hr-av" aria-hidden="true">{"BK"}</span>
                        <span>
                          <b>
                            <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2017"}>{"Biju K"}</Link>
                          </b>
                          <span className="fd-sub">{"EMP-2017"}</span>
                        </span>
                      </span>
                      <small>{"Missing punch · no out-punch yesterday"}</small>
                    </span>
                    <span className="pq-l__s">
                      <a className="btn btn--sm" href="#hr-p03">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#pen-line" />
                        </svg>
                        {"Regularise"}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="pq-l__m">
                      <span className="hr-who">
                        <span className="hr-av" aria-hidden="true">{"SM"}</span>
                        <span>
                          <b>
                            <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3006"}>{"Shibu M"}</Link>
                          </b>
                          <span className="fd-sub">{"EMP-3006"}</span>
                        </span>
                      </span>
                      <small>{"Missing punch · BIO-03 offline – no punch"}</small>
                    </span>
                    <span className="pq-l__s">
                      <a className="btn btn--sm" href="#hr-p03">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#pen-line" />
                        </svg>
                        {"Regularise"}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="pq-l__m">
                      <span className="hr-who">
                        <span className="hr-av" aria-hidden="true">{"JM"}</span>
                        <span>
                          <b>
                            <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2012"}>{"Jincy Mathew"}</Link>
                          </b>
                          <span className="fd-sub">{"EMP-2012"}</span>
                        </span>
                      </span>
                      <small>{"Late beyond grace (10 min) · in 07:18 against 07:00"}</small>
                    </span>
                    <span className="pq-l__s">
                      <a className="btn btn--sm" href="#hr-p03">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#pen-line" />
                        </svg>
                        {"Regularise"}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="pq-l__m">
                      <span className="hr-who">
                        <span className="hr-av" aria-hidden="true">{"NG"}</span>
                        <span>
                          <b>
                            <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4007"}>{"Nithin Gopal"}</Link>
                          </b>
                          <span className="fd-sub">{"EMP-4007"}</span>
                        </span>
                      </span>
                      <small>{"Late beyond grace (10 min) · in 07:21 against 07:00"}</small>
                    </span>
                    <span className="pq-l__s">
                      <a className="btn btn--sm" href="#hr-p03">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#pen-line" />
                        </svg>
                        {"Regularise"}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="pq-l__m">
                      <span className="hr-who">
                        <span className="hr-av" aria-hidden="true">{"VJ"}</span>
                        <span>
                          <b>
                            <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4109"}>{"Vishnu Joseph"}</Link>
                          </b>
                          <span className="fd-sub">{"EMP-4109"}</span>
                        </span>
                      </span>
                      <small>{"Late beyond grace (10 min) · in 10:16 against 10:00"}</small>
                    </span>
                    <span className="pq-l__s">
                      <a className="btn btn--sm" href="#hr-p03">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#pen-line" />
                        </svg>
                        {"Regularise"}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="pq-l__m">
                      <span className="hr-who">
                        <span className="hr-av" aria-hidden="true">{"AJ"}</span>
                        <span>
                          <b>
                            <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4106"}>{"Abdul Jacob"}</Link>
                          </b>
                          <span className="fd-sub">{"EMP-4106"}</span>
                        </span>
                      </span>
                      <small>{"Absent – no punch, no leave · call the HOD"}</small>
                    </span>
                    <span className="pq-l__s">
                      <a className="btn btn--sm" href="#hr-p03">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#pen-line" />
                        </svg>
                        {"Regularise"}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="pq-l__m">
                      <span className="hr-who">
                        <span className="hr-av" aria-hidden="true">{"FD"}</span>
                        <span>
                          <b>
                            <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4302"}>{"Fasil Dev"}</Link>
                          </b>
                          <span className="fd-sub">{"EMP-4302"}</span>
                        </span>
                      </span>
                      <small>{"Absent – no punch, no leave · call the HOD"}</small>
                    </span>
                    <span className="pq-l__s">
                      <a className="btn btn--sm" href="#hr-p03">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#pen-line" />
                        </svg>
                        {"Regularise"}
                      </a>
                    </span>
                  </li>
                </ul>
              </section>
              <nav className="hv st-views" aria-label="Attendance views">
                <a className="hv__v" href="#v-all" data-v="v-all">
                  <span>{"All"}</span>
                  <b className="num">{"184"}</b>
                </a>
                <a className="hv__v" href="#v-exc" data-v="v-exc">
                  <span>{"Exceptions"}</span>
                  <b className="num">{"7"}</b>
                </a>
                <a className="hv__v" href="#v-pres" data-v="v-pres">
                  <span>{"Present"}</span>
                  <b className="num">{"107"}</b>
                </a>
                <a className="hv__v" href="#v-leave" data-v="v-leave">
                  <span>{"On leave"}</span>
                  <b className="num">{"4"}</b>
                </a>
                <a className="hv__v" href="#v-off" data-v="v-off">
                  <span>{"Weekly off"}</span>
                  <b className="num">{"23"}</b>
                </a>
                <a className="hv__v" href="#v-due" data-v="v-due">
                  <span>{"Not yet due"}</span>
                  <b className="num">{"46"}</b>
                </a>
              </nav>
              <section className="fd-sec cc-sec" data-code="HR-06-list">
                <h2 className="fd-sec__t">{"Attendance – Thursday 22-10-2026 at 10:30"}</h2>
                <p className="fd-sec__d">{"Shift, punches, hours so far, status and overtime of the month for every employee on the rolls. Evening and night shifts are not yet due."}</p>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="dt__table gl-tbl gl-tb" data-code="HR-06-list" data-mc="">
                      <caption className="sr-only">{"Attendance of the day"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Employee"}</th>
                          <th scope="col">{"Shift"}</th>
                          <th scope="col">{"In"}</th>
                          <th scope="col">{"Out"}</th>
                          <th scope="col" className="dt__th--right">{"Hours so far"}</th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col" className="dt__th--right">{"OT this month"}</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2001"}>{"Sunita Ranjan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2001"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RN"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2002"}>{"Reshma Nathan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2002"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2003"}>{"Beena Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2003"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="OT this month" data-w2="">
                            <b className="num">{"6.3 h"}</b>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2004"}>{"Joseph Paul"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2004"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"LN"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2005"}>{"Latha Nathan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2005"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"MV"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2006"}>{"Mariamma Varghese"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2006"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2007"}>{"Saritha K"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2007"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2008"}>{"Anitha P"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2008"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-leave">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2009"}>{"Remya K"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2009"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--info">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#calendar" />
                              </svg>
                              {"On leave"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"DM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2010"}>{"Divya M"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2010"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2011"}>{"Shiny Joseph"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2011"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-exc at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2012"}>{"Jincy Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2012"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"07:18"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 12 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--warn">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Late"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#hr-p03">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Regularise"}
                            </a>
                          </td>
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RS"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2013"}>{"Rekha S"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2013"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"LG"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2014"}>{"Lissy George"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2014"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"ST"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2015"}>{"Sheeba T"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2015"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RV"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2016"}>{"Rani V"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2016"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-exc">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2017"}>{"Biju K"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2017"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:52"}</td>
                          <td className="dt__td nw num" data-label="Out">
                            <span className="fd-sub">{"missing"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--bad">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#alert" />
                              </svg>
                              {"Missing punch"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#hr-p03">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Regularise"}
                            </a>
                          </td>
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"S"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2018"}>{"Satheesan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2018"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2019"}>{"Ajith M"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2019"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="OT this month" data-w2="">
                            <b className="num">{"12.2 h"}</b>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"PV"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2020"}>{"Prasad V"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2020"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"MT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2021"}>{"Manoj T"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2021"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2022"}>{"Sabu P"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2022"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"LD"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2023"}>{"Leena D"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2023"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2024"}>{"Asha R"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2024"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"GN"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2025"}>{"Girija N"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2025"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"MC"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-2026"}>{"Mini C"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-2026"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3001"}>{"Rajeev Krishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3001"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"MV"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3002"}>{"Manoj Varghese"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3002"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="OT this month" data-w2="">
                            <b className="num">{"8.7 h"}</b>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"ST"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3003"}>{"Sajan Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3003"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"FK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3004"}>{"Faisal K"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3004"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="OT this month" data-w2="">
                            <b className="num">{"10.2 h"}</b>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"VP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3005"}>{"Vinod P"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3005"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="OT this month" data-w2="">
                            <b className="num">{"12.3 h"}</b>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-exc">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3006"}>{"Shibu M"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3006"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:58"}</td>
                          <td className="dt__td nw num" data-label="Out">
                            <span className="fd-sub">{"missing"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--bad">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#alert" />
                              </svg>
                              {"Missing punch"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#hr-p03">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Regularise"}
                            </a>
                          </td>
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3007"}>{"Babu Raj"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3007"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3008"}>{"Renjith R"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3008"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SS"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3009"}>{"Sooraj S"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3009"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JA"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3010"}>{"Jose Antony"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3010"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3011"}>{"Suresh K"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3011"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"ND"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3012"}>{"Nikhil Dev"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-3012"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"VN"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1001"}>{"Vikram Nathan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1001"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"LI"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1002"}>{"Lakshmi Ishaan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1002"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"MN"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1003"}>{"Meera Nathan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1003"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1004"}>{"Anita Mohan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1004"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"FA"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1005"}>{"Farhan Ali"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1005"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1006"}>{"Arun Prakash"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1006"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1007"}>{"Rohit Kumar"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1007"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1008"}>{"Sanjay Mohan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1008"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JC"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1009"}>{"Joseph Chacko"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1009"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"TK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1010"}>{"Thomas Kurian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1010"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"PM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1011"}>{"Priya Mohan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1011"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1012"}>{"Joseph Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1012"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-label="OT this month" data-w2="">
                            <b className="num">{"7.7 h"}</b>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-leave">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"DT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1013"}>{"Deepa Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1013"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--info">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#calendar" />
                              </svg>
                              {"On leave"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"MP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1014"}>{"Meera Prem"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1014"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"KP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1015"}>{"Kiran Prem"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1015"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RV"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1016"}>{"Rahul Varghese"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1016"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"PM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1017"}>{"Prakash Mohan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1017"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RD"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1018"}>{"Rohit Dev"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1018"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1019"}>{"Ancy Joseph"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1019"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1020"}>{"Biju Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1020"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"LW"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1021"}>{"Lekha Wilson"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1021"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:56"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 34 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1022"}>{"Joseph K"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1022"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1023"}>{"Rohan Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1023"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-1024"}>{"Sneha Raj"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-1024"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"VH"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4001"}>{"Vipin Haneef"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4001"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4002"}>{"Shyam Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4002"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-leave">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"PD"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4003"}>{"Parvathy Dev"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4003"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--info">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#calendar" />
                              </svg>
                              {"On leave"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4004"}>{"Anjali Joseph"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4004"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:56"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 34 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4005"}>{"Neethu Rahman"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4005"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SS"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4006"}>{"Sruthi Sebastian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4006"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-exc at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NG"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4007"}>{"Nithin Gopal"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4007"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"07:21"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 09 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--warn">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Late"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#hr-p03">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Regularise"}
                            </a>
                          </td>
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4008"}>{"Abdul Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4008"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"VU"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4009"}>{"Vidya Unnikrishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4009"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NV"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4010"}>{"Neethu Varghese"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4010"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4011"}>{"Sarath Rahman"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4011"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4012"}>{"Ajay Mohan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4012"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AA"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4013"}>{"Akhil Antony"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4013"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"DP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4014"}>{"Devika Paul"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4014"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4015"}>{"Swathy Kurian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4015"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SU"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4016"}>{"Sanal Unnikrishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4016"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4017"}>{"Aswathy Raj"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4017"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"MT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4018"}>{"Midhun Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4018"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4019"}>{"Shibin Rahman"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4019"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NN"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4020"}>{"Nithin Nathan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4020"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"GU"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4101"}>{"Gayathri Unnikrishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4101"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:56"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 34 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AG"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4102"}>{"Arjun George"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4102"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BV"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4103"}>{"Bincy Varghese"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4103"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"GG"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4104"}>{"Gokul George"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4104"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4105"}>{"Akhil Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4105"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-exc">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4106"}>{"Abdul Jacob"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4106"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--bad">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#x-circle" />
                              </svg>
                              {"Absent"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#hr-p03">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Regularise"}
                            </a>
                          </td>
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"TM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4107"}>{"Tessy Mohan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4107"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"GK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4108"}>{"Gayathri Krishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4108"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-exc at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"VJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4109"}>{"Vishnu Joseph"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4109"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"10:16"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 14 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--warn">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Late"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#hr-p03">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Regularise"}
                            </a>
                          </td>
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4110"}>{"Swathy Raj"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4110"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4111"}>{"Jisha Prem"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4111"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4112"}>{"Bincy Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4112"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"TR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4113"}>{"Tessy Raj"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4113"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"HP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4114"}>{"Hari Paul"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4114"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"VT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4115"}>{"Vishnu Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4115"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4116"}>{"Athira Prem"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4116"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"DV"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4117"}>{"Deepak Varghese"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4117"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4118"}>{"Nimisha Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4118"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"TT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4119"}>{"Tony Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4119"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4120"}>{"Rejeesh Kurian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4120"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RV"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4121"}>{"Reshmi Varghese"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4121"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NH"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4122"}>{"Nimisha Haneef"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4122"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"TH"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4123"}>{"Tessy Haneef"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4123"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"DK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4124"}>{"Devika Krishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4124"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4125"}>{"Sachin Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4125"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"09:56"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"0 h 34 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"FT"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4126"}>{"Fasil Thomas"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4126"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift">
                            <b className="num">{"S"}</b>
                            <span className="fd-sub">{"10:00–14:00 + 18:00–22:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"TP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4201"}>{"Tony Prem"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4201"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SV"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4202"}>{"Sarath Varghese"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4202"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"LR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4203"}>{"Lakshmi Raj"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4203"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RB"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4204"}>{"Rahul Babu"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4204"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-leave">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BN"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4205"}>{"Bincy Nathan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4205"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--info">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#calendar" />
                              </svg>
                              {"On leave"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4206"}>{"Nimisha Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4206"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"LK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4207"}>{"Lakshmi Kurian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4207"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NB"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4208"}>{"Neethu Babu"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4208"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JA"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4209"}>{"Jisha Antony"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4209"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"PK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4210"}>{"Praveen Krishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4210"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4211"}>{"Neethu Joseph"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4211"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4212"}>{"Rahul Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4212"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"DP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4213"}>{"Deepak Paul"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4213"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4214"}>{"Aswathy Prem"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4214"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4215"}>{"Bibin Kurian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4215"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"KK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4216"}>{"Keerthana Krishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4216"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JH"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4217"}>{"Jisha Haneef"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4217"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RS"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4218"}>{"Rahul Sebastian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4218"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"FA"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4219"}>{"Fasil Antony"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4219"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:56"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 34 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RS"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4220"}>{"Riya Sebastian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4220"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AG"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4221"}>{"Ajay George"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4221"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4222"}>{"Neethu Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4222"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AN"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4223"}>{"Ashwin Nathan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4223"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"KR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4224"}>{"Keerthana Rahman"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4224"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4225"}>{"Abdul Joseph"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4225"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SD"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4226"}>{"Shyam Dev"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4226"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"DM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4227"}>{"Devika Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4227"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"K"}</b>
                            <span className="fd-sub">{"06:00–14:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"05:56"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"4 h 34 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4301"}>{"Sanal Joseph"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4301"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-exc">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"FD"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4302"}>{"Fasil Dev"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4302"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--bad">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#x-circle" />
                              </svg>
                              {"Absent"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#hr-p03">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pen-line" />
                              </svg>
                              {"Regularise"}
                            </a>
                          </td>
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"MH"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4303"}>{"Midhun Haneef"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4303"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SU"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4304"}>{"Shyam Unnikrishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4304"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BH"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4305"}>{"Bibin Haneef"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4305"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SH"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4306"}>{"Sachin Haneef"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4306"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4307"}>{"Akhil Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4307"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4308"}>{"Sachin Kurian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4308"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"N"}</b>
                            <span className="fd-sub">{"23:00–07:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AU"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4309"}>{"Anand Unnikrishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4309"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4310"}>{"Ajay Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4310"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"DJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4311"}>{"Deepak Jacob"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4311"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"GG"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4401"}>{"Gayathri Gopal"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4401"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"MP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4402"}>{"Midhun Prem"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4402"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SS"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4403"}>{"Sandra Sebastian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4403"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"DJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4404"}>{"Devika Jacob"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4404"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4405"}>{"Swathy Mohan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4405"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4406"}>{"Anjali Jacob"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4406"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AG"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4407"}>{"Anand George"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4407"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:53"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 37 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"DU"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4501"}>{"Devika Unnikrishnan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4501"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4502"}>{"Sreejith Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4502"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:56"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 34 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4503"}>{"Ashwin Paul"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4503"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:56"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 34 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4504"}>{"Nithin Prem"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4504"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4505"}>{"Jobin Jacob"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4505"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4506"}>{"Anand Kumar"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4506"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"VB"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4601"}>{"Vidya Babu"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4601"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"VK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4602"}>{"Vipin Kurian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4602"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4603"}>{"Neethu Kumar"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4603"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4701"}>{"Sanal Raj"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4701"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"GJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4702"}>{"Gayathri Jacob"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4702"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"PG"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4801"}>{"Parvathy George"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4801"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:52"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 38 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4802"}>{"Nizam Kumar"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4802"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"NP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4803"}>{"Nizam Prem"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4803"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"PP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4804"}>{"Parvathy Paul"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4804"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"JR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4901"}>{"Jithin Rahman"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4901"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:58"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 32 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SP"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4902"}>{"Swathy Prem"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4902"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BG"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4903"}>{"Bincy George"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4903"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"LJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4904"}>{"Lakshmi Joseph"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4904"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"KK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4905"}>{"Keerthana Kurian"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4905"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"BM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4906"}>{"Bibin Mohan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4906"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"M"}</b>
                            <span className="fd-sub">{"07:00–15:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"06:57"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"3 h 33 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SA"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4907"}>{"Sruthi Antony"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4907"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"LR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4908"}>{"Lakshmi Rahman"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4908"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"PJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4909"}>{"Parvathy Joseph"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4909"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"HJ"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4910"}>{"Hari Joseph"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4910"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-due">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"FH"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-4911"}>{"Fasil Haneef"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-4911"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"E"}</b>
                            <span className="fd-sub">{"15:00–23:30"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--draft">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Not yet due"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-off">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"MD"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-5001"}>{"Merin Dev"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-5001"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw num" data-e="">{"–"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Weekly off"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"AK"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-5002"}>{"Anjali Kumar"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-5002"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"RM"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-5003"}>{"Reshmi Mathew"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-5003"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:51"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 39 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"PR"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-5004"}>{"Parvathy Raj"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-5004"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:54"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 36 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                        <tr className="gl-row at-pres">
                          <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                            <span className="hr-who">
                              <span className="hr-av" aria-hidden="true">{"SN"}</span>
                              <span>
                                <b>
                                  <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-5005"}>{"Sarath Nathan"}</Link>
                                </b>
                                <span className="fd-sub">{"EMP-5005"}</span>
                              </span>
                            </span>
                          </td>
                          <td className="dt__td nw" data-label="Shift" data-w2="">
                            <b className="num">{"G"}</b>
                            <span className="fd-sub">{"09:00–18:00"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="In">{"08:55"}</td>
                          <td className="dt__td nw num" data-label="Out">{"on duty"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Hours so far" data-w2="">{"1 h 35 m"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Present"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--right nw" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-e="" />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <div className="modal modal--sm" id="hr-p03" data-code="HR-P03" role="dialog" aria-modal="true" aria-labelledby="hr-p03-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/hr-and-payroll/hr-06-attendance/#reg-sent" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hr-p03-t">{"Attendance regularisation"}</h2>
                      <p className="modal__desc">{"Correct a missing or wrong punch. The HOD approves; the attendance is then updated."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field">
                      <label className="field__label" htmlFor="g-em">
                        {"Employee "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="g-em" name="employee" required={true} defaultValue={"Biju K (EMP-2017)"}>
                          <option value="Biju K (EMP-2017)">{"Biju K (EMP-2017)"}</option>
                          <option value="Shibu M (EMP-3006)">{"Shibu M (EMP-3006)"}</option>
                          <option value="Jincy Mathew (EMP-2012)">{"Jincy Mathew (EMP-2012)"}</option>
                          <option value="Nithin Gopal (EMP-4007)">{"Nithin Gopal (EMP-4007)"}</option>
                          <option value="Vishnu Joseph (EMP-4109)">{"Vishnu Joseph (EMP-4109)"}</option>
                          <option value="Abdul Jacob (EMP-4106)">{"Abdul Jacob (EMP-4106)"}</option>
                          <option value="Fasil Dev (EMP-4302)">{"Fasil Dev (EMP-4302)"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="g-dt">
                        {"Date "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="g-dt" name="date" type="date" required={true} max="2026-10-22" defaultValue={"2026-10-21"} />
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="g-in">
                        {"Correct in-time "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="g-in" name="in" type="time" required={true} defaultValue={"07:00"} />
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="g-out">
                        {"Correct out-time "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="g-out" name="out" type="time" required={true} defaultValue={"15:30"} />
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="g-st">
                        {"Status "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="g-st" name="status" required={true} defaultValue={"Present"}>
                          <option value="Present">{"Present"}</option>
                          <option value="Half day">{"Half day"}</option>
                          <option value="On duty">{"On duty"}</option>
                          <option value="Weekly off worked">{"Weekly off worked"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="g-rs">
                        {"Reason "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="g-rs" name="reason" required={true} defaultValue={"Forgot punch"}>
                          <option value="Forgot punch">{"Forgot punch"}</option>
                          <option value="Device failure">{"Device failure"}</option>
                          <option value="On duty outside">{"On duty outside"}</option>
                          <option value="Other">{"Other"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Goes to the HOD of the employee."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Submit"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--xl" id="hr-p04" data-code="HR-P04" role="dialog" aria-modal="true" aria-labelledby="hr-p04-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/hr-and-payroll/hr-06-attendance/#imported" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hr-p04-t">{"Overtime approval"}</h2>
                      <p className="modal__desc">{"Hours beyond the shift. Overtime is paid at twice the ordinary hourly rate (gross ÷ 26 ÷ 8) for grades G1 – G4; limit 2 hours a day and 10 hours a week (HRS-07)."}</p>
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
                        <table className="dt__table gl-tbl" data-code="HR-P04-list" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Overtime requests"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Employee"}</th>
                              <th scope="col">{"Date"}</th>
                              <th scope="col" className="dt__th--right">{"Hours"}</th>
                              <th scope="col" className="dt__th--right">{"Month to date"}</th>
                              <th scope="col" className="dt__th--right">{"Rate / hour"}</th>
                              <th scope="col" className="dt__th--right">{"Amount"}</th>
                              <th scope="col">{"Reason"}</th>
                              <th scope="col">{"Decision"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr id="ot-0171">
                              <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <span className="hr-who">
                                  <span className="hr-av" aria-hidden="true">{"MV"}</span>
                                  <span>
                                    <b>{"Manoj Varghese"}</b>
                                    <span className="fd-sub">{"EMP-3002"}</span>
                                  </span>
                                </span>
                              </td>
                              <td className="dt__td nw num" data-label="Date" data-w2="">{"20-10-2026"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Hours">{"2 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Month to date" data-w2="">{"8.7 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Rate / hour" data-w2="">{"₹329.00"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount">{"₹657.69"}</td>
                              <td className="dt__td" data-label="Reason">
                                <span className="fd-sub">{"chiller 2 trip – restored after shift"}</span>
                              </td>
                              <td className="dt__td nw ot-c-0171" data-label="Decision" data-w2="" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Approved"}
                                </span>
                              </td>
                            </tr>
                            <tr id="ot-0172">
                              <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <span className="hr-who">
                                  <span className="hr-av" aria-hidden="true">{"BT"}</span>
                                  <span>
                                    <b>{"Beena Thomas"}</b>
                                    <span className="fd-sub">{"EMP-2003"}</span>
                                  </span>
                                </span>
                              </td>
                              <td className="dt__td nw num" data-label="Date" data-w2="">{"19-10-2026"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Hours">{"2 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Month to date" data-w2="">{"6.3 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Rate / hour" data-w2="">{"₹312.00"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount">{"₹625.00"}</td>
                              <td className="dt__td" data-label="Reason">
                                <span className="fd-sub">{"floor 3 deep clean before group arrival"}</span>
                              </td>
                              <td className="dt__td nw ot-c-0172" data-label="Decision" data-w2="" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Approved"}
                                </span>
                              </td>
                            </tr>
                            <tr id="ot-0173">
                              <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <span className="hr-who">
                                  <span className="hr-av" aria-hidden="true">{"AM"}</span>
                                  <span>
                                    <b>{"Ajith M"}</b>
                                    <span className="fd-sub">{"EMP-2019"}</span>
                                  </span>
                                </span>
                              </td>
                              <td className="dt__td nw num" data-label="Date" data-w2="">{"20-10-2026"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Hours">{"2 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Month to date" data-w2="">{"12.2 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Rate / hour" data-w2="">{"₹184.00"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount">{"₹367.31"}</td>
                              <td className="dt__td" data-label="Reason" data-w2="">
                                <span className="fd-sub">{"banquet linen pick-up"}</span>
                              </td>
                              <td className="dt__td nw ot-c-0173" data-label="Decision" data-w2="" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Approved"}
                                </span>
                              </td>
                            </tr>
                            <tr id="ot-0174">
                              <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <span className="hr-who">
                                  <span className="hr-av" aria-hidden="true">{"VP"}</span>
                                  <span>
                                    <b>{"Vinod P"}</b>
                                    <span className="fd-sub">{"EMP-3005"}</span>
                                  </span>
                                </span>
                              </td>
                              <td className="dt__td nw num" data-label="Date" data-w2="">{"18-10-2026"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Hours">{"2 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Month to date" data-w2="">{"12.3 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Rate / hour" data-w2="">{"₹256.00"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount">{"₹511.54"}</td>
                              <td className="dt__td" data-label="Reason" data-w2="">
                                <span className="fd-sub">{"kitchen exhaust wiring"}</span>
                              </td>
                              <td className="dt__td nw ot-c-0174" data-label="Decision" data-w2="" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Approved"}
                                </span>
                              </td>
                            </tr>
                            <tr id="ot-0176">
                              <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <span className="hr-who">
                                  <span className="hr-av" aria-hidden="true">{"FK"}</span>
                                  <span>
                                    <b>{"Faisal K"}</b>
                                    <span className="fd-sub">{"EMP-3004"}</span>
                                  </span>
                                </span>
                              </td>
                              <td className="dt__td nw num" data-label="Date" data-w2="">{"21-10-2026"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Hours">{"2 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Month to date" data-w2="">{"10.2 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Rate / hour" data-w2="">{"₹336.00"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount">{"₹671.15"}</td>
                              <td className="dt__td" data-label="Reason">
                                <span className="fd-sub">{"AHU-3 breakdown – fixed after shift"}</span>
                              </td>
                              <td className="dt__td nw ot-c-0176" data-a="">
                                <span className="gl-now">
                                  <button className="btn btn--sm btn--primary" type="submit" formAction="/hr-and-payroll/hr-06-attendance/#ot-ok-0176">
                                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#check" />
                                    </svg>
                                    {"Approve"}
                                  </button>
                                  {" "}
                                  <button className="btn btn--sm" type="submit" formAction="/hr-and-payroll/hr-06-attendance/#ot-no-0176">
                                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#x" />
                                    </svg>
                                    {"Reject"}
                                  </button>
                                </span>
                                <span className="gl-aft gl-aft-0176" />
                              </td>
                            </tr>
                            <tr id="ot-0177">
                              <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <span className="hr-who">
                                  <span className="hr-av" aria-hidden="true">{"JM"}</span>
                                  <span>
                                    <b>{"Joseph Mathew"}</b>
                                    <span className="fd-sub">{"EMP-1012"}</span>
                                  </span>
                                </span>
                              </td>
                              <td className="dt__td nw num" data-label="Date" data-w2="">{"21-10-2026"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Hours">{"1.5 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Month to date" data-w2="">{"7.7 h"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Rate / hour" data-w2="">{"₹340.00"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount">{"₹510.58"}</td>
                              <td className="dt__td" data-label="Reason" data-w2="">
                                <span className="fd-sub">{"night audit rollover"}</span>
                              </td>
                              <td className="dt__td nw ot-c-0177" data-a="">
                                <span className="gl-now">
                                  <button className="btn btn--sm btn--primary" type="submit" formAction="/hr-and-payroll/hr-06-attendance/#ot-ok-0177">
                                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#check" />
                                    </svg>
                                    {"Approve"}
                                  </button>
                                  {" "}
                                  <button className="btn btn--sm" type="submit" formAction="/hr-and-payroll/hr-06-attendance/#ot-no-0177">
                                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                      <use href="/assets/icons/sprite.svg#x" />
                                    </svg>
                                    {"Reject"}
                                  </button>
                                </span>
                                <span className="gl-aft gl-aft-0177" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Approved hours go to the October payroll (HR-09)."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="hr-x01" data-code="HR-X01" role="dialog" aria-modal="true" aria-labelledby="hr-x01-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/hr-and-payroll/hr-06-attendance/#imported" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hr-x01-t">{"Attendance import"}</h2>
                      <p className="modal__desc">{"Runs every 15 minutes: punches from the biometric devices and mobile punches, with the shift rules."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <h3 className="hr-h3">{"Devices"}</h3>
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="HR-X01-dev" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Devices"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Device"}</th>
                              <th scope="col">{"Place"}</th>
                              <th scope="col">{"Status"}</th>
                              <th scope="col">{"Last punch"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Device" data-t="">
                                <b>{"BIO-01"}</b>
                              </td>
                              <td className="dt__td" data-label="Place">{"Staff entrance (security cabin)"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Online"}
                                </span>
                              </td>
                              <td className="dt__td nw num" data-label="Last punch" data-w2="">{"10:29"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Device" data-t="">
                                <b>{"BIO-02"}</b>
                              </td>
                              <td className="dt__td" data-label="Place" data-w2="">{"Kitchen back door"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Online"}
                                </span>
                              </td>
                              <td className="dt__td nw num" data-label="Last punch" data-w2="">{"10:27"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Device" data-t="">
                                <b>{"BIO-03"}</b>
                              </td>
                              <td className="dt__td" data-label="Place">{"Laundry"}</td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--warn">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#alert" />
                                  </svg>
                                  {"Offline since 06:12"}
                                </span>
                              </td>
                              <td className="dt__td nw num" data-label="Last punch" data-w2="">{"06:09"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <h3 className="hr-h3">{"Last runs"}</h3>
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="HR-X01-log" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Import log"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Time"}</th>
                              <th scope="col">{"Source"}</th>
                              <th scope="col" className="dt__th--right">{"Punches"}</th>
                              <th scope="col">{"Result"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td nw num" data-label="Time" data-t="">{"10:30"}</td>
                              <td className="dt__td" data-label="Source" data-w2="">{"BIO-01 · BIO-02 · mobile"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Punches" data-w2="">{"312"}</td>
                              <td className="dt__td" data-label="Result">
                                <span className="fd-sub">{"applied shift rules: grace 10 min, half day under 4 h"}</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw num" data-label="Time" data-t="">{"10:15"}</td>
                              <td className="dt__td" data-label="Source" data-w2="">{"BIO-01 · BIO-02 · mobile"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Punches" data-w2="">{"187"}</td>
                              <td className="dt__td" data-label="Result" data-w2="">
                                <span className="fd-sub">{"2 late punches flagged"}</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw num" data-label="Time" data-t="">{"10:00"}</td>
                              <td className="dt__td" data-label="Source" data-w2="">{"BIO-01 · BIO-02 · mobile"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Punches" data-w2="">{"241"}</td>
                              <td className="dt__td" data-e="">
                                <span className="fd-sub">{"–"}</span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw num" data-label="Time" data-t="">{"09:45"}</td>
                              <td className="dt__td" data-label="Source" data-w2="">{"BIO-01 · BIO-02 · mobile"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Punches" data-w2="">{"164"}</td>
                              <td className="dt__td" data-e="">
                                <span className="fd-sub">{"–"}</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Next automatic run 10:45."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <button className="btn btn--primary" type="submit">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#refresh" />
                      </svg>
                      {"Import now"}
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--sm" id="hr-lock" data-code="HR-06-lock" role="dialog" aria-modal="true" aria-labelledby="hr-lock-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/hr-and-payroll/hr-06-attendance/#locked" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hr-lock-t">{"Lock the attendance of October?"}</h2>
                      <p className="modal__desc">{"Locking freezes attendance, leave and overtime for payroll. It is done once, on or after the last day of the month."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <ul className="pq-l">
                      <li>
                        <span className="pq-l__m">
                          <b>{"Missing punches"}</b>
                          <small>{"regularise first"}</small>
                        </span>
                        <span className="pq-l__s">
                          <span className="pq-flag pq-flag--bad">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            {"2 open"}
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="pq-l__m">
                          <b>{"Overtime requests"}</b>
                          <small>{"approve or reject"}</small>
                        </span>
                        <span className="pq-l__s">
                          <span className="pq-flag pq-flag--warn">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"2 open"}
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="pq-l__m">
                          <b>{"Leave applications"}</b>
                          <small>{"HR-07"}</small>
                        </span>
                        <span className="pq-l__s">
                          <span className="pq-flag pq-flag--warn">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"4 pending"}
                          </span>
                        </span>
                      </li>
                    </ul>
                    <p className="gl-note gl-note--warn">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      {"Today is 22-10; the month is not over. Locking now would stop attendance for the last nine days."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Not now"}</a>
                    <button className="btn btn--primary" type="submit">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#lock" />
                      </svg>
                      {"Lock month"}
                    </button>
                  </div>
                </form>
              </div>
              <details className="hk-sys" data-code="HR-X01">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#cog" />
                  </svg>
                  {"System – what runs automatically on this screen"}
                </summary>
                <ul>
                  <li data-code="HR-X01">
                    <b>{"HR-X01 · Attendance import"}</b>
                    {" – Every 15 minutes the punches of the devices and the mobile punches are applied with the shift rules (grace, half day, late)."}
                  </li>
                  <li data-code="HR-X04">
                    <b>{"HR-X04 · Document expiry monitor"}</b>
                    {" – Not here – see the dashboard."}
                  </li>
                </ul>
              </details>
              <div className="fd-toast" id="t-reg" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#pen-line" />
                </svg>
                <div className="fd-toast__text">
                  {"Regularisation sent to the HOD"}
                  <small>{"The attendance line changes once the HOD approves; the employee is told on the phone (HR-11). Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-imp" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#refresh" />
                </svg>
                <div className="fd-toast__text">
                  {"Punches imported – 312 new punches"}
                  <small>{"10:30 run: 2 devices online, BIO-03 (Laundry) offline since 06:12 – 4 punches are missing and listed as exceptions. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-lock" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#lock" />
                </svg>
                <div className="fd-toast__text">
                  {"Attendance of October locked for payroll"}
                  <small>{"Nobody can change the October attendance now; later corrections go through arrears in the next payroll. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ok-0176" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Overtime approved – Faisal K"}
                  <small>{"2 h on 21-10-2026 go to the October payroll at twice the ordinary rate. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-no-0176" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#x-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Overtime rejected – Faisal K"}
                  <small>{"The hours stay as normal hours; the employee sees the reason in HR-11. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-ok-0177" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Overtime approved – Joseph Mathew"}
                  <small>{"1.5 h on 21-10-2026 go to the October payroll at twice the ordinary rate. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-no-0177" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#x-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Overtime rejected – Joseph Mathew"}
                  <small>{"The hours stay as normal hours; the employee sees the reason in HR-11. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <section className="card" data-flow="hr06-tbl" style={{"marginTop": "16px"}}>
                <h2 className="s-card-title">{"Coming holidays (HRS-06), shown as HOL in attendance"}</h2>
                <div className="s-scroll">
                  <table className="dt__table dt--hug" data-nosort="" data-mc="">
                    <caption className="sr-only">{"Holidays"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">{"Date"}</th>
                        <th scope="col">{"Holiday"}</th>
                        <th scope="col">{"Type"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="dt__td" data-label="Date" data-w2="" data-t="">{"25-12-2026"}</td>
                        <td className="dt__td" data-label="Holiday" data-w2="">{"Christmas"}</td>
                        <td className="dt__td" data-label="Type" data-w2="">{"Festival"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Date" data-w2="" data-t="">{"01-01-2027"}</td>
                        <td className="dt__td" data-label="Holiday" data-w2="">{"New Year's Day"}</td>
                        <td className="dt__td" data-label="Type" data-w2="">{"Festival"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Date" data-w2="" data-t="">{"26-01-2027"}</td>
                        <td className="dt__td" data-label="Holiday" data-w2="">{"Republic Day"}</td>
                        <td className="dt__td" data-label="Type" data-w2="">{"National"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td" data-label="Date" data-w2="" data-t="">{"06-04-2027"}</td>
                        <td className="dt__td" data-label="Holiday" data-w2="">{"Easter Monday"}</td>
                        <td className="dt__td" data-label="Type" data-w2="">{"Optional"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
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
