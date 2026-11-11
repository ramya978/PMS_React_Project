// GENERATED from public/general-ledger-setup/acs-01-chart-of-accounts/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/linen.css",
    "media": null
  },
  {
    "href": "/css/aviv/purchase.css",
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
    "href": "/general-ledger-setup/acs-01-chart-of-accounts/acs-01-chart-of-accounts.css",
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

export default function GeneralLedgerSetupAcs01ChartOfAccounts() {
  return (
    <ScreenShell title="Chart of Accounts" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="ACS-01" data-code="ACS-01" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="ACS-01" aria-current="page" title="General Ledger Setup" to={"/general-ledger-setup/acs-01-chart-of-accounts"}>
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
            <main className="app__content" id="main" data-code="ACS-01" tabIndex="-1">
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
                        <Link to={"/general-ledger-setup/acs-01-chart-of-accounts"}>{"General Ledger Setup"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Accounts"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Chart of Accounts"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"ACS-01"}</span>
                  <div className="page-header__actions">
                    <label className="btn btn--primary add-btn" htmlFor="add-1" role="button">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add account"}
                    </label>
                  </div>
                </div>
              </header>
              <nav className="ccs-nav" aria-label="General Ledger Setup">
                <Link aria-current="page" to={"/general-ledger-setup/acs-01-chart-of-accounts"}>{"Accounts"}</Link>
                <Link to={"/general-ledger-setup/acs-02-departments-and-cost-centres"}>{"Departments"}</Link>
                <Link to={"/general-ledger-setup/acs-03-posting-rules"}>{"Posting Rules"}</Link>
                <Link to={"/general-ledger-setup/acs-04-vouchers-limits-and-periods"}>{"Vouchers & Periods"}</Link>
                <Link to={"/general-ledger-setup/acs-05-asset-classes-and-export-mapping"}>{"Assets & Export"}</Link>
              </nav>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm pm--v" id="v-all" />
                <i className="pm pm--v" id="v-assets" />
                <i className="pm pm--v" id="v-liabilities" />
                <i className="pm pm--v" id="v-equity" />
                <i className="pm pm--v" id="v-income" />
                <i className="pm pm--v" id="v-expenses" />
                <i className="pm" id="saved" />
                <i className="pm" id="added" />
                <i className="pm" id="imported" />
                <i className="pm" id="loaded" />
              </div>
              <ul className="cc-kpis">
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"83"}</span>
                  <span className="cc-kpi__l">{"Accounts"}</span>
                  <span className="cc-kpi__s">{"5 groups · all active"}</span>
                </li>
                <li className="cc-kpi cc-kpi--ok">
                  <span className="cc-kpi__v">{"34"}</span>
                  <span className="cc-kpi__l">{"Mapped to a USALI line"}</span>
                  <span className="cc-kpi__s">{"49 balance sheet or clearing accounts have none"}</span>
                </li>
                <li className="cc-kpi cc-kpi--warn">
                  <span className="cc-kpi__v">{"1"}</span>
                  <span className="cc-kpi__l">{"Suspense account"}</span>
                  <span className="cc-kpi__s">{"2999 – 3 unmapped codes post here until mapped"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"2026-27"}</span>
                  <span className="cc-kpi__l">{"Financial year"}</span>
                  <span className="cc-kpi__s">{"April 2026 – March 2027"}</span>
                </li>
              </ul>
              <div className="fd-banner fd-banner--info cc-banner">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-banner__t">
                  <strong>{"A chart aligned to the USALI"}</strong>
                  {"Income and expense accounts carry a USALI line so that the departmental statements (Rooms, F&B, other operated, undistributed) can be drawn from the ledger. A department is required on every income and expense posting."}
                </div>
              </div>
              <input className="add-sw" type="checkbox" id="add-1" aria-label="Show the form" />
              <div className="add-panel prs-add">
                <form className="prs-add__f" action="/general-ledger-setup/acs-01-chart-of-accounts/#added" method="get">
                  <div className="s-grid2 la-cols la-cols--5">
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="na-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="na-c" name="code" type="text" required={true} pattern={"[0-9]{4}"} maxLength="4" title="4 digits, unique" defaultValue={"5503"} />
                      <span className="field__hint">{"4 digits; the first digit gives the group (1 assets … 5 expenses)"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="na-n">
                        {"Name "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="na-n" name="name" type="text" required={true} maxLength="60" defaultValue={"Travel agent commissions"} />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="na-p">
                        {"Group / parent "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="na-p" name="na-p" required={true} defaultValue={"Undistributed expenses"}>
                          <option value="Undistributed expenses">{"Expenses › Undistributed expenses"}</option>
                          <option value="Cost of sales">{"Expenses › Cost of sales"}</option>
                          <option value="Revenue – Rooms">{"Income › Revenue – Rooms"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="na-t">
                        {"Type "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="na-t" name="na-t" required={true} defaultValue={"Expense"}>
                          <option value="Bank">{"Bank"}</option>
                          <option value="Cash">{"Cash"}</option>
                          <option value="Receivable control">{"Receivable control"}</option>
                          <option value="Payable control">{"Payable control"}</option>
                          <option value="Inventory">{"Inventory"}</option>
                          <option value="Fixed asset">{"Fixed asset"}</option>
                          <option value="Revenue">{"Revenue"}</option>
                          <option value="Cost of sales">{"Cost of sales"}</option>
                          <option value="Payroll">{"Payroll"}</option>
                          <option value="Expense">{"Expense"}</option>
                          <option value="Tax">{"Tax"}</option>
                          <option value="Suspense">{"Suspense"}</option>
                          <option value="Clearing">{"Clearing"}</option>
                          <option value="Equity">{"Equity"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="na-u">{"USALI line"}</label>
                      <input className="field__input" id="na-u" name="usali" type="text" maxLength="80" defaultValue={"Sales and marketing – Commissions"} />
                    </div>
                  </div>
                  <div className="prs-add__a">
                    <span className="fd-muted">{"A code that has postings cannot be deleted, only made inactive"}</span>
                    <button className="btn btn--primary" type="submit">{"Add"}</button>
                  </div>
                </form>
              </div>
              <nav className="hv st-views" aria-label="Account groups">
                <a className="hv__v" href="#v-all" data-v="v-all">
                  <span>{"All accounts"}</span>
                  <b className="num">{"83"}</b>
                </a>
                <a className="hv__v" href="#v-assets" data-v="v-assets">
                  <span>{"Assets"}</span>
                  <b className="num">{"36"}</b>
                </a>
                <a className="hv__v" href="#v-liabilities" data-v="v-liabilities">
                  <span>{"Liabilities"}</span>
                  <b className="num">{"10"}</b>
                </a>
                <a className="hv__v" href="#v-equity" data-v="v-equity">
                  <span>{"Equity"}</span>
                  <b className="num">{"2"}</b>
                </a>
                <a className="hv__v" href="#v-income" data-v="v-income">
                  <span>{"Income"}</span>
                  <b className="num">{"12"}</b>
                </a>
                <a className="hv__v" href="#v-expenses" data-v="v-expenses">
                  <span>{"Expenses"}</span>
                  <b className="num">{"23"}</b>
                </a>
              </nav>
              <section className="fd-sec cc-sec" id="sec-chart" data-code="ACS-01-list">
                <h2 className="fd-sec__t">{"Chart of accounts"}</h2>
                <p className="fd-sec__d">{"Account groups and ledgers. Open an account to change its name, type, USALI line or department rule."}</p>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="dt__table" data-code="ACS-01-accounts" data-nosort="" data-mc="">
                      <caption className="sr-only">{"Accounts with group, type, USALI line, department rule and status"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Code"}</th>
                          <th scope="col">{"Account"}</th>
                          <th scope="col">{"Type"}</th>
                          <th scope="col">{"USALI line"}</th>
                          <th scope="col">{"Department"}</th>
                          <th scope="col">{"Status"}</th>
                          <th scope="col">{"Edit"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="ch-row ch-g-assets" id="a-1101">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1101"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Cash – main cash"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Cash"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1101">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1102">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1102"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Cash – front office float"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Cash"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1102">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1103">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1103"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Cash – outlet floats"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Cash"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1103">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1104">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1104"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Cash – stores imprest"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Cash"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1104">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1105">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1105"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Cash – engineering imprest"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Cash"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1105">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1106">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1106"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Cash – HR imprest"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Cash"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1106">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1107">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1107"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Cash – housekeeping imprest"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Cash"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1107">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1201">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1201"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Bank – HDFC current"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Bank"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1201">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1202">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1202"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Bank – Federal current"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Bank"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1202">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1203">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1203"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Bank – ICICI current"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Bank"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1203">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1210">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1210"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Fixed deposits"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Bank"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1210">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1215">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1215"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Escrow – group deposits"}</b>
                            <span className="fd-sub">{"Assets › Cash and bank"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Bank"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1215">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1301">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1301"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Food"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1301">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1302">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1302"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Beverages"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1302">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1303">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1303"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Liquor and wine"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1303">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1304">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1304"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Tobacco"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1304">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1305">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1305"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Housekeeping supplies"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1305">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1306">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1306"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Guest amenities"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1306">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1307">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1307"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Linen"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1307">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1308">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1308"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Engineering spares"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1308">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1309">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1309"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Stationery"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1309">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1310">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1310"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Fuel"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1310">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1311">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1311"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Inventory – Bar and F&B consumables"}</b>
                            <span className="fd-sub">{"Assets › Inventory"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Inventory"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1311">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1401">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1401"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Trade debtors – city ledger"}</b>
                            <span className="fd-sub">{"Assets › Receivables and tax"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Receivable control"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1401">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1403">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1403"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"TDS receivable"}</b>
                            <span className="fd-sub">{"Assets › Receivables and tax"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Tax"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1403">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1404">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1404"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"GST input credit – CGST"}</b>
                            <span className="fd-sub">{"Assets › Receivables and tax"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Tax"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1404">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1405">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1405"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"GST input credit – SGST"}</b>
                            <span className="fd-sub">{"Assets › Receivables and tax"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Tax"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1405">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1406">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1406"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"GST input credit – IGST"}</b>
                            <span className="fd-sub">{"Assets › Receivables and tax"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Tax"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1406">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1410">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1410"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Card and UPI settlements receivable"}</b>
                            <span className="fd-sub">{"Assets › Receivables and tax"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Clearing"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1410">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1501">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1501"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Land and building"}</b>
                            <span className="fd-sub">{"Assets › Fixed assets"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Fixed asset"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1501">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1502">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1502"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Plant and machinery"}</b>
                            <span className="fd-sub">{"Assets › Fixed assets"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Fixed asset"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1502">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1503">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1503"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Furniture and fixtures"}</b>
                            <span className="fd-sub">{"Assets › Fixed assets"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Fixed asset"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1503">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1504">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1504"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Kitchen equipment"}</b>
                            <span className="fd-sub">{"Assets › Fixed assets"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Fixed asset"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1504">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1505">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1505"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Computers"}</b>
                            <span className="fd-sub">{"Assets › Fixed assets"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Fixed asset"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1505">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1506">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1506"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Vehicles"}</b>
                            <span className="fd-sub">{"Assets › Fixed assets"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Fixed asset"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1506">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-assets" id="a-1550">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"1550"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Accumulated depreciation"}</b>
                            <span className="fd-sub">{"Assets › Fixed assets"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Fixed asset"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-1550">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-liabilities" id="a-2101">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"2101"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Bank overdraft – SBI"}</b>
                            <span className="fd-sub">{"Liabilities › Current liabilities"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Bank"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-2101">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-liabilities" id="a-2201">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"2201"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Trade creditors"}</b>
                            <span className="fd-sub">{"Liabilities › Current liabilities"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Payable control"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-2201">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-liabilities" id="a-2202">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"2202"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Guest advance deposits"}</b>
                            <span className="fd-sub">{"Liabilities › Current liabilities"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Clearing"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-2202">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-liabilities" id="a-2301">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"2301"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"GST output – CGST"}</b>
                            <span className="fd-sub">{"Liabilities › Tax and payroll liabilities"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Tax"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-2301">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-liabilities" id="a-2302">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"2302"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"GST output – SGST"}</b>
                            <span className="fd-sub">{"Liabilities › Tax and payroll liabilities"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Tax"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-2302">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-liabilities" id="a-2303">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"2303"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"GST output – IGST"}</b>
                            <span className="fd-sub">{"Liabilities › Tax and payroll liabilities"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Tax"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-2303">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-liabilities" id="a-2310">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"2310"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"TDS payable"}</b>
                            <span className="fd-sub">{"Liabilities › Tax and payroll liabilities"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Tax"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-2310">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-liabilities" id="a-2320">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"2320"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"PF and ESI payable"}</b>
                            <span className="fd-sub">{"Liabilities › Tax and payroll liabilities"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Payroll"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-2320">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-liabilities" id="a-2330">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"2330"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Salaries payable"}</b>
                            <span className="fd-sub">{"Liabilities › Tax and payroll liabilities"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Payroll"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-2330">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-liabilities" id="a-2999">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"2999"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Suspense – unmapped postings"}</b>
                            <span className="fd-sub">{"Liabilities › Current liabilities"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Suspense"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-2999">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-equity" id="a-3101">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"3101"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Share capital"}</b>
                            <span className="fd-sub">{"Equity › Equity"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Equity"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-3101">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-equity" id="a-3201">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"3201"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Retained earnings"}</b>
                            <span className="fd-sub">{"Equity › Equity"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Equity"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-3201">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4101">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4101"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Rooms – transient rooms revenue"}</b>
                            <span className="fd-sub">{"Income › Revenue – Rooms"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"Rooms – Transient rooms revenue"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4101">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4102">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4102"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Rooms – group rooms revenue"}</b>
                            <span className="fd-sub">{"Income › Revenue – Rooms"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"Rooms – Group rooms revenue"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4102">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4190">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4190"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Rooms – allowances"}</b>
                            <span className="fd-sub">{"Income › Revenue – Rooms"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"Rooms – Allowances"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4190">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4201">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4201"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"F&B – food revenue"}</b>
                            <span className="fd-sub">{"Income › Revenue – F&B"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"F&B – Food revenue"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4201">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4202">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4202"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"F&B – beverage revenue"}</b>
                            <span className="fd-sub">{"Income › Revenue – F&B"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"F&B – Beverage revenue"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4202">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4203">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4203"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"F&B – banquet and room hire revenue"}</b>
                            <span className="fd-sub">{"Income › Revenue – F&B"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"F&B – Banquet revenue"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4203">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4210">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4210"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Minibar revenue (reported in F&B)"}</b>
                            <span className="fd-sub">{"Income › Revenue – F&B"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"F&B – Beverage revenue"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4210">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4301">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4301"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Laundry revenue"}</b>
                            <span className="fd-sub">{"Income › Revenue – other operated"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"Other operated – Laundry"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4301">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4302">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4302"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Spa revenue"}</b>
                            <span className="fd-sub">{"Income › Revenue – other operated"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"Other operated – Spa"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4302">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4303">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4303"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Transport revenue"}</b>
                            <span className="fd-sub">{"Income › Revenue – other operated"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"Other operated – Transport"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4303">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4401">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4401"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Interest income"}</b>
                            <span className="fd-sub">{"Income › Other income"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"Non-operating – Interest income"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4401">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-income" id="a-4402">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"4402"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Miscellaneous income"}</b>
                            <span className="fd-sub">{"Income › Other income"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Revenue"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"Miscellaneous income"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-4402">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5101">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5101"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Food cost"}</b>
                            <span className="fd-sub">{"Expenses › Cost of sales"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Cost of sales"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"F&B – Cost of sales, food"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5101">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5102">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5102"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Beverage cost"}</b>
                            <span className="fd-sub">{"Expenses › Cost of sales"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Cost of sales"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"F&B – Cost of sales, beverage"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5102">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5103">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5103"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Liquor cost"}</b>
                            <span className="fd-sub">{"Expenses › Cost of sales"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Cost of sales"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"F&B – Cost of sales, beverage"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5103">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5104">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5104"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Tobacco cost"}</b>
                            <span className="fd-sub">{"Expenses › Cost of sales"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type" data-w2="">{"Cost of sales"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"F&B – Cost of sales, other"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5104">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5105">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5105"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Bar and F&B consumables"}</b>
                            <span className="fd-sub">{"Expenses › Cost of sales"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"F&B – Other expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5105">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5201">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5201"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Housekeeping supplies consumed"}</b>
                            <span className="fd-sub">{"Expenses › Department expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"Rooms – Other expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5201">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5202">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5202"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Guest amenities consumed"}</b>
                            <span className="fd-sub">{"Expenses › Department expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"Rooms – Other expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5202">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5203">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5203"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Linen consumed"}</b>
                            <span className="fd-sub">{"Expenses › Department expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"Rooms – Other expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5203">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5301">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5301"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Repairs and maintenance – spares"}</b>
                            <span className="fd-sub">{"Expenses › Undistributed expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"POM – Repairs and maintenance"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5301">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5401">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5401"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Printing and stationery"}</b>
                            <span className="fd-sub">{"Expenses › Undistributed expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"A&G – Other expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5401">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5402">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5402"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Fuel and power"}</b>
                            <span className="fd-sub">{"Expenses › Undistributed expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"Utilities – Electricity and fuel"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5402">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5501">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5501"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Credit card commissions"}</b>
                            <span className="fd-sub">{"Expenses › Undistributed expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"A&G – Credit card commissions"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5501">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5502">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5502"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"OTA commissions"}</b>
                            <span className="fd-sub">{"Expenses › Undistributed expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"Sales and marketing – Commissions"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5502">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5601">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5601"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Salaries and wages"}</b>
                            <span className="fd-sub">{"Expenses › Payroll"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Payroll"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"Payroll – Salaries and wages"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5601">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-5602">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"5602"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"PF and ESI – employer share"}</b>
                            <span className="fd-sub">{"Expenses › Payroll"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Payroll"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"Payroll – Benefits"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-5602">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-6101">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"6101"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Staff welfare – staff meals"}</b>
                            <span className="fd-sub">{"Expenses › Department expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"Payroll – Employee meals"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-6101">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-6102">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"6102"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Officers' mess expense"}</b>
                            <span className="fd-sub">{"Expenses › Department expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"Payroll – Employee meals"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-6102">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-6201">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"6201"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Entertainment expense"}</b>
                            <span className="fd-sub">{"Expenses › Undistributed expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"A&G – Entertainment"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-6201">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-6202">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"6202"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Sales promotion expense"}</b>
                            <span className="fd-sub">{"Expenses › Undistributed expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"Sales and marketing – Promotion"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-6202">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-6203">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"6203"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Guest complimentary expense"}</b>
                            <span className="fd-sub">{"Expenses › Undistributed expenses"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"Sales and marketing – Complimentary"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-6203">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-6301">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"6301"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Depreciation"}</b>
                            <span className="fd-sub">{"Expenses › Non-operating"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line">
                            <span className="fd-sub ch-usali">{"Non-operating – Depreciation"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-6301">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-6401">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"6401"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Bank charges"}</b>
                            <span className="fd-sub">{"Expenses › Non-operating"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-label="USALI line" data-w2="">
                            <span className="fd-sub ch-usali">{"A&G – Bank charges"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"Yes"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-6401">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                        <tr className="ch-row ch-g-expenses" id="a-7101">
                          <td className="dt__td nw" data-label="Code" data-t="">
                            <b className="num">{"7101"}</b>
                          </td>
                          <td className="dt__td" data-label="Account">
                            <b>{"Rounding off"}</b>
                            <span className="fd-sub">{"Expenses › Non-operating"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Type">{"Expense"}</td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub ch-usali">{"–"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Department" data-w2="">{"No"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Active"}
                            </span>
                          </td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn btn--sm" href="#e-7101">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pencil" />
                              </svg>
                              {"Edit"}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="dd-foot">
                  <span className="dd-foot__note">
                    <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    <span>
                      {"The accounts used by Stores, Cost Control and Finance Setup are all here. The opening balances are imported through "}
                      <Link className="fd-link" to={"/finance-setup/fns-06-opening-balances"}>{"Opening Balances (FNS-06)"}</Link>
                      {"."}
                    </span>
                  </span>
                  <span className="bp-acts">
                    <a className="btn" href="#imported">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#upload" />
                      </svg>
                      {"Import"}
                    </a>
                    <a className="btn" href="#loaded">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#book-open" />
                      </svg>
                      {"Load USALI template"}
                    </a>
                    <Link className="btn" data-leads-to="ACS-O01" to={"/general-ledger-setup/acs-o01-chart-of-accounts-print"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print chart"}
                    </Link>
                  </span>
                </div>
              </section>
              <details className="hk-sys cc-log" data-code="ACS-X02">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#history" />
                  </svg>
                  {"System – setup audit logger (ACS-X02): the last changes on this screen"}
                </summary>
                <div className="s-scroll">
                  <table className="dt__table dt--hug" data-code="ACS-audit" data-nosort="" data-mc="">
                    <caption className="sr-only">{"Last changes with old and new values"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">{"When"}</th>
                        <th scope="col">{"Who"}</th>
                        <th scope="col">{"What"}</th>
                        <th scope="col">{"Old → new"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="dt__td nw num" data-label="When" data-w2="" data-t="">{"20-10-2026 12:10"}</td>
                        <td className="dt__td nw" data-label="Who" data-w2="">{"Lakshmi Ishaan"}</td>
                        <td className="dt__td" data-label="What" data-w2="">{"4210 · Minibar revenue"}</td>
                        <td className="dt__td" data-label="Old → new">{"Revenue – Other → Revenue – F&B (reported in F&B)"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td nw num" data-label="When" data-w2="" data-t="">{"14-10-2026 15:40"}</td>
                        <td className="dt__td nw" data-label="Who" data-w2="">{"Lakshmi Ishaan"}</td>
                        <td className="dt__td" data-label="What" data-w2="">{"5502 · OTA commissions"}</td>
                        <td className="dt__td" data-label="Old → new">{"Department required: Off → On"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td nw num" data-label="When" data-w2="" data-t="">{"02-04-2026 10:20"}</td>
                        <td className="dt__td nw" data-label="Who" data-w2="">{"Lakshmi Ishaan"}</td>
                        <td className="dt__td" data-label="What">{"Chart of accounts loaded from the USALI template"}</td>
                        <td className="dt__td" data-label="Old → new" data-w2="">{"– → 83 accounts"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="cc-note">{"Every change is written automatically with user, time and the old and new values. The log cannot be edited and is kept for 8 years."}</p>
              </details>
              <div className="modal" id="e-1101" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1101-t">{"1101 · Cash – main cash"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1101">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1101" name="name" type="text" required={true} maxLength="60" defaultValue={"Cash – main cash"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1101">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1101" name="type" required={true} defaultValue={"Cash"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1101">{"USALI line"}</label>
                        <input className="field__input" id="u-1101" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1102" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1102-t">{"1102 · Cash – front office float"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1102">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1102" name="name" type="text" required={true} maxLength="60" defaultValue={"Cash – front office float"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1102">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1102" name="type" required={true} defaultValue={"Cash"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1102">{"USALI line"}</label>
                        <input className="field__input" id="u-1102" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1103" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1103-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1103-t">{"1103 · Cash – outlet floats"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1103">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1103" name="name" type="text" required={true} maxLength="60" defaultValue={"Cash – outlet floats"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1103">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1103" name="type" required={true} defaultValue={"Cash"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1103">{"USALI line"}</label>
                        <input className="field__input" id="u-1103" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1104" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1104-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1104-t">{"1104 · Cash – stores imprest"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1104">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1104" name="name" type="text" required={true} maxLength="60" defaultValue={"Cash – stores imprest"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1104">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1104" name="type" required={true} defaultValue={"Cash"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1104">{"USALI line"}</label>
                        <input className="field__input" id="u-1104" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1105" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1105-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1105-t">{"1105 · Cash – engineering imprest"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1105">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1105" name="name" type="text" required={true} maxLength="60" defaultValue={"Cash – engineering imprest"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1105">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1105" name="type" required={true} defaultValue={"Cash"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1105">{"USALI line"}</label>
                        <input className="field__input" id="u-1105" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1106" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1106-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1106-t">{"1106 · Cash – HR imprest"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1106">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1106" name="name" type="text" required={true} maxLength="60" defaultValue={"Cash – HR imprest"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1106">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1106" name="type" required={true} defaultValue={"Cash"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1106">{"USALI line"}</label>
                        <input className="field__input" id="u-1106" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1107" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1107-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1107-t">{"1107 · Cash – housekeeping imprest"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1107">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1107" name="name" type="text" required={true} maxLength="60" defaultValue={"Cash – housekeeping imprest"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1107">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1107" name="type" required={true} defaultValue={"Cash"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1107">{"USALI line"}</label>
                        <input className="field__input" id="u-1107" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1201" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1201-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1201-t">{"1201 · Bank – HDFC current"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1201">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1201" name="name" type="text" required={true} maxLength="60" defaultValue={"Bank – HDFC current"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1201">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1201" name="type" required={true} defaultValue={"Bank"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1201">{"USALI line"}</label>
                        <input className="field__input" id="u-1201" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1202" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1202-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1202-t">{"1202 · Bank – Federal current"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1202">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1202" name="name" type="text" required={true} maxLength="60" defaultValue={"Bank – Federal current"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1202">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1202" name="type" required={true} defaultValue={"Bank"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1202">{"USALI line"}</label>
                        <input className="field__input" id="u-1202" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1203" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1203-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1203-t">{"1203 · Bank – ICICI current"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1203">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1203" name="name" type="text" required={true} maxLength="60" defaultValue={"Bank – ICICI current"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1203">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1203" name="type" required={true} defaultValue={"Bank"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1203">{"USALI line"}</label>
                        <input className="field__input" id="u-1203" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1210" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1210-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1210-t">{"1210 · Fixed deposits"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1210">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1210" name="name" type="text" required={true} maxLength="60" defaultValue={"Fixed deposits"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1210">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1210" name="type" required={true} defaultValue={"Bank"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1210">{"USALI line"}</label>
                        <input className="field__input" id="u-1210" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1215" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1215-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1215-t">{"1215 · Escrow – group deposits"}</h2>
                      <p className="modal__desc">{"Assets › Cash and bank. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1215">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1215" name="name" type="text" required={true} maxLength="60" defaultValue={"Escrow – group deposits"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1215">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1215" name="type" required={true} defaultValue={"Bank"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1215">{"USALI line"}</label>
                        <input className="field__input" id="u-1215" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1301" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1301-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1301-t">{"1301 · Inventory – Food"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1301">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1301" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Food"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1301">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1301" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1301">{"USALI line"}</label>
                        <input className="field__input" id="u-1301" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1302" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1302-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1302-t">{"1302 · Inventory – Beverages"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1302">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1302" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Beverages"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1302">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1302" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1302">{"USALI line"}</label>
                        <input className="field__input" id="u-1302" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1303" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1303-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1303-t">{"1303 · Inventory – Liquor and wine"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1303">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1303" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Liquor and wine"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1303">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1303" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1303">{"USALI line"}</label>
                        <input className="field__input" id="u-1303" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1304" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1304-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1304-t">{"1304 · Inventory – Tobacco"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1304">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1304" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Tobacco"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1304">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1304" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1304">{"USALI line"}</label>
                        <input className="field__input" id="u-1304" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1305" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1305-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1305-t">{"1305 · Inventory – Housekeeping supplies"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1305">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1305" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Housekeeping supplies"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1305">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1305" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1305">{"USALI line"}</label>
                        <input className="field__input" id="u-1305" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1306" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1306-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1306-t">{"1306 · Inventory – Guest amenities"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1306">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1306" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Guest amenities"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1306">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1306" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1306">{"USALI line"}</label>
                        <input className="field__input" id="u-1306" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1307" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1307-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1307-t">{"1307 · Inventory – Linen"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1307">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1307" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Linen"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1307">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1307" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1307">{"USALI line"}</label>
                        <input className="field__input" id="u-1307" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1308" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1308-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1308-t">{"1308 · Inventory – Engineering spares"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1308">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1308" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Engineering spares"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1308">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1308" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1308">{"USALI line"}</label>
                        <input className="field__input" id="u-1308" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1309" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1309-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1309-t">{"1309 · Inventory – Stationery"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1309">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1309" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Stationery"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1309">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1309" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1309">{"USALI line"}</label>
                        <input className="field__input" id="u-1309" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1310" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1310-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1310-t">{"1310 · Inventory – Fuel"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1310">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1310" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Fuel"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1310">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1310" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1310">{"USALI line"}</label>
                        <input className="field__input" id="u-1310" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1311" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1311-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1311-t">{"1311 · Inventory – Bar and F&B consumables"}</h2>
                      <p className="modal__desc">{"Assets › Inventory. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1311">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1311" name="name" type="text" required={true} maxLength="60" defaultValue={"Inventory – Bar and F&B consumables"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1311">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1311" name="type" required={true} defaultValue={"Inventory"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1311">{"USALI line"}</label>
                        <input className="field__input" id="u-1311" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1401" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1401-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1401-t">{"1401 · Trade debtors – city ledger"}</h2>
                      <p className="modal__desc">{"Assets › Receivables and tax. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1401">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1401" name="name" type="text" required={true} maxLength="60" defaultValue={"Trade debtors – city ledger"} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="t-1401">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1401" name="type" required={true} defaultValue={"Receivable control"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1401">{"USALI line"}</label>
                        <input className="field__input" id="u-1401" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1403" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1403-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1403-t">{"1403 · TDS receivable"}</h2>
                      <p className="modal__desc">{"Assets › Receivables and tax. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1403">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1403" name="name" type="text" required={true} maxLength="60" defaultValue={"TDS receivable"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1403">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1403" name="type" required={true} defaultValue={"Tax"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1403">{"USALI line"}</label>
                        <input className="field__input" id="u-1403" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1404" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1404-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1404-t">{"1404 · GST input credit – CGST"}</h2>
                      <p className="modal__desc">{"Assets › Receivables and tax. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1404">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1404" name="name" type="text" required={true} maxLength="60" defaultValue={"GST input credit – CGST"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1404">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1404" name="type" required={true} defaultValue={"Tax"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1404">{"USALI line"}</label>
                        <input className="field__input" id="u-1404" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1405" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1405-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1405-t">{"1405 · GST input credit – SGST"}</h2>
                      <p className="modal__desc">{"Assets › Receivables and tax. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1405">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1405" name="name" type="text" required={true} maxLength="60" defaultValue={"GST input credit – SGST"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1405">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1405" name="type" required={true} defaultValue={"Tax"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1405">{"USALI line"}</label>
                        <input className="field__input" id="u-1405" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1406" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1406-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1406-t">{"1406 · GST input credit – IGST"}</h2>
                      <p className="modal__desc">{"Assets › Receivables and tax. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1406">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1406" name="name" type="text" required={true} maxLength="60" defaultValue={"GST input credit – IGST"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1406">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1406" name="type" required={true} defaultValue={"Tax"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1406">{"USALI line"}</label>
                        <input className="field__input" id="u-1406" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1410" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1410-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1410-t">{"1410 · Card and UPI settlements receivable"}</h2>
                      <p className="modal__desc">{"Assets › Receivables and tax. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1410">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1410" name="name" type="text" required={true} maxLength="60" defaultValue={"Card and UPI settlements receivable"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1410">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1410" name="type" required={true} defaultValue={"Clearing"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1410">{"USALI line"}</label>
                        <input className="field__input" id="u-1410" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1501" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1501-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1501-t">{"1501 · Land and building"}</h2>
                      <p className="modal__desc">{"Assets › Fixed assets. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1501">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1501" name="name" type="text" required={true} maxLength="60" defaultValue={"Land and building"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1501">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1501" name="type" required={true} defaultValue={"Fixed asset"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1501">{"USALI line"}</label>
                        <input className="field__input" id="u-1501" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1502" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1502-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1502-t">{"1502 · Plant and machinery"}</h2>
                      <p className="modal__desc">{"Assets › Fixed assets. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1502">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1502" name="name" type="text" required={true} maxLength="60" defaultValue={"Plant and machinery"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1502">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1502" name="type" required={true} defaultValue={"Fixed asset"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1502">{"USALI line"}</label>
                        <input className="field__input" id="u-1502" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1503" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1503-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1503-t">{"1503 · Furniture and fixtures"}</h2>
                      <p className="modal__desc">{"Assets › Fixed assets. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1503">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1503" name="name" type="text" required={true} maxLength="60" defaultValue={"Furniture and fixtures"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1503">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1503" name="type" required={true} defaultValue={"Fixed asset"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1503">{"USALI line"}</label>
                        <input className="field__input" id="u-1503" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1504" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1504-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1504-t">{"1504 · Kitchen equipment"}</h2>
                      <p className="modal__desc">{"Assets › Fixed assets. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1504">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1504" name="name" type="text" required={true} maxLength="60" defaultValue={"Kitchen equipment"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1504">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1504" name="type" required={true} defaultValue={"Fixed asset"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1504">{"USALI line"}</label>
                        <input className="field__input" id="u-1504" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1505" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1505-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1505-t">{"1505 · Computers"}</h2>
                      <p className="modal__desc">{"Assets › Fixed assets. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1505">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1505" name="name" type="text" required={true} maxLength="60" defaultValue={"Computers"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1505">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1505" name="type" required={true} defaultValue={"Fixed asset"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1505">{"USALI line"}</label>
                        <input className="field__input" id="u-1505" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1506" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1506-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1506-t">{"1506 · Vehicles"}</h2>
                      <p className="modal__desc">{"Assets › Fixed assets. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1506">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1506" name="name" type="text" required={true} maxLength="60" defaultValue={"Vehicles"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1506">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1506" name="type" required={true} defaultValue={"Fixed asset"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1506">{"USALI line"}</label>
                        <input className="field__input" id="u-1506" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-1550" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-1550-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-1550-t">{"1550 · Accumulated depreciation"}</h2>
                      <p className="modal__desc">{"Assets › Fixed assets. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-1550">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-1550" name="name" type="text" required={true} maxLength="60" defaultValue={"Accumulated depreciation"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-1550">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-1550" name="type" required={true} defaultValue={"Fixed asset"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-1550">{"USALI line"}</label>
                        <input className="field__input" id="u-1550" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-2101" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-2101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-2101-t">{"2101 · Bank overdraft – SBI"}</h2>
                      <p className="modal__desc">{"Liabilities › Current liabilities. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-2101">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-2101" name="name" type="text" required={true} maxLength="60" defaultValue={"Bank overdraft – SBI"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-2101">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-2101" name="type" required={true} defaultValue={"Bank"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-2101">{"USALI line"}</label>
                        <input className="field__input" id="u-2101" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-2201" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-2201-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-2201-t">{"2201 · Trade creditors"}</h2>
                      <p className="modal__desc">{"Liabilities › Current liabilities. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-2201">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-2201" name="name" type="text" required={true} maxLength="60" defaultValue={"Trade creditors"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-2201">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-2201" name="type" required={true} defaultValue={"Payable control"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-2201">{"USALI line"}</label>
                        <input className="field__input" id="u-2201" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-2202" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-2202-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-2202-t">{"2202 · Guest advance deposits"}</h2>
                      <p className="modal__desc">{"Liabilities › Current liabilities. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-2202">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-2202" name="name" type="text" required={true} maxLength="60" defaultValue={"Guest advance deposits"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-2202">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-2202" name="type" required={true} defaultValue={"Clearing"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-2202">{"USALI line"}</label>
                        <input className="field__input" id="u-2202" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-2301" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-2301-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-2301-t">{"2301 · GST output – CGST"}</h2>
                      <p className="modal__desc">{"Liabilities › Tax and payroll liabilities. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-2301">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-2301" name="name" type="text" required={true} maxLength="60" defaultValue={"GST output – CGST"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-2301">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-2301" name="type" required={true} defaultValue={"Tax"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-2301">{"USALI line"}</label>
                        <input className="field__input" id="u-2301" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-2302" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-2302-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-2302-t">{"2302 · GST output – SGST"}</h2>
                      <p className="modal__desc">{"Liabilities › Tax and payroll liabilities. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-2302">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-2302" name="name" type="text" required={true} maxLength="60" defaultValue={"GST output – SGST"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-2302">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-2302" name="type" required={true} defaultValue={"Tax"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-2302">{"USALI line"}</label>
                        <input className="field__input" id="u-2302" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-2303" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-2303-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-2303-t">{"2303 · GST output – IGST"}</h2>
                      <p className="modal__desc">{"Liabilities › Tax and payroll liabilities. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-2303">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-2303" name="name" type="text" required={true} maxLength="60" defaultValue={"GST output – IGST"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-2303">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-2303" name="type" required={true} defaultValue={"Tax"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-2303">{"USALI line"}</label>
                        <input className="field__input" id="u-2303" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-2310" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-2310-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-2310-t">{"2310 · TDS payable"}</h2>
                      <p className="modal__desc">{"Liabilities › Tax and payroll liabilities. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-2310">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-2310" name="name" type="text" required={true} maxLength="60" defaultValue={"TDS payable"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-2310">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-2310" name="type" required={true} defaultValue={"Tax"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-2310">{"USALI line"}</label>
                        <input className="field__input" id="u-2310" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-2320" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-2320-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-2320-t">{"2320 · PF and ESI payable"}</h2>
                      <p className="modal__desc">{"Liabilities › Tax and payroll liabilities. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-2320">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-2320" name="name" type="text" required={true} maxLength="60" defaultValue={"PF and ESI payable"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-2320">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-2320" name="type" required={true} defaultValue={"Payroll"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-2320">{"USALI line"}</label>
                        <input className="field__input" id="u-2320" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-2330" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-2330-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-2330-t">{"2330 · Salaries payable"}</h2>
                      <p className="modal__desc">{"Liabilities › Tax and payroll liabilities. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-2330">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-2330" name="name" type="text" required={true} maxLength="60" defaultValue={"Salaries payable"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-2330">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-2330" name="type" required={true} defaultValue={"Payroll"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-2330">{"USALI line"}</label>
                        <input className="field__input" id="u-2330" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-2999" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-2999-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-2999-t">{"2999 · Suspense – unmapped postings"}</h2>
                      <p className="modal__desc">{"Liabilities › Current liabilities. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-2999">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-2999" name="name" type="text" required={true} maxLength="60" defaultValue={"Suspense – unmapped postings"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-2999">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-2999" name="type" required={true} defaultValue={"Suspense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-2999">{"USALI line"}</label>
                        <input className="field__input" id="u-2999" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-3101" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-3101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-3101-t">{"3101 · Share capital"}</h2>
                      <p className="modal__desc">{"Equity › Equity. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-3101">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-3101" name="name" type="text" required={true} maxLength="60" defaultValue={"Share capital"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-3101">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-3101" name="type" required={true} defaultValue={"Equity"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-3101">{"USALI line"}</label>
                        <input className="field__input" id="u-3101" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-3201" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-3201-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-3201-t">{"3201 · Retained earnings"}</h2>
                      <p className="modal__desc">{"Equity › Equity. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-3201">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-3201" name="name" type="text" required={true} maxLength="60" defaultValue={"Retained earnings"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-3201">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-3201" name="type" required={true} defaultValue={"Equity"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-3201">{"USALI line"}</label>
                        <input className="field__input" id="u-3201" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4101" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4101-t">{"4101 · Rooms – transient rooms revenue"}</h2>
                      <p className="modal__desc">{"Income › Revenue – Rooms. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4101">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4101" name="name" type="text" required={true} maxLength="60" defaultValue={"Rooms – transient rooms revenue"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4101">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4101" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4101">{"USALI line"}</label>
                        <input className="field__input" id="u-4101" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Rooms – Transient rooms revenue"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4102" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4102-t">{"4102 · Rooms – group rooms revenue"}</h2>
                      <p className="modal__desc">{"Income › Revenue – Rooms. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4102">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4102" name="name" type="text" required={true} maxLength="60" defaultValue={"Rooms – group rooms revenue"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4102">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4102" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4102">{"USALI line"}</label>
                        <input className="field__input" id="u-4102" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Rooms – Group rooms revenue"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4190" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4190-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4190-t">{"4190 · Rooms – allowances"}</h2>
                      <p className="modal__desc">{"Income › Revenue – Rooms. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4190">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4190" name="name" type="text" required={true} maxLength="60" defaultValue={"Rooms – allowances"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4190">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4190" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4190">{"USALI line"}</label>
                        <input className="field__input" id="u-4190" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Rooms – Allowances"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4201" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4201-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4201-t">{"4201 · F&B – food revenue"}</h2>
                      <p className="modal__desc">{"Income › Revenue – F&B. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4201">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4201" name="name" type="text" required={true} maxLength="60" defaultValue={"F&B – food revenue"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4201">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4201" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4201">{"USALI line"}</label>
                        <input className="field__input" id="u-4201" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"F&B – Food revenue"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4202" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4202-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4202-t">{"4202 · F&B – beverage revenue"}</h2>
                      <p className="modal__desc">{"Income › Revenue – F&B. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4202">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4202" name="name" type="text" required={true} maxLength="60" defaultValue={"F&B – beverage revenue"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4202">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4202" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4202">{"USALI line"}</label>
                        <input className="field__input" id="u-4202" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"F&B – Beverage revenue"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4203" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4203-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4203-t">{"4203 · F&B – banquet and room hire revenue"}</h2>
                      <p className="modal__desc">{"Income › Revenue – F&B. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4203">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4203" name="name" type="text" required={true} maxLength="60" defaultValue={"F&B – banquet and room hire revenue"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4203">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4203" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4203">{"USALI line"}</label>
                        <input className="field__input" id="u-4203" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"F&B – Banquet revenue"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4210" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4210-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4210-t">{"4210 · Minibar revenue (reported in F&B)"}</h2>
                      <p className="modal__desc">{"Income › Revenue – F&B. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4210">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4210" name="name" type="text" required={true} maxLength="60" defaultValue={"Minibar revenue (reported in F&B)"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4210">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4210" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4210">{"USALI line"}</label>
                        <input className="field__input" id="u-4210" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"F&B – Beverage revenue"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4301" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4301-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4301-t">{"4301 · Laundry revenue"}</h2>
                      <p className="modal__desc">{"Income › Revenue – other operated. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4301">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4301" name="name" type="text" required={true} maxLength="60" defaultValue={"Laundry revenue"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4301">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4301" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4301">{"USALI line"}</label>
                        <input className="field__input" id="u-4301" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Other operated – Laundry"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4302" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4302-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4302-t">{"4302 · Spa revenue"}</h2>
                      <p className="modal__desc">{"Income › Revenue – other operated. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4302">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4302" name="name" type="text" required={true} maxLength="60" defaultValue={"Spa revenue"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4302">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4302" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4302">{"USALI line"}</label>
                        <input className="field__input" id="u-4302" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Other operated – Spa"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4303" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4303-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4303-t">{"4303 · Transport revenue"}</h2>
                      <p className="modal__desc">{"Income › Revenue – other operated. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4303">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4303" name="name" type="text" required={true} maxLength="60" defaultValue={"Transport revenue"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4303">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4303" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4303">{"USALI line"}</label>
                        <input className="field__input" id="u-4303" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Other operated – Transport"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4401" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4401-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4401-t">{"4401 · Interest income"}</h2>
                      <p className="modal__desc">{"Income › Other income. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4401">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4401" name="name" type="text" required={true} maxLength="60" defaultValue={"Interest income"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4401">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4401" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4401">{"USALI line"}</label>
                        <input className="field__input" id="u-4401" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Non-operating – Interest income"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-4402" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-4402-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-4402-t">{"4402 · Miscellaneous income"}</h2>
                      <p className="modal__desc">{"Income › Other income. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-4402">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-4402" name="name" type="text" required={true} maxLength="60" defaultValue={"Miscellaneous income"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-4402">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-4402" name="type" required={true} defaultValue={"Revenue"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-4402">{"USALI line"}</label>
                        <input className="field__input" id="u-4402" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Miscellaneous income"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5101" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5101-t">{"5101 · Food cost"}</h2>
                      <p className="modal__desc">{"Expenses › Cost of sales. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5101">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5101" name="name" type="text" required={true} maxLength="60" defaultValue={"Food cost"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5101">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5101" name="type" required={true} defaultValue={"Cost of sales"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5101">{"USALI line"}</label>
                        <input className="field__input" id="u-5101" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"F&B – Cost of sales, food"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5102" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5102-t">{"5102 · Beverage cost"}</h2>
                      <p className="modal__desc">{"Expenses › Cost of sales. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5102">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5102" name="name" type="text" required={true} maxLength="60" defaultValue={"Beverage cost"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5102">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5102" name="type" required={true} defaultValue={"Cost of sales"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5102">{"USALI line"}</label>
                        <input className="field__input" id="u-5102" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"F&B – Cost of sales, beverage"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5103" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5103-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5103-t">{"5103 · Liquor cost"}</h2>
                      <p className="modal__desc">{"Expenses › Cost of sales. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5103">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5103" name="name" type="text" required={true} maxLength="60" defaultValue={"Liquor cost"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5103">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5103" name="type" required={true} defaultValue={"Cost of sales"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5103">{"USALI line"}</label>
                        <input className="field__input" id="u-5103" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"F&B – Cost of sales, beverage"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5104" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5104-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5104-t">{"5104 · Tobacco cost"}</h2>
                      <p className="modal__desc">{"Expenses › Cost of sales. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5104">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5104" name="name" type="text" required={true} maxLength="60" defaultValue={"Tobacco cost"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5104">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5104" name="type" required={true} defaultValue={"Cost of sales"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5104">{"USALI line"}</label>
                        <input className="field__input" id="u-5104" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"F&B – Cost of sales, other"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5105" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5105-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5105-t">{"5105 · Bar and F&B consumables"}</h2>
                      <p className="modal__desc">{"Expenses › Cost of sales. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5105">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5105" name="name" type="text" required={true} maxLength="60" defaultValue={"Bar and F&B consumables"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5105">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5105" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5105">{"USALI line"}</label>
                        <input className="field__input" id="u-5105" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"F&B – Other expenses"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5201" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5201-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5201-t">{"5201 · Housekeeping supplies consumed"}</h2>
                      <p className="modal__desc">{"Expenses › Department expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5201">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5201" name="name" type="text" required={true} maxLength="60" defaultValue={"Housekeeping supplies consumed"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5201">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5201" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5201">{"USALI line"}</label>
                        <input className="field__input" id="u-5201" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Rooms – Other expenses"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5202" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5202-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5202-t">{"5202 · Guest amenities consumed"}</h2>
                      <p className="modal__desc">{"Expenses › Department expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5202">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5202" name="name" type="text" required={true} maxLength="60" defaultValue={"Guest amenities consumed"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5202">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5202" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5202">{"USALI line"}</label>
                        <input className="field__input" id="u-5202" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Rooms – Other expenses"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5203" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5203-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5203-t">{"5203 · Linen consumed"}</h2>
                      <p className="modal__desc">{"Expenses › Department expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5203">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5203" name="name" type="text" required={true} maxLength="60" defaultValue={"Linen consumed"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5203">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5203" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5203">{"USALI line"}</label>
                        <input className="field__input" id="u-5203" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Rooms – Other expenses"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5301" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5301-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5301-t">{"5301 · Repairs and maintenance – spares"}</h2>
                      <p className="modal__desc">{"Expenses › Undistributed expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5301">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5301" name="name" type="text" required={true} maxLength="60" defaultValue={"Repairs and maintenance – spares"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5301">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5301" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5301">{"USALI line"}</label>
                        <input className="field__input" id="u-5301" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"POM – Repairs and maintenance"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5401" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5401-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5401-t">{"5401 · Printing and stationery"}</h2>
                      <p className="modal__desc">{"Expenses › Undistributed expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5401">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5401" name="name" type="text" required={true} maxLength="60" defaultValue={"Printing and stationery"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5401">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5401" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5401">{"USALI line"}</label>
                        <input className="field__input" id="u-5401" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"A&G – Other expenses"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5402" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5402-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5402-t">{"5402 · Fuel and power"}</h2>
                      <p className="modal__desc">{"Expenses › Undistributed expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5402">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5402" name="name" type="text" required={true} maxLength="60" defaultValue={"Fuel and power"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5402">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5402" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5402">{"USALI line"}</label>
                        <input className="field__input" id="u-5402" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Utilities – Electricity and fuel"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5501" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5501-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5501-t">{"5501 · Credit card commissions"}</h2>
                      <p className="modal__desc">{"Expenses › Undistributed expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5501">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5501" name="name" type="text" required={true} maxLength="60" defaultValue={"Credit card commissions"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5501">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5501" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5501">{"USALI line"}</label>
                        <input className="field__input" id="u-5501" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"A&G – Credit card commissions"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5502" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5502-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5502-t">{"5502 · OTA commissions"}</h2>
                      <p className="modal__desc">{"Expenses › Undistributed expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5502">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5502" name="name" type="text" required={true} maxLength="60" defaultValue={"OTA commissions"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5502">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5502" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5502">{"USALI line"}</label>
                        <input className="field__input" id="u-5502" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Sales and marketing – Commissions"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5601" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5601-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5601-t">{"5601 · Salaries and wages"}</h2>
                      <p className="modal__desc">{"Expenses › Payroll. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5601">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5601" name="name" type="text" required={true} maxLength="60" defaultValue={"Salaries and wages"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5601">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5601" name="type" required={true} defaultValue={"Payroll"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5601">{"USALI line"}</label>
                        <input className="field__input" id="u-5601" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Payroll – Salaries and wages"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-5602" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-5602-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-5602-t">{"5602 · PF and ESI – employer share"}</h2>
                      <p className="modal__desc">{"Expenses › Payroll. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-5602">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-5602" name="name" type="text" required={true} maxLength="60" defaultValue={"PF and ESI – employer share"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-5602">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-5602" name="type" required={true} defaultValue={"Payroll"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-5602">{"USALI line"}</label>
                        <input className="field__input" id="u-5602" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Payroll – Benefits"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-6101" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-6101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-6101-t">{"6101 · Staff welfare – staff meals"}</h2>
                      <p className="modal__desc">{"Expenses › Department expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-6101">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-6101" name="name" type="text" required={true} maxLength="60" defaultValue={"Staff welfare – staff meals"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-6101">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-6101" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-6101">{"USALI line"}</label>
                        <input className="field__input" id="u-6101" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Payroll – Employee meals"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-6102" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-6102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-6102-t">{"6102 · Officers' mess expense"}</h2>
                      <p className="modal__desc">{"Expenses › Department expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-6102">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-6102" name="name" type="text" required={true} maxLength="60" defaultValue={"Officers' mess expense"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-6102">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-6102" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-6102">{"USALI line"}</label>
                        <input className="field__input" id="u-6102" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Payroll – Employee meals"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-6201" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-6201-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-6201-t">{"6201 · Entertainment expense"}</h2>
                      <p className="modal__desc">{"Expenses › Undistributed expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-6201">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-6201" name="name" type="text" required={true} maxLength="60" defaultValue={"Entertainment expense"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-6201">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-6201" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-6201">{"USALI line"}</label>
                        <input className="field__input" id="u-6201" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"A&G – Entertainment"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-6202" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-6202-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-6202-t">{"6202 · Sales promotion expense"}</h2>
                      <p className="modal__desc">{"Expenses › Undistributed expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-6202">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-6202" name="name" type="text" required={true} maxLength="60" defaultValue={"Sales promotion expense"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-6202">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-6202" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-6202">{"USALI line"}</label>
                        <input className="field__input" id="u-6202" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Sales and marketing – Promotion"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-6203" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-6203-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-6203-t">{"6203 · Guest complimentary expense"}</h2>
                      <p className="modal__desc">{"Expenses › Undistributed expenses. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-6203">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-6203" name="name" type="text" required={true} maxLength="60" defaultValue={"Guest complimentary expense"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-6203">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-6203" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-6203">{"USALI line"}</label>
                        <input className="field__input" id="u-6203" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Sales and marketing – Complimentary"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-6301" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-6301-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-6301-t">{"6301 · Depreciation"}</h2>
                      <p className="modal__desc">{"Expenses › Non-operating. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-6301">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-6301" name="name" type="text" required={true} maxLength="60" defaultValue={"Depreciation"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-6301">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-6301" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-6301">{"USALI line"}</label>
                        <input className="field__input" id="u-6301" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"Non-operating – Depreciation"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-6401" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-6401-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-6401-t">{"6401 · Bank charges"}</h2>
                      <p className="modal__desc">{"Expenses › Non-operating. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-6401">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-6401" name="name" type="text" required={true} maxLength="60" defaultValue={"Bank charges"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-6401">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-6401" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-6401">{"USALI line"}</label>
                        <input className="field__input" id="u-6401" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={"A&G – Bank charges"} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" defaultChecked={true} />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <div className="modal" id="e-7101" data-code="ACS-01-edit" role="dialog" aria-modal="true" aria-labelledby="e-7101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger-setup/acs-01-chart-of-accounts/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="e-7101-t">{"7101 · Rounding off"}</h2>
                      <p className="modal__desc">{"Expenses › Non-operating. The code cannot be changed once a posting uses it."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field">
                        <label className="field__label" htmlFor="n-7101">
                          {"Name "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="n-7101" name="name" type="text" required={true} maxLength="60" defaultValue={"Rounding off"} />
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="t-7101">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="t-7101" name="type" required={true} defaultValue={"Expense"}>
                            <option>{"Bank"}</option>
                            <option>{"Cash"}</option>
                            <option>{"Receivable control"}</option>
                            <option>{"Payable control"}</option>
                            <option>{"Inventory"}</option>
                            <option>{"Fixed asset"}</option>
                            <option>{"Revenue"}</option>
                            <option>{"Cost of sales"}</option>
                            <option>{"Payroll"}</option>
                            <option>{"Expense"}</option>
                            <option>{"Tax"}</option>
                            <option>{"Suspense"}</option>
                            <option>{"Clearing"}</option>
                            <option>{"Equity"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--wide">
                        <label className="field__label" htmlFor="u-7101">{"USALI line"}</label>
                        <input className="field__input" id="u-7101" name="usali" type="text" maxLength="80" placeholder="e.g. Rooms – Transient rooms revenue" defaultValue={""} />
                        <span className="field__hint">{"The schedule and line of the Uniform System of Accounts for the Lodging Industry"}</span>
                      </div>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="dept" />
                        <span className="check__box" />
                        {"Postings must carry a department"}
                      </label>
                      <label className="check">
                        <input className="check__input" type="checkbox" name="active" defaultChecked={true} />
                        <span className="check__box" />
                        {"Active"}
                      </label>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the setup audit log with the old and new values (ACS-X02)."}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save account"}</button>
                  </div>
                </form>
              </div>
              <details className="hk-sys" data-code="ACS-X02">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#cog" />
                  </svg>
                  {"System – what runs automatically on this screen"}
                </summary>
                <ul>
                  <li data-code="ACS-X02">
                    <b>{"ACS-X02 · Setup audit logger"}</b>
                    {" – Every new, changed or deactivated account is written to the audit log with the old and new values."}
                  </li>
                </ul>
              </details>
              <div className="fd-toast" id="t-saved" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Account saved"}
                  <small>{"The changes are in the chart; postings already made keep the account code. Written to the setup audit log with the old and new values (ACS-X02)."}</small>
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
                  {"Account added – 5503 Travel agent commissions"}
                  <small>{"Expense account, USALI line Sales and marketing – Commissions, department required. It can now be used in posting rules (ACS-03). Written to the setup audit log with the old and new values (ACS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-imported" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#upload" />
                </svg>
                <div className="fd-toast__text">
                  {"Chart imported from chart-of-accounts-2026.xlsx"}
                  <small>{"83 rows read; 0 duplicate codes; 0 rows without a type. Review the new accounts before posting. Written to the setup audit log with the old and new values (ACS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-loaded" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#book-open" />
                </svg>
                <div className="fd-toast__text">
                  {"USALI template loaded for review"}
                  <small>{"The proposed accounts are shown as a draft; nothing is posted until the Financial Controller confirms. The 8 accounts already used by other modules keep their codes. Written to the setup audit log with the old and new values (ACS-X02)."}</small>
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
