// GENERATED from public/hr-and-payroll/hr-09-payroll-run/index.html by scripts/convert_legacy.py.
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
    "href": "/hr-and-payroll/hr-09-payroll-run/hr-09-payroll-run.css",
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

export default function HrAndPayrollHr09PayrollRun() {
  return (
    <ScreenShell title="Payroll Run" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="HR-09" data-code="HR-09" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="HR-09" aria-current="page" title="Payroll" to={"/hr-and-payroll/hr-09-payroll-run"}>
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
            <main className="app__content" id="main" data-code="HR-09" tabIndex="-1">
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
                        <span aria-current="page">{"Payroll"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Payroll Run"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"HR-09"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="hr-09-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hr-09-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" action="/hr-and-payroll/hr-09-payroll-run/" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"Month"}</span>
                            <select className="hf-f__c" name="month">
                              <option>{"September 2026"}</option>
                              <option>{"October 2026"}</option>
                              <option>{"August 2026"}</option>
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
                    <a className="btn" href="#hr-x02">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"October preview"}
                    </a>
                    <Link className="btn" data-leads-to="HR-O01" to={"/hr-and-payroll/hr-o01-payslip"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Payslips"}
                    </Link>
                  </div>
                </div>
              </header>
              <p className="field__hint" data-flow="hr09-enc">{"Leave encashment comes from the leave rules of HRS-06 (encashable leave types) and pays on component LENC."}</p>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="calculated" />
                <i className="pm" id="started" />
              </div>
              <ul className="cc-kpis">
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"Sep 2026"}</span>
                  <span className="cc-kpi__l">{"Month"}</span>
                  <span className="cc-kpi__s">{"last month (default)"}</span>
                </li>
                <li className="cc-kpi cc-kpi--ok">
                  <span className="cc-kpi__v">{"₹48,26,400"}</span>
                  <span className="cc-kpi__l">{"Net pay"}</span>
                  <span className="cc-kpi__s">{"179 employees · paid 01-10"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"₹53,55,900"}</span>
                  <span className="cc-kpi__l">{"Gross"}</span>
                  <span className="cc-kpi__s">{"earnings of the month"}</span>
                </li>
                <li className="cc-kpi cc-kpi--ok">
                  <span className="cc-kpi__v">{"₹7,39,286"}</span>
                  <span className="cc-kpi__l">{"Statutory dues"}</span>
                  <span className="cc-kpi__s">{"PF + ESI + TDS – paid"}</span>
                </li>
                <li className="cc-kpi cc-kpi--ok">
                  <span className="cc-kpi__v">{"Locked"}</span>
                  <span className="cc-kpi__l">{"Status"}</span>
                  <span className="cc-kpi__s">{"posted 02-10-2026"}</span>
                </li>
              </ul>
              <section className="fd-sec cc-sec" data-code="HR-09-wizard">
                <h2 className="fd-sec__t">{"Payroll of September 2026"}</h2>
                <p className="fd-sec__d">{"Not started → Inputs → Calculated → Approved → Paid → Locked. Step 1 enters the inputs, step 2 calculates and shows exceptions, step 3 approves, pays and posts. Each step of September is complete."}</p>
                <div className="stabs ac-tabs">
                  <input type="radio" name="pw" id="pw-0" defaultChecked={true} />
                  <input type="radio" name="pw" id="pw-1" />
                  <input type="radio" name="pw" id="pw-2" />
                  <div className="stabs__list" role="tablist">
                    <label htmlFor="pw-0">{"1 · Inputs"}</label>
                    <label htmlFor="pw-1">{"2 · Calculate"}</label>
                    <label htmlFor="pw-2">{"3 · Approve and pay"}</label>
                  </div>
                  <div className="stabs__panels">
                    <div className="stabs__panel" data-tab="pw-0">
                      <section data-code="HR-09-1">
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="pm-m">
                              {"Month "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="pm-m" name="month" required={true} defaultValue={"September 2026"}>
                                <option value="September 2026">{"September 2026"}</option>
                                <option value="October 2026">{"October 2026"}</option>
                                <option value="August 2026">{"August 2026"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Default is last month"}</span>
                          </div>
                          <div className="field">
                            <span className="field__label">{"Attendance locked"}</span>
                            <div className="hr-lk">
                              <span className="pill hk-pill cc--ok">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#lock" />
                                </svg>
                                {"Locked 30-09-2026 17:40"}
                              </span>
                              <span className="fd-sub">{"by Ancy Joseph · required before the payroll runs"}</span>
                            </div>
                          </div>
                        </div>
                        <h3 className="hr-h3">
                          {"Variable inputs "}
                          <small>{"overtime, incentives, arrears, deductions, service charge"}</small>
                        </h3>
                        <div className="pgw">
                          <div className="s-scroll">
                            <table className="dt__table dt--hug gl-tbl" data-code="HR-09-inputs" data-nosort="" data-mc="">
                              <caption className="sr-only">{"Variable inputs"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">{"Input"}</th>
                                  <th scope="col" className="dt__th--right">{"Amount"}</th>
                                  <th scope="col">{"Source"}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="dt__td" data-label="Input" data-w="" data-t="">
                                    <b>{"Canteen and mess deduction"}</b>
                                    <span className="fd-sub">{"154 employees of grades G1 – G4"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹1,00,100.00"}</td>
                                  <td className="dt__td" data-label="Source" data-w2="">
                                    <span className="fd-sub">{"from the canteen register"}</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Input" data-w="" data-t="">
                                    <b>{"Advance recoveries"}</b>
                                    <span className="fd-sub">{"ADV-2026-0041 · 0044 · 0046"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹6,580.00"}</td>
                                  <td className="dt__td" data-label="Source" data-w2="">
                                    <span className="fd-sub">{"from Advances (HR-08)"}</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Input" data-w="" data-t="">
                                    <b>{"Overtime"}</b>
                                    <span className="fd-sub">{"no approved overtime in September"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right" data-e="">{"–"}</td>
                                  <td className="dt__td" data-label="Source">
                                    <span className="fd-sub">{"HR-P04"}</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Input" data-w="" data-t="">
                                    <b>{"Incentives and arrears"}</b>
                                    <span className="fd-sub">{"none"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right" data-e="">{"–"}</td>
                                  <td className="dt__td" data-e="">
                                    <span className="fd-sub">{"–"}</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Input" data-w2="" data-t="">
                                    <b>{"Uniform deduction"}</b>
                                    <span className="fd-sub">{"none"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right" data-e="">{"–"}</td>
                                  <td className="dt__td" data-label="Source">
                                    <span className="fd-sub">{"LN-10"}</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Input" data-w="" data-t="">
                                    <b>{"Service charge share"}</b>
                                    <span className="fd-sub">{"not distributed in September"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right" data-e="">{"–"}</td>
                                  <td className="dt__td" data-label="Source" data-w2="">
                                    <span className="fd-sub">{"HRS-03 points by grade"}</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <p className="gl-note">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#info" />
                          </svg>
                          {"October 2026 is "}
                          <b>{"Not started"}</b>
                          {": its attendance locks on 31-10. "}
                          <a className="fd-link" href="#hr-x02">{"Run a preview"}</a>
                          {" to see the expected figures."}
                        </p>
                      </section>
                    </div>
                    <div className="stabs__panel" data-tab="pw-1">
                      <section data-code="HR-09-2">
                        <ul className="hr-hero__f hr-kp">
                          <li>
                            <b>{"179"}</b>
                            {"employees"}
                          </li>
                          <li>
                            <b>{"₹53,55,900"}</b>
                            {"gross"}
                          </li>
                          <li>
                            <b>{"₹5,29,500"}</b>
                            {"deductions"}
                          </li>
                          <li>
                            <b>{"₹48,26,400"}</b>
                            {"net pay"}
                          </li>
                        </ul>
                        <div className="hr-act">
                          <a className="btn btn--primary" href="#hr-x02">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#calculator" />
                            </svg>
                            {"Calculate"}
                          </a>
                          <span className="fd-muted">{"Runs the payroll engine (HR-X02). September is locked – the button runs the October preview."}</span>
                        </div>
                        <h3 className="hr-h3">
                          {"Employee results "}
                          <small>{"September 2026 · employer PF ₹2,48,598 (EPS ₹1,72,599 + EPF ₹75,999) · employer ESI ₹56,102 · gratuity and bonus provision monthly"}</small>
                        </h3>
                        <div className="pgw">
                          <div className="s-scroll">
                            <table className="dt__table gl-tbl hr-res" data-code="HR-09-results" data-mc="">
                              <caption className="sr-only">{"Employee payroll results"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">{"Employee"}</th>
                                  <th scope="col" className="dt__th--right">{"Paid days"}</th>
                                  <th scope="col" className="dt__th--right">{"LOP"}</th>
                                  <th scope="col" className="dt__th--right">{"Basic"}</th>
                                  <th scope="col" className="dt__th--right">{"HRA"}</th>
                                  <th scope="col" className="dt__th--right">{"Special"}</th>
                                  <th scope="col" className="dt__th--right">{"Gross"}</th>
                                  <th scope="col" className="dt__th--right">{"PF"}</th>
                                  <th scope="col" className="dt__th--right">{"ESI"}</th>
                                  <th scope="col" className="dt__th--right">{"LWF"}</th>
                                  <th scope="col" className="dt__th--right">{"Canteen"}</th>
                                  <th scope="col" className="dt__th--right">{"TDS"}</th>
                                  <th scope="col" className="dt__th--right">{"Advance"}</th>
                                  <th scope="col" className="dt__th--right">{"Net pay"}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹56,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹22,720.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹34,080.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹1,13,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹13,620.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹98,130.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹25,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹10,160.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹15,240.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹50,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹48,950.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹16,250.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹9,750.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹32,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹30,000.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹16,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹33,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹31,300.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹7,140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,710.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹35,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹33,200.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,920.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,380.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹24,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,476.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,424.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,920.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,380.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹24,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,476.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,424.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,680.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,520.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,104.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹138.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="Advance" data-w2="" data-m="">{"₹2,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹14,458.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,730.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,146.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,110.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,750.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,170.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹147.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,483.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,910.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,182.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹148.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,670.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,960.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,188.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹149.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,763.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,050.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,620.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,430.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,086.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹136.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,178.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹10,050.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,020.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹6,030.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹20,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,206.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹151.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹18,043.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,950.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,970.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,194.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,856.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹6,750.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹2,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,050.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹13,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹810.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹102.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹11,888.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,950.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,970.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,194.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,856.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,750.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,170.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹147.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,483.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,730.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,146.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,110.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,780.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,670.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,134.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹142.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,924.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,250.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,110.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹139.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,551.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,960.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,188.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹149.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,763.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,780.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,670.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,134.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹142.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,924.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹10,050.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,020.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹6,030.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹20,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,206.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹151.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹18,043.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹143.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,017.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹59,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹23,920.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹35,880.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹1,19,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹14,790.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹1,02,960.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,840.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,260.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹34,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹31,700.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹16,250.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹9,750.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹32,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹30,000.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,470.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹34,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹32,400.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,320.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,596.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,304.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,800.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,920.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,380.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹24,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,476.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,424.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,920.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,380.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹24,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,476.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,424.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,020.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,530.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,506.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,894.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,250.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,950.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,590.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,210.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,720.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,580.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,116.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,644.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,250.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,950.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,590.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,210.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                    <span className="hr-who">
                                      <span className="hr-av" aria-hidden="true">{"SV"}</span>
                                      <span>
                                        <b>
                                          <Link className="fd-link" data-leads-to="HR-03" to={"/hr-and-payroll/hr-03-employee-profile/emp-3013"}>{"Shaji V"}</Link>
                                        </b>
                                        <span className="fd-sub">{"EMP-3013"}</span>
                                      </span>
                                    </span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,260.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,890.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,578.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,022.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹1,20,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹48,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹72,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹2,40,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹45,070.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹1,93,080.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹61,250.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹24,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹36,750.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹1,22,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹15,370.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹1,05,280.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹30,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹12,280.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹18,420.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹61,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹5,090.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹54,460.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹29,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹11,960.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹17,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹59,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹4,880.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹53,070.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹59,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹23,840.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹35,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹1,19,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹14,710.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹1,02,640.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹59,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹23,640.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹35,460.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹1,18,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹14,510.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹1,01,840.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹58,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹23,420.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹35,130.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹1,17,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹14,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹1,00,950.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹31,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹12,440.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹18,660.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹62,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹5,190.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹55,160.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹23,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹9,280.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹13,920.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹46,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹44,550.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,380.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹8,070.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,614.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,586.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,050.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,230.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹34,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹31,600.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹7,080.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,620.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹35,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹32,900.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,240.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,860.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,572.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹23,928.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹25,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹10,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹15,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹50,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹48,150.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹25,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹10,180.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹15,270.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹50,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹49,050.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹25,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹10,140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹15,210.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹50,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹48,850.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹23,750.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹9,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹14,250.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹47,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹45,650.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹25,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹10,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹15,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹50,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹48,150.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹16,050.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,420.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹9,630.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹32,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹29,600.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹24,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹9,920.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹14,880.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹49,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹47,750.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹29,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹11,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹17,730.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹59,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹4,770.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹52,480.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,440.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹8,160.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹27,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,632.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="Advance" data-w2="" data-m="">{"₹2,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,368.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,920.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,380.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹34,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹32,100.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹24,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹9,840.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹14,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹49,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹47,350.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹143.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,017.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,860.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,790.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,158.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹145.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,297.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹10,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,040.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹6,060.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹20,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,212.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹152.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹18,136.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,720.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,580.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,116.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,644.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,910.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,182.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹148.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,670.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹10,050.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,020.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹6,030.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹20,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,206.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹151.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹18,043.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,840.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,152.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,204.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,910.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,182.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹148.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,670.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,750.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,170.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹147.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,483.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,840.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,152.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,204.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,080.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹135.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,085.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,730.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,146.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,110.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,320.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,596.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,304.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,120.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,680.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,536.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹23,364.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,800.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,800.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,560.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹23,740.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹7,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹2,960.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,440.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹14,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹888.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹111.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹13,101.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹7,250.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹2,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹14,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹870.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹109.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹12,821.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹7,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹2,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,470.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹14,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹894.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹112.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹13,194.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,880.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,164.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹146.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,390.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,640.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,128.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹141.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,831.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,780.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,670.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,134.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹142.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="Advance" data-w2="" data-m="">{"₹2,080.00"}</td>
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹14,844.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,740.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,610.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,122.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹141.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,737.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹143.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,017.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,860.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,790.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,158.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹145.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,297.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,780.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,670.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,134.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹142.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,924.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,640.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,460.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,092.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹137.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,271.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,640.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,128.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹141.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,831.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,640.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,460.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,092.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹137.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,271.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹10,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹6,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹20,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,950.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,680.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,520.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,104.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹138.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,458.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,910.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,182.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹148.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,670.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,340.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹8,010.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,602.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,398.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,470.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹24,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,494.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,706.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,160.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,740.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,548.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹23,552.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,020.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,530.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,506.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,894.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,360.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹8,040.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,608.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,492.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹8,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹27,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,620.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,680.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,340.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹8,010.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,602.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,398.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,730.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,146.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,110.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,730.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,146.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,110.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹10,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹6,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹20,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,950.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,750.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,170.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹147.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,483.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,780.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,670.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,134.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹142.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,924.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹10,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹6,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹20,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,950.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹10,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹6,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹20,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,950.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,640.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,128.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹141.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,831.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,080.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹135.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,085.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,780.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,670.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,134.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹142.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,924.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,050.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,620.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,430.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,086.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹136.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,178.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹10,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹6,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹20,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,950.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,680.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,520.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,104.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹138.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,458.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹143.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,017.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,740.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,610.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,122.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹141.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,737.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹7,060.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,590.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹35,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹32,800.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹34,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹31,500.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹16,050.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,420.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹9,630.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹32,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹29,600.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹16,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,480.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹9,720.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹32,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹29,900.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹16,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,680.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,020.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹33,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹30,900.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹7,080.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,620.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹35,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹32,900.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹23,050.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹9,220.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹13,830.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹46,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹44,250.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹23,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹9,440.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹14,160.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹47,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹45,350.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹7,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹15,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹113.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹13,287.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹7,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹15,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹113.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹13,287.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹7,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹2,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,410.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹14,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹882.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹111.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹13,007.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹7,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹2,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,410.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹14,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹882.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹111.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹13,007.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹6,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹2,720.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,080.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹13,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹816.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹102.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹11,982.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,750.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,170.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹147.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,483.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,730.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,146.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,110.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,720.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,580.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,116.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,644.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,720.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,580.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,116.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,644.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹143.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,017.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,730.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,146.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,110.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,860.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,790.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,158.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹145.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,297.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹10,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹6,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹20,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,950.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,880.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,164.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹146.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,390.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,250.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,110.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹139.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,551.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,470.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹24,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,494.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,706.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹24,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹9,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹14,910.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹49,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹47,850.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹24,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹9,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹14,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹49,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹47,150.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹24,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹9,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹14,730.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹49,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹47,250.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,340.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹8,010.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,602.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,398.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,320.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,596.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,304.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,320.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,596.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,304.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,410.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹24,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,482.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,518.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,410.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹34,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹32,200.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,410.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹34,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹32,200.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹17,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹10,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹34,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹31,500.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹16,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,560.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹9,840.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹32,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹30,300.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,840.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,152.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,204.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹16,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,480.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹9,720.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹32,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹29,900.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,340.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹8,010.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,602.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,398.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,710.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,542.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹23,458.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,160.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,740.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,548.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹23,552.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,080.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,620.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,524.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹23,176.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,020.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,530.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,506.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,894.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,950.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,970.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,194.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,856.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,880.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,820.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,164.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹146.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,390.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,780.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,670.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,134.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹142.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,924.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,840.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,152.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,204.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹16,350.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹6,540.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹9,810.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹32,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹30,200.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,780.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,670.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,134.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹142.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,924.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,950.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,970.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,194.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹150.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,856.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,250.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,110.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹139.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,551.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,840.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,152.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹144.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,204.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,640.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,460.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,200.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,092.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹137.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,271.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,720.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,580.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,116.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹140.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,644.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,760.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,640.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹18,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,128.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹141.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹16,831.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹7,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹15,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹113.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹13,287.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹6,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹2,720.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,080.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹13,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹816.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹102.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹11,982.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹7,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹4,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹15,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-m="">{"₹900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹113.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹13,287.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,550.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,420.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹8,130.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹27,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,626.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,774.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹13,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,360.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹8,040.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹26,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,608.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹24,492.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,450.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹4,980.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,470.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹24,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,494.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹22,706.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹12,650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹5,060.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹7,590.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹25,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,518.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹23,082.00"}</td>
                                </tr>
                                <tr className="gl-row">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
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
                                  <td className="dt__td dt__td--right nw num" data-label="Paid days" data-w2="">{"30"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LOP">{"0"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹9,850.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹3,940.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹5,910.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹19,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹1,182.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-m="">{"₹148.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-m="">{"₹50.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹650.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num gl-b" data-label="Net pay" data-w2="">{"₹17,670.00"}</td>
                                </tr>
                                <tr className="dl-total">
                                  <td className="dt__td" data-label="Employee" data-w2="" data-t="">
                                    <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                    <b>{"179 employees"}</b>
                                  </td>
                                  <td className="dt__td" data-e="" />
                                  <td className="dt__td" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="Basic" data-w2="">{"₹26,77,950.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="HRA" data-w2="">{"₹10,71,180.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Special" data-w2="">{"₹16,06,770.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross" data-w2="" data-m="">{"₹53,55,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="PF" data-w2="" data-m="">{"₹2,48,598.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="ESI" data-w2="" data-m="">{"₹12,972.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="LWF" data-w2="" data-m="">{"₹8,950.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Canteen" data-w2="" data-m="">{"₹1,00,100.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="TDS" data-w2="" data-m="">{"₹1,52,300.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Advance" data-w2="" data-m="">{"₹6,580.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Net pay" data-w2="">{"₹48,26,400.00"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <h3 className="hr-h3">
                          {"Exceptions "}
                          <small>{"0 open · 3 cleared"}</small>
                        </h3>
                        <ul className="pq-l">
                          <li>
                            <span className="pq-l__m">
                              <b>{"Negative net pay"}</b>
                              <small>{"none"}</small>
                            </span>
                            <span className="pq-l__s">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"0"}
                              </span>
                            </span>
                          </li>
                          <li>
                            <span className="pq-l__m">
                              <b>{"Missing bank account"}</b>
                              <small>{"all 179 have a verified account"}</small>
                            </span>
                            <span className="pq-l__s">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"0"}
                              </span>
                            </span>
                          </li>
                          <li>
                            <span className="pq-l__m">
                              <b>{"Missing PAN for TDS"}</b>
                              <small>{"all grades with TDS have a PAN"}</small>
                            </span>
                            <span className="pq-l__s">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"0"}
                              </span>
                            </span>
                          </li>
                          <li>
                            <span className="pq-l__m">
                              <b>{"New joiners and exits"}</b>
                              <small>{"Shaji V last day 30-09 – full month paid; Rani V joined 01-08"}</small>
                            </span>
                            <span className="pq-l__s">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"cleared"}
                              </span>
                            </span>
                          </li>
                          <li>
                            <span className="pq-l__m">
                              <b>{"Change above 20 % against August"}</b>
                              <small>{"Rani V (+43 %: first full month) · Jincy Mathew (+25 %)"}</small>
                            </span>
                            <span className="pq-l__s">
                              <span className="pq-flag pq-flag--ok">
                                <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"cleared"}
                              </span>
                            </span>
                          </li>
                        </ul>
                      </section>
                    </div>
                    <div className="stabs__panel" data-tab="pw-2">
                      <section data-code="HR-09-3">
                        <h3 className="hr-h3">
                          {"Approval "}
                          <small>{"HR Manager → Financial Controller → GM"}</small>
                        </h3>
                        <div className="pgw">
                          <div className="s-scroll">
                            <table className="dt__table dt--hug gl-tbl" data-code="HR-09-chain" data-nosort="" data-mc="">
                              <caption className="sr-only">{"Status history of September"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">{"Status"}</th>
                                  <th scope="col">{"When"}</th>
                                  <th scope="col">{"By"}</th>
                                  <th scope="col">{"Note"}</th>
                                  <th scope="col" />
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="dt__td nw" data-label="Status" data-t="">
                                    <b>{"Inputs"}</b>
                                  </td>
                                  <td className="dt__td nw num" data-label="When" data-w2="">{"30-09-2026 17:40"}</td>
                                  <td className="dt__td" data-label="By" data-w2="">{"Ancy Joseph"}</td>
                                  <td className="dt__td" data-label="Note">
                                    <span className="fd-sub">{"attendance locked; canteen and advance recoveries entered"}</span>
                                  </td>
                                  <td className="dt__td nw" data-s="">
                                    <span className="pill hk-pill cc--ok">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Done"}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Status" data-w2="" data-t="">
                                    <b>{"Calculated"}</b>
                                  </td>
                                  <td className="dt__td nw num" data-label="When" data-w2="">{"30-09-2026 18:05"}</td>
                                  <td className="dt__td" data-label="By" data-w2="">{"Ancy Joseph"}</td>
                                  <td className="dt__td" data-label="Note">
                                    <span className="fd-sub">{"179 employees; 0 exceptions open"}</span>
                                  </td>
                                  <td className="dt__td nw" data-s="">
                                    <span className="pill hk-pill cc--ok">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Done"}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Status" data-w2="" data-t="">
                                    <b>{"Approved"}</b>
                                  </td>
                                  <td className="dt__td nw num" data-label="When" data-w2="">{"30-09-2026 19:30"}</td>
                                  <td className="dt__td" data-label="By">{"Meera Nathan → Lakshmi Ishaan → Vikram Nathan"}</td>
                                  <td className="dt__td" data-label="Note" data-w2="">
                                    <span className="fd-sub">{"three approvals"}</span>
                                  </td>
                                  <td className="dt__td nw" data-s="">
                                    <span className="pill hk-pill cc--ok">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Done"}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Status" data-t="">
                                    <b>{"Paid"}</b>
                                  </td>
                                  <td className="dt__td nw num" data-label="When" data-w2="">{"01-10-2026 10:15"}</td>
                                  <td className="dt__td" data-label="By" data-w2="">{"Finance (FN)"}</td>
                                  <td className="dt__td" data-label="Note">
                                    <span className="fd-sub">{"bank file HR-O02 – Federal Bank, salary transfer HR-PAY-2026-09"}</span>
                                  </td>
                                  <td className="dt__td nw" data-s="">
                                    <span className="pill hk-pill cc--ok">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Done"}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Status" data-t="">
                                    <b>{"Locked"}</b>
                                  </td>
                                  <td className="dt__td nw num" data-label="When" data-w2="">{"02-10-2026 09:00"}</td>
                                  <td className="dt__td" data-label="By" data-w2="">{"Ancy Joseph"}</td>
                                  <td className="dt__td" data-label="Note">
                                    <span className="fd-sub">{"journal posted to the General Ledger (AC); payslips published"}</span>
                                  </td>
                                  <td className="dt__td nw" data-s="">
                                    <span className="pill hk-pill cc--ok">
                                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                        <use href="/assets/icons/sprite.svg#check-circle" />
                                      </svg>
                                      {"Done"}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="hr-act">
                          <span className="hr-dis" title="Approved 30-09-2026 19:30 – all three approvers">
                            <button className="btn" type="button" disabled={true}>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Approve"}
                            </button>
                            <small>{"Approved 30-09-2026 19:30 – all three approvers"}</small>
                          </span>
                          <Link className="btn" data-leads-to="HR-O01" to={"/hr-and-payroll/hr-o01-payslip"}>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#file-text" />
                            </svg>
                            {"Generate payslips"}
                          </Link>
                          <Link className="btn" data-leads-to="HR-O02" to={"/hr-and-payroll/hr-o02-bank-salary-file"}>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#download" />
                            </svg>
                            {"Generate bank file"}
                          </Link>
                          <span className="hr-dis" title="Posted 02-10-2026">
                            <button className="btn" type="button" disabled={true}>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#send" />
                              </svg>
                              {"Post journal"}
                            </button>
                            <small>{"Posted 02-10-2026"}</small>
                          </span>
                          <span className="hr-dis" title="Locked 02-10-2026">
                            <button className="btn" type="button" disabled={true}>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#lock" />
                              </svg>
                              {"Lock payroll"}
                            </button>
                            <small>{"Locked 02-10-2026"}</small>
                          </span>
                        </div>
                        <h3 className="hr-h3">
                          {"Bank file "}
                          <small>{"salary transfer HR-PAY-2026-09"}</small>
                        </h3>
                        <p className="gl-note">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#check-circle" />
                          </svg>
                          {"Federal Bank salary-transfer format · 179 payees · total ₹48,26,400.00 · paid 01-10-2026 10:15 and confirmed by Finance (FN). "}
                          <Link className="fd-link" data-leads-to="HR-O02" to={"/hr-and-payroll/hr-o02-bank-salary-file"}>{"Open the file"}</Link>
                        </p>
                        <h3 className="hr-h3">
                          {"Journal "}
                          <small>{"posted to the General Ledger on 02-10-2026 (HR-X05)"}</small>
                        </h3>
                        <div className="pgw">
                          <div className="s-scroll">
                            <table className="dt__table gl-tbl" data-code="HR-09-jd" data-nosort="" data-mc="">
                              <caption className="sr-only">{"Journal debit by department"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">{"Debit – salary expense by department"}</th>
                                  <th scope="col" className="dt__th--right">{"Employees"}</th>
                                  <th scope="col" className="dt__th--right">{"Gross pay"}</th>
                                  <th scope="col" className="dt__th--right">{"Employer cost"}</th>
                                  <th scope="col" className="dt__th--right">{"Total"}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w="" data-t="">
                                    <b>{"Front office"}</b>
                                    <span className="fd-sub">{"GL department ROOMS"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"22"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹5,13,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹36,810.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹5,50,610.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w="" data-t="">
                                    <b>{"Housekeeping"}</b>
                                    <span className="fd-sub">{"GL department ROOMS"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"25"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹6,57,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹43,577.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹7,00,977.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w="" data-t="">
                                    <b>{"F&B service"}</b>
                                    <span className="fd-sub">{"GL department TRV"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"26"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹7,43,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹44,367.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹7,88,267.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w2="" data-t="">
                                    <b>{"Kitchen"}</b>
                                    <span className="fd-sub">{"GL department TRV"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"28"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹7,54,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹47,692.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹8,02,192.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w="" data-t="">
                                    <b>{"Engineering"}</b>
                                    <span className="fd-sub">{"GL department POM"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"13"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹4,45,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹21,233.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹4,66,233.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w="" data-t="">
                                    <b>{"Security"}</b>
                                    <span className="fd-sub">{"GL department A&G"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"12"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹2,65,600.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹20,975.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹2,86,575.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w="" data-t="">
                                    <b>{"Sales & marketing"}</b>
                                    <span className="fd-sub">{"GL department S&M"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"8"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹3,69,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹13,476.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹3,82,976.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w="" data-t="">
                                    <b>{"Accounts"}</b>
                                    <span className="fd-sub">{"GL department A&G"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"10"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹4,06,000.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹17,748.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹4,23,748.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w2="" data-t="">
                                    <b>{"HR"}</b>
                                    <span className="fd-sub">{"GL department HR"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"5"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹1,71,700.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹8,292.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹1,79,992.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w2="" data-t="">
                                    <b>{"IT"}</b>
                                    <span className="fd-sub">{"GL department IT"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"3"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹1,00,500.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹4,830.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹1,05,330.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w="" data-t="">
                                    <b>{"Stores & purchase"}</b>
                                    <span className="fd-sub">{"GL department A&G"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"7"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹2,12,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹12,375.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹2,25,275.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w="" data-t="">
                                    <b>{"Management"}</b>
                                    <span className="fd-sub">{"GL department A&G"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"3"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹3,23,800.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹5,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹3,29,200.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w2="" data-t="">
                                    <b>{"Laundry"}</b>
                                    <span className="fd-sub">{"GL department LAU"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"11"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹2,08,400.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹18,056.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹2,26,456.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w2="" data-t="">
                                    <b>{"Spa"}</b>
                                    <span className="fd-sub">{"GL department SPA"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">{"6"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹1,82,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹9,869.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹1,92,769.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w="" data-t="">
                                    <b>{"PF administration and EDLI"}</b>
                                    <span className="fd-sub">{"employer, 1 % of PF wages"}</span>
                                  </td>
                                  <td className="dt__td" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-e="" />
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹20,716.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹20,716.00"}</td>
                                </tr>
                                <tr className="dl-total">
                                  <td className="dt__td" data-label="Debit – salary expense by department" data-w2="" data-t="">
                                    <b>{"Salary expense (5601)"}</b>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employees" data-w2="">
                                    <b>{"179"}</b>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Gross pay" data-w2="">{"₹53,55,900.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Employer cost" data-w2="">{"₹3,25,416.00"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="Total" data-w2="">{"₹56,81,316.00"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="pgw">
                          <div className="s-scroll">
                            <table className="dt__table dt--hug gl-tbl" data-code="HR-09-jc" data-nosort="" data-mc="">
                              <caption className="sr-only">{"Journal credit"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">{"Credit – payables and recoveries"}</th>
                                  <th scope="col" className="dt__th--right">{"Amount"}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="dt__td" data-label="Credit – payables and recoveries" data-w="" data-t="">
                                    <b>{"Salaries payable (2330)"}</b>
                                    <span className="fd-sub">{"net pay – paid 01-10-2026 by salary transfer HR-PAY-2026-09 (journal AJ/26-27/01497)"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹48,26,400.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Credit – payables and recoveries" data-w="" data-t="">
                                    <b>{"PF and ESI payable (2320)"}</b>
                                    <span className="fd-sub">{"employee and employer shares and PF administration – paid 15-10-2026 (AJ/26-27/01508)"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹5,86,986.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Credit – payables and recoveries" data-w="" data-t="">
                                    <b>{"TDS payable (2310)"}</b>
                                    <span className="fd-sub">{"salary tax – paid 07-10-2026 (AJ/26-27/01503)"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹1,52,300.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Credit – payables and recoveries" data-w="" data-t="">
                                    <b>{"Labour welfare fund payable"}</b>
                                    <span className="fd-sub">{"₹50 an employee"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹8,950.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Credit – payables and recoveries" data-w="" data-t="">
                                    <b>{"Canteen and mess recoveries"}</b>
                                    <span className="fd-sub">{"recovered from salary"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹1,00,100.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td" data-label="Credit – payables and recoveries" data-w="" data-t="">
                                    <b>{"Staff advances"}</b>
                                    <span className="fd-sub">{"instalments recovered"}</span>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹6,580.00"}</td>
                                </tr>
                                <tr className="dl-total">
                                  <td className="dt__td" data-label="Credit – payables and recoveries" data-w2="" data-t="">
                                    <b>{"Total credit"}</b>
                                  </td>
                                  <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹56,81,316.00"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
              <div className="modal modal--xl" id="hr-x02" data-code="HR-X02" role="dialog" aria-modal="true" aria-labelledby="hr-x02-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/hr-and-payroll/hr-09-payroll-run/#calculated" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="hr-x02-t">{"Payroll engine – October 2026 preview"}</h2>
                      <p className="modal__desc">{"Pro-rata earnings, loss of pay, overtime, PF, ESI, LWF, TDS projection and recoveries as set in HR & Payroll Setup. A preview does not save anything."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <ul className="hr-hero__f hr-hero__f--light" />
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug gl-tbl" data-code="HR-X02-tot" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Preview totals"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Item"}</th>
                              <th scope="col" className="dt__th--right">{"Amount"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Item" data-w2="" data-t="">{"Employees calculated"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount">{"178"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-w="" data-t="">{"Gross (incl. overtime ₹16,250)"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹53,45,850.00"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-w2="" data-t="">{"PF – employee 12 %"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹2,47,020.00"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-w2="" data-t="">{"ESI – employee 0.75 %"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹12,989.00"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-t="">{"LWF"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹8,900.00"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-w="" data-t="">{"TDS (projected annual tax ÷ months left)"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹1,51,900.00"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-w2="" data-t="">{"Canteen and recoveries"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹1,40,950.00"}</td>
                            </tr>
                            <tr className="dl-total">
                              <td className="dt__td" data-label="Item" data-w2="" data-t="">
                                <b>{"Net pay (preview)"}</b>
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹47,84,091.00"}</td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Item" data-w="" data-t="">{"Employer PF 12 % + ESI 3.25 %"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Amount" data-w2="">{"₹3,03,195.00"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <h3 className="hr-h3">{"Exceptions in the preview"}</h3>
                    <ul className="pq-l">
                      <li>
                        <span className="pq-l__m">
                          <b>{"Arun George joins 22-10"}</b>
                          <small>{"pro-rata 10 of 31 days"}</small>
                        </span>
                        <span className="pq-l__s">
                          <span className="pq-flag pq-flag--info">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#eye" />
                            </svg>
                            {"Review"}
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="pq-l__m">
                          <b>{"Six overtime claims"}</b>
                          <small>{"₹16,250 – two still waiting for approval"}</small>
                        </span>
                        <span className="pq-l__s">
                          <span className="pq-flag pq-flag--warn">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#eye" />
                            </svg>
                            {"Review"}
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="pq-l__m">
                          <b>{"New advance ADV-2026-0043"}</b>
                          <small>{"₹5,000 recovery starts"}</small>
                        </span>
                        <span className="pq-l__s">
                          <span className="pq-flag pq-flag--info">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#eye" />
                            </svg>
                            {"Review"}
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="pq-l__m">
                          <b>{"Shaji V – exit"}</b>
                          <small>{"excluded; full and final is paid separately"}</small>
                        </span>
                        <span className="pq-l__s">
                          <span className="pq-flag pq-flag--info">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#eye" />
                            </svg>
                            {"Review"}
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Preview only – the month starts when attendance is locked."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <button className="btn btn--primary" type="submit">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#refresh" />
                      </svg>
                      {"Run again"}
                    </button>
                  </div>
                </form>
              </div>
              <details className="hk-sys" data-code="HR-X02">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#cog" />
                  </svg>
                  {"System – what runs automatically on this screen"}
                </summary>
                <ul>
                  <li data-code="HR-X02">
                    <b>{"HR-X02 · Payroll engine"}</b>
                    {" – Calculate: pro-rata earnings, loss of pay, overtime, statutory deductions by HRS rules, TDS projection and recoveries."}
                  </li>
                  <li data-code="HR-X05">
                    <b>{"HR-X05 · Payroll journal poster"}</b>
                    {" – Post journal: sends the journal to the General Ledger by department and component."}
                  </li>
                </ul>
              </details>
              <div className="fd-toast" id="t-calc" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#calculator" />
                </svg>
                <div className="fd-toast__text">
                  {"October preview calculated"}
                  <small>{"178 employees · net pay ₹47,84,091.00 · 4 items to review. Nothing was saved. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-start" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#play" />
                </svg>
                <div className="fd-toast__text">
                  {"October payroll opened"}
                  <small>{"Status Not started → Inputs once the attendance is locked on 31-10. Written to the audit log with the user, time and the old and new values."}</small>
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
