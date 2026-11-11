// GENERATED from public/general-ledger-setup/acs-03-posting-rules/index.html by scripts/convert_legacy.py.
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
    "href": "/general-ledger-setup/acs-03-posting-rules/acs-03-posting-rules.css",
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

export default function GeneralLedgerSetupAcs03PostingRules() {
  return (
    <ScreenShell title="Posting Rules" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="ACS-03" data-code="ACS-03" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="ACS-03" tabIndex="-1">
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
                        <span aria-current="page">{"Posting Rules"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Posting Rules"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"ACS-03"}</span>
                  <div className="page-header__actions">
                    <label className="btn btn--primary add-btn" htmlFor="add-1" role="button">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add rule"}
                    </label>
                  </div>
                </div>
              </header>
              <nav className="ccs-nav" aria-label="General Ledger Setup">
                <Link to={"/general-ledger-setup/acs-01-chart-of-accounts"}>{"Accounts"}</Link>
                <Link to={"/general-ledger-setup/acs-02-departments-and-cost-centres"}>{"Departments"}</Link>
                <Link aria-current="page" to={"/general-ledger-setup/acs-03-posting-rules"}>{"Posting Rules"}</Link>
                <Link to={"/general-ledger-setup/acs-04-vouchers-limits-and-periods"}>{"Vouchers & Periods"}</Link>
                <Link to={"/general-ledger-setup/acs-05-asset-classes-and-export-mapping"}>{"Assets & Export"}</Link>
              </nav>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="mapped" />
                <i className="pm" id="added" />
                <i className="pm" id="tested" />
              </div>
              <ul className="cc-kpis">
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"29"}</span>
                  <span className="cc-kpi__l">{"Posting rules"}</span>
                  <span className="cc-kpi__s">{"charge codes, payment modes, taxes, stores, payroll"}</span>
                </li>
                <li className="cc-kpi cc-kpi--bad">
                  <span className="cc-kpi__v">{"3"}</span>
                  <span className="cc-kpi__l">{"Codes not mapped"}</span>
                  <span className="cc-kpi__s">{"18 postings wait in suspense 2999"}</span>
                </li>
                <li className="cc-kpi cc-kpi--ok">
                  <span className="cc-kpi__v">{"0"}</span>
                  <span className="cc-kpi__l">{"Unbalanced journals"}</span>
                  <span className="cc-kpi__s">{"every rule debits and credits"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"22-10-2026 06:00"}</span>
                  <span className="cc-kpi__l">{"Last completeness check"}</span>
                  <span className="cc-kpi__s">{"ACS-X01"}</span>
                </li>
              </ul>
              <section className="fd-sec cc-sec ur-box" id="sec-un" data-code="ACS-03-unmapped">
                <h2 className="fd-sec__t">{"Not mapped yet"}</h2>
                <p className="fd-sec__d">{"Codes that were used on a bill but have no rule. Their amounts post to the suspense account 2999 until you map them."}</p>
                <form className="prs-form" action="/general-ledger-setup/acs-03-posting-rules/#mapped" method="get">
                  <div className="un-before">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table" data-code="ACS-03-unmapped" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Charge codes used but not mapped"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Code"}</th>
                              <th scope="col">{"Used in"}</th>
                              <th scope="col" className="dt__th--right">{"Postings"}</th>
                              <th scope="col">{"Now"}</th>
                              <th scope="col">{"Credit account"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="un-row">
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <b className="num">{"BARF"}</b>
                                <span className="fd-sub">{"Bar food 5 %"}</span>
                              </td>
                              <td className="dt__td" data-label="Used in" data-w2="">{"Cochin Trade Bar"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Postings" data-w2="">{"14"}</td>
                              <td className="dt__td" data-label="Now">
                                <span className="fd-sub">{"Posting to 2999 Suspense since 15-10-2026"}</span>
                              </td>
                              <td className="dt__td" data-label="Credit account" data-w="">
                                <label className="sr-only" htmlFor="um-BARF">{"Credit account for BARF"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="um-BARF" name="um-BARF" defaultValue={"4201"}>
                                    <option value="1101">{"1101 · Cash – main cash"}</option>
                                    <option value="1102">{"1102 · Cash – front office float"}</option>
                                    <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                    <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                    <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                    <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                    <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                    <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                    <option value="1202">{"1202 · Bank – Federal current"}</option>
                                    <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                    <option value="1210">{"1210 · Fixed deposits"}</option>
                                    <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                    <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                    <option value="1403">{"1403 · TDS receivable"}</option>
                                    <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                    <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                    <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                    <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                    <option value="1501">{"1501 · Land and building"}</option>
                                    <option value="1502">{"1502 · Plant and machinery"}</option>
                                    <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                    <option value="1504">{"1504 · Kitchen equipment"}</option>
                                    <option value="1505">{"1505 · Computers"}</option>
                                    <option value="1506">{"1506 · Vehicles"}</option>
                                    <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                    <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                    <option value="2201">{"2201 · Trade creditors"}</option>
                                    <option value="2202">{"2202 · Guest advance deposits"}</option>
                                    <option value="2301">{"2301 · GST output – CGST"}</option>
                                    <option value="2302">{"2302 · GST output – SGST"}</option>
                                    <option value="2303">{"2303 · GST output – IGST"}</option>
                                    <option value="2310">{"2310 · TDS payable"}</option>
                                    <option value="2320">{"2320 · PF and ESI payable"}</option>
                                    <option value="2330">{"2330 · Salaries payable"}</option>
                                    <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                    <option value="3101">{"3101 · Share capital"}</option>
                                    <option value="3201">{"3201 · Retained earnings"}</option>
                                    <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                    <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                    <option value="4190">{"4190 · Rooms – allowances"}</option>
                                    <option value="4201">{"4201 · F&B – food revenue"}</option>
                                    <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                    <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                    <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                    <option value="4301">{"4301 · Laundry revenue"}</option>
                                    <option value="4302">{"4302 · Spa revenue"}</option>
                                    <option value="4303">{"4303 · Transport revenue"}</option>
                                    <option value="4401">{"4401 · Interest income"}</option>
                                    <option value="4402">{"4402 · Miscellaneous income"}</option>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                    <option value="5501">{"5501 · Credit card commissions"}</option>
                                    <option value="5502">{"5502 · OTA commissions"}</option>
                                    <option value="5601">{"5601 · Salaries and wages"}</option>
                                    <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                    <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                    <option value="6102">{"6102 · Officers' mess expense"}</option>
                                    <option value="6201">{"6201 · Entertainment expense"}</option>
                                    <option value="6202">{"6202 · Sales promotion expense"}</option>
                                    <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                    <option value="6301">{"6301 · Depreciation"}</option>
                                    <option value="6401">{"6401 · Bank charges"}</option>
                                    <option value="7101">{"7101 · Rounding off"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                            </tr>
                            <tr className="un-row">
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <b className="num">{"CAKE"}</b>
                                <span className="fd-sub">{"Cake order"}</span>
                              </td>
                              <td className="dt__td" data-label="Used in" data-w2="">{"Travancore Restaurant"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Postings" data-w2="">{"3"}</td>
                              <td className="dt__td" data-label="Now">
                                <span className="fd-sub">{"Posting to 2999 Suspense since 15-10-2026"}</span>
                              </td>
                              <td className="dt__td" data-label="Credit account" data-w="">
                                <label className="sr-only" htmlFor="um-CAKE">{"Credit account for CAKE"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="um-CAKE" name="um-CAKE" defaultValue={"4201"}>
                                    <option value="1101">{"1101 · Cash – main cash"}</option>
                                    <option value="1102">{"1102 · Cash – front office float"}</option>
                                    <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                    <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                    <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                    <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                    <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                    <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                    <option value="1202">{"1202 · Bank – Federal current"}</option>
                                    <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                    <option value="1210">{"1210 · Fixed deposits"}</option>
                                    <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                    <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                    <option value="1403">{"1403 · TDS receivable"}</option>
                                    <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                    <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                    <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                    <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                    <option value="1501">{"1501 · Land and building"}</option>
                                    <option value="1502">{"1502 · Plant and machinery"}</option>
                                    <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                    <option value="1504">{"1504 · Kitchen equipment"}</option>
                                    <option value="1505">{"1505 · Computers"}</option>
                                    <option value="1506">{"1506 · Vehicles"}</option>
                                    <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                    <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                    <option value="2201">{"2201 · Trade creditors"}</option>
                                    <option value="2202">{"2202 · Guest advance deposits"}</option>
                                    <option value="2301">{"2301 · GST output – CGST"}</option>
                                    <option value="2302">{"2302 · GST output – SGST"}</option>
                                    <option value="2303">{"2303 · GST output – IGST"}</option>
                                    <option value="2310">{"2310 · TDS payable"}</option>
                                    <option value="2320">{"2320 · PF and ESI payable"}</option>
                                    <option value="2330">{"2330 · Salaries payable"}</option>
                                    <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                    <option value="3101">{"3101 · Share capital"}</option>
                                    <option value="3201">{"3201 · Retained earnings"}</option>
                                    <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                    <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                    <option value="4190">{"4190 · Rooms – allowances"}</option>
                                    <option value="4201">{"4201 · F&B – food revenue"}</option>
                                    <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                    <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                    <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                    <option value="4301">{"4301 · Laundry revenue"}</option>
                                    <option value="4302">{"4302 · Spa revenue"}</option>
                                    <option value="4303">{"4303 · Transport revenue"}</option>
                                    <option value="4401">{"4401 · Interest income"}</option>
                                    <option value="4402">{"4402 · Miscellaneous income"}</option>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                    <option value="5501">{"5501 · Credit card commissions"}</option>
                                    <option value="5502">{"5502 · OTA commissions"}</option>
                                    <option value="5601">{"5601 · Salaries and wages"}</option>
                                    <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                    <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                    <option value="6102">{"6102 · Officers' mess expense"}</option>
                                    <option value="6201">{"6201 · Entertainment expense"}</option>
                                    <option value="6202">{"6202 · Sales promotion expense"}</option>
                                    <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                    <option value="6301">{"6301 · Depreciation"}</option>
                                    <option value="6401">{"6401 · Bank charges"}</option>
                                    <option value="7101">{"7101 · Rounding off"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                            </tr>
                            <tr className="un-row">
                              <td className="dt__td nw" data-label="Code" data-w2="" data-t="">
                                <b className="num">{"GALA"}</b>
                                <span className="fd-sub">{"Gala dinner"}</span>
                              </td>
                              <td className="dt__td" data-label="Used in" data-w2="">{"Travancore Restaurant"}</td>
                              <td className="dt__td dt__td--right nw num" data-label="Postings" data-w2="">{"1"}</td>
                              <td className="dt__td" data-label="Now">
                                <span className="fd-sub">{"Posting to 2999 Suspense since 15-10-2026"}</span>
                              </td>
                              <td className="dt__td" data-label="Credit account" data-w="">
                                <label className="sr-only" htmlFor="um-GALA">{"Credit account for GALA"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="um-GALA" name="um-GALA" defaultValue={"4203"}>
                                    <option value="1101">{"1101 · Cash – main cash"}</option>
                                    <option value="1102">{"1102 · Cash – front office float"}</option>
                                    <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                    <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                    <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                    <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                    <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                    <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                    <option value="1202">{"1202 · Bank – Federal current"}</option>
                                    <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                    <option value="1210">{"1210 · Fixed deposits"}</option>
                                    <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                    <option value="1301">{"1301 · Inventory – Food"}</option>
                                    <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                    <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                    <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                    <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                    <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                    <option value="1307">{"1307 · Inventory – Linen"}</option>
                                    <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                    <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                    <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                    <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                    <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                    <option value="1403">{"1403 · TDS receivable"}</option>
                                    <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                    <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                    <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                    <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                    <option value="1501">{"1501 · Land and building"}</option>
                                    <option value="1502">{"1502 · Plant and machinery"}</option>
                                    <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                    <option value="1504">{"1504 · Kitchen equipment"}</option>
                                    <option value="1505">{"1505 · Computers"}</option>
                                    <option value="1506">{"1506 · Vehicles"}</option>
                                    <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                    <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                    <option value="2201">{"2201 · Trade creditors"}</option>
                                    <option value="2202">{"2202 · Guest advance deposits"}</option>
                                    <option value="2301">{"2301 · GST output – CGST"}</option>
                                    <option value="2302">{"2302 · GST output – SGST"}</option>
                                    <option value="2303">{"2303 · GST output – IGST"}</option>
                                    <option value="2310">{"2310 · TDS payable"}</option>
                                    <option value="2320">{"2320 · PF and ESI payable"}</option>
                                    <option value="2330">{"2330 · Salaries payable"}</option>
                                    <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                    <option value="3101">{"3101 · Share capital"}</option>
                                    <option value="3201">{"3201 · Retained earnings"}</option>
                                    <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                    <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                    <option value="4190">{"4190 · Rooms – allowances"}</option>
                                    <option value="4201">{"4201 · F&B – food revenue"}</option>
                                    <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                    <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                    <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                    <option value="4301">{"4301 · Laundry revenue"}</option>
                                    <option value="4302">{"4302 · Spa revenue"}</option>
                                    <option value="4303">{"4303 · Transport revenue"}</option>
                                    <option value="4401">{"4401 · Interest income"}</option>
                                    <option value="4402">{"4402 · Miscellaneous income"}</option>
                                    <option value="5101">{"5101 · Food cost"}</option>
                                    <option value="5102">{"5102 · Beverage cost"}</option>
                                    <option value="5103">{"5103 · Liquor cost"}</option>
                                    <option value="5104">{"5104 · Tobacco cost"}</option>
                                    <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                    <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                    <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                    <option value="5203">{"5203 · Linen consumed"}</option>
                                    <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                    <option value="5401">{"5401 · Printing and stationery"}</option>
                                    <option value="5402">{"5402 · Fuel and power"}</option>
                                    <option value="5501">{"5501 · Credit card commissions"}</option>
                                    <option value="5502">{"5502 · OTA commissions"}</option>
                                    <option value="5601">{"5601 · Salaries and wages"}</option>
                                    <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                    <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                    <option value="6102">{"6102 · Officers' mess expense"}</option>
                                    <option value="6201">{"6201 · Entertainment expense"}</option>
                                    <option value="6202">{"6202 · Sales promotion expense"}</option>
                                    <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                    <option value="6301">{"6301 · Depreciation"}</option>
                                    <option value="6401">{"6401 · Bank charges"}</option>
                                    <option value="7101">{"7101 · Rounding off"}</option>
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
                    <div className="dd-foot">
                      <span className="dd-foot__note">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#alert" />
                        </svg>
                        <span>{"Debit is the city ledger 1401 for all three; the department comes from the outlet."}</span>
                      </span>
                      <button className="btn btn--primary" type="submit">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#link" />
                        </svg>
                        {"Map"}
                      </button>
                    </div>
                  </div>
                  <p className="cc-now un-after">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#check-circle" />
                    </svg>
                    <span>
                      {"All 3 codes are mapped. The 18 postings are moved from suspense 2999 to their accounts in the next run (ACS-X01 tonight), or at once with Re-post in "}
                      <a className="fd-link" href="/general-ledger/ac-02-automatic-postings/#v-att">{"Automatic Postings (AC-02)"}</a>
                      {"."}
                    </span>
                  </p>
                </form>
              </section>
              <input className="add-sw" type="checkbox" id="add-1" aria-label="Show the form" />
              <div className="add-panel prs-add">
                <form className="prs-add__f" action="/general-ledger-setup/acs-03-posting-rules/#added" method="get">
                  <div className="s-grid2 la-cols la-cols--5">
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="ar-s">
                        {"Source "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="ar-s" name="ar-s" required={true} defaultValue={"Charge code"}>
                          <option value="Charge code">{"Charge code"}</option>
                          <option value="Payment mode">{"Payment mode"}</option>
                          <option value="Tax code">{"Tax code"}</option>
                          <option value="Item category">{"Item category"}</option>
                          <option value="Payroll head">{"Payroll head"}</option>
                          <option value="Deposit">{"Deposit"}</option>
                          <option value="City ledger">{"City ledger"}</option>
                          <option value="Paid-out">{"Paid-out"}</option>
                          <option value="Allowance">{"Allowance"}</option>
                          <option value="Rounding">{"Rounding"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="ar-c">
                        {"Code "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="ar-c" name="code" type="text" required={true} maxLength="20" defaultValue={"SPA"} />
                      <span className="field__hint">{"From the source master (Front Desk Setup, FDS-08)"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="ar-d">
                        {"Debit account "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="ar-d" name="ar-d" required={true} defaultValue={"1401"}>
                          <option value="1101">{"1101 · Cash – main cash"}</option>
                          <option value="1102">{"1102 · Cash – front office float"}</option>
                          <option value="1103">{"1103 · Cash – outlet floats"}</option>
                          <option value="1104">{"1104 · Cash – stores imprest"}</option>
                          <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                          <option value="1106">{"1106 · Cash – HR imprest"}</option>
                          <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                          <option value="1201">{"1201 · Bank – HDFC current"}</option>
                          <option value="1202">{"1202 · Bank – Federal current"}</option>
                          <option value="1203">{"1203 · Bank – ICICI current"}</option>
                          <option value="1210">{"1210 · Fixed deposits"}</option>
                          <option value="1215">{"1215 · Escrow – group deposits"}</option>
                          <option value="1301">{"1301 · Inventory – Food"}</option>
                          <option value="1302">{"1302 · Inventory – Beverages"}</option>
                          <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                          <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                          <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                          <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                          <option value="1307">{"1307 · Inventory – Linen"}</option>
                          <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                          <option value="1309">{"1309 · Inventory – Stationery"}</option>
                          <option value="1310">{"1310 · Inventory – Fuel"}</option>
                          <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                          <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                          <option value="1403">{"1403 · TDS receivable"}</option>
                          <option value="1404">{"1404 · GST input credit – CGST"}</option>
                          <option value="1405">{"1405 · GST input credit – SGST"}</option>
                          <option value="1406">{"1406 · GST input credit – IGST"}</option>
                          <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                          <option value="1501">{"1501 · Land and building"}</option>
                          <option value="1502">{"1502 · Plant and machinery"}</option>
                          <option value="1503">{"1503 · Furniture and fixtures"}</option>
                          <option value="1504">{"1504 · Kitchen equipment"}</option>
                          <option value="1505">{"1505 · Computers"}</option>
                          <option value="1506">{"1506 · Vehicles"}</option>
                          <option value="1550">{"1550 · Accumulated depreciation"}</option>
                          <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                          <option value="2201">{"2201 · Trade creditors"}</option>
                          <option value="2202">{"2202 · Guest advance deposits"}</option>
                          <option value="2301">{"2301 · GST output – CGST"}</option>
                          <option value="2302">{"2302 · GST output – SGST"}</option>
                          <option value="2303">{"2303 · GST output – IGST"}</option>
                          <option value="2310">{"2310 · TDS payable"}</option>
                          <option value="2320">{"2320 · PF and ESI payable"}</option>
                          <option value="2330">{"2330 · Salaries payable"}</option>
                          <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                          <option value="3101">{"3101 · Share capital"}</option>
                          <option value="3201">{"3201 · Retained earnings"}</option>
                          <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                          <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                          <option value="4190">{"4190 · Rooms – allowances"}</option>
                          <option value="4201">{"4201 · F&B – food revenue"}</option>
                          <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                          <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                          <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                          <option value="4301">{"4301 · Laundry revenue"}</option>
                          <option value="4302">{"4302 · Spa revenue"}</option>
                          <option value="4303">{"4303 · Transport revenue"}</option>
                          <option value="4401">{"4401 · Interest income"}</option>
                          <option value="4402">{"4402 · Miscellaneous income"}</option>
                          <option value="5101">{"5101 · Food cost"}</option>
                          <option value="5102">{"5102 · Beverage cost"}</option>
                          <option value="5103">{"5103 · Liquor cost"}</option>
                          <option value="5104">{"5104 · Tobacco cost"}</option>
                          <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                          <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                          <option value="5202">{"5202 · Guest amenities consumed"}</option>
                          <option value="5203">{"5203 · Linen consumed"}</option>
                          <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                          <option value="5401">{"5401 · Printing and stationery"}</option>
                          <option value="5402">{"5402 · Fuel and power"}</option>
                          <option value="5501">{"5501 · Credit card commissions"}</option>
                          <option value="5502">{"5502 · OTA commissions"}</option>
                          <option value="5601">{"5601 · Salaries and wages"}</option>
                          <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                          <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                          <option value="6102">{"6102 · Officers' mess expense"}</option>
                          <option value="6201">{"6201 · Entertainment expense"}</option>
                          <option value="6202">{"6202 · Sales promotion expense"}</option>
                          <option value="6203">{"6203 · Guest complimentary expense"}</option>
                          <option value="6301">{"6301 · Depreciation"}</option>
                          <option value="6401">{"6401 · Bank charges"}</option>
                          <option value="7101">{"7101 · Rounding off"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="ar-r">
                        {"Credit account "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="ar-r" name="ar-r" required={true} defaultValue={"4302"}>
                          <option value="1101">{"1101 · Cash – main cash"}</option>
                          <option value="1102">{"1102 · Cash – front office float"}</option>
                          <option value="1103">{"1103 · Cash – outlet floats"}</option>
                          <option value="1104">{"1104 · Cash – stores imprest"}</option>
                          <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                          <option value="1106">{"1106 · Cash – HR imprest"}</option>
                          <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                          <option value="1201">{"1201 · Bank – HDFC current"}</option>
                          <option value="1202">{"1202 · Bank – Federal current"}</option>
                          <option value="1203">{"1203 · Bank – ICICI current"}</option>
                          <option value="1210">{"1210 · Fixed deposits"}</option>
                          <option value="1215">{"1215 · Escrow – group deposits"}</option>
                          <option value="1301">{"1301 · Inventory – Food"}</option>
                          <option value="1302">{"1302 · Inventory – Beverages"}</option>
                          <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                          <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                          <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                          <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                          <option value="1307">{"1307 · Inventory – Linen"}</option>
                          <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                          <option value="1309">{"1309 · Inventory – Stationery"}</option>
                          <option value="1310">{"1310 · Inventory – Fuel"}</option>
                          <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                          <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                          <option value="1403">{"1403 · TDS receivable"}</option>
                          <option value="1404">{"1404 · GST input credit – CGST"}</option>
                          <option value="1405">{"1405 · GST input credit – SGST"}</option>
                          <option value="1406">{"1406 · GST input credit – IGST"}</option>
                          <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                          <option value="1501">{"1501 · Land and building"}</option>
                          <option value="1502">{"1502 · Plant and machinery"}</option>
                          <option value="1503">{"1503 · Furniture and fixtures"}</option>
                          <option value="1504">{"1504 · Kitchen equipment"}</option>
                          <option value="1505">{"1505 · Computers"}</option>
                          <option value="1506">{"1506 · Vehicles"}</option>
                          <option value="1550">{"1550 · Accumulated depreciation"}</option>
                          <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                          <option value="2201">{"2201 · Trade creditors"}</option>
                          <option value="2202">{"2202 · Guest advance deposits"}</option>
                          <option value="2301">{"2301 · GST output – CGST"}</option>
                          <option value="2302">{"2302 · GST output – SGST"}</option>
                          <option value="2303">{"2303 · GST output – IGST"}</option>
                          <option value="2310">{"2310 · TDS payable"}</option>
                          <option value="2320">{"2320 · PF and ESI payable"}</option>
                          <option value="2330">{"2330 · Salaries payable"}</option>
                          <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                          <option value="3101">{"3101 · Share capital"}</option>
                          <option value="3201">{"3201 · Retained earnings"}</option>
                          <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                          <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                          <option value="4190">{"4190 · Rooms – allowances"}</option>
                          <option value="4201">{"4201 · F&B – food revenue"}</option>
                          <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                          <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                          <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                          <option value="4301">{"4301 · Laundry revenue"}</option>
                          <option value="4302">{"4302 · Spa revenue"}</option>
                          <option value="4303">{"4303 · Transport revenue"}</option>
                          <option value="4401">{"4401 · Interest income"}</option>
                          <option value="4402">{"4402 · Miscellaneous income"}</option>
                          <option value="5101">{"5101 · Food cost"}</option>
                          <option value="5102">{"5102 · Beverage cost"}</option>
                          <option value="5103">{"5103 · Liquor cost"}</option>
                          <option value="5104">{"5104 · Tobacco cost"}</option>
                          <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                          <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                          <option value="5202">{"5202 · Guest amenities consumed"}</option>
                          <option value="5203">{"5203 · Linen consumed"}</option>
                          <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                          <option value="5401">{"5401 · Printing and stationery"}</option>
                          <option value="5402">{"5402 · Fuel and power"}</option>
                          <option value="5501">{"5501 · Credit card commissions"}</option>
                          <option value="5502">{"5502 · OTA commissions"}</option>
                          <option value="5601">{"5601 · Salaries and wages"}</option>
                          <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                          <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                          <option value="6102">{"6102 · Officers' mess expense"}</option>
                          <option value="6201">{"6201 · Entertainment expense"}</option>
                          <option value="6202">{"6202 · Sales promotion expense"}</option>
                          <option value="6203">{"6203 · Guest complimentary expense"}</option>
                          <option value="6301">{"6301 · Depreciation"}</option>
                          <option value="6401">{"6401 · Bank charges"}</option>
                          <option value="7101">{"7101 · Rounding off"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="ar-p">{"Department"}</label>
                      <input className="field__input" id="ar-p" name="department" type="text" maxLength="30" defaultValue={"Spa"} />
                      <span className="field__hint">{"Fixed department, or leave blank to take it from the source (outlet)"}</span>
                    </div>
                  </div>
                  <div className="prs-add__a">
                    <span className="fd-muted">{"One rule for each code of a source"}</span>
                    <button className="btn btn--primary" type="submit">{"Add"}</button>
                  </div>
                </form>
              </div>
              <section className="fd-sec cc-sec" id="sec-rules" data-code="ACS-03-list">
                <h2 className="fd-sec__t">{"Posting rules"}</h2>
                <p className="fd-sec__d">{"Every charge code, payment mode, tax and stores category is mapped to a debit and a credit account. The department is fixed or taken from the outlet."}</p>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="dt__table" data-code="ACS-03-rules" data-nosort="" data-mc="">
                      <caption className="sr-only">{"Posting rules by source and code"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Source"}</th>
                          <th scope="col">{"Code"}</th>
                          <th scope="col">{"Debit account"}</th>
                          <th scope="col">{"Credit account"}</th>
                          <th scope="col">{"Department"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"ROOM"}</b>
                            <span className="fd-sub">{"Room charge"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-0">{"Debit account of ROOM"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-0" name="rd-0" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-0">{"Credit account of ROOM"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-0" name="rc-0" defaultValue={"4101"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"Rooms"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"ROOM-GRP"}</b>
                            <span className="fd-sub">{"Room charge – group"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-1">{"Debit account of ROOM-GRP"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-1" name="rd-1" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-1">{"Credit account of ROOM-GRP"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-1" name="rc-1" defaultValue={"4102"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"Rooms"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"BF"}</b>
                            <span className="fd-sub">{"Breakfast ₹799 (CP)"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-2">{"Debit account of BF"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-2" name="rd-2" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-2">{"Credit account of BF"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-2" name="rc-2" defaultValue={"4201"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"From the outlet"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"TRV"}</b>
                            <span className="fd-sub">{"Travancore – food 5 %"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-3">{"Debit account of TRV"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-3" name="rd-3" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-3">{"Credit account of TRV"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-3" name="rc-3" defaultValue={"4201"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"TRV"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"SFG"}</b>
                            <span className="fd-sub">{"Seafood Grill – food 5 %"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-4">{"Debit account of SFG"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-4" name="rd-4" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-4">{"Credit account of SFG"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-4" name="rc-4" defaultValue={"4201"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"SFG"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"BAR"}</b>
                            <span className="fd-sub">{"Bar – liquor, outside GST"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-5">{"Debit account of BAR"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-5" name="rd-5" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-5">{"Credit account of BAR"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-5" name="rc-5" defaultValue={"4202"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"BAR"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"IRD"}</b>
                            <span className="fd-sub">{"In-room dining – food 5 %"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-6">{"Debit account of IRD"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-6" name="rd-6" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-6">{"Credit account of IRD"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-6" name="rc-6" defaultValue={"4201"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"IRD"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"MINIBAR"}</b>
                            <span className="fd-sub">{"Minibar"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-7">{"Debit account of MINIBAR"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-7" name="rd-7" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-7">{"Credit account of MINIBAR"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-7" name="rc-7" defaultValue={"4210"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"MBR"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"LAUNDRY"}</b>
                            <span className="fd-sub">{"Laundry"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-8">{"Debit account of LAUNDRY"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-8" name="rd-8" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-8">{"Credit account of LAUNDRY"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-8" name="rc-8" defaultValue={"4301"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"LAU"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"TRANSFER"}</b>
                            <span className="fd-sub">{"Airport transfer ₹1,940"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-9">{"Debit account of TRANSFER"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-9" name="rd-9" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-9">{"Credit account of TRANSFER"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-9" name="rc-9" defaultValue={"4303"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"TRN"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"BANQ"}</b>
                            <span className="fd-sub">{"Banquet and hall hire"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-10">{"Debit account of BANQ"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-10" name="rd-10" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-10">{"Credit account of BANQ"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-10" name="rc-10" defaultValue={"4203"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"BNQ"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Payment mode"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"Cash"}</b>
                            <span className="fd-sub">{"Cash at the front desk"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-11">{"Debit account of Cash"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-11" name="rd-11" defaultValue={"1102"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-11">{"Credit account of Cash"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-11" name="rc-11" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Payment mode"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"Card"}</b>
                            <span className="fd-sub">{"Card machines"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-12">{"Debit account of Card"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-12" name="rd-12" defaultValue={"1410"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-12">{"Credit account of Card"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-12" name="rc-12" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Payment mode"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"UPI"}</b>
                            <span className="fd-sub">{"UPI QR"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-13">{"Debit account of UPI"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-13" name="rd-13" defaultValue={"1410"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-13">{"Credit account of UPI"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-13" name="rc-13" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Payment mode"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"NEFT / RTGS"}</b>
                            <span className="fd-sub">{"Bank transfer"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-14">{"Debit account of NEFT / RTGS"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-14" name="rd-14" defaultValue={"1201"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-14">{"Credit account of NEFT / RTGS"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-14" name="rc-14" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Payment mode"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"Cheque"}</b>
                            <span className="fd-sub">{"Cheque"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-15">{"Debit account of Cheque"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-15" name="rd-15" defaultValue={"1201"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-15">{"Credit account of Cheque"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-15" name="rc-15" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Tax code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"CGST"}</b>
                            <span className="fd-sub">{"CGST 2.5 % / 9 %"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-16">{"Debit account of CGST"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-16" name="rd-16" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-16">{"Credit account of CGST"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-16" name="rc-16" defaultValue={"2301"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Tax code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"SGST"}</b>
                            <span className="fd-sub">{"SGST 2.5 % / 9 %"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-17">{"Debit account of SGST"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-17" name="rd-17" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-17">{"Credit account of SGST"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-17" name="rc-17" defaultValue={"2302"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Tax code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"IGST"}</b>
                            <span className="fd-sub">{"IGST 18 %"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-18">{"Debit account of IGST"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-18" name="rd-18" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-18">{"Credit account of IGST"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-18" name="rc-18" defaultValue={"2303"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Item category"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"Food"}</b>
                            <span className="fd-sub">{"Stores issue – food"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-19">{"Debit account of Food"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-19" name="rd-19" defaultValue={"5101"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-19">{"Credit account of Food"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-19" name="rc-19" defaultValue={"1301"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department">
                            <span className="fd-sub">{"From the receiving department"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Item category"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"Liquor, beer and wine"}</b>
                            <span className="fd-sub">{"Stores issue – liquor"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-20">{"Debit account of Liquor, beer and wine"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-20" name="rd-20" defaultValue={"5103"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-20">{"Credit account of Liquor, beer and wine"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-20" name="rc-20" defaultValue={"1303"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department">
                            <span className="fd-sub">{"From the receiving department"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Item category"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"Housekeeping supplies"}</b>
                            <span className="fd-sub">{"Stores issue – supplies"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-21">{"Debit account of Housekeeping supplies"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-21" name="rd-21" defaultValue={"5201"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-21">{"Credit account of Housekeeping supplies"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-21" name="rc-21" defaultValue={"1305"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department">
                            <span className="fd-sub">{"From the receiving department"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Payroll head"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"Basic and allowances"}</b>
                            <span className="fd-sub">{"Salaries"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-22">{"Debit account of Basic and allowances"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-22" name="rd-22" defaultValue={"5601"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-22">{"Credit account of Basic and allowances"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-22" name="rc-22" defaultValue={"2330"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"From the employee"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Payroll head"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"Employer PF / ESI"}</b>
                            <span className="fd-sub">{"PF and ESI share"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-23">{"Debit account of Employer PF / ESI"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-23" name="rd-23" defaultValue={"5602"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-23">{"Credit account of Employer PF / ESI"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-23" name="rc-23" defaultValue={"2320"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"From the employee"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-t="">{"Deposit"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"Advance deposit"}</b>
                            <span className="fd-sub">{"Guest and banquet advances"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-24">{"Debit account of Advance deposit"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-24" name="rd-24" defaultValue={"1201"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-24">{"Credit account of Advance deposit"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-24" name="rc-24" defaultValue={"2202"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"City ledger"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"Transfer"}</b>
                            <span className="fd-sub">{"Bill moved to the city ledger"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-25">{"Debit account of Transfer"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-25" name="rd-25" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-25">{"Credit account of Transfer"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-25" name="rc-25" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Paid-out"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"Petty paid-out"}</b>
                            <span className="fd-sub">{"Cash paid out of the till"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-26">{"Debit account of Petty paid-out"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-26" name="rd-26" defaultValue={"6203"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-26">{"Credit account of Petty paid-out"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-26" name="rc-26" defaultValue={"1102"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"From the paid-out"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Allowance"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"Rebate"}</b>
                            <span className="fd-sub">{"Allowance given on a bill"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-27">{"Debit account of Rebate"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-27" name="rd-27" defaultValue={"4190"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-27">{"Credit account of Rebate"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-27" name="rc-27" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"Rooms"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Rounding"}</td>
                          <td className="dt__td nw" data-label="Code">
                            <b className="num">{"Round off"}</b>
                            <span className="fd-sub">{"Rounding on a bill"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account" data-w="">
                            <label className="sr-only" htmlFor="rd-28">{"Debit account of Round off"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rd-28" name="rd-28" defaultValue={"7101"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w="">
                            <label className="sr-only" htmlFor="rc-28">{"Credit account of Round off"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="rc-28" name="rc-28" defaultValue={"1401"}>
                                <option value="1101">{"1101 · Cash – main cash"}</option>
                                <option value="1102">{"1102 · Cash – front office float"}</option>
                                <option value="1103">{"1103 · Cash – outlet floats"}</option>
                                <option value="1104">{"1104 · Cash – stores imprest"}</option>
                                <option value="1105">{"1105 · Cash – engineering imprest"}</option>
                                <option value="1106">{"1106 · Cash – HR imprest"}</option>
                                <option value="1107">{"1107 · Cash – housekeeping imprest"}</option>
                                <option value="1201">{"1201 · Bank – HDFC current"}</option>
                                <option value="1202">{"1202 · Bank – Federal current"}</option>
                                <option value="1203">{"1203 · Bank – ICICI current"}</option>
                                <option value="1210">{"1210 · Fixed deposits"}</option>
                                <option value="1215">{"1215 · Escrow – group deposits"}</option>
                                <option value="1301">{"1301 · Inventory – Food"}</option>
                                <option value="1302">{"1302 · Inventory – Beverages"}</option>
                                <option value="1303">{"1303 · Inventory – Liquor and wine"}</option>
                                <option value="1304">{"1304 · Inventory – Tobacco"}</option>
                                <option value="1305">{"1305 · Inventory – Housekeeping supplies"}</option>
                                <option value="1306">{"1306 · Inventory – Guest amenities"}</option>
                                <option value="1307">{"1307 · Inventory – Linen"}</option>
                                <option value="1308">{"1308 · Inventory – Engineering spares"}</option>
                                <option value="1309">{"1309 · Inventory – Stationery"}</option>
                                <option value="1310">{"1310 · Inventory – Fuel"}</option>
                                <option value="1311">{"1311 · Inventory – Bar and F&B consumables"}</option>
                                <option value="1401">{"1401 · Trade debtors – city ledger"}</option>
                                <option value="1403">{"1403 · TDS receivable"}</option>
                                <option value="1404">{"1404 · GST input credit – CGST"}</option>
                                <option value="1405">{"1405 · GST input credit – SGST"}</option>
                                <option value="1406">{"1406 · GST input credit – IGST"}</option>
                                <option value="1410">{"1410 · Card and UPI settlements receivable"}</option>
                                <option value="1501">{"1501 · Land and building"}</option>
                                <option value="1502">{"1502 · Plant and machinery"}</option>
                                <option value="1503">{"1503 · Furniture and fixtures"}</option>
                                <option value="1504">{"1504 · Kitchen equipment"}</option>
                                <option value="1505">{"1505 · Computers"}</option>
                                <option value="1506">{"1506 · Vehicles"}</option>
                                <option value="1550">{"1550 · Accumulated depreciation"}</option>
                                <option value="2101">{"2101 · Bank overdraft – SBI"}</option>
                                <option value="2201">{"2201 · Trade creditors"}</option>
                                <option value="2202">{"2202 · Guest advance deposits"}</option>
                                <option value="2301">{"2301 · GST output – CGST"}</option>
                                <option value="2302">{"2302 · GST output – SGST"}</option>
                                <option value="2303">{"2303 · GST output – IGST"}</option>
                                <option value="2310">{"2310 · TDS payable"}</option>
                                <option value="2320">{"2320 · PF and ESI payable"}</option>
                                <option value="2330">{"2330 · Salaries payable"}</option>
                                <option value="2999">{"2999 · Suspense – unmapped postings"}</option>
                                <option value="3101">{"3101 · Share capital"}</option>
                                <option value="3201">{"3201 · Retained earnings"}</option>
                                <option value="4101">{"4101 · Rooms – transient rooms revenue"}</option>
                                <option value="4102">{"4102 · Rooms – group rooms revenue"}</option>
                                <option value="4190">{"4190 · Rooms – allowances"}</option>
                                <option value="4201">{"4201 · F&B – food revenue"}</option>
                                <option value="4202">{"4202 · F&B – beverage revenue"}</option>
                                <option value="4203">{"4203 · F&B – banquet and room hire revenue"}</option>
                                <option value="4210">{"4210 · Minibar revenue (reported in F&B)"}</option>
                                <option value="4301">{"4301 · Laundry revenue"}</option>
                                <option value="4302">{"4302 · Spa revenue"}</option>
                                <option value="4303">{"4303 · Transport revenue"}</option>
                                <option value="4401">{"4401 · Interest income"}</option>
                                <option value="4402">{"4402 · Miscellaneous income"}</option>
                                <option value="5101">{"5101 · Food cost"}</option>
                                <option value="5102">{"5102 · Beverage cost"}</option>
                                <option value="5103">{"5103 · Liquor cost"}</option>
                                <option value="5104">{"5104 · Tobacco cost"}</option>
                                <option value="5105">{"5105 · Bar and F&B consumables"}</option>
                                <option value="5201">{"5201 · Housekeeping supplies consumed"}</option>
                                <option value="5202">{"5202 · Guest amenities consumed"}</option>
                                <option value="5203">{"5203 · Linen consumed"}</option>
                                <option value="5301">{"5301 · Repairs and maintenance – spares"}</option>
                                <option value="5401">{"5401 · Printing and stationery"}</option>
                                <option value="5402">{"5402 · Fuel and power"}</option>
                                <option value="5501">{"5501 · Credit card commissions"}</option>
                                <option value="5502">{"5502 · OTA commissions"}</option>
                                <option value="5601">{"5601 · Salaries and wages"}</option>
                                <option value="5602">{"5602 · PF and ESI – employer share"}</option>
                                <option value="6101">{"6101 · Staff welfare – staff meals"}</option>
                                <option value="6102">{"6102 · Officers' mess expense"}</option>
                                <option value="6201">{"6201 · Entertainment expense"}</option>
                                <option value="6202">{"6202 · Sales promotion expense"}</option>
                                <option value="6203">{"6203 · Guest complimentary expense"}</option>
                                <option value="6301">{"6301 · Depreciation"}</option>
                                <option value="6401">{"6401 · Bank charges"}</option>
                                <option value="7101">{"7101 · Rounding off"}</option>
                              </select>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </td>
                          <td className="dt__td" data-e="">
                            <span className="fd-sub">{"–"}</span>
                          </td>
                        </tr>
                        <tr className="prs-new pr-new">
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"BARF"}</b>
                            <span className="fd-sub">{"Bar food 5 %"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account">
                            <b>{"1401"}</b>
                            {" Trade debtors – city ledger"}
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w2="">
                            <b>{"4201"}</b>
                            {" F&B – food revenue"}
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"BAR"}</span>
                          </td>
                        </tr>
                        <tr className="prs-new pr-new">
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"CAKE"}</b>
                            <span className="fd-sub">{"Cake order"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account">
                            <b>{"1401"}</b>
                            {" Trade debtors – city ledger"}
                          </td>
                          <td className="dt__td" data-label="Credit account" data-w2="">
                            <b>{"4201"}</b>
                            {" F&B – food revenue"}
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"TRV"}</span>
                          </td>
                        </tr>
                        <tr className="prs-new pr-new">
                          <td className="dt__td" data-label="Source" data-w2="" data-t="">{"Charge code"}</td>
                          <td className="dt__td nw" data-label="Code" data-w2="">
                            <b className="num">{"GALA"}</b>
                            <span className="fd-sub">{"Gala dinner"}</span>
                          </td>
                          <td className="dt__td" data-label="Debit account">
                            <b>{"1401"}</b>
                            {" Trade debtors – city ledger"}
                          </td>
                          <td className="dt__td" data-label="Credit account">
                            <b>{"4203"}</b>
                            {" F&B – banquet and room hire revenue"}
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">
                            <span className="fd-sub">{"TRV"}</span>
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
                    <span>{"Changing a rule affects new postings only. Sources come from Front Desk Setup, Stores Setup and payroll."}</span>
                  </span>
                  <a className="btn" href="#tested">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#play" />
                    </svg>
                    {"Test posting"}
                  </a>
                </div>
              </section>
              <section className="fd-sec cc-sec tp-box" id="sec-test" data-code="ACS-03-test">
                <h2 className="fd-sec__t">{"Test posting"}</h2>
                <p className="fd-sec__d">{"The journal that a sample document would create with the rules above (calculated, nothing is posted)."}</p>
                <p className="cc-note">{"Sample: folio of room 305, ROOM charge ₹7,000.00 for one night (5 % GST: CGST 2.5 % + SGST 2.5 %), charged to the city ledger."}</p>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="dt__table dt--hug" data-code="ACS-03-journal" data-nosort="" data-mc="">
                      <caption className="sr-only">{"Sample journal"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Dr / Cr"}</th>
                          <th scope="col">{"Account"}</th>
                          <th scope="col">{"Name"}</th>
                          <th scope="col" className="dt__th--right">{"Debit"}</th>
                          <th scope="col" className="dt__th--right">{"Credit"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="dt__td nw" data-label="Dr / Cr" data-w2="" data-t="">{"Dr"}</td>
                          <td className="dt__td nw num" data-label="Account" data-w2="">{"1401"}</td>
                          <td className="dt__td" data-label="Name">{"Trade debtors – city ledger"}</td>
                          <td className="dt__td dt__td--right nw num" data-label="Debit" data-w2="">{"₹7,350.00"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="" />
                        </tr>
                        <tr>
                          <td className="dt__td nw" data-label="Dr / Cr" data-w2="" data-t="">{"Cr"}</td>
                          <td className="dt__td nw num" data-label="Account" data-w2="">{"4101"}</td>
                          <td className="dt__td" data-label="Name">{"Rooms – transient rooms revenue · department Rooms"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="" />
                          <td className="dt__td dt__td--right nw num" data-label="Credit" data-w2="">{"₹7,000.00"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td nw" data-label="Dr / Cr" data-w2="" data-t="">{"Cr"}</td>
                          <td className="dt__td nw num" data-label="Account" data-w2="">{"2301"}</td>
                          <td className="dt__td" data-label="Name" data-w2="">{"GST output – CGST 2.5 %"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="" />
                          <td className="dt__td dt__td--right nw num" data-label="Credit">{"₹175.00"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td nw" data-label="Dr / Cr" data-w2="" data-t="">{"Cr"}</td>
                          <td className="dt__td nw num" data-label="Account" data-w2="">{"2302"}</td>
                          <td className="dt__td" data-label="Name" data-w2="">{"GST output – SGST 2.5 %"}</td>
                          <td className="dt__td dt__td--right nw num" data-e="" />
                          <td className="dt__td dt__td--right nw num" data-label="Credit">{"₹175.00"}</td>
                        </tr>
                        <tr className="dl-total">
                          <td className="dt__td" colSpan="3">
                            <b>{"Total"}</b>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Debit" data-w2="" data-t="">
                            <b>{"₹7,350.00"}</b>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Credit" data-w2="">
                            <b>{"₹7,350.00"}</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
                        <td className="dt__td nw num" data-label="When" data-w2="" data-t="">{"20-10-2026 12:00"}</td>
                        <td className="dt__td nw" data-label="Who" data-w2="">{"Lakshmi Ishaan"}</td>
                        <td className="dt__td" data-label="What">{"Charge code MINIBAR · credit account"}</td>
                        <td className="dt__td" data-label="Old → new" data-w2="">{"4202 → 4210"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td nw num" data-label="When" data-w2="" data-t="">{"15-10-2026 06:00"}</td>
                        <td className="dt__td nw" data-label="Who">{"System"}</td>
                        <td className="dt__td" data-label="What">{"Mapping completeness check"}</td>
                        <td className="dt__td" data-label="Old → new">{"3 codes found without a rule"}</td>
                      </tr>
                      <tr>
                        <td className="dt__td nw num" data-label="When" data-w2="" data-t="">{"02-04-2026 10:50"}</td>
                        <td className="dt__td nw" data-label="Who" data-w2="">{"Lakshmi Ishaan"}</td>
                        <td className="dt__td" data-label="What" data-w2="">{"27 posting rules set up"}</td>
                        <td className="dt__td" data-label="Old → new" data-w2="">{"– → Active"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="cc-note">{"Every change is written automatically with user, time and the old and new values. The log cannot be edited and is kept for 8 years."}</p>
              </details>
              <details className="hk-sys" data-code="ACS-X01">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#cog" />
                  </svg>
                  {"System – what runs automatically on this screen"}
                </summary>
                <ul>
                  <li data-code="ACS-X01">
                    <b>{"ACS-X01 · Mapping completeness"}</b>
                    {" – Runs every morning at 06:00: finds every charge code, payment mode, tax code and item category used in the last 24 hours that has no rule and lists it above. Last run 22-10-2026 06:00 – 3 codes."}
                  </li>
                  <li data-code="ACS-X02">
                    <b>{"ACS-X02 · Setup audit logger"}</b>
                    {" – Every new or changed rule is written to the audit log."}
                  </li>
                </ul>
              </details>
              <div className="fd-toast" id="t-mapped" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"3 codes mapped – BARF, CAKE, GALA"}
                  <small>{"Bar food 5 % → 4201 Food revenue (BAR), cake → 4201 (TRV), gala dinner → 4203 Banquet revenue (TRV). The 18 postings in suspense are moved by the next run or by Re-post in Automatic Postings (AC-02). Written to the setup audit log with the old and new values (ACS-X02)."}</small>
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
                  {"Rule added – charge code SPA"}
                  <small>{"Debit 1401 Trade debtors, credit 4302 Spa revenue, department Spa. Written to the setup audit log with the old and new values (ACS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-tested" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#play" />
                </svg>
                <div className="fd-toast__text">
                  {"Test posting – the journal balances at ₹7,350.00"}
                  <small>{"Dr 1401 ₹7,350.00 · Cr 4101 ₹7,000.00, 2301 ₹175.00, 2302 ₹175.00. See the sample journal below. Written to the setup audit log with the old and new values (ACS-X02)."}</small>
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
