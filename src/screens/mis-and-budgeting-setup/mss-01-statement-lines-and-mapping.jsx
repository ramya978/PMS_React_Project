// GENERATED from public/mis-and-budgeting-setup/mss-01-statement-lines-and-mapping/index.html by scripts/convert_legacy.py.
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
    "href": "/mis-and-budgeting-setup/mss-01-statement-lines-and-mapping/mss-01-statement-lines-and-mapping.css",
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

export default function MisAndBudgetingSetupMss01StatementLinesAndMapping() {
  return (
    <ScreenShell title="Statement Lines & Mapping" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="MSS-01" data-code="MSS-01" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="MSS-01" aria-current="page" title="MIS & Budgeting Setup" to={"/mis-and-budgeting-setup/mss-01-statement-lines-and-mapping"}>
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
            <main className="app__content" id="main" data-code="MSS-01" tabIndex="-1">
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
                        <Link to={"/mis-and-budgeting-setup/mss-01-statement-lines-and-mapping"}>{"MIS & Budgeting Setup"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Statement Lines"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Statement Lines & Mapping"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"MSS-01"}</span>
                  <div className="page-header__actions">
                    <label className="btn btn--primary add-btn" htmlFor="add-1" role="button">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add line"}
                    </label>
                  </div>
                </div>
              </header>
              <nav className="ccs-nav" aria-label="MIS & Budgeting Setup">
                <Link aria-current="page" to={"/mis-and-budgeting-setup/mss-01-statement-lines-and-mapping"}>{"Statement Lines"}</Link>
                <Link to={"/mis-and-budgeting-setup/mss-02-budget-templates-and-drivers"}>{"Budget Templates"}</Link>
                <Link to={"/mis-and-budgeting-setup/mss-03-allocations"}>{"Allocations"}</Link>
                <Link to={"/mis-and-budgeting-setup/mss-04-calendar-thresholds-and-ratios"}>{"Calendar & Thresholds"}</Link>
                <Link to={"/mis-and-budgeting-setup/mss-05-mis-pack-template"}>{"MIS Pack"}</Link>
              </nav>
              <input className="add-sw" type="checkbox" id="add-1" aria-label="Show the form" />
              <div className="add-panel prs-add">
                <form className="prs-add__f" action="/mis-and-budgeting-setup/mss-01-statement-lines-and-mapping/#added" method="get">
                  <div className="s-grid2">
                    <div className="field">
                      <label className="field__label" htmlFor="ad-s">
                        {"Statement "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="ad-s" name="statement" required={true} defaultValue={"Non-operating"}>
                          <option value="Summary operating statement">{"Summary operating statement"}</option>
                          <option value="Rooms schedule">{"Rooms schedule"}</option>
                          <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                          <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                          <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                          <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                          <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                          <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                          <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                          <option value="Utilities schedule">{"Utilities schedule"}</option>
                          <option value="Management fees">{"Management fees"}</option>
                          <option value="Non-operating">{"Non-operating"}</option>
                          <option value="Balance sheet">{"Balance sheet"}</option>
                          <option value="Cash flow">{"Cash flow"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="ad-l">
                        {"Line "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="ad-l" name="line" type="text" required={true} maxLength="70" defaultValue={"Non-operating – property tax"} />
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="ad-o">
                        {"Order "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="ad-o" name="order" type="number" required={true} min="1" max="99" defaultValue={"4"} />
                    </div>
                    <div className="field field--wide">
                      <label className="field__label" htmlFor="ad-a">
                        {"GL accounts / groups "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="ad-a" name="accounts" type="text" required={true} maxLength="160" defaultValue={"6501 Property tax"} />
                      <span className="field__hint">{"Accounts come from General Ledger Setup (ACS-01); an account can belong to one line of a statement only"}</span>
                    </div>
                  </div>
                  <div className="prs-add__a">
                    <span className="fd-muted">{"A new line appears in the statements from the next build (MS-X01)."}</span>
                    <button className="btn btn--primary" type="submit">{"Add"}</button>
                  </div>
                </form>
              </div>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm" id="saved" />
                <i className="pm" id="added" />
              </div>
              <ul className="cc-kpis">
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"76"}</span>
                  <span className="cc-kpi__l">{"Statement lines"}</span>
                  <span className="cc-kpi__s">{"operating statement, 8 schedules, balance sheet, cash flow"}</span>
                </li>
                <li className="cc-kpi cc-kpi--ok">
                  <span className="cc-kpi__v">{"83 of 83"}</span>
                  <span className="cc-kpi__l">{"Accounts mapped"}</span>
                  <span className="cc-kpi__s">{"35 income and expense · 48 balance sheet"}</span>
                </li>
                <li className="cc-kpi cc-kpi--ok">
                  <span className="cc-kpi__v">{"0"}</span>
                  <span className="cc-kpi__l">{"Unmapped accounts"}</span>
                  <span className="cc-kpi__s">{"the list must stay empty (BR-01)"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"V3"}</span>
                  <span className="cc-kpi__l">{"Structure in use"}</span>
                  <span className="cc-kpi__s">{"Active since 01-04-2026"}</span>
                </li>
              </ul>
              <form className="prs-form" action="/mis-and-budgeting-setup/mss-01-statement-lines-and-mapping/#saved" method="get">
                <div className="hb-mks" aria-hidden="true">
                  <i className="pm pm--v" id="v-all" />
                  <i className="pm pm--v" id="v-summary" />
                  <i className="pm pm--v" id="v-schedules" />
                  <i className="pm pm--v" id="v-bs" />
                  <i className="pm pm--v" id="v-cf" />
                </div>
                <nav className="hv st-views" aria-label="Statements">
                  <a className="hv__v" href="#v-all" data-v="v-all">
                    <span>{"All lines"}</span>
                    <b className="num">{"76"}</b>
                  </a>
                  <a className="hv__v" href="#v-summary" data-v="v-summary">
                    <span>{"Operating statement"}</span>
                    <b className="num">{"16"}</b>
                  </a>
                  <a className="hv__v" href="#v-schedules" data-v="v-schedules">
                    <span>{"Departmental schedules"}</span>
                    <b className="num">{"35"}</b>
                  </a>
                  <a className="hv__v" href="#v-bs" data-v="v-bs">
                    <span>{"Balance sheet"}</span>
                    <b className="num">{"14"}</b>
                  </a>
                  <a className="hv__v" href="#v-cf" data-v="v-cf">
                    <span>{"Cash flow"}</span>
                    <b className="num">{"11"}</b>
                  </a>
                </nav>
                <section className="fd-sec" id="sec-lines" data-code="MSS-01-lines">
                  <h2 className="fd-sec__t">{"Statements and lines"}</h2>
                  <p className="fd-sec__d">{"Every line of the USALI summary operating statement, the departmental schedules, the balance sheet and the cash flow, in order, with the GL accounts or groups that feed it. Accounts come from General Ledger Setup; every income and expense account belongs to exactly one line (BR-01). Use the tabs to work through one statement at a time."}</p>
                  <div className="prs-in">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table" data-code="MSS-01-lines" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Statement lines"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Statement"}</th>
                              <th scope="col">{"Line"}</th>
                              <th scope="col">{"Order"}</th>
                              <th scope="col">{"GL accounts / groups"}</th>
                              <th scope="col" className="dt__th--right">{"Accounts"}</th>
                              <th scope="col">{"Status"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-0">{"Statement of Revenue – Rooms"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-0" name="s-0" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-0">{"Line"}</label>
                                <input className="field__input mss-w" id="l-0" name="l-0" type="text" required={true} maxLength="70" defaultValue={"Revenue – Rooms"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-0">{"Order of Revenue – Rooms"}</label>
                                <input className="field__input mss-n" id="o-0" name="o-0" type="number" min="1" max="99" required={true} defaultValue={"1"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-0">{"GL accounts of Revenue – Rooms"}</label>
                                <input className="field__input mss-w2" id="a-0" name="a-0" type="text" maxLength="160" defaultValue={"4101 transient rooms revenue, 4102 group rooms revenue, 4190 allowances"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"3"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-1">{"Statement of Revenue – Food & beverage"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-1" name="s-1" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-1">{"Line"}</label>
                                <input className="field__input mss-w" id="l-1" name="l-1" type="text" required={true} maxLength="70" defaultValue={"Revenue – Food & beverage"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-1">{"Order of Revenue – Food & beverage"}</label>
                                <input className="field__input mss-n" id="o-1" name="o-1" type="number" min="1" max="99" required={true} defaultValue={"2"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-1">{"GL accounts of Revenue – Food & beverage"}</label>
                                <input className="field__input mss-w2" id="a-1" name="a-1" type="text" maxLength="160" defaultValue={"4201 food revenue, 4202 beverage revenue, 4203 banquet and room hire revenue, 4210 Minibar revenue (reported in F&B)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"4"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-2">{"Statement of Revenue – Other operated departments"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-2" name="s-2" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-2">{"Line"}</label>
                                <input className="field__input mss-w" id="l-2" name="l-2" type="text" required={true} maxLength="70" defaultValue={"Revenue – Other operated departments"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-2">{"Order of Revenue – Other operated departments"}</label>
                                <input className="field__input mss-n" id="o-2" name="o-2" type="number" min="1" max="99" required={true} defaultValue={"3"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-2">{"GL accounts of Revenue – Other operated departments"}</label>
                                <input className="field__input mss-w2" id="a-2" name="a-2" type="text" maxLength="160" defaultValue={"4301 Laundry revenue, 4302 Spa revenue, 4303 Transport revenue"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"3"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-3">{"Statement of Revenue – Miscellaneous income"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-3" name="s-3" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-3">{"Line"}</label>
                                <input className="field__input mss-w" id="l-3" name="l-3" type="text" required={true} maxLength="70" defaultValue={"Revenue – Miscellaneous income"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-3">{"Order of Revenue – Miscellaneous income"}</label>
                                <input className="field__input mss-n" id="o-3" name="o-3" type="number" min="1" max="99" required={true} defaultValue={"4"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-3">{"GL accounts of Revenue – Miscellaneous income"}</label>
                                <input className="field__input mss-w2" id="a-3" name="a-3" type="text" maxLength="160" defaultValue={"4402 Miscellaneous income"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-4">{"Statement of Expenses – Rooms"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-4" name="s-4" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-4">{"Line"}</label>
                                <input className="field__input mss-w" id="l-4" name="l-4" type="text" required={true} maxLength="70" defaultValue={"Expenses – Rooms"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-4">{"Order of Expenses – Rooms"}</label>
                                <input className="field__input mss-n" id="o-4" name="o-4" type="number" min="1" max="99" required={true} defaultValue={"5"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-4">{"GL accounts of Expenses – Rooms"}</label>
                                <input className="field__input mss-w2" id="a-4" name="a-4" type="text" maxLength="160" defaultValue={"5502 OTA commissions, 5201 Housekeeping supplies consumed, 5202 Guest amenities consumed, 5203 Linen consumed + payroll share"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"6"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-5">{"Statement of Expenses – Food & beverage"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-5" name="s-5" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-5">{"Line"}</label>
                                <input className="field__input mss-w" id="l-5" name="l-5" type="text" required={true} maxLength="70" defaultValue={"Expenses – Food & beverage"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-5">{"Order of Expenses – Food & beverage"}</label>
                                <input className="field__input mss-n" id="o-5" name="o-5" type="number" min="1" max="99" required={true} defaultValue={"6"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-5">{"GL accounts of Expenses – Food & beverage"}</label>
                                <input className="field__input mss-w2" id="a-5" name="a-5" type="text" maxLength="160" defaultValue={"5101 Food cost, 5102 Beverage cost, 5103 Liquor cost, 5104 Tobacco cost, 5105 Bar and F&B consumables + payroll share"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"7"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-6">{"Statement of Expenses – Other operated departments"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-6" name="s-6" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-6">{"Line"}</label>
                                <input className="field__input mss-w" id="l-6" name="l-6" type="text" required={true} maxLength="70" defaultValue={"Expenses – Other operated departments"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-6">{"Order of Expenses – Other operated departments"}</label>
                                <input className="field__input mss-n" id="o-6" name="o-6" type="number" min="1" max="99" required={true} defaultValue={"7"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-6">{"GL accounts of Expenses – Other operated departments"}</label>
                                <input className="field__input mss-w2" id="a-6" name="a-6" type="text" maxLength="160" defaultValue={" + payroll share"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-7">{"Statement of Expenses – Administrative & general"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-7" name="s-7" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-7">{"Line"}</label>
                                <input className="field__input mss-w" id="l-7" name="l-7" type="text" required={true} maxLength="70" defaultValue={"Expenses – Administrative & general"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-7">{"Order of Expenses – Administrative & general"}</label>
                                <input className="field__input mss-n" id="o-7" name="o-7" type="number" min="1" max="99" required={true} defaultValue={"8"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-7">{"GL accounts of Expenses – Administrative & general"}</label>
                                <input className="field__input mss-w2" id="a-7" name="a-7" type="text" maxLength="160" defaultValue={"5501 Credit card commissions, 5401 Printing and stationery, 6101 staff meals, 6102 Officers' mess expense, 6201 Entertainment expense + payroll share"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"7"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-8">{"Statement of Expenses – Information & telecom systems"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-8" name="s-8" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-8">{"Line"}</label>
                                <input className="field__input mss-w" id="l-8" name="l-8" type="text" required={true} maxLength="70" defaultValue={"Expenses – Information & telecom systems"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-8">{"Order of Expenses – Information & telecom systems"}</label>
                                <input className="field__input mss-n" id="o-8" name="o-8" type="number" min="1" max="99" required={true} defaultValue={"9"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-8">{"GL accounts of Expenses – Information & telecom systems"}</label>
                                <input className="field__input mss-w2" id="a-8" name="a-8" type="text" maxLength="160" defaultValue={" + payroll share"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-9">{"Statement of Expenses – Sales & marketing"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-9" name="s-9" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-9">{"Line"}</label>
                                <input className="field__input mss-w" id="l-9" name="l-9" type="text" required={true} maxLength="70" defaultValue={"Expenses – Sales & marketing"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-9">{"Order of Expenses – Sales & marketing"}</label>
                                <input className="field__input mss-n" id="o-9" name="o-9" type="number" min="1" max="99" required={true} defaultValue={"10"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-9">{"GL accounts of Expenses – Sales & marketing"}</label>
                                <input className="field__input mss-w2" id="a-9" name="a-9" type="text" maxLength="160" defaultValue={"6202 Sales promotion expense, 6203 Guest complimentary expense + payroll share"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"4"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-10">{"Statement of Expenses – Property operations & maintenance"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-10" name="s-10" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-10">{"Line"}</label>
                                <input className="field__input mss-w" id="l-10" name="l-10" type="text" required={true} maxLength="70" defaultValue={"Expenses – Property operations & maintenance"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-10">{"Order of Expenses – Property operations & maintenance"}</label>
                                <input className="field__input mss-n" id="o-10" name="o-10" type="number" min="1" max="99" required={true} defaultValue={"11"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-10">{"GL accounts of Expenses – Property operations & maintenance"}</label>
                                <input className="field__input mss-w2" id="a-10" name="a-10" type="text" maxLength="160" defaultValue={"5301 spares + payroll share"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"3"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-11">{"Statement of Expenses – Utilities"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-11" name="s-11" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-11">{"Line"}</label>
                                <input className="field__input mss-w" id="l-11" name="l-11" type="text" required={true} maxLength="70" defaultValue={"Expenses – Utilities"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-11">{"Order of Expenses – Utilities"}</label>
                                <input className="field__input mss-n" id="o-11" name="o-11" type="number" min="1" max="99" required={true} defaultValue={"12"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-11">{"GL accounts of Expenses – Utilities"}</label>
                                <input className="field__input mss-w2" id="a-11" name="a-11" type="text" maxLength="160" defaultValue={"5402 Fuel and power"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"3"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-12">{"Statement of Management fees"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-12" name="s-12" defaultValue={"Summary operating statement"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-12">{"Line"}</label>
                                <input className="field__input mss-w" id="l-12" name="l-12" type="text" required={true} maxLength="70" defaultValue={"Management fees"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-12">{"Order of Management fees"}</label>
                                <input className="field__input mss-n" id="o-12" name="o-12" type="number" min="1" max="99" required={true} defaultValue={"13"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-12">{"GL accounts of Management fees"}</label>
                                <input className="field__input mss-w2" id="a-12" name="a-12" type="text" maxLength="160" defaultValue={"none – the hotel pays no management fee (no account)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-13">{"Statement of Non-operating – interest income"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-13" name="s-13" defaultValue={"Non-operating"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-13">{"Line"}</label>
                                <input className="field__input mss-w" id="l-13" name="l-13" type="text" required={true} maxLength="70" defaultValue={"Non-operating – interest income"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-13">{"Order of Non-operating – interest income"}</label>
                                <input className="field__input mss-n" id="o-13" name="o-13" type="number" min="1" max="99" required={true} defaultValue={"14"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-13">{"GL accounts of Non-operating – interest income"}</label>
                                <input className="field__input mss-w2" id="a-13" name="a-13" type="text" maxLength="160" defaultValue={"4401 Interest income"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-14">{"Statement of Non-operating – depreciation"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-14" name="s-14" defaultValue={"Non-operating"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-14">{"Line"}</label>
                                <input className="field__input mss-w" id="l-14" name="l-14" type="text" required={true} maxLength="70" defaultValue={"Non-operating – depreciation"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-14">{"Order of Non-operating – depreciation"}</label>
                                <input className="field__input mss-n" id="o-14" name="o-14" type="number" min="1" max="99" required={true} defaultValue={"15"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-14">{"GL accounts of Non-operating – depreciation"}</label>
                                <input className="field__input mss-w2" id="a-14" name="a-14" type="text" maxLength="160" defaultValue={"6301 Depreciation"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-summary">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-15">{"Statement of Non-operating – bank charges and rounding"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-15" name="s-15" defaultValue={"Non-operating"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-15">{"Line"}</label>
                                <input className="field__input mss-w" id="l-15" name="l-15" type="text" required={true} maxLength="70" defaultValue={"Non-operating – bank charges and rounding"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-15">{"Order of Non-operating – bank charges and rounding"}</label>
                                <input className="field__input mss-n" id="o-15" name="o-15" type="number" min="1" max="99" required={true} defaultValue={"16"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-15">{"GL accounts of Non-operating – bank charges and rounding"}</label>
                                <input className="field__input mss-w2" id="a-15" name="a-15" type="text" maxLength="160" defaultValue={"6401 Bank charges, 7101 Rounding off"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-16">{"Statement of Revenue – Transient rooms revenue"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-16" name="s-16" defaultValue={"Rooms schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-16">{"Line"}</label>
                                <input className="field__input mss-w" id="l-16" name="l-16" type="text" required={true} maxLength="70" defaultValue={"Revenue – Transient rooms revenue"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-16">{"Order of Revenue – Transient rooms revenue"}</label>
                                <input className="field__input mss-n" id="o-16" name="o-16" type="number" min="1" max="99" required={true} defaultValue={"1"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-16">{"GL accounts of Revenue – Transient rooms revenue"}</label>
                                <input className="field__input mss-w2" id="a-16" name="a-16" type="text" maxLength="160" defaultValue={"4101 transient rooms revenue"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-17">{"Statement of Revenue – Group rooms revenue"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-17" name="s-17" defaultValue={"Rooms schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-17">{"Line"}</label>
                                <input className="field__input mss-w" id="l-17" name="l-17" type="text" required={true} maxLength="70" defaultValue={"Revenue – Group rooms revenue"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-17">{"Order of Revenue – Group rooms revenue"}</label>
                                <input className="field__input mss-n" id="o-17" name="o-17" type="number" min="1" max="99" required={true} defaultValue={"2"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-17">{"GL accounts of Revenue – Group rooms revenue"}</label>
                                <input className="field__input mss-w2" id="a-17" name="a-17" type="text" maxLength="160" defaultValue={"4102 group rooms revenue"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-18">{"Statement of Revenue – Rooms allowances"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-18" name="s-18" defaultValue={"Rooms schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-18">{"Line"}</label>
                                <input className="field__input mss-w" id="l-18" name="l-18" type="text" required={true} maxLength="70" defaultValue={"Revenue – Rooms allowances"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-18">{"Order of Revenue – Rooms allowances"}</label>
                                <input className="field__input mss-n" id="o-18" name="o-18" type="number" min="1" max="99" required={true} defaultValue={"3"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-18">{"GL accounts of Revenue – Rooms allowances"}</label>
                                <input className="field__input mss-w2" id="a-18" name="a-18" type="text" maxLength="160" defaultValue={"4190 allowances"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-19">{"Statement of Commissions – travel agents and OTAs"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-19" name="s-19" defaultValue={"Rooms schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-19">{"Line"}</label>
                                <input className="field__input mss-w" id="l-19" name="l-19" type="text" required={true} maxLength="70" defaultValue={"Commissions – travel agents and OTAs"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-19">{"Order of Commissions – travel agents and OTAs"}</label>
                                <input className="field__input mss-n" id="o-19" name="o-19" type="number" min="1" max="99" required={true} defaultValue={"10"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-19">{"GL accounts of Commissions – travel agents and OTAs"}</label>
                                <input className="field__input mss-w2" id="a-19" name="a-19" type="text" maxLength="160" defaultValue={"5502 OTA commissions"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-20">{"Statement of Housekeeping supplies"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-20" name="s-20" defaultValue={"Rooms schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-20">{"Line"}</label>
                                <input className="field__input mss-w" id="l-20" name="l-20" type="text" required={true} maxLength="70" defaultValue={"Housekeeping supplies"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-20">{"Order of Housekeeping supplies"}</label>
                                <input className="field__input mss-n" id="o-20" name="o-20" type="number" min="1" max="99" required={true} defaultValue={"11"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-20">{"GL accounts of Housekeeping supplies"}</label>
                                <input className="field__input mss-w2" id="a-20" name="a-20" type="text" maxLength="160" defaultValue={"5201 Housekeeping supplies consumed"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-21">{"Statement of Guest amenities"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-21" name="s-21" defaultValue={"Rooms schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-21">{"Line"}</label>
                                <input className="field__input mss-w" id="l-21" name="l-21" type="text" required={true} maxLength="70" defaultValue={"Guest amenities"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-21">{"Order of Guest amenities"}</label>
                                <input className="field__input mss-n" id="o-21" name="o-21" type="number" min="1" max="99" required={true} defaultValue={"12"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-21">{"GL accounts of Guest amenities"}</label>
                                <input className="field__input mss-w2" id="a-21" name="a-21" type="text" maxLength="160" defaultValue={"5202 Guest amenities consumed"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-22">{"Statement of Linen"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-22" name="s-22" defaultValue={"Rooms schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-22">{"Line"}</label>
                                <input className="field__input mss-w" id="l-22" name="l-22" type="text" required={true} maxLength="70" defaultValue={"Linen"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-22">{"Order of Linen"}</label>
                                <input className="field__input mss-n" id="o-22" name="o-22" type="number" min="1" max="99" required={true} defaultValue={"13"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-22">{"GL accounts of Linen"}</label>
                                <input className="field__input mss-w2" id="a-22" name="a-22" type="text" maxLength="160" defaultValue={"5203 Linen consumed"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-23">{"Statement of Payroll and related"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-23" name="s-23" defaultValue={"Rooms schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-23">{"Line"}</label>
                                <input className="field__input mss-w" id="l-23" name="l-23" type="text" required={true} maxLength="70" defaultValue={"Payroll and related"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-23">{"Order of Payroll and related"}</label>
                                <input className="field__input mss-n" id="o-23" name="o-23" type="number" min="1" max="99" required={true} defaultValue={"20"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-23">{"GL accounts of Payroll and related"}</label>
                                <input className="field__input mss-w2" id="a-23" name="a-23" type="text" maxLength="160" defaultValue={"5601 Salaries and wages + 5602 PF and ESI × payroll share (MSS-03)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-24">{"Statement of Revenue – Food"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-24" name="s-24" defaultValue={"Food & beverage schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-24">{"Line"}</label>
                                <input className="field__input mss-w" id="l-24" name="l-24" type="text" required={true} maxLength="70" defaultValue={"Revenue – Food"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-24">{"Order of Revenue – Food"}</label>
                                <input className="field__input mss-n" id="o-24" name="o-24" type="number" min="1" max="99" required={true} defaultValue={"1"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-24">{"GL accounts of Revenue – Food"}</label>
                                <input className="field__input mss-w2" id="a-24" name="a-24" type="text" maxLength="160" defaultValue={"4201 food revenue"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-25">{"Statement of Revenue – Beverage"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-25" name="s-25" defaultValue={"Food & beverage schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-25">{"Line"}</label>
                                <input className="field__input mss-w" id="l-25" name="l-25" type="text" required={true} maxLength="70" defaultValue={"Revenue – Beverage"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-25">{"Order of Revenue – Beverage"}</label>
                                <input className="field__input mss-n" id="o-25" name="o-25" type="number" min="1" max="99" required={true} defaultValue={"2"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-25">{"GL accounts of Revenue – Beverage"}</label>
                                <input className="field__input mss-w2" id="a-25" name="a-25" type="text" maxLength="160" defaultValue={"4202 beverage revenue"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-26">{"Statement of Revenue – Banquet and room hire"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-26" name="s-26" defaultValue={"Food & beverage schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-26">{"Line"}</label>
                                <input className="field__input mss-w" id="l-26" name="l-26" type="text" required={true} maxLength="70" defaultValue={"Revenue – Banquet and room hire"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-26">{"Order of Revenue – Banquet and room hire"}</label>
                                <input className="field__input mss-n" id="o-26" name="o-26" type="number" min="1" max="99" required={true} defaultValue={"3"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-26">{"GL accounts of Revenue – Banquet and room hire"}</label>
                                <input className="field__input mss-w2" id="a-26" name="a-26" type="text" maxLength="160" defaultValue={"4203 banquet and room hire revenue"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-27">{"Statement of Revenue – Minibar"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-27" name="s-27" defaultValue={"Food & beverage schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-27">{"Line"}</label>
                                <input className="field__input mss-w" id="l-27" name="l-27" type="text" required={true} maxLength="70" defaultValue={"Revenue – Minibar"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-27">{"Order of Revenue – Minibar"}</label>
                                <input className="field__input mss-n" id="o-27" name="o-27" type="number" min="1" max="99" required={true} defaultValue={"4"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-27">{"GL accounts of Revenue – Minibar"}</label>
                                <input className="field__input mss-w2" id="a-27" name="a-27" type="text" maxLength="160" defaultValue={"4210 Minibar revenue (reported in F&B)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-28">{"Statement of Food cost"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-28" name="s-28" defaultValue={"Food & beverage schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-28">{"Line"}</label>
                                <input className="field__input mss-w" id="l-28" name="l-28" type="text" required={true} maxLength="70" defaultValue={"Food cost"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-28">{"Order of Food cost"}</label>
                                <input className="field__input mss-n" id="o-28" name="o-28" type="number" min="1" max="99" required={true} defaultValue={"10"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-28">{"GL accounts of Food cost"}</label>
                                <input className="field__input mss-w2" id="a-28" name="a-28" type="text" maxLength="160" defaultValue={"5101 Food cost"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-29">{"Statement of Beverage cost"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-29" name="s-29" defaultValue={"Food & beverage schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-29">{"Line"}</label>
                                <input className="field__input mss-w" id="l-29" name="l-29" type="text" required={true} maxLength="70" defaultValue={"Beverage cost"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-29">{"Order of Beverage cost"}</label>
                                <input className="field__input mss-n" id="o-29" name="o-29" type="number" min="1" max="99" required={true} defaultValue={"11"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-29">{"GL accounts of Beverage cost"}</label>
                                <input className="field__input mss-w2" id="a-29" name="a-29" type="text" maxLength="160" defaultValue={"5102 Beverage cost"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-30">{"Statement of Liquor cost"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-30" name="s-30" defaultValue={"Food & beverage schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-30">{"Line"}</label>
                                <input className="field__input mss-w" id="l-30" name="l-30" type="text" required={true} maxLength="70" defaultValue={"Liquor cost"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-30">{"Order of Liquor cost"}</label>
                                <input className="field__input mss-n" id="o-30" name="o-30" type="number" min="1" max="99" required={true} defaultValue={"12"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-30">{"GL accounts of Liquor cost"}</label>
                                <input className="field__input mss-w2" id="a-30" name="a-30" type="text" maxLength="160" defaultValue={"5103 Liquor cost"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-31">{"Statement of Tobacco cost"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-31" name="s-31" defaultValue={"Food & beverage schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-31">{"Line"}</label>
                                <input className="field__input mss-w" id="l-31" name="l-31" type="text" required={true} maxLength="70" defaultValue={"Tobacco cost"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-31">{"Order of Tobacco cost"}</label>
                                <input className="field__input mss-n" id="o-31" name="o-31" type="number" min="1" max="99" required={true} defaultValue={"13"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-31">{"GL accounts of Tobacco cost"}</label>
                                <input className="field__input mss-w2" id="a-31" name="a-31" type="text" maxLength="160" defaultValue={"5104 Tobacco cost"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-32">{"Statement of Bar and F&B consumables"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-32" name="s-32" defaultValue={"Food & beverage schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-32">{"Line"}</label>
                                <input className="field__input mss-w" id="l-32" name="l-32" type="text" required={true} maxLength="70" defaultValue={"Bar and F&B consumables"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-32">{"Order of Bar and F&B consumables"}</label>
                                <input className="field__input mss-n" id="o-32" name="o-32" type="number" min="1" max="99" required={true} defaultValue={"14"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-32">{"GL accounts of Bar and F&B consumables"}</label>
                                <input className="field__input mss-w2" id="a-32" name="a-32" type="text" maxLength="160" defaultValue={"5105 Bar and F&B consumables"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-33">{"Statement of Payroll and related"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-33" name="s-33" defaultValue={"Food & beverage schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-33">{"Line"}</label>
                                <input className="field__input mss-w" id="l-33" name="l-33" type="text" required={true} maxLength="70" defaultValue={"Payroll and related"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-33">{"Order of Payroll and related"}</label>
                                <input className="field__input mss-n" id="o-33" name="o-33" type="number" min="1" max="99" required={true} defaultValue={"20"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-33">{"GL accounts of Payroll and related"}</label>
                                <input className="field__input mss-w2" id="a-33" name="a-33" type="text" maxLength="160" defaultValue={"5601 Salaries and wages + 5602 PF and ESI × payroll share (MSS-03)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-34">{"Statement of Revenue – Laundry"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-34" name="s-34" defaultValue={"Other operated departments schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-34">{"Line"}</label>
                                <input className="field__input mss-w" id="l-34" name="l-34" type="text" required={true} maxLength="70" defaultValue={"Revenue – Laundry"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-34">{"Order of Revenue – Laundry"}</label>
                                <input className="field__input mss-n" id="o-34" name="o-34" type="number" min="1" max="99" required={true} defaultValue={"1"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-34">{"GL accounts of Revenue – Laundry"}</label>
                                <input className="field__input mss-w2" id="a-34" name="a-34" type="text" maxLength="160" defaultValue={"4301 Laundry revenue"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-35">{"Statement of Revenue – Spa"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-35" name="s-35" defaultValue={"Other operated departments schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-35">{"Line"}</label>
                                <input className="field__input mss-w" id="l-35" name="l-35" type="text" required={true} maxLength="70" defaultValue={"Revenue – Spa"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-35">{"Order of Revenue – Spa"}</label>
                                <input className="field__input mss-n" id="o-35" name="o-35" type="number" min="1" max="99" required={true} defaultValue={"2"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-35">{"GL accounts of Revenue – Spa"}</label>
                                <input className="field__input mss-w2" id="a-35" name="a-35" type="text" maxLength="160" defaultValue={"4302 Spa revenue"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-36">{"Statement of Revenue – Transport"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-36" name="s-36" defaultValue={"Other operated departments schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-36">{"Line"}</label>
                                <input className="field__input mss-w" id="l-36" name="l-36" type="text" required={true} maxLength="70" defaultValue={"Revenue – Transport"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-36">{"Order of Revenue – Transport"}</label>
                                <input className="field__input mss-n" id="o-36" name="o-36" type="number" min="1" max="99" required={true} defaultValue={"3"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-36">{"GL accounts of Revenue – Transport"}</label>
                                <input className="field__input mss-w2" id="a-36" name="a-36" type="text" maxLength="160" defaultValue={"4303 Transport revenue"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-37">{"Statement of Payroll and related"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-37" name="s-37" defaultValue={"Other operated departments schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-37">{"Line"}</label>
                                <input className="field__input mss-w" id="l-37" name="l-37" type="text" required={true} maxLength="70" defaultValue={"Payroll and related"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-37">{"Order of Payroll and related"}</label>
                                <input className="field__input mss-n" id="o-37" name="o-37" type="number" min="1" max="99" required={true} defaultValue={"20"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-37">{"GL accounts of Payroll and related"}</label>
                                <input className="field__input mss-w2" id="a-37" name="a-37" type="text" maxLength="160" defaultValue={"5601 Salaries and wages + 5602 PF and ESI × payroll share (MSS-03)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-38">{"Statement of Credit card commissions"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-38" name="s-38" defaultValue={"Administrative & general schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-38">{"Line"}</label>
                                <input className="field__input mss-w" id="l-38" name="l-38" type="text" required={true} maxLength="70" defaultValue={"Credit card commissions"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-38">{"Order of Credit card commissions"}</label>
                                <input className="field__input mss-n" id="o-38" name="o-38" type="number" min="1" max="99" required={true} defaultValue={"10"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-38">{"GL accounts of Credit card commissions"}</label>
                                <input className="field__input mss-w2" id="a-38" name="a-38" type="text" maxLength="160" defaultValue={"5501 Credit card commissions"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-39">{"Statement of Printing and stationery"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-39" name="s-39" defaultValue={"Administrative & general schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-39">{"Line"}</label>
                                <input className="field__input mss-w" id="l-39" name="l-39" type="text" required={true} maxLength="70" defaultValue={"Printing and stationery"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-39">{"Order of Printing and stationery"}</label>
                                <input className="field__input mss-n" id="o-39" name="o-39" type="number" min="1" max="99" required={true} defaultValue={"11"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-39">{"GL accounts of Printing and stationery"}</label>
                                <input className="field__input mss-w2" id="a-39" name="a-39" type="text" maxLength="160" defaultValue={"5401 Printing and stationery"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-40">{"Statement of Staff meals and officers' mess"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-40" name="s-40" defaultValue={"Administrative & general schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-40">{"Line"}</label>
                                <input className="field__input mss-w" id="l-40" name="l-40" type="text" required={true} maxLength="70" defaultValue={"Staff meals and officers' mess"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-40">{"Order of Staff meals and officers' mess"}</label>
                                <input className="field__input mss-n" id="o-40" name="o-40" type="number" min="1" max="99" required={true} defaultValue={"12"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-40">{"GL accounts of Staff meals and officers' mess"}</label>
                                <input className="field__input mss-w2" id="a-40" name="a-40" type="text" maxLength="160" defaultValue={"6101 staff meals, 6102 Officers' mess expense"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-41">{"Statement of Entertainment"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-41" name="s-41" defaultValue={"Administrative & general schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-41">{"Line"}</label>
                                <input className="field__input mss-w" id="l-41" name="l-41" type="text" required={true} maxLength="70" defaultValue={"Entertainment"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-41">{"Order of Entertainment"}</label>
                                <input className="field__input mss-n" id="o-41" name="o-41" type="number" min="1" max="99" required={true} defaultValue={"13"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-41">{"GL accounts of Entertainment"}</label>
                                <input className="field__input mss-w2" id="a-41" name="a-41" type="text" maxLength="160" defaultValue={"6201 Entertainment expense"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-42">{"Statement of Payroll and related"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-42" name="s-42" defaultValue={"Administrative & general schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-42">{"Line"}</label>
                                <input className="field__input mss-w" id="l-42" name="l-42" type="text" required={true} maxLength="70" defaultValue={"Payroll and related"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-42">{"Order of Payroll and related"}</label>
                                <input className="field__input mss-n" id="o-42" name="o-42" type="number" min="1" max="99" required={true} defaultValue={"20"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-42">{"GL accounts of Payroll and related"}</label>
                                <input className="field__input mss-w2" id="a-42" name="a-42" type="text" maxLength="160" defaultValue={"5601 Salaries and wages + 5602 PF and ESI × payroll share (MSS-03)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-43">{"Statement of Payroll and related"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-43" name="s-43" defaultValue={"Information & telecom systems schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-43">{"Line"}</label>
                                <input className="field__input mss-w" id="l-43" name="l-43" type="text" required={true} maxLength="70" defaultValue={"Payroll and related"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-43">{"Order of Payroll and related"}</label>
                                <input className="field__input mss-n" id="o-43" name="o-43" type="number" min="1" max="99" required={true} defaultValue={"20"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-43">{"GL accounts of Payroll and related"}</label>
                                <input className="field__input mss-w2" id="a-43" name="a-43" type="text" maxLength="160" defaultValue={"5601 Salaries and wages + 5602 PF and ESI × payroll share (MSS-03)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-44">{"Statement of Sales promotion"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-44" name="s-44" defaultValue={"Sales & marketing schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-44">{"Line"}</label>
                                <input className="field__input mss-w" id="l-44" name="l-44" type="text" required={true} maxLength="70" defaultValue={"Sales promotion"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-44">{"Order of Sales promotion"}</label>
                                <input className="field__input mss-n" id="o-44" name="o-44" type="number" min="1" max="99" required={true} defaultValue={"10"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-44">{"GL accounts of Sales promotion"}</label>
                                <input className="field__input mss-w2" id="a-44" name="a-44" type="text" maxLength="160" defaultValue={"6202 Sales promotion expense"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-45">{"Statement of Guest complimentary"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-45" name="s-45" defaultValue={"Sales & marketing schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-45">{"Line"}</label>
                                <input className="field__input mss-w" id="l-45" name="l-45" type="text" required={true} maxLength="70" defaultValue={"Guest complimentary"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-45">{"Order of Guest complimentary"}</label>
                                <input className="field__input mss-n" id="o-45" name="o-45" type="number" min="1" max="99" required={true} defaultValue={"11"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-45">{"GL accounts of Guest complimentary"}</label>
                                <input className="field__input mss-w2" id="a-45" name="a-45" type="text" maxLength="160" defaultValue={"6203 Guest complimentary expense"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-46">{"Statement of Payroll and related"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-46" name="s-46" defaultValue={"Sales & marketing schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-46">{"Line"}</label>
                                <input className="field__input mss-w" id="l-46" name="l-46" type="text" required={true} maxLength="70" defaultValue={"Payroll and related"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-46">{"Order of Payroll and related"}</label>
                                <input className="field__input mss-n" id="o-46" name="o-46" type="number" min="1" max="99" required={true} defaultValue={"20"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-46">{"GL accounts of Payroll and related"}</label>
                                <input className="field__input mss-w2" id="a-46" name="a-46" type="text" maxLength="160" defaultValue={"5601 Salaries and wages + 5602 PF and ESI × payroll share (MSS-03)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-47">{"Statement of Repairs and maintenance – spares"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-47" name="s-47" defaultValue={"Property operations & maintenance schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-47">{"Line"}</label>
                                <input className="field__input mss-w" id="l-47" name="l-47" type="text" required={true} maxLength="70" defaultValue={"Repairs and maintenance – spares"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-47">{"Order of Repairs and maintenance – spares"}</label>
                                <input className="field__input mss-n" id="o-47" name="o-47" type="number" min="1" max="99" required={true} defaultValue={"10"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-47">{"GL accounts of Repairs and maintenance – spares"}</label>
                                <input className="field__input mss-w2" id="a-47" name="a-47" type="text" maxLength="160" defaultValue={"5301 spares"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-48">{"Statement of Payroll and related"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-48" name="s-48" defaultValue={"Property operations & maintenance schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-48">{"Line"}</label>
                                <input className="field__input mss-w" id="l-48" name="l-48" type="text" required={true} maxLength="70" defaultValue={"Payroll and related"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-48">{"Order of Payroll and related"}</label>
                                <input className="field__input mss-n" id="o-48" name="o-48" type="number" min="1" max="99" required={true} defaultValue={"20"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-48">{"GL accounts of Payroll and related"}</label>
                                <input className="field__input mss-w2" id="a-48" name="a-48" type="text" maxLength="160" defaultValue={"5601 Salaries and wages + 5602 PF and ESI × payroll share (MSS-03)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-49">{"Statement of Fuel and power"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-49" name="s-49" defaultValue={"Utilities schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-49">{"Line"}</label>
                                <input className="field__input mss-w" id="l-49" name="l-49" type="text" required={true} maxLength="70" defaultValue={"Fuel and power"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-49">{"Order of Fuel and power"}</label>
                                <input className="field__input mss-n" id="o-49" name="o-49" type="number" min="1" max="99" required={true} defaultValue={"10"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-49">{"GL accounts of Fuel and power"}</label>
                                <input className="field__input mss-w2" id="a-49" name="a-49" type="text" maxLength="160" defaultValue={"5402 Fuel and power"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-schedules">
                              <td className="dt__td" data-label="Statement" data-w="" data-t="">
                                <label className="sr-only" htmlFor="s-50">{"Statement of Payroll and related"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-50" name="s-50" defaultValue={"Utilities schedule"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-50">{"Line"}</label>
                                <input className="field__input mss-w" id="l-50" name="l-50" type="text" required={true} maxLength="70" defaultValue={"Payroll and related"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-50">{"Order of Payroll and related"}</label>
                                <input className="field__input mss-n" id="o-50" name="o-50" type="number" min="1" max="99" required={true} defaultValue={"20"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-50">{"GL accounts of Payroll and related"}</label>
                                <input className="field__input mss-w2" id="a-50" name="a-50" type="text" maxLength="160" defaultValue={"5601 Salaries and wages + 5602 PF and ESI × payroll share (MSS-03)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-51">{"Statement of Cash and bank"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-51" name="s-51" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-51">{"Line"}</label>
                                <input className="field__input mss-w" id="l-51" name="l-51" type="text" required={true} maxLength="70" defaultValue={"Cash and bank"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-51">{"Order of Cash and bank"}</label>
                                <input className="field__input mss-n" id="o-51" name="o-51" type="number" min="1" max="99" required={true} defaultValue={"1"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-51">{"GL accounts of Cash and bank"}</label>
                                <input className="field__input mss-w2" id="a-51" name="a-51" type="text" maxLength="160" defaultValue={"1101 – 1203 (10 accounts)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"10"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-52">{"Statement of Fixed deposits and escrow"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-52" name="s-52" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-52">{"Line"}</label>
                                <input className="field__input mss-w" id="l-52" name="l-52" type="text" required={true} maxLength="70" defaultValue={"Fixed deposits and escrow"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-52">{"Order of Fixed deposits and escrow"}</label>
                                <input className="field__input mss-n" id="o-52" name="o-52" type="number" min="1" max="99" required={true} defaultValue={"2"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-52">{"GL accounts of Fixed deposits and escrow"}</label>
                                <input className="field__input mss-w2" id="a-52" name="a-52" type="text" maxLength="160" defaultValue={"1210, 1215"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-53">{"Statement of Inventory"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-53" name="s-53" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-53">{"Line"}</label>
                                <input className="field__input mss-w" id="l-53" name="l-53" type="text" required={true} maxLength="70" defaultValue={"Inventory"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-53">{"Order of Inventory"}</label>
                                <input className="field__input mss-n" id="o-53" name="o-53" type="number" min="1" max="99" required={true} defaultValue={"3"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-53">{"GL accounts of Inventory"}</label>
                                <input className="field__input mss-w2" id="a-53" name="a-53" type="text" maxLength="160" defaultValue={"1301 – 1311 (11 accounts)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"11"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-54">{"Statement of Debtors and tax receivable"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-54" name="s-54" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-54">{"Line"}</label>
                                <input className="field__input mss-w" id="l-54" name="l-54" type="text" required={true} maxLength="70" defaultValue={"Debtors and tax receivable"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-54">{"Order of Debtors and tax receivable"}</label>
                                <input className="field__input mss-n" id="o-54" name="o-54" type="number" min="1" max="99" required={true} defaultValue={"4"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-54">{"GL accounts of Debtors and tax receivable"}</label>
                                <input className="field__input mss-w2" id="a-54" name="a-54" type="text" maxLength="160" defaultValue={"1401 – 1410 (6 accounts)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"6"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-55">{"Statement of Fixed assets – cost"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-55" name="s-55" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-55">{"Line"}</label>
                                <input className="field__input mss-w" id="l-55" name="l-55" type="text" required={true} maxLength="70" defaultValue={"Fixed assets – cost"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-55">{"Order of Fixed assets – cost"}</label>
                                <input className="field__input mss-n" id="o-55" name="o-55" type="number" min="1" max="99" required={true} defaultValue={"5"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-55">{"GL accounts of Fixed assets – cost"}</label>
                                <input className="field__input mss-w2" id="a-55" name="a-55" type="text" maxLength="160" defaultValue={"1501 – 1506 (6 accounts)"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"6"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-56">{"Statement of Accumulated depreciation"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-56" name="s-56" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-56">{"Line"}</label>
                                <input className="field__input mss-w" id="l-56" name="l-56" type="text" required={true} maxLength="70" defaultValue={"Accumulated depreciation"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-56">{"Order of Accumulated depreciation"}</label>
                                <input className="field__input mss-n" id="o-56" name="o-56" type="number" min="1" max="99" required={true} defaultValue={"6"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-56">{"GL accounts of Accumulated depreciation"}</label>
                                <input className="field__input mss-w2" id="a-56" name="a-56" type="text" maxLength="160" defaultValue={"1550"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-57">{"Statement of Overdraft"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-57" name="s-57" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-57">{"Line"}</label>
                                <input className="field__input mss-w" id="l-57" name="l-57" type="text" required={true} maxLength="70" defaultValue={"Overdraft"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-57">{"Order of Overdraft"}</label>
                                <input className="field__input mss-n" id="o-57" name="o-57" type="number" min="1" max="99" required={true} defaultValue={"7"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-57">{"GL accounts of Overdraft"}</label>
                                <input className="field__input mss-w2" id="a-57" name="a-57" type="text" maxLength="160" defaultValue={"2101"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-58">{"Statement of Trade creditors"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-58" name="s-58" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-58">{"Line"}</label>
                                <input className="field__input mss-w" id="l-58" name="l-58" type="text" required={true} maxLength="70" defaultValue={"Trade creditors"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-58">{"Order of Trade creditors"}</label>
                                <input className="field__input mss-n" id="o-58" name="o-58" type="number" min="1" max="99" required={true} defaultValue={"8"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-58">{"GL accounts of Trade creditors"}</label>
                                <input className="field__input mss-w2" id="a-58" name="a-58" type="text" maxLength="160" defaultValue={"2201"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-59">{"Statement of Guest advance deposits"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-59" name="s-59" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-59">{"Line"}</label>
                                <input className="field__input mss-w" id="l-59" name="l-59" type="text" required={true} maxLength="70" defaultValue={"Guest advance deposits"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-59">{"Order of Guest advance deposits"}</label>
                                <input className="field__input mss-n" id="o-59" name="o-59" type="number" min="1" max="99" required={true} defaultValue={"9"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-59">{"GL accounts of Guest advance deposits"}</label>
                                <input className="field__input mss-w2" id="a-59" name="a-59" type="text" maxLength="160" defaultValue={"2202"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-60">{"Statement of GST and TDS payable"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-60" name="s-60" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-60">{"Line"}</label>
                                <input className="field__input mss-w" id="l-60" name="l-60" type="text" required={true} maxLength="70" defaultValue={"GST and TDS payable"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-60">{"Order of GST and TDS payable"}</label>
                                <input className="field__input mss-n" id="o-60" name="o-60" type="number" min="1" max="99" required={true} defaultValue={"10"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-60">{"GL accounts of GST and TDS payable"}</label>
                                <input className="field__input mss-w2" id="a-60" name="a-60" type="text" maxLength="160" defaultValue={"2301, 2302, 2303, 2310"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"4"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-61">{"Statement of Salaries, PF and ESI payable"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-61" name="s-61" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-61">{"Line"}</label>
                                <input className="field__input mss-w" id="l-61" name="l-61" type="text" required={true} maxLength="70" defaultValue={"Salaries, PF and ESI payable"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-61">{"Order of Salaries, PF and ESI payable"}</label>
                                <input className="field__input mss-n" id="o-61" name="o-61" type="number" min="1" max="99" required={true} defaultValue={"11"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-61">{"GL accounts of Salaries, PF and ESI payable"}</label>
                                <input className="field__input mss-w2" id="a-61" name="a-61" type="text" maxLength="160" defaultValue={"2320, 2330"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"2"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-62">{"Statement of Suspense – unmapped postings"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-62" name="s-62" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-62">{"Line"}</label>
                                <input className="field__input mss-w" id="l-62" name="l-62" type="text" required={true} maxLength="70" defaultValue={"Suspense – unmapped postings"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-62">{"Order of Suspense – unmapped postings"}</label>
                                <input className="field__input mss-n" id="o-62" name="o-62" type="number" min="1" max="99" required={true} defaultValue={"12"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-62">{"GL accounts of Suspense – unmapped postings"}</label>
                                <input className="field__input mss-w2" id="a-62" name="a-62" type="text" maxLength="160" defaultValue={"2999"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-63">{"Statement of Share capital"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-63" name="s-63" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-63">{"Line"}</label>
                                <input className="field__input mss-w" id="l-63" name="l-63" type="text" required={true} maxLength="70" defaultValue={"Share capital"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-63">{"Order of Share capital"}</label>
                                <input className="field__input mss-n" id="o-63" name="o-63" type="number" min="1" max="99" required={true} defaultValue={"13"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-63">{"GL accounts of Share capital"}</label>
                                <input className="field__input mss-w2" id="a-63" name="a-63" type="text" maxLength="160" defaultValue={"3101"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-bs">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-64">{"Statement of Retained earnings brought forward"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-64" name="s-64" defaultValue={"Balance sheet"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-64">{"Line"}</label>
                                <input className="field__input mss-w" id="l-64" name="l-64" type="text" required={true} maxLength="70" defaultValue={"Retained earnings brought forward"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-64">{"Order of Retained earnings brought forward"}</label>
                                <input className="field__input mss-n" id="o-64" name="o-64" type="number" min="1" max="99" required={true} defaultValue={"14"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-64">{"GL accounts of Retained earnings brought forward"}</label>
                                <input className="field__input mss-w2" id="a-64" name="a-64" type="text" maxLength="160" defaultValue={"3201"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-65">{"Statement of Net profit before tax"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-65" name="s-65" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-65">{"Line"}</label>
                                <input className="field__input mss-w" id="l-65" name="l-65" type="text" required={true} maxLength="70" defaultValue={"Net profit before tax"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-65">{"Order of Net profit before tax"}</label>
                                <input className="field__input mss-n" id="o-65" name="o-65" type="number" min="1" max="99" required={true} defaultValue={"1"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-65">{"GL accounts of Net profit before tax"}</label>
                                <input className="field__input mss-w2" id="a-65" name="a-65" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-66">{"Statement of Add: depreciation"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-66" name="s-66" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-66">{"Line"}</label>
                                <input className="field__input mss-w" id="l-66" name="l-66" type="text" required={true} maxLength="70" defaultValue={"Add: depreciation"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-66">{"Order of Add: depreciation"}</label>
                                <input className="field__input mss-n" id="o-66" name="o-66" type="number" min="1" max="99" required={true} defaultValue={"2"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-66">{"GL accounts of Add: depreciation"}</label>
                                <input className="field__input mss-w2" id="a-66" name="a-66" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-67">{"Statement of Increase in inventory"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-67" name="s-67" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-67">{"Line"}</label>
                                <input className="field__input mss-w" id="l-67" name="l-67" type="text" required={true} maxLength="70" defaultValue={"Increase in inventory"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-67">{"Order of Increase in inventory"}</label>
                                <input className="field__input mss-n" id="o-67" name="o-67" type="number" min="1" max="99" required={true} defaultValue={"3"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-67">{"GL accounts of Increase in inventory"}</label>
                                <input className="field__input mss-w2" id="a-67" name="a-67" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-68">{"Statement of Increase in debtors and tax receivable"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-68" name="s-68" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-68">{"Line"}</label>
                                <input className="field__input mss-w" id="l-68" name="l-68" type="text" required={true} maxLength="70" defaultValue={"Increase in debtors and tax receivable"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-68">{"Order of Increase in debtors and tax receivable"}</label>
                                <input className="field__input mss-n" id="o-68" name="o-68" type="number" min="1" max="99" required={true} defaultValue={"4"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-68">{"GL accounts of Increase in debtors and tax receivable"}</label>
                                <input className="field__input mss-w2" id="a-68" name="a-68" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-69">{"Statement of Increase in escrow – group deposits"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-69" name="s-69" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-69">{"Line"}</label>
                                <input className="field__input mss-w" id="l-69" name="l-69" type="text" required={true} maxLength="70" defaultValue={"Increase in escrow – group deposits"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-69">{"Order of Increase in escrow – group deposits"}</label>
                                <input className="field__input mss-n" id="o-69" name="o-69" type="number" min="1" max="99" required={true} defaultValue={"5"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-69">{"GL accounts of Increase in escrow – group deposits"}</label>
                                <input className="field__input mss-w2" id="a-69" name="a-69" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-70">{"Statement of Increase in trade creditors and guest deposits"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-70" name="s-70" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-70">{"Line"}</label>
                                <input className="field__input mss-w" id="l-70" name="l-70" type="text" required={true} maxLength="70" defaultValue={"Increase in trade creditors and guest deposits"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-70">{"Order of Increase in trade creditors and guest deposits"}</label>
                                <input className="field__input mss-n" id="o-70" name="o-70" type="number" min="1" max="99" required={true} defaultValue={"6"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-70">{"GL accounts of Increase in trade creditors and guest deposits"}</label>
                                <input className="field__input mss-w2" id="a-70" name="a-70" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-71">{"Statement of Increase in GST, TDS, salaries, PF and ESI payable"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-71" name="s-71" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-71">{"Line"}</label>
                                <input className="field__input mss-w" id="l-71" name="l-71" type="text" required={true} maxLength="70" defaultValue={"Increase in GST, TDS, salaries, PF and ESI payable"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-71">{"Order of Increase in GST, TDS, salaries, PF and ESI payable"}</label>
                                <input className="field__input mss-n" id="o-71" name="o-71" type="number" min="1" max="99" required={true} defaultValue={"7"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-71">{"GL accounts of Increase in GST, TDS, salaries, PF and ESI payable"}</label>
                                <input className="field__input mss-w2" id="a-71" name="a-71" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-72">{"Statement of Purchase of fixed assets – 3rd floor rooms, plant and kitchen refit"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-72" name="s-72" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-72">{"Line"}</label>
                                <input className="field__input mss-w" id="l-72" name="l-72" type="text" required={true} maxLength="70" defaultValue={"Purchase of fixed assets – 3rd floor rooms, plant and kitchen refit"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-72">{"Order of Purchase of fixed assets – 3rd floor rooms, plant and kitchen refit"}</label>
                                <input className="field__input mss-n" id="o-72" name="o-72" type="number" min="1" max="99" required={true} defaultValue={"8"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-72">{"GL accounts of Purchase of fixed assets – 3rd floor rooms, plant and kitchen refit"}</label>
                                <input className="field__input mss-w2" id="a-72" name="a-72" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-73">{"Statement of Fixed deposits placed"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-73" name="s-73" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-73">{"Line"}</label>
                                <input className="field__input mss-w" id="l-73" name="l-73" type="text" required={true} maxLength="70" defaultValue={"Fixed deposits placed"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-73">{"Order of Fixed deposits placed"}</label>
                                <input className="field__input mss-n" id="o-73" name="o-73" type="number" min="1" max="99" required={true} defaultValue={"9"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-73">{"GL accounts of Fixed deposits placed"}</label>
                                <input className="field__input mss-w2" id="a-73" name="a-73" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-74">{"Statement of Repayment of bank overdraft (SBI)"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-74" name="s-74" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-74">{"Line"}</label>
                                <input className="field__input mss-w" id="l-74" name="l-74" type="text" required={true} maxLength="70" defaultValue={"Repayment of bank overdraft (SBI)"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-74">{"Order of Repayment of bank overdraft (SBI)"}</label>
                                <input className="field__input mss-n" id="o-74" name="o-74" type="number" min="1" max="99" required={true} defaultValue={"10"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-74">{"GL accounts of Repayment of bank overdraft (SBI)"}</label>
                                <input className="field__input mss-w2" id="a-74" name="a-74" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="gl-row rg-cf">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">
                                <label className="sr-only" htmlFor="s-75">{"Statement of Dividend paid to the owner (2025-26 final)"}</label>
                                <div className="field__wrap">
                                  <select className="field__input field__input--select" id="s-75" name="s-75" defaultValue={"Cash flow"}>
                                    <option value="Summary operating statement">{"Summary operating statement"}</option>
                                    <option value="Rooms schedule">{"Rooms schedule"}</option>
                                    <option value="Food & beverage schedule">{"Food & beverage schedule"}</option>
                                    <option value="Other operated departments schedule">{"Other operated departments schedule"}</option>
                                    <option value="Executive lounge schedule (if any)">{"Executive lounge schedule (if any)"}</option>
                                    <option value="Administrative & general schedule">{"Administrative & general schedule"}</option>
                                    <option value="Information & telecom systems schedule">{"Information & telecom systems schedule"}</option>
                                    <option value="Sales & marketing schedule">{"Sales & marketing schedule"}</option>
                                    <option value="Property operations & maintenance schedule">{"Property operations & maintenance schedule"}</option>
                                    <option value="Utilities schedule">{"Utilities schedule"}</option>
                                    <option value="Management fees">{"Management fees"}</option>
                                    <option value="Non-operating">{"Non-operating"}</option>
                                    <option value="Balance sheet">{"Balance sheet"}</option>
                                    <option value="Cash flow">{"Cash flow"}</option>
                                  </select>
                                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#chevron-down" />
                                  </svg>
                                </div>
                              </td>
                              <td className="dt__td" data-label="Line">
                                <label className="sr-only" htmlFor="l-75">{"Line"}</label>
                                <input className="field__input mss-w" id="l-75" name="l-75" type="text" required={true} maxLength="70" defaultValue={"Dividend paid to the owner (2025-26 final)"} />
                              </td>
                              <td className="dt__td" data-label="Order">
                                <label className="sr-only" htmlFor="o-75">{"Order of Dividend paid to the owner (2025-26 final)"}</label>
                                <input className="field__input mss-n" id="o-75" name="o-75" type="number" min="1" max="99" required={true} defaultValue={"11"} />
                              </td>
                              <td className="dt__td" data-label="GL accounts / groups" data-w2="">
                                <label className="sr-only" htmlFor="a-75">{"GL accounts of Dividend paid to the owner (2025-26 final)"}</label>
                                <input className="field__input mss-w2" id="a-75" name="a-75" type="text" maxLength="160" defaultValue={"calculated from the balance sheet and the profit"} />
                              </td>
                              <td className="dt__td dt__td--right nw num" data-e="">{"–"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#calculator" />
                                  </svg>
                                  {"Calculated"}
                                </span>
                              </td>
                            </tr>
                            <tr className="hr-new">
                              <td className="dt__td" data-label="Statement" data-w2="" data-t="">{"Non-operating"}</td>
                              <td className="dt__td" data-label="Line">
                                <b>{"Non-operating – property tax"}</b>
                              </td>
                              <td className="dt__td num" data-label="Order">{"4"}</td>
                              <td className="dt__td" data-label="GL accounts / groups">{"6501 Property tax (new account)"}</td>
                              <td className="dt__td dt__td--right num" data-label="Accounts" data-w2="">{"1"}</td>
                              <td className="dt__td" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="fd-sec" id="sec-unm" data-code="MSS-01-unmapped">
                  <h2 className="fd-sec__t">{"Unmapped accounts"}</h2>
                  <p className="fd-sec__d">{"The mapping check (MSS-X01) lists the accounts of the chart that no line picks up. Today it is empty; if the Financial Controller opens a new account in ACS-01 it appears here the next morning and in the notification bell."}</p>
                  <div className="prs-in">
                    <div className="mss-ok">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check-circle" />
                      </svg>
                      <div>
                        <b>{"No unmapped accounts"}</b>
                        <span>
                          {"All 83 accounts of the chart are mapped. Last check 22-10-2026 03:30. "}
                          <Link className="fd-link" to={"/general-ledger-setup/acs-01-chart-of-accounts"}>{"Open the chart of accounts (ACS-01)"}</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="s-sec" id="sec-cov">
                  <details className="mss-cov">
                    <summary>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#list" />
                      </svg>
                      {"Show all 83 accounts and the line they feed"}
                    </summary>
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table" data-code="MSS-01-coverage" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Account coverage"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Account"}</th>
                              <th scope="col">{"Name"}</th>
                              <th scope="col">{"Group"}</th>
                              <th scope="col">{"Statement"}</th>
                              <th scope="col">{"Line"}</th>
                              <th scope="col">{"Status"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1101"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Cash – main cash"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1102"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Cash – front office float"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1103"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Cash – outlet floats"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1104"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Cash – stores imprest"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1105"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Cash – engineering imprest"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1106"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Cash – HR imprest"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1107"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Cash – housekeeping imprest"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1201"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Bank – HDFC current"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1202"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Bank – Federal current"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1203"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Bank – ICICI current"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1210"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Fixed deposits"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Fixed deposits and escrow"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1215"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Escrow – group deposits"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cash and bank"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Fixed deposits and escrow"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1301"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Inventory – Food"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1302"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Inventory – Beverages"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1303"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Inventory – Liquor and wine"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1304"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Inventory – Tobacco"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1305"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Inventory – Housekeeping supplies"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1306"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Inventory – Guest amenities"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1307"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Inventory – Linen"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1308"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Inventory – Engineering spares"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1309"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Inventory – Stationery"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1310"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Inventory – Fuel"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1311"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Inventory – Bar and F&B consumables"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Inventory"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Inventory"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1401"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Trade debtors – city ledger"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Receivables and tax"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line">{"Debtors and tax receivable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1403"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"TDS receivable"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Receivables and tax"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line">{"Debtors and tax receivable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1404"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"GST input credit – CGST"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Receivables and tax"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line">{"Debtors and tax receivable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1405"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"GST input credit – SGST"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Receivables and tax"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line">{"Debtors and tax receivable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1406"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"GST input credit – IGST"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Receivables and tax"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line">{"Debtors and tax receivable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1410"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Card and UPI settlements receivable"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Receivables and tax"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line">{"Debtors and tax receivable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1501"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Land and building"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Fixed assets"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Fixed assets – cost"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1502"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Plant and machinery"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Fixed assets"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Fixed assets – cost"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1503"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Furniture and fixtures"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Fixed assets"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Fixed assets – cost"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1504"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Kitchen equipment"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Fixed assets"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Fixed assets – cost"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1505"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Computers"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Fixed assets"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Fixed assets – cost"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1506"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Vehicles"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Fixed assets"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Fixed assets – cost"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"1550"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Accumulated depreciation"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Fixed assets"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Accumulated depreciation"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"2101"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Bank overdraft – SBI"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Current liabilities"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Overdraft"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"2201"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Trade creditors"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Current liabilities"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Trade creditors"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"2202"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Guest advance deposits"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Current liabilities"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Guest advance deposits"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"2999"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Suspense – unmapped postings"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Current liabilities"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line">{"Suspense – unmapped postings"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"2301"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"GST output – CGST"}</td>
                              <td className="dt__td" data-label="Group">{"Tax and payroll liabilities"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"GST and TDS payable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"2302"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"GST output – SGST"}</td>
                              <td className="dt__td" data-label="Group">{"Tax and payroll liabilities"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"GST and TDS payable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"2303"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"GST output – IGST"}</td>
                              <td className="dt__td" data-label="Group">{"Tax and payroll liabilities"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"GST and TDS payable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"2310"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"TDS payable"}</td>
                              <td className="dt__td" data-label="Group">{"Tax and payroll liabilities"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"GST and TDS payable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"2320"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"PF and ESI payable"}</td>
                              <td className="dt__td" data-label="Group">{"Tax and payroll liabilities"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line">{"Salaries, PF and ESI payable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"2330"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Salaries payable"}</td>
                              <td className="dt__td" data-label="Group">{"Tax and payroll liabilities"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line">{"Salaries, PF and ESI payable"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"3101"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Share capital"}</td>
                              <td className="dt__td" data-label="Group">{"Equity"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Share capital"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"3201"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Retained earnings"}</td>
                              <td className="dt__td" data-label="Group">{"Equity"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Balance sheet"}</td>
                              <td className="dt__td" data-label="Line">{"Retained earnings brought forward"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4101"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Rooms – transient rooms revenue"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Revenue – Rooms"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Revenue – Rooms"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4102"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Rooms – group rooms revenue"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Revenue – Rooms"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Revenue – Rooms"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4190"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Rooms – allowances"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Revenue – Rooms"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Revenue – Rooms"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4201"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"F&B – food revenue"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Revenue – F&B"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Revenue – Food & beverage"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4202"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"F&B – beverage revenue"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Revenue – F&B"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Revenue – Food & beverage"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4203"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"F&B – banquet and room hire revenue"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Revenue – F&B"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Revenue – Food & beverage"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4210"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Minibar revenue (reported in F&B)"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Revenue – F&B"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Revenue – Food & beverage"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4301"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Laundry revenue"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Revenue – other operated"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Revenue – Other operated departments"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4302"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Spa revenue"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Revenue – other operated"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Revenue – Other operated departments"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4303"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Transport revenue"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Revenue – other operated"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Revenue – Other operated departments"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4401"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Interest income"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Other income"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Non-operating"}</td>
                              <td className="dt__td" data-label="Line">{"Non-operating – interest income"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"4402"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Miscellaneous income"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Other income"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Revenue – Miscellaneous income"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5101"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Food cost"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cost of sales"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Food & beverage"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5102"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Beverage cost"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cost of sales"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Food & beverage"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5103"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Liquor cost"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cost of sales"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Food & beverage"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5104"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Tobacco cost"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cost of sales"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Food & beverage"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5105"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Bar and F&B consumables"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Cost of sales"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Food & beverage"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5201"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Housekeeping supplies consumed"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Department expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Expenses – Rooms"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5202"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Guest amenities consumed"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Department expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Expenses – Rooms"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5203"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Linen consumed"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Department expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Expenses – Rooms"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5301"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Repairs and maintenance – spares"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Undistributed expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Property operations & maintenance"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5401"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Printing and stationery"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Undistributed expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Administrative & general"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5402"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Fuel and power"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Undistributed expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Expenses – Utilities"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5501"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Credit card commissions"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Undistributed expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Administrative & general"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5502"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"OTA commissions"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Undistributed expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Expenses – Rooms"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5601"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Salaries and wages"}</td>
                              <td className="dt__td" data-label="Group">{"Payroll"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Expenses – Rooms"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"5602"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"PF and ESI – employer share"}</td>
                              <td className="dt__td" data-label="Group">{"Payroll"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line" data-w2="">{"Expenses – Rooms"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"6101"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Staff welfare – staff meals"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Department expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Administrative & general"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"6102"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Officers' mess expense"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Department expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Administrative & general"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"6201"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Entertainment expense"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Undistributed expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Administrative & general"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"6202"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Sales promotion expense"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Undistributed expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Sales & marketing"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"6203"}</b>
                              </td>
                              <td className="dt__td" data-label="Name">{"Guest complimentary expense"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Undistributed expenses"}</td>
                              <td className="dt__td" data-label="Statement">{"Summary operating statement"}</td>
                              <td className="dt__td" data-label="Line">{"Expenses – Sales & marketing"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"6301"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Depreciation"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Non-operating"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Non-operating"}</td>
                              <td className="dt__td" data-label="Line">{"Non-operating – depreciation"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"6401"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Bank charges"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Non-operating"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Non-operating"}</td>
                              <td className="dt__td" data-label="Line">{"Non-operating – bank charges and rounding"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td nw" data-label="Account" data-w2="" data-t="">
                                <b className="num">{"7101"}</b>
                              </td>
                              <td className="dt__td" data-label="Name" data-w2="">{"Rounding off"}</td>
                              <td className="dt__td" data-label="Group" data-w2="">{"Non-operating"}</td>
                              <td className="dt__td" data-label="Statement" data-w2="">{"Non-operating"}</td>
                              <td className="dt__td" data-label="Line">{"Non-operating – bank charges and rounding"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Mapped"}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </details>
                </section>
                <section className="fd-sec" id="sec-ver" data-code="MSS-01-version">
                  <h2 className="fd-sec__t">{"Structure version"}</h2>
                  <p className="fd-sec__d">{"The line structure is versioned so that a past month always shows the structure that was active then. A new version starts as a Draft, the Financial Controller activates it from the next financial year, and the old version is superseded."}</p>
                  <div className="prs-in">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="dt__table dt--hug" data-code="MSS-01-version" data-nosort="" data-mc="">
                          <caption className="sr-only">{"Structure versions"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">{"Version"}</th>
                              <th scope="col">{"Valid for"}</th>
                              <th scope="col">{"Active from"}</th>
                              <th scope="col">{"Set by"}</th>
                              <th scope="col">{"Status"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="dt__td" data-label="Version" data-w2="" data-t="">
                                <b>{"V3"}</b>
                              </td>
                              <td className="dt__td" data-label="Valid for">{"2026-27 (USALI 12th edition)"}</td>
                              <td className="dt__td nw" data-label="Active from" data-w2="">{"01-04-2026"}</td>
                              <td className="dt__td" data-label="Set by" data-w2="">{"Vikram Nathan"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--ok">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Active"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Version" data-w2="" data-t="">
                                <b>{"V4"}</b>
                              </td>
                              <td className="dt__td" data-label="Valid for">{"2027-28 – Utilities split by meter (rooms wing, kitchen, common)"}</td>
                              <td className="dt__td nw" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Set by" data-w2="">{"Lakshmi Ishaan"}</td>
                              <td className="dt__td nw" data-label="Status" data-s="">
                                <span className="pill hk-pill cc--draft">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#pencil" />
                                  </svg>
                                  {"Draft"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Version" data-w2="" data-t="">
                                <b>{"V2"}</b>
                              </td>
                              <td className="dt__td" data-label="Valid for" data-w2="">{"2025-26"}</td>
                              <td className="dt__td nw" data-label="Active from" data-w2="">{"01-04-2025"}</td>
                              <td className="dt__td" data-label="Set by" data-w2="">{"Lakshmi Ishaan"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#archive" />
                                  </svg>
                                  {"Superseded"}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="dt__td" data-label="Version" data-w2="" data-t="">
                                <b>{"V1"}</b>
                              </td>
                              <td className="dt__td" data-label="Valid for">{"2024-25 (first load from the USALI template)"}</td>
                              <td className="dt__td nw" data-label="Active from" data-w2="">{"01-04-2024"}</td>
                              <td className="dt__td" data-label="Set by" data-w2="">{"Lakshmi Ishaan"}</td>
                              <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                                <span className="pill hk-pill cc--done">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#archive" />
                                  </svg>
                                  {"Superseded"}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
                <details className="hk-sys cc-log" data-code="MSS-X02">
                  <summary>
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#history" />
                    </svg>
                    {"System – setup audit logger (MSS-X02): the last changes on this screen"}
                  </summary>
                  <div className="s-scroll">
                    <table className="dt__table dt--hug" data-code="MSS-01-audit" data-nosort="" data-mc="">
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
                          <td className="dt__td nw num" data-label="When" data-w2="" data-t="">{"19-10-2026 11:00"}</td>
                          <td className="dt__td nw" data-label="Who" data-w2="">{"Lakshmi Ishaan"}</td>
                          <td className="dt__td" data-label="What" data-w2="">{"Version V4 (draft)"}</td>
                          <td className="dt__td" data-label="Old → new">{"started: Utilities split by meter"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td nw num" data-label="When" data-w2="" data-t="">{"06-10-2026 10:10"}</td>
                          <td className="dt__td nw" data-label="Who" data-w2="">{"Lakshmi Ishaan"}</td>
                          <td className="dt__td" data-label="What" data-w2="">{"Management fees"}</td>
                          <td className="dt__td" data-label="Old → new">{"line kept with no account (the hotel pays no management fee)"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td nw num" data-label="When" data-w2="" data-t="">{"01-04-2026 09:00"}</td>
                          <td className="dt__td nw" data-label="Who" data-w2="">{"Vikram Nathan"}</td>
                          <td className="dt__td" data-label="What" data-w2="">{"Structure V3"}</td>
                          <td className="dt__td" data-label="Old → new">{"activated for 2026-27 (USALI 12th edition)"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="cc-note">{"Every change is written automatically with user, time and the old and new values. The log cannot be edited and is kept for 8 years."}</p>
                </details>
                <div className="fd-formfoot">
                  <span className="fd-spacer">{"Last saved 19-10-2026 11:00 by Lakshmi Ishaan. Written to the setup audit log with the old and new values (MSS-X02)."}</span>
                  <a className="btn" href="#cancelled">{"Cancel"}</a>
                  <button className="btn btn--primary" type="submit">{"Save"}</button>
                </div>
              </form>
              <details className="hk-sys" data-code="MSS-X01">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#cog" />
                  </svg>
                  {"System – what runs automatically on this screen"}
                </summary>
                <ul>
                  <li data-code="MSS-X01">
                    <b>{"MSS-X01 · Mapping check"}</b>
                    {" – Every day at 03:30 it lists the GL accounts that are not mapped to a statement line; the Financial Controller is notified in the app."}
                  </li>
                </ul>
              </details>
              <div className="fd-toast" id="t-saved" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Statement lines saved"}
                  <small>{"MS-X01 builds the next statements with the new mapping; months already published keep the structure of their version. Written to the setup audit log with the old and new values (MSS-X02)."}</small>
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
                  {"Line added"}
                  <small>{"Non-operating – property tax now picks up account 6501 once it is opened in ACS-01. Written to the setup audit log with the old and new values (MSS-X02)."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="cancelled" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#x-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"No changes saved"}
                  <small>{"The page shows the saved settings again."}</small>
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
