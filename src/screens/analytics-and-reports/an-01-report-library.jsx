// GENERATED from public/analytics-and-reports/an-01-report-library/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/revenue.css",
    "media": null
  },
  {
    "href": "/css/aviv/approvals.css",
    "media": null
  },
  {
    "href": "/analytics-and-reports/an-01-report-library/an-01-report-library.css",
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

export default function AnalyticsAndReportsAn01ReportLibrary() {
  return (
    <ScreenShell title="Report Library" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="AN-01" data-code="AN-01" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="an" open={true}>
                <summary className="nav__item nav__group">
                  {"Analytics & Reports"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item is-active" data-nav="AN-01" aria-current="page" title="Library" to={"/analytics-and-reports/an-01-report-library"}>
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
            <main className="app__content" id="main" data-code="AN-01" tabIndex="-1">
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
                        <Link to={"/analytics-and-reports/an-01-report-library"}>{"Analytics & Reports"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Library"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Report Library"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"AN-01"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="an-01-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="an-01-f" aria-label="Show filters" />
                      <form className="hfilter" method="get" action="/analytics-and-reports/an-01-report-library/" role="search" aria-label="Filters">
                        <span className="hfilter__hic" title="Filters">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#filter" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f">
                            <span className="hf-f__l">{"Search"}</span>
                            <input className="hf-f__c" type="search" name="q" defaultValue={""} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Module"}</span>
                            <select className="hf-f__c" name="module">
                              <option>{"All modules"}</option>
                              <option>{"Front Desk"}</option>
                              <option>{"Reservations"}</option>
                              <option>{"Housekeeping"}</option>
                              <option>{"Finance"}</option>
                              <option>{"Revenue Management"}</option>
                              <option>{"Restaurant POS"}</option>
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
                    <Link className="btn" data-leads-to="AN-09" to={"/analytics-and-reports/an-09-my-scheduled-reports"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#clock" />
                      </svg>
                      {"Schedules"}
                    </Link>
                    <Link className="btn" to={"/analytics-and-reports-setup/ans-01-report-registry"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#sliders" />
                      </svg>
                      {"Setup (ANS-01)"}
                    </Link>
                  </div>
                </div>
              </header>
              <form data-code="AN-01-period" className="rpb no-print" action="/analytics-and-reports/an-01-report-library/" method="get" aria-label="Report period">
                <span className="rpb__t">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#calendar-range" />
                  </svg>
                  {"Report period"}
                </span>
                <div className="field" data-fw="s">
                  <label className="field__label" htmlFor="an-01-from">{"From"}</label>
                  <input className="field__input" id="an-01-from" name="from" type="date" defaultValue={"2026-10-01"} />
                </div>
                <div className="field" data-fw="s">
                  <label className="field__label" htmlFor="an-01-to">{"To"}</label>
                  <input className="field__input" id="an-01-to" name="to" type="date" defaultValue={"2026-10-22"} />
                </div>
                <div className="field" data-fw="x">
                  <label className="field__label" htmlFor="an-01-fmt">{"Download as"}</label>
                  <div className="field__wrap">
                    <select className="field__input field__input--select" id="an-01-fmt" name="format" defaultValue={"pdf"}>
                      <option value="pdf">{"PDF"}</option>
                      <option value="xlsx">{"Excel"}</option>
                      <option value="csv">{"CSV"}</option>
                    </select>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#chevron-down" />
                    </svg>
                  </div>
                </div>
                <button className="btn" type="submit">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#play" />
                  </svg>
                  {"Show"}
                </button>
                <button className="btn" type="submit" name="download" value="1">
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#download" />
                  </svg>
                  {"Download"}
                </button>
                <span className="rpb__h">{"The period applies to every report you open from this page."}</span>
              </form>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm pm--v" id="v-all" />
                <i className="pm pm--v" id="v-fav" />
                <i className="pm pm--v" id="v-front-office" />
                <i className="pm pm--v" id="v-reservations" />
                <i className="pm pm--v" id="v-revenue" />
                <i className="pm pm--v" id="v-housekeeping" />
                <i className="pm pm--v" id="v-engineering" />
                <i className="pm pm--v" id="v-f&b" />
                <i className="pm pm--v" id="v-banquets" />
                <i className="pm pm--v" id="v-purchase-stores" />
                <i className="pm pm--v" id="v-finance" />
                <i className="pm pm--v" id="v-tax" />
                <i className="pm pm--v" id="v-hr" />
                <i className="pm pm--v" id="v-management" />
                <i className="pm pm--v" id="v-audit" />
              </div>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="sched-saved" />
              </div>
              <ul className="cc-kpis">
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"293"}</span>
                  <span className="cc-kpi__l">{"Reports you may run"}</span>
                  <span className="cc-kpi__s">{"of 299 registered"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"8"}</span>
                  <span className="cc-kpi__l">{"Favourites"}</span>
                  <span className="cc-kpi__s">{"starred by you"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"13"}</span>
                  <span className="cc-kpi__l">{"Categories"}</span>
                  <span className="cc-kpi__s">{"Front office … Audit"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"10"}</span>
                  <span className="cc-kpi__l">{"Active schedules"}</span>
                  <span className="cc-kpi__s">{"see AN-09"}</span>
                </li>
              </ul>
              <nav className="hv st-views" aria-label="Report categories">
                <a className="hv__v" href="#v-all" data-v="v-all">
                  <span>{"All"}</span>
                  <b className="num">{"299"}</b>
                </a>
                <a className="hv__v" href="#v-fav" data-v="v-fav">
                  <span>{"Favourites"}</span>
                  <b className="num">{"8"}</b>
                </a>
                <a className="hv__v" href="#v-front-office" data-v="v-front-office">
                  <span>{"Front office"}</span>
                  <b className="num">{"54"}</b>
                </a>
                <a className="hv__v" href="#v-reservations" data-v="v-reservations">
                  <span>{"Reservations"}</span>
                  <b className="num">{"22"}</b>
                </a>
                <a className="hv__v" href="#v-revenue" data-v="v-revenue">
                  <span>{"Revenue"}</span>
                  <b className="num">{"10"}</b>
                </a>
                <a className="hv__v" href="#v-housekeeping" data-v="v-housekeeping">
                  <span>{"Housekeeping"}</span>
                  <b className="num">{"73"}</b>
                </a>
                <a className="hv__v" href="#v-engineering" data-v="v-engineering">
                  <span>{"Engineering"}</span>
                  <b className="num">{"14"}</b>
                </a>
                <a className="hv__v" href="#v-f&b" data-v="v-f&b">
                  <span>{"F&B"}</span>
                  <b className="num">{"19"}</b>
                </a>
                <a className="hv__v" href="#v-banquets" data-v="v-banquets">
                  <span>{"Banquets"}</span>
                  <b className="num">{"14"}</b>
                </a>
                <a className="hv__v" href="#v-purchase-stores" data-v="v-purchase-stores">
                  <span>{"Purchase & stores"}</span>
                  <b className="num">{"20"}</b>
                </a>
                <a className="hv__v" href="#v-finance" data-v="v-finance">
                  <span>{"Finance"}</span>
                  <b className="num">{"34"}</b>
                </a>
                <a className="hv__v" href="#v-tax" data-v="v-tax">
                  <span>{"Tax"}</span>
                  <b className="num">{"11"}</b>
                </a>
                <a className="hv__v" href="#v-hr" data-v="v-hr">
                  <span>{"HR"}</span>
                  <b className="num">{"16"}</b>
                </a>
                <a className="hv__v" href="#v-management" data-v="v-management">
                  <span>{"Management"}</span>
                  <b className="num">{"10"}</b>
                </a>
                <a className="hv__v" href="#v-audit" data-v="v-audit">
                  <span>{"Audit"}</span>
                  <b className="num">{"2"}</b>
                </a>
              </nav>
              <form action="/analytics-and-reports/an-01-report-library/" method="get" data-code="AN-01-form">
                <section className="fd-sec cc-sec" data-code="AN-01-cards">
                  <h2 className="fd-sec__t">{"Reports"}</h2>
                  <p className="fd-sec__d">{"Every report of every module in one place, by category. The name opens the report in its own module; Open runs it in the viewer with filters, saved views and export. The star adds it to your favourites."}</p>
                  <div className="an-cards">
                    <article className="an-card gl-row rg-front-office" data-code="AN-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AN-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AN-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/analytics-and-reports/an-r04-guest-statistics"}>{"Guest statistics"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Analytics & Reports"}</p>
                      <p className="an-card__m">{"Analytics & Reports · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o01-registration-card"}>{"Registration card"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o02-guest-bill"}>{"Guest bill (folio) – interim / final"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o03-gst-tax-invoice"}>{"GST tax invoice (B2B / B2C)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o04-credit-note"}>{"Credit note"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o05-payment-receipt"}>{"Payment receipt"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o06-paid-out-voucher"}>{"Paid-out voucher"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o07-encashment-certificate"}>{"Encashment certificate"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o08-form-iii-data-sheet"}>{"Form III data sheet"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O09-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O09"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O09" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o09-message-slip-wake-up-list"}>{"Message slip / wake-up list"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O10-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O10"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O10" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o10-guest-messages"}>{"Welcome / thank-you / feedback messages"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O11-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O11"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O11" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o11-lost-found-tag-claim-slip"}>{"Lost & found tag and claim slip"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O12-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O12"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O12" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o12-luggage-tag-receipt"}>{"Luggage tag and receipt"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O13-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O13"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O13" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o13-locker-agreement"}>{"Locker agreement / receipt"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O14-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O14"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O14" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o14-visitor-pass"}>{"Visitor pass"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O15-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O15"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O15" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o15-transport-tour-slip"}>{"Transport / tour booking slip"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O16-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O16"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O16" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o16-advance-receipt"}>{"Advance receipt (with GST on advance)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O17-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O17"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O17" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o17-cash-handover-slip"}>{"Cash handover slip"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-O18-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-O18"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-O18" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk/fd-o18-shift-handover-log"}>{"Shift handover log print"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk"}</p>
                      <p className="an-card__m">{"Front Desk · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R01">{"Arrivals / in-house / departures lists"}</a>
                      </h3>
                      <p className="an-card__d">{"Guest, room, dates, pax, rate, balance, requests"}</p>
                      <p className="an-card__m">{"Front Desk · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R02">{"Room status"}</a>
                      </h3>
                      <p className="an-card__d">{"Room, status, guest, departure, remarks"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R03">{"VIP & special requests / expected arrivals"}</a>
                      </h3>
                      <p className="an-card__d">{"VIP level, requests, pre-assigned room"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R04">{"Form III pending (arrival and departure)"}</a>
                      </h3>
                      <p className="an-card__d">{"Guest, passport, due by, status"}</p>
                      <p className="an-card__m">{"Front Desk · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R05">{"Cashier shift"}</a>
                      </h3>
                      <p className="an-card__d">{"Opening, collections by mode, refunds, paid-outs, exchange, expected vs counted"}</p>
                      <p className="an-card__m">{"Front Desk · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R06">{"Payments by mode"}</a>
                      </h3>
                      <p className="an-card__d">{"Receipts with references"}</p>
                      <p className="an-card__m">{"Front Desk · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R07">{"Allowances, voids & re-opens (with approver)"}</a>
                      </h3>
                      <p className="an-card__d">{"Item, amount, reason, approver"}</p>
                      <p className="an-card__m">{"Front Desk · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R08">{"Paid-outs"}</a>
                      </h3>
                      <p className="an-card__d">{"Guest, type, amount, receipt"}</p>
                      <p className="an-card__m">{"Front Desk · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R09-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R09"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R09" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R09">{"High balance / guest ledger"}</a>
                      </h3>
                      <p className="an-card__d">{"In-house balances, limits, pre-auth"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R10-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R10"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R10" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R10">{"Company bills"}</a>
                      </h3>
                      <p className="an-card__d">{"Transfers, amounts, status"}</p>
                      <p className="an-card__m">{"Front Desk · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R11-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R11"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R11" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R11">{"No-show & cancellation (front desk)"}</a>
                      </h3>
                      <p className="an-card__d">{"Booking, policy, charge"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office rg-fav" data-code="FD-R12-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R12"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R12" defaultChecked={true} />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R12">{"Flash report (occupancy, ADR, RevPAR, revenue)"}</a>
                      </h3>
                      <p className="an-card__d">{"Occupancy %, rooms sold, ADR, RevPAR, revenue by department, collections, arrivals / departures tomorrow"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R13-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R13"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R13" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R13">{"Night audit pack"}</a>
                      </h3>
                      <p className="an-card__d">{"Trial balance of postings by charge code, taxes, payments, guest ledger movement"}</p>
                      <p className="an-card__m">{"Front Desk · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R14-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R14"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R14" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R14">{"Lost & found register"}</a>
                      </h3>
                      <p className="an-card__d">{"Item, place, finder, status"}</p>
                      <p className="an-card__m">{"Front Desk · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R15-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R15"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R15" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R15">{"Visitor register"}</a>
                      </h3>
                      <p className="an-card__d">{"Visitor, ID, room, in / out"}</p>
                      <p className="an-card__m">{"Front Desk · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R16-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R16"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R16" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R16">{"Log book / handover report"}</a>
                      </h3>
                      <p className="an-card__d">{"Entries, owners, status"}</p>
                      <p className="an-card__m">{"Front Desk · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R17-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R17"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R17" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R17">{"Police / guest register (all guests)"}</a>
                      </h3>
                      <p className="an-card__d">{"ID type, masked number, address, nationality, arrival / departure"}</p>
                      <p className="an-card__m">{"Front Desk · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R18-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R18"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R18" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R18">{"Rate variance / rate check"}</a>
                      </h3>
                      <p className="an-card__d">{"Room, booked vs posted rate, zero-rate, complimentary, house use"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R20-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R20"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R20" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R20">{"Credit transaction register"}</a>
                      </h3>
                      <p className="an-card__d">{"Charges moved to credit, approver"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R21-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R21"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R21" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R21">{"Advance deposit ledger"}</a>
                      </h3>
                      <p className="an-card__d">{"Deposits held, applied, refunded"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R22-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R22"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R22" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R22">{"Cash book"}</a>
                      </h3>
                      <p className="an-card__d">{"Opening, receipts, payments, handover, closing"}</p>
                      <p className="an-card__m">{"Front Desk · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R23-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R23"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R23" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R23">{"Concierge & transport"}</a>
                      </h3>
                      <p className="an-card__d">{"Bookings, vendor, price, cost"}</p>
                      <p className="an-card__m">{"Front Desk · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R24-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R24"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R24" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R24">{"Loyalty enrolments & stays"}</a>
                      </h3>
                      <p className="an-card__d">{"Member, tier, stays"}</p>
                      <p className="an-card__m">{"Front Desk · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R25-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R25"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R25" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R25">{"Account posting summary"}</a>
                      </h3>
                      <p className="an-card__d">{"Totals by finance account"}</p>
                      <p className="an-card__m">{"Front Desk · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R26-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R26"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R26" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R26">{"Room move & upgrade"}</a>
                      </h3>
                      <p className="an-card__d">{"From, to, reason, rate decision"}</p>
                      <p className="an-card__m">{"Front Desk · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FD-R27-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R27"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R27" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27">{"Requests & complaints with SLA"}</a>
                      </h3>
                      <p className="an-card__d">{"Counts, average time, overdue"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office rg-fav" data-code="FD-R28-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FD-R28"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FD-R28" defaultChecked={true} />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <a className="fd-link" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R28">{"Occupancy performance (by date / room type)"}</a>
                      </h3>
                      <p className="an-card__d">{"Occupancy %, room nights, ADR"}</p>
                      <p className="an-card__m">{"Front Desk · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FDS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FDS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FDS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk-setup/fds-o01-registration-card-template"}>{"Registration card template"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk Setup"}</p>
                      <p className="an-card__m">{"Front Desk Setup · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FDS-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FDS-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FDS-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk-setup/fds-o02-invoice-templates"}>{"Invoice templates (B2B / B2C)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk Setup"}</p>
                      <p className="an-card__m">{"Front Desk Setup · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FDS-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FDS-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FDS-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk-setup/fds-o03-credit-note-template"}>{"Credit note template"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk Setup"}</p>
                      <p className="an-card__m">{"Front Desk Setup · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FDS-O04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FDS-O04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FDS-O04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk-setup/fds-o04-receipt-voucher-templates"}>{"Receipt, advance receipt and paid-out voucher templates"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk Setup"}</p>
                      <p className="an-card__m">{"Front Desk Setup · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FDS-O05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FDS-O05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FDS-O05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk-setup/fds-o05-cashier-shift-report-template"}>{"Cashier shift report template"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk Setup"}</p>
                      <p className="an-card__m">{"Front Desk Setup · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FDS-O06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FDS-O06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FDS-O06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk-setup/fds-o06-settings-audit-report"}>{"Settings audit report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk Setup"}</p>
                      <p className="an-card__m">{"Front Desk Setup · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-front-office" data-code="FDS-O07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FDS-O07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FDS-O07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/front-desk-setup/fds-o07-encashment-certificate-template"}>{"Encashment certificate template"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Front Desk Setup"}</p>
                      <p className="an-card__m">{"Front Desk Setup · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Arrivals list"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Departures list"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Expected in-house"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Room availability forecast"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Occupancy forecast"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Pickup report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Booking pace vs last year"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Bookings by source / segment / channel"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R09-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R09"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R09" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Company / agent production"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R10-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R10"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R10" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Cancellation report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R11-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R11"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R11" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"No-show report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R12-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R12"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R12" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Tentative / auto release"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R13-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R13"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R13" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Deposit report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R14-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R14"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R14" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Payment receipts register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R15-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R15"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R15" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Refund report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R16-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R16"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R16" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Enquiry conversion"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R17-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R17"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R17" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Waitlist report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R18-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R18"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R18" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Group block & pickup"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R19-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R19"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R19" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Rate override & discount"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R20-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R20"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R20" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"VIP & special requests"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R21-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R21"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R21" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Reservation audit report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-reservations" data-code="RS-R22-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RS-R22"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RS-R22" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/reservation/rs-21-reservation-reports"}>{"Channel booking report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Reservations"}</p>
                      <p className="an-card__m">{"Reservations · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-revenue" data-code="RV-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RV-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RV-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/revenue-management/rv-o01-daily-revenue-briefing"}>{"Daily Revenue Briefing"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Revenue Management"}</p>
                      <p className="an-card__m">{"Revenue Management · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-revenue rg-fav" data-code="RV-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RV-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RV-R01" defaultChecked={true} />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/revenue-management/rv-r01-daily-kpi-report"}>{"Daily KPI Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Revenue Management"}</p>
                      <p className="an-card__m">{"Revenue Management · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-revenue" data-code="RV-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RV-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RV-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/revenue-management/rv-r02-segment-and-channel-mix"}>{"Segment and Channel Mix"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Revenue Management"}</p>
                      <p className="an-card__m">{"Revenue Management · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-revenue" data-code="RV-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RV-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RV-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/revenue-management/rv-r03-pickup-report"}>{"Pickup Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Revenue Management"}</p>
                      <p className="an-card__m">{"Revenue Management · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-revenue" data-code="RV-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RV-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RV-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/revenue-management/rv-r04-pace-report"}>{"Pace Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Revenue Management"}</p>
                      <p className="an-card__m">{"Revenue Management · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-revenue" data-code="RV-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RV-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RV-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/revenue-management/rv-r05-forecast-vs-actual-accuracy"}>{"Forecast vs Actual Accuracy"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Revenue Management"}</p>
                      <p className="an-card__m">{"Revenue Management · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-revenue" data-code="RV-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RV-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RV-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/revenue-management/rv-r06-rate-change-history"}>{"Rate Change History"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Revenue Management"}</p>
                      <p className="an-card__m">{"Revenue Management · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-revenue" data-code="RV-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RV-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RV-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/revenue-management/rv-r07-competitor-position"}>{"Competitor Position"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Revenue Management"}</p>
                      <p className="an-card__m">{"Revenue Management · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-revenue" data-code="RV-R08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RV-R08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RV-R08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/revenue-management/rv-r08-denials-and-regrets"}>{"Denials and Regrets"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Revenue Management"}</p>
                      <p className="an-card__m">{"Revenue Management · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-revenue" data-code="RV-R09-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RV-R09"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RV-R09" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/revenue-management/rv-r09-top-accounts-production"}>{"Top Accounts Production"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Revenue Management"}</p>
                      <p className="an-card__m">{"Revenue Management · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-o01-attendant-task-sheet"}>{"Attendant task sheets"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-o02-turndown-sheet"}>{"Turndown sheet"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-o03-room-status-sheet"}>{"Room status sheet"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-O04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-O04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-O04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-o04-discrepancy-report"}>{"Discrepancy report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-O05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-O05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-O05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-o05-out-of-order-notice"}>{"Out of order notice"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-O06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-O06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-O06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-o06-inspection-report"}>{"Inspection report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-O07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-O07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-O07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-o07-public-area-checklist"}>{"Public area checklist"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping rg-fav" data-code="HK-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R01" defaultChecked={true} />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r01-room-status-report"}>{"Room status report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r02-attendant-productivity"}>{"Attendant productivity"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r03-inspection-scores-and-failures"}>{"Inspection scores & failures"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r04-discrepancy-history"}>{"Discrepancy history"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r05-ooo-oos-history"}>{"OOO / OOS history"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r06-cleaning-time-analysis"}>{"Cleaning time analysis"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r07-housekeeping-requests-sla"}>{"Housekeeping requests SLA"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r08-public-area-compliance"}>{"Public area compliance"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R09-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R09"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R09" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r09-deep-cleaning-due-overdue"}>{"Deep cleaning due / overdue"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R10-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R10"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R10" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r10-staffing-forecast"}>{"Staffing forecast"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R11-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R11"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R11" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r11-dnd-and-refused-service"}>{"DND and refused service"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HK-R13-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HK-R13"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HK-R13" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping/hk-r13-room-history"}>{"Room history"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Housekeeping"}</p>
                      <p className="an-card__m">{"Housekeeping · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HKS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HKS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HKS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping-setup/hks-o01-settings-audit-report"}>{"Settings Audit Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Housekeeping Setup"}</p>
                      <p className="an-card__m">{"Housekeeping Setup · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HKS-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HKS-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HKS-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping-setup/hks-o02-checklist-print"}>{"Checklist Print"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Housekeeping Setup"}</p>
                      <p className="an-card__m">{"Housekeeping Setup · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="HKS-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HKS-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HKS-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/housekeeping-setup/hks-o03-area-qr-labels"}>{"Area QR Labels"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Housekeeping Setup"}</p>
                      <p className="an-card__m">{"Housekeeping Setup · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-o01-laundry-bill-voucher"}>{"Laundry Bill / Voucher"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-o02-bag-and-item-tags"}>{"Bag and Item Tags"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-o03-vendor-challan"}>{"Vendor Challan"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-O04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-O04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-O04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-o04-delivery-slip"}>{"Delivery Slip"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-O05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-O05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-O05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-o05-linen-exchange-slip"}>{"Linen Exchange Slip"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-O06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-O06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-O06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-o06-guest-message"}>{"Guest Message"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-r01-guest-laundry-sales"}>{"Guest laundry sales"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-r02-turnaround-and-late-deliveries"}>{"Turnaround and late deliveries"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-r03-not-billed-late-charges"}>{"Not billed / late charges"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-r04-rewash-and-damage"}>{"Rewash and damage"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-r05-house-linen-processed"}>{"House linen processed"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-r06-vendor-challans"}>{"Vendor challans"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-r07-machine-utilisation"}>{"Machine utilisation"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-R08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-R08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-R08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-r08-chemical-consumption"}>{"Chemical consumption"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LA-R09-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LA-R09"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LA-R09" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry/la-r09-cost-per-kg"}>{"Cost per kg"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Laundry"}</p>
                      <p className="an-card__m">{"Laundry · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LAS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LAS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LAS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry-setup/las-o01-guest-laundry-list-room-form"}>{"Guest laundry list"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Laundry Setup"}</p>
                      <p className="an-card__m">{"Laundry Setup · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LAS-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LAS-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LAS-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/laundry-setup/las-o02-price-list"}>{"Price list"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Laundry Setup"}</p>
                      <p className="an-card__m">{"Laundry Setup · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LF-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LF-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LF-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/lost-and-found/lf-o01-item-tag"}>{"Item tag"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Lost & Found"}</p>
                      <p className="an-card__m">{"Lost & Found · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LF-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LF-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LF-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/lost-and-found/lf-o02-claim-release-slip"}>{"Claim / release slip"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Lost & Found"}</p>
                      <p className="an-card__m">{"Lost & Found · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LF-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LF-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LF-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/lost-and-found/lf-o03-disposal-certificate"}>{"Disposal certificate"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Lost & Found"}</p>
                      <p className="an-card__m">{"Lost & Found · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LF-O04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LF-O04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LF-O04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/lost-and-found/lf-o04-guest-message"}>{"Guest message"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Lost & Found"}</p>
                      <p className="an-card__m">{"Lost & Found · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LF-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LF-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LF-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/lost-and-found/lf-r01-lost-and-found-register"}>{"Lost & found register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Lost & Found"}</p>
                      <p className="an-card__m">{"Lost & Found · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LF-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LF-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LF-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/lost-and-found/lf-r02-returned-and-shipped"}>{"Returned and shipped"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Lost & Found"}</p>
                      <p className="an-card__m">{"Lost & Found · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LF-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LF-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LF-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/lost-and-found/lf-r03-disposal-register"}>{"Disposal register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Lost & Found"}</p>
                      <p className="an-card__m">{"Lost & Found · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LF-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LF-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LF-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/lost-and-found/lf-r04-lost-reports-and-match-rate"}>{"Lost reports and match rate"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Lost & Found"}</p>
                      <p className="an-card__m">{"Lost & Found · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LF-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LF-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LF-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/lost-and-found/lf-r05-safe-access-log"}>{"Safe access log"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Lost & Found"}</p>
                      <p className="an-card__m">{"Lost & Found · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LFS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LFS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LFS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/lost-and-found-setup/lfs-o01-retention-policy-sheet"}>{"Retention policy sheet"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Lost & Found Setup"}</p>
                      <p className="an-card__m">{"Lost & Found Setup · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LN-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LN-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LN-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/linen-and-amenities/ln-o01-pantry-issue-slip"}>{"Pantry issue slip"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Linen & Amenities"}</p>
                      <p className="an-card__m">{"Linen & Amenities · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LN-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LN-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LN-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/linen-and-amenities/ln-o02-count-sheet"}>{"Count sheet"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Linen & Amenities"}</p>
                      <p className="an-card__m">{"Linen & Amenities · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LN-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LN-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LN-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/linen-and-amenities/ln-o03-discard-note"}>{"Discard note"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Linen & Amenities"}</p>
                      <p className="an-card__m">{"Linen & Amenities · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LN-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LN-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LN-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/linen-and-amenities/ln-r01-linen-inventory-and-par"}>{"Linen inventory and par"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Linen & Amenities"}</p>
                      <p className="an-card__m">{"Linen & Amenities · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LN-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LN-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LN-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/linen-and-amenities/ln-r02-linen-loss-and-discard"}>{"Linen loss and discard"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Linen & Amenities"}</p>
                      <p className="an-card__m">{"Linen & Amenities · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LN-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LN-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LN-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/linen-and-amenities/ln-r03-count-variance"}>{"Count variance"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Linen & Amenities"}</p>
                      <p className="an-card__m">{"Linen & Amenities · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LN-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LN-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LN-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/linen-and-amenities/ln-r05-pantry-issues"}>{"Pantry issues"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Linen & Amenities"}</p>
                      <p className="an-card__m">{"Linen & Amenities · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LN-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LN-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LN-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/linen-and-amenities/ln-r06-uniform-issue-and-replacement"}>{"Uniform issue and replacement"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Linen & Amenities"}</p>
                      <p className="an-card__m">{"Linen & Amenities · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LN-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LN-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LN-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/linen-and-amenities/ln-r07-linen-and-amenity-cost"}>{"Linen and amenity cost"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Linen & Amenities"}</p>
                      <p className="an-card__m">{"Linen & Amenities · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="LNS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"LNS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_LNS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/linen-and-amenities-setup/lns-o01-par-sheet"}>{"Par sheet"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Linen Setup"}</p>
                      <p className="an-card__m">{"Linen Setup · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MB-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MB-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MB-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar/mb-o01-minibar-voucher"}>{"Minibar voucher"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Minibar"}</p>
                      <p className="an-card__m">{"Minibar · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MB-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MB-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MB-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar/mb-o02-cart-pick-list"}>{"Cart pick list"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Minibar"}</p>
                      <p className="an-card__m">{"Minibar · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MB-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MB-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MB-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar/mb-o03-count-sheet"}>{"Count sheet"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Minibar"}</p>
                      <p className="an-card__m">{"Minibar · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MB-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MB-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MB-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar/mb-r01-minibar-sales"}>{"Minibar sales"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Minibar"}</p>
                      <p className="an-card__m">{"Minibar · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MB-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MB-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MB-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar/mb-r02-late-charges-and-recovery"}>{"Late charges and recovery"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Minibar"}</p>
                      <p className="an-card__m">{"Minibar · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MB-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MB-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MB-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar/mb-r03-disputes-and-reversals"}>{"Disputes and reversals"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Minibar"}</p>
                      <p className="an-card__m">{"Minibar · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MB-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MB-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MB-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar/mb-r04-stock-and-variance"}>{"Stock and variance"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Minibar"}</p>
                      <p className="an-card__m">{"Minibar · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MB-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MB-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MB-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar/mb-r05-expiry-write-offs"}>{"Expiry write-offs"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Minibar"}</p>
                      <p className="an-card__m">{"Minibar · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MB-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MB-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MB-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar/mb-r06-departure-check-compliance"}>{"Departure check compliance"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Minibar"}</p>
                      <p className="an-card__m">{"Minibar · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MB-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MB-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MB-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar/mb-r07-minibar-cost"}>{"Minibar cost %"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Minibar"}</p>
                      <p className="an-card__m">{"Minibar · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MBS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MBS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MBS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar-setup/mbs-o01-minibar-menu-card"}>{"Minibar menu card"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Minibar Setup"}</p>
                      <p className="an-card__m">{"Minibar Setup · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-housekeeping" data-code="MBS-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MBS-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MBS-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/minibar-setup/mbs-o02-layout-chart"}>{"Layout chart"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Minibar Setup"}</p>
                      <p className="an-card__m">{"Minibar Setup · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-o01-job-card"}>{"Job card"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-o02-asset-qr-label"}>{"Asset QR label"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-o03-pm-checklist-sheet"}>{"PM checklist sheet"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-r01-work-orders-summary"}>{"Work orders summary"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-r02-open-and-overdue-work-orders"}>{"Open and overdue work orders"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-r03-guest-room-complaints"}>{"Guest room complaints"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-r04-pm-compliance"}>{"PM compliance"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-r06-utilities-consumption"}>{"Utilities consumption"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-r07-technician-productivity"}>{"Technician productivity"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-R08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-R08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-R08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-r08-contractor-and-amc"}>{"Contractor and AMC"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MT-R09-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MT-R09"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MT-R09" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-and-maintenance/mt-r09-compliance-status"}>{"Compliance status"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Engineering & Maintenance"}</p>
                      <p className="an-card__m">{"Engineering & Maintenance · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MTS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MTS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MTS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-setup/mts-o01-asset-and-location-qr-labels"}>{"Asset and location QR labels"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Engineering Setup"}</p>
                      <p className="an-card__m">{"Engineering Setup · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-engineering" data-code="MTS-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"MTS-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_MTS-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/engineering-setup/mts-o02-pm-plan-for-the-year"}>{"PM plan for the year"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Engineering Setup"}</p>
                      <p className="an-card__m">{"Engineering Setup · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="KT-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"KT-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_KT-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/kitchen-display/kt-o01-production-sheet"}>{"Production sheet"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Kitchen Display"}</p>
                      <p className="an-card__m">{"Kitchen Display · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="KT-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"KT-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_KT-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/kitchen-display/kt-r01-kitchen-ticket-times"}>{"Kitchen ticket times"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Kitchen Display"}</p>
                      <p className="an-card__m">{"Kitchen Display · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="KT-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"KT-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_KT-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/kitchen-display/kt-r02-re-fires-and-cancellations"}>{"Re-fires and cancellations"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Kitchen Display"}</p>
                      <p className="an-card__m">{"Kitchen Display · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="KT-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"KT-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_KT-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/kitchen-display/kt-r03-86-log"}>{"86 log"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Kitchen Display"}</p>
                      <p className="an-card__m">{"Kitchen Display · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-o01-kot-bot"}>{"KOT / BOT"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-o02-bill-gst-invoice"}>{"Bill (GST invoice)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-o03-shift-report"}>{"Shift report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-O04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-O04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-O04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-o04-room-service-tray-slip"}>{"Room service tray slip"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b rg-fav" data-code="RT-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-R01" defaultChecked={true} />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-r01-outlet-sales-summary"}>{"Outlet sales summary"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-r02-item-sales-menu-engineering"}>{"Item sales (menu engineering)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-r03-covers-and-average-check"}>{"Covers and average check"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-r04-voids-and-cancellations"}>{"Voids and cancellations"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-r05-discounts-and-complimentary"}>{"Discounts and complimentary"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-r06-not-billed-kots"}>{"Not-billed KOTs"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-R08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-R08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-R08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-r08-steward-performance"}>{"Steward performance"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-R09-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-R09"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-R09" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-r09-room-service-timing"}>{"Room service timing"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RT-R10-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RT-R10"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RT-R10" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos/rt-r10-gst-outlet-sales-register"}>{"GST outlet sales register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Restaurant POS"}</p>
                      <p className="an-card__m">{"Restaurant POS · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-f&b" data-code="RTS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"RTS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_RTS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/restaurant-pos-setup/rts-o01-printed-menu-export"}>{"Printed menu export"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Restaurant POS Setup"}</p>
                      <p className="an-card__m">{"Restaurant POS Setup · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-o01-proposal-quotation"}>{"Proposal / quotation"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-o02-contract"}>{"Contract"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-o03-banquet-event-order-beo"}>{"Banquet event order (BEO)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-O04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-O04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-O04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-o04-beo-change-notice"}>{"BEO change notice"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-O05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-O05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-O05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-o05-banquet-gst-invoice"}>{"Banquet GST invoice"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-r01-banquet-revenue"}>{"Banquet revenue"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-r02-pipeline-and-conversion"}>{"Pipeline and conversion"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-r03-venue-utilisation"}>{"Venue utilisation"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-r04-covers-and-average-spend"}>{"Covers and average spend"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-r05-advances-and-outstanding"}>{"Advances and outstanding"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-r06-events-this-week-beo-status"}>{"Events this week / BEO status"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-r07-cancellations"}>{"Cancellations"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQ-R08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQ-R08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQ-R08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events/bq-r08-sales-executive-performance"}>{"Sales executive performance"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Banquets & Events"}</p>
                      <p className="an-card__m">{"Banquets & Events · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-banquets" data-code="BQS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"BQS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_BQS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/banquets-and-events-setup/bqs-o01-banquet-kit"}>{"Banquet kit"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Banquets Setup"}</p>
                      <p className="an-card__m">{"Banquets Setup · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="PR-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"PR-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_PR-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/purchase/pr-o01-request-for-quotation"}>{"Request for Quotation"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Purchase"}</p>
                      <p className="an-card__m">{"Purchase · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="PR-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"PR-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_PR-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/purchase/pr-o02-purchase-order"}>{"Purchase Order PO-2026-00311"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Purchase"}</p>
                      <p className="an-card__m">{"Purchase · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="PR-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"PR-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_PR-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/purchase/pr-o03-comparative-statement"}>{"Comparative Statement"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Purchase"}</p>
                      <p className="an-card__m">{"Purchase · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="PR-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"PR-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_PR-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/purchase/pr-r01-purchase-register"}>{"Purchase Register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Purchase"}</p>
                      <p className="an-card__m">{"Purchase · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="PR-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"PR-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_PR-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/purchase/pr-r02-pending-prs-and-pos"}>{"Pending PRs and POs"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Purchase"}</p>
                      <p className="an-card__m">{"Purchase · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="PR-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"PR-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_PR-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/purchase/pr-r03-price-trend"}>{"Price Trend"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Purchase"}</p>
                      <p className="an-card__m">{"Purchase · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="PR-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"PR-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_PR-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/purchase/pr-r04-vendor-performance"}>{"Vendor Performance"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Purchase"}</p>
                      <p className="an-card__m">{"Purchase · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="PR-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"PR-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_PR-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/purchase/pr-r05-spend-vs-budget"}>{"Spend vs Budget"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Purchase"}</p>
                      <p className="an-card__m">{"Purchase · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="PR-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"PR-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_PR-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/purchase/pr-r06-approval-turnaround"}>{"Approval Turnaround"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Purchase"}</p>
                      <p className="an-card__m">{"Purchase · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="PR-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"PR-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_PR-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/purchase/pr-r07-rate-contract-compliance"}>{"Rate Contract Compliance"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Purchase"}</p>
                      <p className="an-card__m">{"Purchase · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="ST-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ST-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ST-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/stores-and-inventory/st-o01-grn"}>{"Goods Received Note GRN-2026-00287"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Stores & Inventory"}</p>
                      <p className="an-card__m">{"Stores & Inventory · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="ST-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ST-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ST-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/stores-and-inventory/st-o02-issue-slip"}>{"Issue Slip SI-2026-0391"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Stores & Inventory"}</p>
                      <p className="an-card__m">{"Stores & Inventory · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="ST-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ST-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ST-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/stores-and-inventory/st-o03-return-to-vendor-note"}>{"Return to Vendor Note RTV-2026-0012"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Stores & Inventory"}</p>
                      <p className="an-card__m">{"Stores & Inventory · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="ST-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ST-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ST-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/stores-and-inventory/st-r01-stock-summary"}>{"Stock Summary"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Stores & Inventory"}</p>
                      <p className="an-card__m">{"Stores & Inventory · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="ST-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ST-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ST-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/stores-and-inventory/st-r02-consumption-by-department"}>{"Consumption by Department"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Stores & Inventory"}</p>
                      <p className="an-card__m">{"Stores & Inventory · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="ST-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ST-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ST-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/stores-and-inventory/st-r03-grn-register"}>{"GRN Register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Stores & Inventory"}</p>
                      <p className="an-card__m">{"Stores & Inventory · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="ST-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ST-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ST-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/stores-and-inventory/st-r04-expiry-and-slow-moving"}>{"Expiry and Slow-moving"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Stores & Inventory"}</p>
                      <p className="an-card__m">{"Stores & Inventory · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="ST-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ST-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ST-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/stores-and-inventory/st-r05-variance-verification"}>{"Variance (Verification)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Stores & Inventory"}</p>
                      <p className="an-card__m">{"Stores & Inventory · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="ST-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ST-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ST-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/stores-and-inventory/st-r06-reorder-report"}>{"Reorder Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Stores & Inventory"}</p>
                      <p className="an-card__m">{"Stores & Inventory · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-purchase-stores" data-code="ST-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ST-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ST-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/stores-and-inventory/st-r07-stores-cash-book-report"}>{"Stores Cash Book Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Stores & Inventory"}</p>
                      <p className="an-card__m">{"Stores & Inventory · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AC-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AC-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AC-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger/ac-o01-voucher-print"}>{"Voucher Print"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of General Ledger"}</p>
                      <p className="an-card__m">{"General Ledger · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AC-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AC-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AC-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger/ac-o02-ledger-trial-balance-prints"}>{"Ledger / Trial Balance Prints"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of General Ledger"}</p>
                      <p className="an-card__m">{"General Ledger · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AC-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AC-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AC-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger/ac-o03-fixed-asset-schedule"}>{"Fixed Asset Schedule"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of General Ledger"}</p>
                      <p className="an-card__m">{"General Ledger · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AC-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AC-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AC-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger/ac-r01-trial-balance"}>{"Trial Balance Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of General Ledger"}</p>
                      <p className="an-card__m">{"General Ledger · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AC-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AC-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AC-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger/ac-r02-general-ledger"}>{"General Ledger Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of General Ledger"}</p>
                      <p className="an-card__m">{"General Ledger · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AC-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AC-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AC-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger/ac-r03-day-cash-bank-books"}>{"Day, Cash and Bank Books"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of General Ledger"}</p>
                      <p className="an-card__m">{"General Ledger · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AC-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AC-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AC-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger/ac-r04-department-revenue-and-expense"}>{"Department Revenue and Expense (USALI)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of General Ledger"}</p>
                      <p className="an-card__m">{"General Ledger · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AC-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AC-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AC-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger/ac-r05-suspense-and-unmapped"}>{"Suspense and Unmapped"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of General Ledger"}</p>
                      <p className="an-card__m">{"General Ledger · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AC-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AC-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AC-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger/ac-r06-fixed-asset-register-and-depreciation"}>{"Fixed Asset Register and Depreciation"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of General Ledger"}</p>
                      <p className="an-card__m">{"General Ledger · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AC-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AC-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AC-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger/ac-r07-voucher-register-with-approvals"}>{"Voucher Register with Approvals"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of General Ledger"}</p>
                      <p className="an-card__m">{"General Ledger · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="ACS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"ACS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_ACS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/general-ledger-setup/acs-o01-chart-of-accounts-print"}>{"Chart of Accounts (print)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of General Ledger Setup"}</p>
                      <p className="an-card__m">{"General Ledger Setup · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="AN-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AN-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AN-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/analytics-and-reports/an-r05-collections-and-outstanding"}>{"Collections and outstanding"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Analytics & Reports"}</p>
                      <p className="an-card__m">{"Analytics & Reports · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="CC-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"CC-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_CC-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/cost-control/cc-o01-recipe-card"}>{"Recipe Card – Karimeen pollichathu"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Cost Control"}</p>
                      <p className="an-card__m">{"Cost Control · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="CC-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"CC-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_CC-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/cost-control/cc-r01-daily-fandb-cost"}>{"Daily F&B Cost Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Cost Control"}</p>
                      <p className="an-card__m">{"Cost Control · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="CC-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"CC-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_CC-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/cost-control/cc-r02-monthly-fandb-cost"}>{"Monthly F&B Cost Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Cost Control"}</p>
                      <p className="an-card__m">{"Cost Control · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="CC-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"CC-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_CC-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/cost-control/cc-r03-consumption-variance"}>{"Consumption Variance Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Cost Control"}</p>
                      <p className="an-card__m">{"Cost Control · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="CC-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"CC-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_CC-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/cost-control/cc-r04-beverage-variance"}>{"Beverage Variance Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Cost Control"}</p>
                      <p className="an-card__m">{"Cost Control · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="CC-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"CC-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_CC-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/cost-control/cc-r05-wastage-and-staff-meals"}>{"Wastage and Staff Meals Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Cost Control"}</p>
                      <p className="an-card__m">{"Cost Control · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="CC-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"CC-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_CC-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/cost-control/cc-r06-menu-engineering"}>{"Menu Engineering Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Cost Control"}</p>
                      <p className="an-card__m">{"Cost Control · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="CC-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"CC-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_CC-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/cost-control/cc-r07-expense-vs-budget"}>{"Expense vs Budget Report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Cost Control"}</p>
                      <p className="an-card__m">{"Cost Control · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-o01-statement-of-account"}>{"Statement of Account – Infopark Tech Solutions"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-o02-receipt"}>{"Receipt"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-o03-debit-note"}>{"Debit Note"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-O04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-O04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-O04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-o04-payment-advice"}>{"Payment Advice"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-O05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-O05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-O05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-o05-bank-reconciliation-statement"}>{"Bank Reconciliation Statement"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-r01-debtor-ageing"}>{"Debtor Ageing"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance rg-fav" data-code="FN-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-R02" defaultChecked={true} />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-r02-collections"}>{"Collections"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-r03-city-ledger-transfers"}>{"City Ledger Transfers"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-r04-creditor-ageing"}>{"Creditor Ageing"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-r05-bills-passed-and-pending"}>{"Bills Passed / Pending"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-r06-payments-register"}>{"Payments Register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-r07-bank-book-and-brs"}>{"Bank Book and BRS"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-R08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-R08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-R08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-r08-petty-cash-register"}>{"Petty Cash Register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-finance" data-code="FN-R09-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"FN-R09"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_FN-R09" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/receivables-payables-and-banking/fn-r09-cash-flow-forecast"}>{"Cash Flow Forecast"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Receivables, Payables & Banking"}</p>
                      <p className="an-card__m">{"Receivables, Payables & Banking · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TX-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TX-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TX-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-and-compliance/tx-o01-gstr-1-json-excel"}>{"GSTR-1 JSON / Excel"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Tax & Compliance"}</p>
                      <p className="an-card__m">{"Tax & Compliance · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TX-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TX-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TX-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-and-compliance/tx-o02-26q-24q-return-data"}>{"26Q / 24Q Return Data"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Tax & Compliance"}</p>
                      <p className="an-card__m">{"Tax & Compliance · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TX-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TX-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TX-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-and-compliance/tx-o03-itc-mismatch-letter"}>{"ITC Mismatch Letter"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Tax & Compliance"}</p>
                      <p className="an-card__m">{"Tax & Compliance · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TX-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TX-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TX-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-and-compliance/tx-r01-gst-outward-summary-by-rate-and-sac"}>{"GST Outward Summary by Rate and SAC"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Tax & Compliance"}</p>
                      <p className="an-card__m">{"Tax & Compliance · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TX-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TX-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TX-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-and-compliance/tx-r02-gst-inward-and-itc"}>{"GST Inward and ITC"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Tax & Compliance"}</p>
                      <p className="an-card__m">{"Tax & Compliance · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TX-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TX-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TX-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-and-compliance/tx-r03-hsn-sac-summary"}>{"HSN / SAC Summary"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Tax & Compliance"}</p>
                      <p className="an-card__m">{"Tax & Compliance · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TX-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TX-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TX-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-and-compliance/tx-r04-e-invoice-exceptions"}>{"E-invoice Exceptions"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Tax & Compliance"}</p>
                      <p className="an-card__m">{"Tax & Compliance · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TX-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TX-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TX-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-and-compliance/tx-r05-tds-deducted-and-deposited"}>{"TDS Deducted and Deposited"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Tax & Compliance"}</p>
                      <p className="an-card__m">{"Tax & Compliance · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TX-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TX-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TX-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-and-compliance/tx-r06-tds-receivable-reconciliation"}>{"TDS Receivable Reconciliation"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Tax & Compliance"}</p>
                      <p className="an-card__m">{"Tax & Compliance · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TX-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TX-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TX-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-and-compliance/tx-r07-gst-ledger-vs-register-reconciliation"}>{"GST Ledger vs Register Reconciliation"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Tax & Compliance"}</p>
                      <p className="an-card__m">{"Tax & Compliance · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-tax" data-code="TXS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"TXS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_TXS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/tax-setup/txs-o01-tax-configuration-summary"}>{"Tax Configuration Summary"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Tax Setup"}</p>
                      <p className="an-card__m">{"Tax Setup · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-o01-payslip"}>{"Payslip – Meera Nathan"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-o02-bank-salary-file"}>{"Bank Salary File"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-O03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-O03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-O03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-o03-letters"}>{"Letters"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-O04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-O04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-O04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-o04-statutory-files"}>{"Statutory Files"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-O05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-O05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-O05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-o05-form-16-data"}>{"Form 16 Data"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-r01-headcount-and-attrition"}>{"Headcount and Attrition"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-r02-attendance-and-absenteeism"}>{"Attendance and Absenteeism"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-r03-overtime"}>{"Overtime"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-r04-leave-balances"}>{"Leave Balances"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-R05-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-R05"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-R05" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-r05-payroll-register"}>{"Payroll Register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-r06-salary-cost-by-department"}>{"Salary Cost by Department (USALI)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-r07-statutory-register"}>{"Statutory Register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-R08-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-R08"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-R08" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-r08-advances-outstanding"}>{"Advances Outstanding"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-R09-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-R09"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-R09" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-r09-document-expiry"}>{"Document Expiry"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HR-R10-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HR-R10"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HR-R10" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll/hr-r10-joiners-and-exits"}>{"Joiners and Exits"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of HR & Payroll"}</p>
                      <p className="an-card__m">{"HR & Payroll · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-hr" data-code="HRS-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"HRS-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_HRS-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/hr-and-payroll-setup/hrs-o01-salary-structure-sheet"}>{"Salary Structure Sheet"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of HR & Payroll Setup"}</p>
                      <p className="an-card__m">{"HR & Payroll Setup · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-management" data-code="AN-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AN-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AN-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/analytics-and-reports/an-o01-flash-report"}>{"Flash report (print)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Analytics & Reports"}</p>
                      <p className="an-card__m">{"Analytics & Reports · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-management" data-code="AN-O02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AN-O02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AN-O02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/analytics-and-reports/an-o02-manager-s-report"}>{"Manager's report (print)"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Analytics & Reports"}</p>
                      <p className="an-card__m">{"Analytics & Reports · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-management rg-fav" data-code="AN-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AN-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AN-R01" defaultChecked={true} />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/analytics-and-reports/an-r01-flash-report"}>{"Flash report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Analytics & Reports"}</p>
                      <p className="an-card__m">{"Analytics & Reports · last run 3 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-management rg-fav" data-code="AN-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AN-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AN-R02" defaultChecked={true} />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/analytics-and-reports/an-r02-manager-s-report"}>{"Manager's report"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Analytics & Reports"}</p>
                      <p className="an-card__m">{"Analytics & Reports · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-management" data-code="AN-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AN-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AN-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/analytics-and-reports/an-r03-statistics"}>{"Statistics"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Analytics & Reports"}</p>
                      <p className="an-card__m">{"Analytics & Reports · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-management" data-code="DA-O01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"DA-O01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_DA-O01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/dashboards-and-approvals/da-o01-management-briefing"}>{"Management Briefing"}</Link>
                      </h3>
                      <p className="an-card__d">{"Output of Dashboards & Approvals"}</p>
                      <p className="an-card__m">{"Dashboards & Approvals · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-management" data-code="DA-R01-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"DA-R01"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_DA-R01" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/dashboards-and-approvals/da-r01-approval-register"}>{"Approval Register"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Dashboards & Approvals"}</p>
                      <p className="an-card__m">{"Dashboards & Approvals · last run last week"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-management" data-code="DA-R02-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"DA-R02"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_DA-R02" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/dashboards-and-approvals/da-r02-approval-turnaround"}>{"Approval Turnaround"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Dashboards & Approvals"}</p>
                      <p className="an-card__m">{"Dashboards & Approvals · last run never run by me"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-management" data-code="DA-R03-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"DA-R03"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_DA-R03" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/dashboards-and-approvals/da-r03-overrides-and-exceptions"}>{"Overrides and Exceptions"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Dashboards & Approvals"}</p>
                      <p className="an-card__m">{"Dashboards & Approvals · last run today 07:30"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-management" data-code="DA-R04-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"DA-R04"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_DA-R04" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/dashboards-and-approvals/da-r04-alerts-summary"}>{"Alerts Summary"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Dashboards & Approvals"}</p>
                      <p className="an-card__m">{"Dashboards & Approvals · last run today 08:00"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-audit" data-code="AN-R06-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AN-R06"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AN-R06" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/analytics-and-reports/an-r06-audit-trail-set"}>{"Audit trail set"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Analytics & Reports"}</p>
                      <p className="an-card__m">{"Analytics & Reports · last run yesterday"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                    <article className="an-card gl-row rg-audit" data-code="AN-R07-card">
                      <div className="an-card__h">
                        <span className="code-chip">{"AN-R07"}</span>
                        <label className="an-star" title="Favourite">
                          <input className="sr-only" type="checkbox" name="fav_AN-R07" />
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#star" />
                          </svg>
                          <span className="sr-only">{"Favourite"}</span>
                        </label>
                      </div>
                      <h3 className="an-card__t">
                        <Link className="fd-link" to={"/analytics-and-reports/an-r07-report-usage"}>{"Report usage"}</Link>
                      </h3>
                      <p className="an-card__d">{"Report of Analytics & Reports"}</p>
                      <p className="an-card__m">{"Analytics & Reports · last run 2 days ago"}</p>
                      <div className="an-card__a">
                        <Link className="btn btn--sm btn--primary" data-leads-to="AN-02" to={"/analytics-and-reports/an-02-report-viewer"}>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#play" />
                          </svg>
                          {"Open"}
                        </Link>
                        <a className="btn btn--sm" href="#an-p02" data-leads-to="AN-P02">
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#clock" />
                          </svg>
                          {"Schedule"}
                        </a>
                      </div>
                    </article>
                  </div>
                </section>
              </form>
              <div className="modal modal--lg" id="an-p02" data-code="AN-P02" role="dialog" aria-modal="true" aria-labelledby="an-p02-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/analytics-and-reports/an-01-report-library/#sched-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="an-p02-t">{"Report schedule"}</h2>
                      <p className="modal__desc">{"Send this report automatically. The report scheduler (AN-X01) runs it, retries three times and logs the delivery."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="field field--wide">
                      <span className="field__label">{"Report / view"}</span>
                      <div className="gl-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        {"Report library – choose a report in AN-02"}
                      </div>
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="sc-f">
                        {"Frequency "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="sc-f" name="frequency" required={true} defaultValue={"Daily"}>
                          <option value="Daily">{"Daily"}</option>
                          <option value="Weekly – Monday">{"Weekly – Monday"}</option>
                          <option value="Monthly – 3rd">{"Monthly – 3rd"}</option>
                          <option value="After night audit">{"After night audit"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="sc-t">
                        {"Time "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="sc-t" name="time" type="time" required={true} defaultValue={"07:30"} />
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="sc-o">
                        {"Format "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="sc-o" name="format" required={true} defaultValue={"PDF"}>
                          <option value="PDF">{"PDF"}</option>
                          <option value="Excel">{"Excel"}</option>
                          <option value="Link">{"Link"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <fieldset className="field fd-fieldset field--wide">
                      <legend className="field__label">
                        {"Recipients "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <div className="row fd-multi">
                        <label className="check">
                          <input className="check__input" type="checkbox" name="sc_r" value="Flash list (14)" />
                          <span className="check__box" />
                          {"Flash list (14)"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="sc_r" value="Management list (12)" defaultChecked={true} />
                          <span className="check__box" />
                          {"Management list (12)"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="sc_r" value="Night audit pack list (6)" />
                          <span className="check__box" />
                          {"Night audit pack list (6)"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="sc_r" value="Owner list (1 + 3 external)" />
                          <span className="check__box" />
                          {"Owner list (1 + 3 external)"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="sc_r" value="Anita Mohan" />
                          <span className="check__box" />
                          {"Anita Mohan"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="sc_r" value="Vikram Nathan" />
                          <span className="check__box" />
                          {"Vikram Nathan"}
                        </label>
                      </div>
                      <span className="field__hint">{"Distribution lists come from Analytics & Reports Setup (ANS-03); external addresses need the GM's permission"}</span>
                    </fieldset>
                    <fieldset className="field fd-fieldset field--wide">
                      <legend className="field__label">
                        {"Channel "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <div className="row fd-multi">
                        <label className="check">
                          <input className="check__input" type="checkbox" name="sc_c" value="Email" defaultChecked={true} />
                          <span className="check__box" />
                          {"Email"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="checkbox" name="sc_c" value="WhatsApp" />
                          <span className="check__box" />
                          {"WhatsApp"}
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#clock" />
                      </svg>
                      {"Save schedule"}
                    </button>
                  </div>
                </form>
              </div>
              <details className="hk-sys" data-code="AN-X02">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#cog" />
                  </svg>
                  {"System – what runs automatically on this screen"}
                </summary>
                <ul>
                  <li data-code="AN-X02">
                    <b>{"AN-X02 · Report data mart refresh"}</b>
                    {" – After the night audit and every hour the reporting tables are refreshed so reports open fast."}
                  </li>
                </ul>
              </details>
              <div className="fd-toast" id="t-sched" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#clock" />
                </svg>
                <div className="fd-toast__text">
                  {"Schedule created – SCH-0111"}
                  <small>{"The report scheduler (AN-X01) sends it at 07:30 to the Management list as PDF by email; the first delivery is tomorrow. Written to the audit log with the user, time and the old and new values."}</small>
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
