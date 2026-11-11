// GENERATED from public/general-ledger/ac-09-fixed-asset-register/index.html by scripts/convert_legacy.py.
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
    "href": "/general-ledger/ac-09-fixed-asset-register/ac-09-fixed-asset-register.css",
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

export default function GeneralLedgerAc09FixedAssetRegister() {
  return (
    <ScreenShell title="Fixed Asset Register" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="AC-09" data-code="AC-09" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="general-ledger" open={true}>
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
                  <Link className="nav__item is-active" data-nav="AC-09" aria-current="page" title="Fixed Assets" to={"/general-ledger/ac-09-fixed-asset-register"}>
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
            <main className="app__content" id="main" data-code="AC-09" tabIndex="-1">
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
                        <Link to={"/general-ledger/ac-01-gl-dashboard"}>{"General Ledger"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Fixed Assets"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Fixed Asset Register"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"AC-09"}</span>
                  <div className="page-header__actions">
                    <Link className="btn" data-leads-to="AC-O03" to={"/general-ledger/ac-o03-fixed-asset-schedule"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Asset schedule"}
                    </Link>
                    <label className="btn add-btn" htmlFor="add-1" role="button">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"Add asset"}
                    </label>
                    <a className="btn btn--primary" href="#ac-p01" data-leads-to="AC-P01">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Run depreciation"}
                    </a>
                  </div>
                </div>
              </header>
              <input className="add-sw" type="checkbox" id="add-1" aria-label="Show the add asset form" />
              <div className="add-panel la-add">
                <form className="la-add__f" action="/general-ledger/ac-09-fixed-asset-register/#added" method="get" data-code="AC-09-add">
                  <fieldset className="gl-types gl-types--2">
                    <legend className="field__label">
                      {"From "}
                      <span className="field__req" title="Required">{"*"}</span>
                    </legend>
                    <label className="gl-type">
                      <input type="radio" name="from" value="bill" required={true} defaultChecked={true} />
                      <span>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#file-text" />
                        </svg>
                        <b>{"A passed capital bill"}</b>
                        <small>{"Finance (FN-05) – BIL-2026-00548 is the latest"}</small>
                      </span>
                    </label>
                    <label className="gl-type">
                      <input type="radio" name="from" value="manual" />
                      <span>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#pencil" />
                        </svg>
                        <b>{"Manual"}</b>
                        <small>{"an asset without a bill in this system"}</small>
                      </span>
                    </label>
                  </fieldset>
                  <div className="s-grid2 la-cols">
                    <div className="field">
                      <label className="field__label" htmlFor="fa-n">
                        {"Name "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="fa-n" name="name" type="text" required={true} maxLength="60" placeholder="e.g. Chiller compressor – VRV bank A" />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="fa-c">
                        {"Class "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="fa-c" name="class" required={true} defaultValue={""}>
                          <option value="" disabled={true}>{"Choose a class"}</option>
                          <option value="Building">{"Building"}</option>
                          <option value="Plant and machinery">{"Plant and machinery"}</option>
                          <option value="Furniture and fixtures">{"Furniture and fixtures"}</option>
                          <option value="Kitchen equipment">{"Kitchen equipment"}</option>
                          <option value="Computers">{"Computers"}</option>
                          <option value="Vehicles">{"Vehicles"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                      <span className="field__hint">{"Linen and crockery are expensed through Linen (LN), not capitalised"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="fa-l">
                        {"Location "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="fa-l" name="location" type="text" required={true} maxLength="60" />
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="fa-d">
                        {"Department "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <div className="field__wrap">
                        <select className="field__input field__input--select" id="fa-d" name="dept" required={true} defaultValue={""}>
                          <option value="" disabled={true}>{"Choose a department"}</option>
                          <option value="ROOMS">{"ROOMS · Rooms"}</option>
                          <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                          <option value="SFG">{"SFG · Seafood Grill"}</option>
                          <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                          <option value="IRD">{"IRD · In-room Dining"}</option>
                          <option value="BNQ">{"BNQ · Banquets"}</option>
                          <option value="MBR">{"MBR · Minibar"}</option>
                          <option value="LAU">{"LAU · Laundry"}</option>
                          <option value="SPA">{"SPA · Spa"}</option>
                          <option value="TRN">{"TRN · Transport"}</option>
                          <option value="A&G">{"A&G · Administration & General"}</option>
                          <option value="S&M">{"S&M · Sales & Marketing"}</option>
                          <option value="POM">{"POM · Property operations & maintenance"}</option>
                          <option value="UTL">{"UTL · Utilities"}</option>
                          <option value="IT">{"IT · IT"}</option>
                          <option value="HR">{"HR · HR"}</option>
                          <option value="NOP">{"NOP · Non-operating"}</option>
                          <option>{"HK · Housekeeping"}</option>
                        </select>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </div>
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="fa-pd">
                        {"Purchase date "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="fa-pd" name="purchase" type="date" required={true} defaultValue={"2026-10-12"} />
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="fa-ud">
                        {"Put-to-use date "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="fa-ud" name="put_to_use" type="date" required={true} min="2026-10-01" defaultValue={"2026-10-22"} />
                      <span className="field__hint">{"Depreciation starts from this month"}</span>
                    </div>
                    <div className="field" data-fw="x">
                      <label className="field__label" htmlFor="fa-cost">
                        {"Cost (₹) "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </label>
                      <input className="field__input" id="fa-cost" name="cost" type="number" required={true} min="5000" step="1" inputMode="numeric" />
                      <span className="field__hint">{"Items below ₹5,000 are expensed"}</span>
                    </div>
                    <div className="field">
                      <label className="field__label" htmlFor="fa-b">{"Vendor bill"}</label>
                      <input className="field__input" id="fa-b" name="bill" type="text" maxLength="30" defaultValue={"BIL-2026-00548"} />
                    </div>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="fa-mt">{"Engineering asset link"}</label>
                      <input className="field__input" id="fa-mt" name="mt_asset" type="text" list="mt-assets" maxLength="10" placeholder="AS-ENG-000" />
                    </div>
                  </div>
                  <div className="la-add__a">
                    <span className="fd-muted">{"Useful life, residual value and method come from the class (ACS-05)"}</span>
                    <button className="btn btn--primary" type="submit">{"Add asset"}</button>
                  </div>
                </form>
              </div>
              <div className="hb-mks" aria-hidden="true">
                <i className="pm pm--v" id="v-all" />
                <i className="pm pm--v" id="v-bld" />
                <i className="pm pm--v" id="v-pm" />
                <i className="pm pm--v" id="v-ff" />
                <i className="pm pm--v" id="v-ke" />
                <i className="pm pm--v" id="v-it" />
                <i className="pm pm--v" id="v-veh" />
                <i className="pm" id="dep-posted" />
                <i className="pm" id="added" />
                <i className="pm" id="link-saved" />
                <i className="pm" id="disposed-fa-1001" />
                <i className="pm" id="disposed-fa-1101" />
                <i className="pm" id="disposed-fa-1102" />
                <i className="pm" id="disposed-fa-1104" />
                <i className="pm" id="disposed-fa-1120" />
                <i className="pm" id="disposed-fa-1121" />
                <i className="pm" id="disposed-fa-1122" />
                <i className="pm" id="disposed-fa-1130" />
                <i className="pm" id="disposed-fa-1135" />
                <i className="pm" id="disposed-fa-1140" />
                <i className="pm" id="disposed-fa-1141" />
                <i className="pm" id="disposed-fa-1142" />
                <i className="pm" id="disposed-fa-1150" />
                <i className="pm" id="disposed-fa-1151" />
                <i className="pm" id="disposed-fa-1160" />
                <i className="pm" id="disposed-fa-1161" />
                <i className="pm" id="disposed-fa-1180" />
                <i className="pm" id="disposed-fa-1183" />
                <i className="pm" id="disposed-fa-1240" />
                <i className="pm" id="disposed-fa-1301" />
                <i className="pm" id="disposed-fa-0861" />
                <i className="pm" id="disposed-fa-1170" />
                <i className="pm" id="disposed-fa-1235" />
                <i className="pm" id="disposed-fa-1190" />
                <i className="pm" id="disposed-fa-1191" />
                <i className="pm" id="disposed-fa-1192" />
                <i className="pm" id="disposed-fa-1200" />
                <i className="pm" id="disposed-fa-1210" />
                <i className="pm" id="disposed-fa-1215" />
                <i className="pm" id="disposed-fa-1250" />
                <i className="pm" id="disposed-fa-1251" />
                <i className="pm" id="disposed-fa-1260" />
              </div>
              <ul className="cc-kpis">
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"₹58,03,97,000"}</span>
                  <span className="cc-kpi__l">{"Cost of assets in use"}</span>
                  <span className="cc-kpi__s">{"32 assets in 6 classes"}</span>
                </li>
                <li className="cc-kpi">
                  <span className="cc-kpi__v">{"₹11,54,41,395"}</span>
                  <span className="cc-kpi__l">{"Accumulated depreciation"}</span>
                  <span className="cc-kpi__s">{"to 30-09-2026"}</span>
                </li>
                <li className="cc-kpi cc-kpi--ok">
                  <span className="cc-kpi__v">{"₹46,49,55,605"}</span>
                  <span className="cc-kpi__l">{"Book value"}</span>
                  <span className="cc-kpi__s">{"Companies Act book"}</span>
                </li>
                <li className="cc-kpi cc-kpi--warn">
                  <span className="cc-kpi__v">{"₹13,10,150"}</span>
                  <span className="cc-kpi__l">{"October depreciation"}</span>
                  <span className="cc-kpi__s">{"not yet run – month-close check"}</span>
                </li>
              </ul>
              <div className="fd-banner fd-banner--info cc-banner gl-dep-due">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <div className="fd-banner__t">
                  <strong>{"October depreciation has not been run"}</strong>
                  {"Run it once all additions of the month are in (AC-P01). One journal is posted for the Companies Act book; the income-tax book is kept for the tax computation. "}
                  <a className="fd-link" href="#ac-p01">{"Run depreciation"}</a>
                </div>
              </div>
              <nav className="hv st-views" aria-label="Asset classes">
                <a className="hv__v" href="#v-all" data-v="v-all">
                  <span>{"All assets"}</span>
                  <b className="num">{"33"}</b>
                </a>
                <a className="hv__v" href="#v-bld" data-v="v-bld">
                  <span>{"Building"}</span>
                  <b className="num">{"1"}</b>
                </a>
                <a className="hv__v" href="#v-pm" data-v="v-pm">
                  <span>{"Plant and machinery"}</span>
                  <b className="num">{"20"}</b>
                </a>
                <a className="hv__v" href="#v-ff" data-v="v-ff">
                  <span>{"Furniture and fixtures"}</span>
                  <b className="num">{"6"}</b>
                </a>
                <a className="hv__v" href="#v-ke" data-v="v-ke">
                  <span>{"Kitchen equipment"}</span>
                  <b className="num">{"3"}</b>
                </a>
                <a className="hv__v" href="#v-it" data-v="v-it">
                  <span>{"Computers"}</span>
                  <b className="num">{"2"}</b>
                </a>
                <a className="hv__v" href="#v-veh" data-v="v-veh">
                  <span>{"Vehicles"}</span>
                  <b className="num">{"1"}</b>
                </a>
              </nav>
              <section className="fd-sec cc-sec" id="sec-assets" data-code="AC-09-list">
                <h2 className="fd-sec__t">{"Fixed asset register"}</h2>
                <p className="fd-sec__d">{"Asset, class, location and department, dates, cost, life, accumulated depreciation and book value. The engineering asset number links each machine to its maintenance record (MT-08)."}</p>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table gl-tbl" data-code="AC-09-assets" style={{"--srt-cols": "auto auto auto auto auto auto auto auto"}} data-mc="">
                      <caption className="sr-only">{"Fixed assets with cost, depreciation and book value"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="stac090" id="stac090-0a" aria-label="Sort by Asset no., lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="stac090" id="stac090-0d" aria-label="Sort by Asset no., highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stac090-0a">{"Asset no."}</label>
                            <label className="srt-l srt-l--d" htmlFor="stac090-0d" aria-hidden="true">{"Asset no."}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="stac090" id="stac090-1a" aria-label="Sort by Name / location, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="stac090" id="stac090-1d" aria-label="Sort by Name / location, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stac090-1a">{"Name / location"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stac090-1d" aria-hidden="true">{"Name / location"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="stac090" id="stac090-2a" aria-label="Sort by Put to use, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="stac090" id="stac090-2d" aria-label="Sort by Put to use, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stac090-2a">{"Put to use"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stac090-2d" aria-hidden="true">{"Put to use"}</label>
                          </th>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a3" type="radio" name="stac090" id="stac090-3a" aria-label="Sort by Cost / life, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="stac090" id="stac090-3d" aria-label="Sort by Cost / life, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stac090-3a">{"Cost / life"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stac090-3d" aria-hidden="true">{"Cost / life"}</label>
                          </th>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a4" type="radio" name="stac090" id="stac090-4a" aria-label="Sort by Acc. depreciation, lowest or A first" />
                            <input className="srt-i srt-d4" type="radio" name="stac090" id="stac090-4d" aria-label="Sort by Acc. depreciation, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stac090-4a">{"Acc. depreciation"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stac090-4d" aria-hidden="true">{"Acc. depreciation"}</label>
                          </th>
                          <th scope="col" className="dt__th--right">
                            <input className="srt-i srt-a5" type="radio" name="stac090" id="stac090-5a" aria-label="Sort by Book value, lowest or A first" />
                            <input className="srt-i srt-d5" type="radio" name="stac090" id="stac090-5d" aria-label="Sort by Book value, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stac090-5a">{"Book value"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stac090-5d" aria-hidden="true">{"Book value"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a6" type="radio" name="stac090" id="stac090-6a" aria-label="Sort by Status, lowest or A first" />
                            <input className="srt-i srt-d6" type="radio" name="stac090" id="stac090-6d" aria-label="Sort by Status, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stac090-6a">{"Status"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stac090-6d" aria-hidden="true">{"Status"}</label>
                          </th>
                          <th scope="col">{"Actions"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="gl-row fc-bld" id="r-fa-1001" style={{"--k0": "2", "--k1": "17", "--k2": "1", "--k3": "32", "--k4": "33", "--k5": "32", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1001">
                              <b className="num">{"FA-1001"}</b>
                            </a>
                            <span className="fd-sub">{"no MT link"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Hotel building and civil works"}</span>
                            <span className="fd-sub">{"Willingdon Island · A&G"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 15-01-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹48,60,00,000.00"}
                            <span className="fd-sub">{"60 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹5,83,53,750.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹42,76,46,250.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1001">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-0861" style={{"--k0": "1", "--k1": "6", "--k2": "3", "--k3": "9", "--k4": "18", "--k5": "2", "--k6": "3"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-0861">
                              <b className="num">{"FA-0861"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-024"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"DG set 3 (old) – 125 kVA"}</span>
                            <span className="fd-sub">{"DG room · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"05-05-2012"}
                            <span className="fd-sub">{"bought 25-04-2012"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹9,80,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹8,94,756.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹85,244.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--warn">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#pause" />
                              </svg>
                              {"Out of service"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-0861">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1101" style={{"--k0": "3", "--k1": "27", "--k2": "2", "--k3": "15", "--k4": "16", "--k5": "15", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1101">
                              <b className="num">{"FA-1101"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-003"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Transformer 1000 kVA"}</span>
                            <span className="fd-sub">{"HT yard and LT panel room · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"02-01-2019"}
                            <span className="fd-sub">{"bought 18-12-2018"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹17,60,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹8,63,877.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹8,96,123.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1101">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1102" style={{"--k0": "4", "--k1": "21", "--k2": "2", "--k3": "18", "--k4": "19", "--k5": "17", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1102">
                              <b className="num">{"FA-1102"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-004"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Main LT panel 2500 A"}</span>
                            <span className="fd-sub">{"HT yard and LT panel room · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"02-01-2019"}
                            <span className="fd-sub">{"bought 18-12-2018"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹18,90,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹9,27,675.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹9,62,325.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1102">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1104" style={{"--k0": "5", "--k1": "5", "--k2": "5", "--k3": "14", "--k4": "14", "--k5": "14", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1104">
                              <b className="num">{"FA-1104"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-002"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"DG set 2 – 320 kVA"}</span>
                            <span className="fd-sub">{"DG room · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"12-03-2019"}
                            <span className="fd-sub">{"bought 02-03-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹16,30,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹7,82,873.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹8,47,127.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1104">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1120" style={{"--k0": "6", "--k1": "30", "--k2": "6", "--k3": "29", "--k4": "28", "--k5": "30", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1120">
                              <b className="num">{"FA-1120"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-006"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"VRV outdoor bank A (floors 1–3)"}</span>
                            <span className="fd-sub">{"Terrace · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"15-02-2019"}
                            <span className="fd-sub">{"bought 30-01-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹58,00,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹28,16,212.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹29,83,788.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1120">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1121" style={{"--k0": "7", "--k1": "31", "--k2": "6", "--k3": "26", "--k4": "26", "--k5": "29", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1121">
                              <b className="num">{"FA-1121"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-007"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"VRV outdoor bank B (floors 4–5)"}</span>
                            <span className="fd-sub">{"Terrace · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"15-02-2019"}
                            <span className="fd-sub">{"bought 30-01-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹39,00,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹18,93,636.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹20,06,364.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1121">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1122" style={{"--k0": "8", "--k1": "1", "--k2": "6", "--k3": "6", "--k4": "7", "--k5": "8", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1122">
                              <b className="num">{"FA-1122"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-008"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location" data-w2="">
                            <span className="gl-ref">{"AHU – lobby"}</span>
                            <span className="fd-sub">{"Lobby · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"15-02-2019"}
                            <span className="fd-sub">{"bought 30-01-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹8,60,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹4,17,588.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹4,42,412.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1122">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1130" style={{"--k0": "9", "--k1": "8", "--k2": "8", "--k3": "2", "--k4": "2", "--k5": "3", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1130">
                              <b className="num">{"FA-1130"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-010"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Domestic transfer pump 1"}</span>
                            <span className="fd-sub">{"Pump room · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"20-01-2019"}
                            <span className="fd-sub">{"bought 10-01-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹1,85,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹90,768.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹94,232.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1130">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1135" style={{"--k0": "10", "--k1": "16", "--k2": "3", "--k3": "19", "--k4": "20", "--k5": "19", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1135">
                              <b className="num">{"FA-1135"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-011"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Heat pump water heater"}</span>
                            <span className="fd-sub">{"Heat pump room · UTL"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"05-03-2019"}
                            <span className="fd-sub">{"bought 20-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹22,00,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹10,56,601.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹11,43,399.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1135">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1140" style={{"--k0": "11", "--k1": "18", "--k2": "1", "--k3": "21", "--k4": "22", "--k5": "24", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1140">
                              <b className="num">{"FA-1140"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-012"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Lift 1 (guest)"}</span>
                            <span className="fd-sub">{"Lift machine room · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 15-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹29,30,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹14,07,224.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹15,22,776.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1140">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1141" style={{"--k0": "12", "--k1": "19", "--k2": "1", "--k3": "22", "--k4": "23", "--k5": "25", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1141">
                              <b className="num">{"FA-1141"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-013"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Lift 2 (guest)"}</span>
                            <span className="fd-sub">{"Lift machine room · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 15-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹30,60,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹14,69,650.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹15,90,350.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1141">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1142" style={{"--k0": "13", "--k1": "20", "--k2": "1", "--k3": "23", "--k4": "24", "--k5": "26", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1142">
                              <b className="num">{"FA-1142"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-014"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Lift 3 (service)"}</span>
                            <span className="fd-sub">{"Lift machine room · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 15-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹31,90,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹15,32,076.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹16,57,924.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1142">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1150" style={{"--k0": "14", "--k1": "10", "--k2": "4", "--k3": "16", "--k4": "17", "--k5": "16", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1150">
                              <b className="num">{"FA-1150"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-015"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Fire pump set (main + jockey)"}</span>
                            <span className="fd-sub">{"Fire pump room · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"10-02-2019"}
                            <span className="fd-sub">{"bought 01-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹18,40,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹8,93,412.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹9,46,588.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1150">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1151" style={{"--k0": "15", "--k1": "9", "--k2": "4", "--k3": "11", "--k4": "10", "--k5": "10", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1151">
                              <b className="num">{"FA-1151"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-016"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Fire alarm panel"}</span>
                            <span className="fd-sub">{"Security and fire control room · POM"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"10-02-2019"}
                            <span className="fd-sub">{"bought 01-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹12,80,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹6,21,552.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹6,58,448.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1151">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1160" style={{"--k0": "16", "--k1": "24", "--k2": "1", "--k3": "24", "--k4": "25", "--k5": "28", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1160">
                              <b className="num">{"FA-1160"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-017"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Sewage treatment plant 120 KLD"}</span>
                            <span className="fd-sub">{"STP · UTL"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-02-2019"}
                            <span className="fd-sub">{"bought 20-01-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹35,80,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹17,38,248.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹18,41,752.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1160">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1161" style={{"--k0": "17", "--k1": "33", "--k2": "1", "--k3": "12", "--k4": "11", "--k5": "11", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1161">
                              <b className="num">{"FA-1161"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-018"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Water treatment plant and softener"}</span>
                            <span className="fd-sub">{"WTP and softener · UTL"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-02-2019"}
                            <span className="fd-sub">{"bought 20-01-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹14,20,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹6,89,448.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹7,30,552.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1161">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1180" style={{"--k0": "20", "--k1": "32", "--k2": "1", "--k3": "8", "--k4": "8", "--k5": "9", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1180">
                              <b className="num">{"FA-1180"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-LDY-001"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Washer extractor 25 kg"}</span>
                            <span className="fd-sub">{"Laundry · LAU"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 20-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹9,40,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹4,51,451.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹4,88,549.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1180">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1183" style={{"--k0": "21", "--k1": "28", "--k2": "1", "--k3": "5", "--k4": "5", "--k5": "7", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1183">
                              <b className="num">{"FA-1183"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-LDY-004"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Tumble dryer 35 kg"}</span>
                            <span className="fd-sub">{"Laundry · LAU"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 20-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹6,80,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹3,26,599.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹3,53,401.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1183">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1240" style={{"--k0": "29", "--k1": "29", "--k2": "9", "--k3": "9", "--k4": "3", "--k5": "13", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1240">
                              <b className="num">{"FA-1240"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-005"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"UPS 60 kVA – front office and IT"}</span>
                            <span className="fd-sub">{"Security and fire control room · IT"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"28-09-2023"}
                            <span className="fd-sub">{"bought 20-09-2023"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹9,80,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹1,91,364.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹7,88,636.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1240">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-pm" id="r-fa-1301" style={{"--k0": "33", "--k1": "25", "--k2": "4", "--k3": "1", "--k4": "1", "--k5": "1", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1301">
                              <b className="num">{"FA-1301"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-009"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Split AC 2 TR – Ayurvedic Centre"}</span>
                            <span className="fd-sub">{"Ayurvedic Centre · SPA"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"10-06-2024"}
                            <span className="fd-sub">{"bought 02-06-2024"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹68,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹10,052.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹57,948.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1301">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-ff" id="r-fa-1190" style={{"--k0": "22", "--k1": "15", "--k2": "1", "--k3": "27", "--k4": "29", "--k5": "20", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1190">
                              <b className="num">{"FA-1190"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-021"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Guest room TVs (92)"}</span>
                            <span className="fd-sub">{"Guest rooms · ROOMS"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 20-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹43,60,000.00"}
                            <span className="fd-sub">{"10 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹31,41,047.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹12,18,953.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1190">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-ff" id="r-fa-1191" style={{"--k0": "23", "--k1": "12", "--k2": "1", "--k3": "28", "--k4": "30", "--k5": "21", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1191">
                              <b className="num">{"FA-1191"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-022"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Guest room door locks (92)"}</span>
                            <span className="fd-sub">{"Guest rooms · ROOMS"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 20-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹44,90,000.00"}
                            <span className="fd-sub">{"10 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹32,34,686.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹12,55,314.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1191">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-ff" id="r-fa-1192" style={{"--k0": "24", "--k1": "14", "--k2": "1", "--k3": "10", "--k4": "15", "--k5": "6", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1192">
                              <b className="num">{"FA-1192"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-023"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Guest room safes (92)"}</span>
                            <span className="fd-sub">{"Guest rooms · ROOMS"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 20-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹11,04,000.00"}
                            <span className="fd-sub">{"10 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹7,95,340.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹3,08,660.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1192">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-ff" id="r-fa-1200" style={{"--k0": "25", "--k1": "13", "--k2": "1", "--k3": "31", "--k4": "32", "--k5": "31", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1200">
                              <b className="num">{"FA-1200"}</b>
                            </a>
                            <span className="fd-sub">{"no MT link"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Guest room furniture (92 rooms)"}</span>
                            <span className="fd-sub">{"Guest rooms · ROOMS"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 10-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹2,76,00,000.00"}
                            <span className="fd-sub">{"10 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹1,98,83,500.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹77,16,500.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1200">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-ff" id="r-fa-1210" style={{"--k0": "26", "--k1": "23", "--k2": "1", "--k3": "30", "--k4": "31", "--k5": "27", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1210">
                              <b className="num">{"FA-1210"}</b>
                            </a>
                            <span className="fd-sub">{"no MT link"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Restaurant and bar furniture"}</span>
                            <span className="fd-sub">{"Travancore Restaurant and bar · TRV"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 10-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹64,00,000.00"}
                            <span className="fd-sub">{"10 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹46,10,697.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹17,89,303.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1210">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-ff" id="r-fa-1215" style={{"--k0": "27", "--k1": "2", "--k2": "1", "--k3": "25", "--k4": "27", "--k5": "18", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1215">
                              <b className="num">{"FA-1215"}</b>
                            </a>
                            <span className="fd-sub">{"no MT link"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Banquet furniture – Periyar and Meenachil"}</span>
                            <span className="fd-sub">{"Banquet halls · BNQ"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-03-2019"}
                            <span className="fd-sub">{"bought 10-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹38,50,000.00"}
                            <span className="fd-sub">{"10 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹27,73,589.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹10,76,411.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1215">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-ke" id="r-fa-1170" style={{"--k0": "18", "--k1": "3", "--k2": "8", "--k3": "13", "--k4": "12", "--k5": "12", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1170">
                              <b className="num">{"FA-1170"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-019"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Cold room – kitchen (2 chambers)"}</span>
                            <span className="fd-sub">{"Main kitchen · TRV"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"20-02-2019"}
                            <span className="fd-sub">{"bought 10-02-2019"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹14,60,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹7,08,952.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹7,51,048.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1170">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-ke" id="r-fa-1172" style={{"--k0": "19", "--k1": "7", "--k2": "8", "--k3": "3", "--k4": "4", "--k5": "33", "--k6": "1"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1172">
                              <b className="num">{"FA-1172"}</b>
                            </a>
                            <span className="fd-sub">{"no MT link"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Dishwasher – old hood type"}</span>
                            <span className="fd-sub">{"Main kitchen · TRV"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"20-02-2013"}
                            <span className="fd-sub">{"bought 10-02-2013"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹3,10,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹2,68,304.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-e="" />
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill hk-pill cc--done">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#archive" />
                              </svg>
                              {"Disposed 09-10"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1172">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-ke" id="r-fa-1235" style={{"--k0": "28", "--k1": "4", "--k2": "7", "--k3": "17", "--k4": "6", "--k5": "23", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1235">
                              <b className="num">{"FA-1235"}</b>
                            </a>
                            <span className="fd-sub">{"MT AS-ENG-020"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Combi oven Rational iCombi Pro"}</span>
                            <span className="fd-sub">{"Main kitchen · TRV"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"18-08-2023"}
                            <span className="fd-sub">{"bought 10-08-2023"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life">
                            {"₹18,50,000.00"}
                            <span className="fd-sub">{"15 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹3,71,032.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹14,78,968.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1235">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-it" id="r-fa-1250" style={{"--k0": "30", "--k1": "22", "--k2": "1", "--k3": "4", "--k4": "9", "--k5": "4", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1250">
                              <b className="num">{"FA-1250"}</b>
                            </a>
                            <span className="fd-sub">{"no MT link"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"PMS and POS servers"}</span>
                            <span className="fd-sub">{"Server room · IT"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-04-2024"}
                            <span className="fd-sub">{"bought 15-03-2024"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹6,40,000.00"}
                            <span className="fd-sub">{"3 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹5,06,670.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹1,33,330.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1250">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-it" id="r-fa-1251" style={{"--k0": "31", "--k1": "11", "--k2": "1", "--k3": "7", "--k4": "13", "--k5": "5", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1251">
                              <b className="num">{"FA-1251"}</b>
                            </a>
                            <span className="fd-sub">{"no MT link"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Front desk and outlet terminals (14)"}</span>
                            <span className="fd-sub">{"Front desk and outlets · IT"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-04-2024"}
                            <span className="fd-sub">{"bought 15-03-2024"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹9,10,000.00"}
                            <span className="fd-sub">{"3 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹7,20,420.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹1,89,580.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1251">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr className="gl-row fc-veh" id="r-fa-1260" style={{"--k0": "32", "--k1": "26", "--k2": "1", "--k3": "20", "--k4": "21", "--k5": "22", "--k6": "2"}}>
                          <td className="dt__td nw" data-label="Asset no." data-w2="" data-t="">
                            <a className="fd-link" href="#fa-fa-1260">
                              <b className="num">{"FA-1260"}</b>
                            </a>
                            <span className="fd-sub">{"no MT link"}</span>
                          </td>
                          <td className="dt__td" data-label="Name / location">
                            <span className="gl-ref">{"Toyota Innova Crysta – airport car"}</span>
                            <span className="fd-sub">{"Porch and car park · TRN"}</span>
                          </td>
                          <td className="dt__td nw num" data-label="Put to use">
                            {"01-08-2022"}
                            <span className="fd-sub">{"bought 20-07-2022"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Cost / life" data-w2="">
                            {"₹25,60,000.00"}
                            <span className="fd-sub">{"8 yrs · SLM"}</span>
                          </td>
                          <td className="dt__td dt__td--right nw num" data-label="Acc. depreciation" data-w2="">{"₹12,66,650.00"}</td>
                          <td className="dt__td dt__td--right nw num gl-b" data-label="Book value" data-w2="">{"₹12,93,350.00"}</td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill hk-pill cc--ok">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"In use"}
                            </span>
                          </td>
                          <td className="dt__td" data-a="">
                            <span className="gl-acts">
                              <a className="btn btn--sm" href="#fa-fa-1260">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#eye" />
                                </svg>
                                {"Open"}
                              </a>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <datalist id="mt-assets">
                <option value="AS-ENG-003">{"Transformer 1000 kVA"}</option>
                <option value="AS-ENG-004">{"Main LT panel 2500 A"}</option>
                <option value="AS-ENG-002">{"DG set 2 – 320 kVA"}</option>
                <option value="AS-ENG-006">{"VRV outdoor bank A (floors 1–3)"}</option>
                <option value="AS-ENG-007">{"VRV outdoor bank B (floors 4–5)"}</option>
                <option value="AS-ENG-008">{"AHU – lobby"}</option>
                <option value="AS-ENG-010">{"Domestic transfer pump 1"}</option>
                <option value="AS-ENG-011">{"Heat pump water heater"}</option>
                <option value="AS-ENG-012">{"Lift 1 (guest)"}</option>
                <option value="AS-ENG-013">{"Lift 2 (guest)"}</option>
                <option value="AS-ENG-014">{"Lift 3 (service)"}</option>
                <option value="AS-ENG-015">{"Fire pump set (main + jockey)"}</option>
                <option value="AS-ENG-016">{"Fire alarm panel"}</option>
                <option value="AS-ENG-017">{"Sewage treatment plant 120 KLD"}</option>
                <option value="AS-ENG-018">{"Water treatment plant and softener"}</option>
                <option value="AS-LDY-001">{"Washer extractor 25 kg"}</option>
                <option value="AS-LDY-004">{"Tumble dryer 35 kg"}</option>
                <option value="AS-ENG-005">{"UPS 60 kVA – front office and IT"}</option>
                <option value="AS-ENG-009">{"Split AC 2 TR – Ayurvedic Centre"}</option>
                <option value="AS-ENG-024">{"DG set 3 (old) – 125 kVA"}</option>
                <option value="AS-ENG-019">{"Cold room – kitchen (2 chambers)"}</option>
                <option value="AS-ENG-020">{"Combi oven Rational iCombi Pro"}</option>
                <option value="AS-ENG-021">{"Guest room TVs (92)"}</option>
                <option value="AS-ENG-022">{"Guest room door locks (92)"}</option>
                <option value="AS-ENG-023">{"Guest room safes (92)"}</option>
              </datalist>
              <div className="modal modal--lg" id="fa-fa-1001" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1001-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1001-t">{"FA-1001 · Hotel building and civil works"}</h2>
                      <p className="modal__desc">{"Building · Willingdon Island"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1001"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Building · GL 1501"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Willingdon Island"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"A&G · Administration & General"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"15-01-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹48,60,00,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"Completion certificate CC-2019-02"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"60 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹2,43,00,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹6,41,250.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹5,83,53,750.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹42,76,46,250.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Building · 10 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1001">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1001" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Not linked to an engineering asset."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1001" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1001" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1001-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1001" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1001-t">{"Dispose or transfer FA-1001"}</h2>
                      <p className="modal__desc">{"Hotel building and civil works"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1001">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1001" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1001">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1001" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1001">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1001" name="to_dept" defaultValue={"A&G"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1001">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1001" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹42,76,46,250.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-0861" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-0861-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-0861-t">{"FA-0861 · DG set 3 (old) – 125 kVA"}</h2>
                      <p className="modal__desc">{"Plant and machinery · DG room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-0861"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"DG room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"25-04-2012"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"05-05-2012"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹9,80,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"Bought with the building (2018)"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹49,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹5,172.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹8,94,756.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹85,244.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--warn">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#pause" />
                            </svg>
                            {"Out of service"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-0861">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-0861" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-024"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-024"}>{"AS-ENG-024"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-0861" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-0861" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-0861-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-0861" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-0861-t">{"Dispose or transfer FA-0861"}</h2>
                      <p className="modal__desc">{"DG set 3 (old) – 125 kVA"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-0861">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-0861" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-0861">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-0861" name="value" type="number" min="0" step="1" inputMode="numeric" defaultValue={"50000"} />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-0861">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-0861" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-0861">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-0861" name="ref" type="text" maxLength="60" defaultValue={"Kochi Metal Scrap Traders"} />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹85,244.00 on 30-09-2026 – a sale at ₹50,000.00 gives a "}
                      <b>{"loss of ₹35,244.00"}</b>
                      {", posted to 6301 (non-operating) with the journal Dr bank / accumulated depreciation, Cr 1502."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1101" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1101-t">{"FA-1101 · Transformer 1000 kVA"}</h2>
                      <p className="modal__desc">{"Plant and machinery · HT yard and LT panel room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1101"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"HT yard and LT panel room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"18-12-2018"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"02-01-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹17,60,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"KEL/18/2214"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹88,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹9,289.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹8,63,877.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹8,96,123.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1101">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1101" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-003"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-003"}>{"AS-ENG-003"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1101" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1101" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1101" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1101-t">{"Dispose or transfer FA-1101"}</h2>
                      <p className="modal__desc">{"Transformer 1000 kVA"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1101">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1101" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1101">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1101" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1101">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1101" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1101">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1101" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹8,96,123.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1102" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1102-t">{"FA-1102 · Main LT panel 2500 A"}</h2>
                      <p className="modal__desc">{"Plant and machinery · HT yard and LT panel room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1102"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"HT yard and LT panel room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"18-12-2018"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"02-01-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹18,90,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"SIE/18/7730"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹94,500.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹9,975.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹9,27,675.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹9,62,325.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1102">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1102" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-004"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-004"}>{"AS-ENG-004"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1102" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1102" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1102" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1102-t">{"Dispose or transfer FA-1102"}</h2>
                      <p className="modal__desc">{"Main LT panel 2500 A"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1102">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1102" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1102">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1102" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1102">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1102" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1102">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1102" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹9,62,325.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1104" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1104-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1104-t">{"FA-1104 · DG set 2 – 320 kVA"}</h2>
                      <p className="modal__desc">{"Plant and machinery · DG room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1104"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"DG room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"02-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"12-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹16,30,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"KOEL/19/0412"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹81,500.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹8,603.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹7,82,873.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹8,47,127.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1104">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1104" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-002"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-002"}>{"AS-ENG-002"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1104" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1104" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1104-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1104" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1104-t">{"Dispose or transfer FA-1104"}</h2>
                      <p className="modal__desc">{"DG set 2 – 320 kVA"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1104">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1104" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1104">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1104" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1104">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1104" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1104">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1104" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹8,47,127.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1120" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1120-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1120-t">{"FA-1120 · VRV outdoor bank A (floors 1–3)"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Terrace"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1120"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Terrace"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"30-01-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"15-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹58,00,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"DAI/19/0118"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹2,90,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹30,611.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹28,16,212.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹29,83,788.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1120">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1120" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-006"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-006"}>{"AS-ENG-006"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1120" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1120" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1120-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1120" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1120-t">{"Dispose or transfer FA-1120"}</h2>
                      <p className="modal__desc">{"VRV outdoor bank A (floors 1–3)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1120">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1120" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1120">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1120" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1120">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1120" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1120">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1120" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹29,83,788.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1121" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1121-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1121-t">{"FA-1121 · VRV outdoor bank B (floors 4–5)"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Terrace"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1121"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Terrace"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"30-01-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"15-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹39,00,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"DAI/19/0119"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹1,95,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹20,583.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹18,93,636.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹20,06,364.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1121">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1121" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-007"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-007"}>{"AS-ENG-007"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1121" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1121" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1121-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1121" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1121-t">{"Dispose or transfer FA-1121"}</h2>
                      <p className="modal__desc">{"VRV outdoor bank B (floors 4–5)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1121">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1121" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1121">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1121" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1121">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1121" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1121">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1121" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹20,06,364.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1122" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1122-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1122-t">{"FA-1122 · AHU – lobby"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Lobby"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1122"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Lobby"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"30-01-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"15-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹8,60,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"DAI/19/0121"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹43,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹4,539.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹4,17,588.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹4,42,412.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1122">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1122" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-008"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-008"}>{"AS-ENG-008"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1122" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1122" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1122-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1122" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1122-t">{"Dispose or transfer FA-1122"}</h2>
                      <p className="modal__desc">{"AHU – lobby"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1122">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1122" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1122">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1122" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1122">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1122" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1122">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1122" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹4,42,412.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1130" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1130-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1130-t">{"FA-1130 · Domestic transfer pump 1"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Pump room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1130"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Pump room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"10-01-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"20-01-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹1,85,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"KBL/19/0031"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹9,250.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹976.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹90,768.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹94,232.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1130">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1130" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-010"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-010"}>{"AS-ENG-010"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1130" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1130" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1130-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1130" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1130-t">{"Dispose or transfer FA-1130"}</h2>
                      <p className="modal__desc">{"Domestic transfer pump 1"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1130">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1130" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1130">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1130" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1130">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1130" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1130">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1130" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹94,232.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1135" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1135-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1135-t">{"FA-1135 · Heat pump water heater"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Heat pump room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1135"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Heat pump room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"UTL · Utilities"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"20-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"05-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹22,00,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"RAC/19/0207"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹1,10,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹11,611.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹10,56,601.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹11,43,399.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1135">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1135" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-011"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-011"}>{"AS-ENG-011"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1135" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1135" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1135-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1135" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1135-t">{"Dispose or transfer FA-1135"}</h2>
                      <p className="modal__desc">{"Heat pump water heater"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1135">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1135" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1135">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1135" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1135">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1135" name="to_dept" defaultValue={"UTL"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1135">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1135" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹11,43,399.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1140" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1140-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1140-t">{"FA-1140 · Lift 1 (guest)"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Lift machine room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1140"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Lift machine room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"15-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹29,30,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"KONE/19/0088"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹1,46,500.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹15,464.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹14,07,224.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹15,22,776.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1140">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1140" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-012"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-012"}>{"AS-ENG-012"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1140" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1140" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1140-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1140" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1140-t">{"Dispose or transfer FA-1140"}</h2>
                      <p className="modal__desc">{"Lift 1 (guest)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1140">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1140" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1140">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1140" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1140">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1140" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1140">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1140" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹15,22,776.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1141" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1141-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1141-t">{"FA-1141 · Lift 2 (guest)"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Lift machine room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1141"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Lift machine room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"15-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹30,60,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"KONE/19/0089"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹1,53,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹16,150.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹14,69,650.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹15,90,350.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1141">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1141" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-013"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-013"}>{"AS-ENG-013"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1141" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1141" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1141-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1141" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1141-t">{"Dispose or transfer FA-1141"}</h2>
                      <p className="modal__desc">{"Lift 2 (guest)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1141">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1141" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1141">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1141" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1141">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1141" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1141">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1141" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹15,90,350.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1142" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1142-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1142-t">{"FA-1142 · Lift 3 (service)"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Lift machine room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1142"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Lift machine room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"15-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹31,90,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"KONE/19/0090"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹1,59,500.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹16,836.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹15,32,076.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹16,57,924.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1142">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1142" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-014"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-014"}>{"AS-ENG-014"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1142" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1142" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1142-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1142" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1142-t">{"Dispose or transfer FA-1142"}</h2>
                      <p className="modal__desc">{"Lift 3 (service)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1142">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1142" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1142">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1142" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1142">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1142" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1142">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1142" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹16,57,924.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1150" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1150-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1150-t">{"FA-1150 · Fire pump set (main + jockey)"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Fire pump room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1150"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Fire pump room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"01-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"10-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹18,40,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"KBL/19/0052"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹92,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹9,711.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹8,93,412.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹9,46,588.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1150">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1150" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-015"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-015"}>{"AS-ENG-015"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1150" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1150" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1150-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1150" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1150-t">{"Dispose or transfer FA-1150"}</h2>
                      <p className="modal__desc">{"Fire pump set (main + jockey)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1150">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1150" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1150">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1150" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1150">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1150" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1150">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1150" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹9,46,588.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1151" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1151-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1151-t">{"FA-1151 · Fire alarm panel"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Security and fire control room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1151"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Security and fire control room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"POM · Property operations & maintenance"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"01-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"10-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹12,80,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"HON/19/0311"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹64,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹6,756.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹6,21,552.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹6,58,448.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1151">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1151" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-016"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-016"}>{"AS-ENG-016"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1151" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1151" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1151-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1151" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1151-t">{"Dispose or transfer FA-1151"}</h2>
                      <p className="modal__desc">{"Fire alarm panel"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1151">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1151" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1151">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1151" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1151">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1151" name="to_dept" defaultValue={"POM"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1151">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1151" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹6,58,448.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1160" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1160-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1160-t">{"FA-1160 · Sewage treatment plant 120 KLD"}</h2>
                      <p className="modal__desc">{"Plant and machinery · STP"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1160"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"STP"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"UTL · Utilities"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"20-01-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹35,80,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"MBR/19/0012"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹1,79,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹18,894.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹17,38,248.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹18,41,752.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1160">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1160" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-017"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-017"}>{"AS-ENG-017"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1160" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1160" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1160-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1160" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1160-t">{"Dispose or transfer FA-1160"}</h2>
                      <p className="modal__desc">{"Sewage treatment plant 120 KLD"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1160">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1160" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1160">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1160" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1160">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1160" name="to_dept" defaultValue={"UTL"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1160">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1160" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹18,41,752.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1161" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1161-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1161-t">{"FA-1161 · Water treatment plant and softener"}</h2>
                      <p className="modal__desc">{"Plant and machinery · WTP and softener"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1161"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"WTP and softener"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"UTL · Utilities"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"20-01-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹14,20,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"ION/19/0045"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹71,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹7,494.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹6,89,448.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹7,30,552.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1161">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1161" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-018"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-018"}>{"AS-ENG-018"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1161" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1161" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1161-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1161" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1161-t">{"Dispose or transfer FA-1161"}</h2>
                      <p className="modal__desc">{"Water treatment plant and softener"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1161">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1161" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1161">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1161" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1161">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1161" name="to_dept" defaultValue={"UTL"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1161">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1161" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹7,30,552.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1180" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1180-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1180-t">{"FA-1180 · Washer extractor 25 kg"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Laundry"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1180"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Laundry"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"LAU · Laundry"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"20-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹9,40,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"ELX/19/0220"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹47,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹4,961.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹4,51,451.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹4,88,549.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1180">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1180" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-LDY-001"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-ldy-001"}>{"AS-LDY-001"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1180" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1180" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1180-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1180" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1180-t">{"Dispose or transfer FA-1180"}</h2>
                      <p className="modal__desc">{"Washer extractor 25 kg"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1180">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1180" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1180">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1180" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1180">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1180" name="to_dept" defaultValue={"LAU"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1180">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1180" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹4,88,549.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1183" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1183-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1183-t">{"FA-1183 · Tumble dryer 35 kg"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Laundry"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1183"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Laundry"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"LAU · Laundry"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"20-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹6,80,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"ELX/19/0221"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹34,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹3,589.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹3,26,599.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹3,53,401.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1183">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1183" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-LDY-004"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-ldy-004"}>{"AS-LDY-004"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1183" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1183" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1183-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1183" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1183-t">{"Dispose or transfer FA-1183"}</h2>
                      <p className="modal__desc">{"Tumble dryer 35 kg"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1183">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1183" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1183">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1183" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1183">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1183" name="to_dept" defaultValue={"LAU"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1183">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1183" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹3,53,401.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1240" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1240-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1240-t">{"FA-1240 · UPS 60 kVA – front office and IT"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Security and fire control room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1240"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Security and fire control room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"IT · IT"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"20-09-2023"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"28-09-2023"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹9,80,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"APC/23/1907"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹49,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹5,172.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹1,91,364.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹7,88,636.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1240">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1240" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-005"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-005"}>{"AS-ENG-005"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1240" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1240" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1240-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1240" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1240-t">{"Dispose or transfer FA-1240"}</h2>
                      <p className="modal__desc">{"UPS 60 kVA – front office and IT"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1240">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1240" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1240">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1240" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1240">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1240" name="to_dept" defaultValue={"IT"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1240">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1240" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹7,88,636.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1301" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1301-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1301-t">{"FA-1301 · Split AC 2 TR – Ayurvedic Centre"}</h2>
                      <p className="modal__desc">{"Plant and machinery · Ayurvedic Centre"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1301"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Plant and machinery · GL 1502"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Ayurvedic Centre"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"SPA · Spa"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"02-06-2024"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"10-06-2024"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹68,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"DAI/24/0611"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹3,400.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹359.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹10,052.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹57,948.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Plant and machinery · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1301">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1301" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-009"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-009"}>{"AS-ENG-009"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1301" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1301" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1301-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1301" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1301-t">{"Dispose or transfer FA-1301"}</h2>
                      <p className="modal__desc">{"Split AC 2 TR – Ayurvedic Centre"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1301">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1301" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1301">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1301" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1301">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1301" name="to_dept" defaultValue={"SPA"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1301">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1301" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹57,948.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1190" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1190-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1190-t">{"FA-1190 · Guest room TVs (92)"}</h2>
                      <p className="modal__desc">{"Furniture and fixtures · Guest rooms"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1190"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Furniture and fixtures · GL 1503"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Guest rooms"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"ROOMS · Rooms"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"20-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹43,60,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"SAM/19/0332"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"10 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹2,18,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹34,517.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹31,41,047.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹12,18,953.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Furniture and fixtures · 10 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1190">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1190" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-021"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-021"}>{"AS-ENG-021"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1190" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1190" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1190-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1190" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1190-t">{"Dispose or transfer FA-1190"}</h2>
                      <p className="modal__desc">{"Guest room TVs (92)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1190">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1190" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1190">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1190" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1190">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1190" name="to_dept" defaultValue={"ROOMS"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1190">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1190" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹12,18,953.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1191" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1191-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1191-t">{"FA-1191 · Guest room door locks (92)"}</h2>
                      <p className="modal__desc">{"Furniture and fixtures · Guest rooms"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1191"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Furniture and fixtures · GL 1503"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Guest rooms"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"ROOMS · Rooms"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"20-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹44,90,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"ASSA/19/0098"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"10 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹2,24,500.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹35,546.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹32,34,686.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹12,55,314.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Furniture and fixtures · 10 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1191">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1191" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-022"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-022"}>{"AS-ENG-022"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1191" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1191" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1191-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1191" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1191-t">{"Dispose or transfer FA-1191"}</h2>
                      <p className="modal__desc">{"Guest room door locks (92)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1191">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1191" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1191">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1191" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1191">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1191" name="to_dept" defaultValue={"ROOMS"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1191">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1191" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹12,55,314.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1192" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1192-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1192-t">{"FA-1192 · Guest room safes (92)"}</h2>
                      <p className="modal__desc">{"Furniture and fixtures · Guest rooms"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1192"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Furniture and fixtures · GL 1503"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Guest rooms"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"ROOMS · Rooms"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"20-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹11,04,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"HAF/19/0410"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"10 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹55,200.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹8,740.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹7,95,340.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹3,08,660.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Furniture and fixtures · 10 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1192">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1192" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-023"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-023"}>{"AS-ENG-023"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1192" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1192" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1192-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1192" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1192-t">{"Dispose or transfer FA-1192"}</h2>
                      <p className="modal__desc">{"Guest room safes (92)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1192">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1192" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1192">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1192" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1192">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1192" name="to_dept" defaultValue={"ROOMS"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1192">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1192" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹3,08,660.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1200" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1200-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1200-t">{"FA-1200 · Guest room furniture (92 rooms)"}</h2>
                      <p className="modal__desc">{"Furniture and fixtures · Guest rooms"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1200"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Furniture and fixtures · GL 1503"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Guest rooms"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"ROOMS · Rooms"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"10-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹2,76,00,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"GOD/19/0071"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"10 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹13,80,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹2,18,500.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹1,98,83,500.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹77,16,500.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Furniture and fixtures · 10 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1200">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1200" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Not linked to an engineering asset."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1200" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1200" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1200-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1200" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1200-t">{"Dispose or transfer FA-1200"}</h2>
                      <p className="modal__desc">{"Guest room furniture (92 rooms)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1200">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1200" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1200">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1200" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1200">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1200" name="to_dept" defaultValue={"ROOMS"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1200">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1200" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹77,16,500.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1210" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1210-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1210-t">{"FA-1210 · Restaurant and bar furniture"}</h2>
                      <p className="modal__desc">{"Furniture and fixtures · Travancore Restaurant and bar"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1210"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Furniture and fixtures · GL 1503"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Travancore Restaurant and bar"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"TRV · Travancore Restaurant"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"10-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹64,00,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"GOD/19/0072"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"10 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹3,20,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹50,667.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹46,10,697.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹17,89,303.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Furniture and fixtures · 10 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1210">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1210" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Not linked to an engineering asset."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1210" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1210" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1210-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1210" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1210-t">{"Dispose or transfer FA-1210"}</h2>
                      <p className="modal__desc">{"Restaurant and bar furniture"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1210">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1210" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1210">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1210" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1210">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1210" name="to_dept" defaultValue={"TRV"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1210">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1210" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹17,89,303.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1215" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1215-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1215-t">{"FA-1215 · Banquet furniture – Periyar and Meenachil"}</h2>
                      <p className="modal__desc">{"Furniture and fixtures · Banquet halls"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1215"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Furniture and fixtures · GL 1503"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Banquet halls"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"BNQ · Banquets"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"10-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-03-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹38,50,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"GOD/19/0073"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"10 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹1,92,500.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹30,479.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹27,73,589.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹10,76,411.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Furniture and fixtures · 10 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1215">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1215" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Not linked to an engineering asset."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1215" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1215" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1215-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1215" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1215-t">{"Dispose or transfer FA-1215"}</h2>
                      <p className="modal__desc">{"Banquet furniture – Periyar and Meenachil"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1215">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1215" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1215">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1215" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1215">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1215" name="to_dept" defaultValue={"BNQ"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1215">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1215" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹10,76,411.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1170" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1170-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1170-t">{"FA-1170 · Cold room – kitchen (2 chambers)"}</h2>
                      <p className="modal__desc">{"Kitchen equipment · Main kitchen"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1170"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Kitchen equipment · GL 1504"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Main kitchen"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"TRV · Travancore Restaurant"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"10-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"20-02-2019"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹14,60,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"BST/19/0144"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹73,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹7,706.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹7,08,952.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹7,51,048.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Kitchen equipment · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1170">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1170" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-019"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-019"}>{"AS-ENG-019"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1170" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1170" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1170-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1170" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1170-t">{"Dispose or transfer FA-1170"}</h2>
                      <p className="modal__desc">{"Cold room – kitchen (2 chambers)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1170">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1170" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1170">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1170" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1170">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1170" name="to_dept" defaultValue={"TRV"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1170">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1170" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹7,51,048.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1172" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1172-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1172-t">{"FA-1172 · Dishwasher – old hood type"}</h2>
                      <p className="modal__desc">{"Kitchen equipment · Main kitchen"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1172"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Kitchen equipment · GL 1504"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Main kitchen"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"TRV · Travancore Restaurant"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"10-02-2013"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"20-02-2013"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹3,10,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"Bought with the building (2018)"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹15,500.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹1,636.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹2,68,304.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹41,696.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Kitchen equipment · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--done">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#archive" />
                            </svg>
                            {"Disposed"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1172">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1172" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Not linked to an engineering asset."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1235" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1235-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1235-t">{"FA-1235 · Combi oven Rational iCombi Pro"}</h2>
                      <p className="modal__desc">{"Kitchen equipment · Main kitchen"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1235"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Kitchen equipment · GL 1504"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Main kitchen"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"TRV · Travancore Restaurant"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"10-08-2023"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"18-08-2023"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹18,50,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"RAT/23/0819"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"15 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹92,500.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹9,764.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹3,71,032.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹14,78,968.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Kitchen equipment · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1235">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1235" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" defaultValue={"AS-ENG-020"} />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Open the engineering record: "}
                      <Link className="fd-link" data-leads-to="MT-08" to={"/engineering-and-maintenance/mt-08-asset-detail/as-eng-020"}>{"AS-ENG-020"}</Link>
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1235" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1235" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1235-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1235" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1235-t">{"Dispose or transfer FA-1235"}</h2>
                      <p className="modal__desc">{"Combi oven Rational iCombi Pro"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1235">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1235" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1235">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1235" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1235">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1235" name="to_dept" defaultValue={"TRV"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1235">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1235" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹14,78,968.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1250" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1250-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1250-t">{"FA-1250 · PMS and POS servers"}</h2>
                      <p className="modal__desc">{"Computers · Server room"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1250"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Computers · GL 1505"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Server room"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"IT · IT"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"15-03-2024"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-04-2024"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹6,40,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"DELL/24/0315"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"3 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹32,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹16,889.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹5,06,670.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹1,33,330.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Computers · 40 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1250">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1250" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Not linked to an engineering asset."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1250" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1250" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1250-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1250" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1250-t">{"Dispose or transfer FA-1250"}</h2>
                      <p className="modal__desc">{"PMS and POS servers"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1250">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1250" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1250">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1250" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1250">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1250" name="to_dept" defaultValue={"IT"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1250">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1250" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹1,33,330.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1251" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1251-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1251-t">{"FA-1251 · Front desk and outlet terminals (14)"}</h2>
                      <p className="modal__desc">{"Computers · Front desk and outlets"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1251"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Computers · GL 1505"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Front desk and outlets"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"IT · IT"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"15-03-2024"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-04-2024"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹9,10,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"DELL/24/0316"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"3 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹45,500.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹24,014.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹7,20,420.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹1,89,580.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Computers · 40 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1251">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1251" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Not linked to an engineering asset."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1251" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1251" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1251-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1251" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1251-t">{"Dispose or transfer FA-1251"}</h2>
                      <p className="modal__desc">{"Front desk and outlet terminals (14)"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1251">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1251" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1251">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1251" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1251">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1251" name="to_dept" defaultValue={"IT"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1251">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1251" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹1,89,580.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="fa-fa-1260" data-code="AC-09-asset" role="dialog" aria-modal="true" aria-labelledby="fa-fa-1260-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#link-saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="fa-fa-1260-t">{"FA-1260 · Toyota Innova Crysta – airport car"}</h2>
                      <p className="modal__desc">{"Vehicles · Porch and car park"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="gl-dl">
                      <div>
                        <dt>{"Asset no."}</dt>
                        <dd>{"FA-1260"}</dd>
                      </div>
                      <div>
                        <dt>{"Class"}</dt>
                        <dd>{"Vehicles · GL 1506"}</dd>
                      </div>
                      <div>
                        <dt>{"Location"}</dt>
                        <dd>{"Porch and car park"}</dd>
                      </div>
                      <div>
                        <dt>{"Department"}</dt>
                        <dd>{"TRN · Transport"}</dd>
                      </div>
                      <div>
                        <dt>{"Purchase date"}</dt>
                        <dd>{"20-07-2022"}</dd>
                      </div>
                      <div>
                        <dt>{"Put to use"}</dt>
                        <dd>{"01-08-2022"}</dd>
                      </div>
                      <div>
                        <dt>{"Cost"}</dt>
                        <dd>{"₹25,60,000.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Vendor bill"}</dt>
                        <dd>{"TOY/22/0718"}</dd>
                      </div>
                      <div>
                        <dt>{"Useful life"}</dt>
                        <dd>{"8 years (Schedule II)"}</dd>
                      </div>
                      <div>
                        <dt>{"Residual value"}</dt>
                        <dd>{"₹1,28,000.00 (5 %)"}</dd>
                      </div>
                      <div>
                        <dt>{"Method"}</dt>
                        <dd>{"Straight line (SLM)"}</dd>
                      </div>
                      <div>
                        <dt>{"Monthly depreciation"}</dt>
                        <dd>{"₹25,333.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Accumulated depreciation"}</dt>
                        <dd>{"₹12,66,650.00 to 30-09-2026"}</dd>
                      </div>
                      <div>
                        <dt>{"Book value"}</dt>
                        <dd>{"₹12,93,350.00"}</dd>
                      </div>
                      <div>
                        <dt>{"Income tax block"}</dt>
                        <dd>{"Vehicles · 15 % WDV"}</dd>
                      </div>
                      <div>
                        <dt>{"Status"}</dt>
                        <dd>
                          <span className="pill hk-pill cc--ok">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"In use"}
                          </span>
                        </dd>
                      </div>
                    </dl>
                    <div className="field" data-fw="s">
                      <label className="field__label" htmlFor="mt-fa-1260">{"Engineering asset link"}</label>
                      <input className="field__input" id="mt-fa-1260" name="mt_asset" type="text" list="mt-assets" pattern={"AS-[A-Z]{3}-[0-9]{3}"} maxLength="10" placeholder="AS-ENG-000" />
                      <span className="field__hint">{"The asset of the Engineering register (MT-07) – type to search"}</span>
                    </div>
                    <p className="gl-drill">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#search" />
                      </svg>
                      {"Not linked to an engineering asset."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Written to the audit log with the user, time and the old and new values."}</span>
                    <a className="btn" href="#main">{"Close"}</a>
                    <a className="btn" href="#dx-fa-1260" aria-label="Dispose / transfer">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#arrow-left-right" />
                      </svg>
                      {"Dispose"}
                      <span className="ph-x">{" / transfer"}</span>
                    </a>
                    <button className="btn btn--primary" type="submit">{"Save link"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="dx-fa-1260" data-code="AC-09-dispose" role="dialog" aria-modal="true" aria-labelledby="dx-fa-1260-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#disposed-fa-1260" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="dx-fa-1260-t">{"Dispose or transfer FA-1260"}</h2>
                      <p className="modal__desc">{"Toyota Innova Crysta – airport car"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <fieldset className="gl-types gl-types--3">
                      <legend className="field__label">
                        {"What happens "}
                        <span className="field__req" title="Required">{"*"}</span>
                      </legend>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="sale" required={true} defaultChecked={true} />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#banknote" />
                          </svg>
                          <b>{"Sale"}</b>
                          <small>{"sold to a buyer"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="scrap" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#trash" />
                          </svg>
                          <b>{"Scrap"}</b>
                          <small>{"written off, scrap value"}</small>
                        </span>
                      </label>
                      <label className="gl-type">
                        <input type="radio" name="kind" value="transfer" />
                        <span>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#arrow-left-right" />
                          </svg>
                          <b>{"Transfer"}</b>
                          <small>{"to another location or department"}</small>
                        </span>
                      </label>
                    </fieldset>
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="dd-fa-1260">
                          {"Date "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="dd-fa-1260" name="date" type="date" required={true} min="2026-10-01" max="2026-10-31" defaultValue={"2026-10-22"} />
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="dv-fa-1260">{"Sale / scrap value (₹)"}</label>
                        <input className="field__input" id="dv-fa-1260" name="value" type="number" min="0" step="1" inputMode="numeric" />
                        <span className="field__hint">{"Leave empty for a transfer"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dl-fa-1260">{"Transfer to department"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="dl-fa-1260" name="to_dept" defaultValue={"TRN"}>
                            <option value="ROOMS">{"ROOMS · Rooms"}</option>
                            <option value="TRV">{"TRV · Travancore Restaurant"}</option>
                            <option value="SFG">{"SFG · Seafood Grill"}</option>
                            <option value="BAR">{"BAR · Cochin Trade Bar"}</option>
                            <option value="IRD">{"IRD · In-room Dining"}</option>
                            <option value="BNQ">{"BNQ · Banquets"}</option>
                            <option value="MBR">{"MBR · Minibar"}</option>
                            <option value="LAU">{"LAU · Laundry"}</option>
                            <option value="SPA">{"SPA · Spa"}</option>
                            <option value="TRN">{"TRN · Transport"}</option>
                            <option value="A&G">{"A&G · Administration & General"}</option>
                            <option value="S&M">{"S&M · Sales & Marketing"}</option>
                            <option value="POM">{"POM · Property operations & maintenance"}</option>
                            <option value="UTL">{"UTL · Utilities"}</option>
                            <option value="IT">{"IT · IT"}</option>
                            <option value="HR">{"HR · HR"}</option>
                            <option value="NOP">{"NOP · Non-operating"}</option>
                            <option>{"HK · Housekeeping"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="dp-fa-1260">{"Buyer / reference"}</label>
                        <input className="field__input" id="dp-fa-1260" name="ref" type="text" maxLength="60" />
                      </div>
                    </div>
                    <p className="gl-note">
                      <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calculator" />
                      </svg>
                      {"Book value ₹12,93,350.00 on 30-09-2026; the gain or loss is worked out from the value entered and posted with the disposal journal."}
                    </p>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"The Financial Controller approves disposals"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Record"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg gl-jm" id="ac-p01" data-code="AC-P01" role="dialog" aria-modal="true" aria-labelledby="ac-p01-t">
                <a className="modal__backdrop" href="#main" aria-label="Close" tabIndex="-1" />
                <form className="modal__box" action="/general-ledger/ac-09-fixed-asset-register/#dep-posted" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="ac-p01-t">{"Depreciation Run"}</h2>
                      <p className="modal__desc">{"Calculate and post depreciation for a period · DG set 3 (out of service) and fully depreciated assets are left out"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="p01-per">
                          {"Period "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="p01-per" name="period" required={true} defaultValue={"October 2026"}>
                            <option value="October 2026">{"October 2026"}</option>
                            <option value="November 2026">{"November 2026"}</option>
                          </select>
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"September and earlier are locked and already depreciated"}</span>
                      </div>
                      <fieldset className="field gl-books">
                        <legend className="field__label">
                          {"Book "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <label className="check">
                          <input className="check__input" type="radio" name="book" value="ca" id="bk-ca" required={true} defaultChecked={true} />
                          <span className="check__box" />
                          {"Companies Act (SLM by useful life, Schedule II)"}
                        </label>
                        <label className="check">
                          <input className="check__input" type="radio" name="book" value="it" id="bk-it" />
                          <span className="check__box" />
                          {"Income Tax (block WDV rates)"}
                        </label>
                      </fieldset>
                    </div>
                    <div className="gl-bk-ca">
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table gl-ltab" data-code="AC-P01-class" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Depreciation preview by class – Companies Act"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Class"}</th>
                                <th scope="col">{"Life"}</th>
                                <th scope="col" className="dt__th--right">{"Cost"}</th>
                                <th scope="col" className="dt__th--right">{"October depreciation"}</th>
                                <th scope="col">{"Posting"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Class" data-w2="" data-t="">{"Building"}</td>
                                <td className="dt__td nw num" data-label="Life">{"60 yrs"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Cost" data-w2="">{"₹48,60,00,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October depreciation" data-w2="">{"₹6,41,250.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"Dr 6301 · Cr 1550"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Class" data-w2="" data-t="">{"Plant and machinery"}</td>
                                <td className="dt__td nw num" data-label="Life">{"15 yrs"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Cost" data-w2="">{"₹3,91,73,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October depreciation" data-w2="">{"₹2,06,745.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"Dr 6301 · Cr 1550"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Class" data-w2="" data-t="">{"Furniture and fixtures"}</td>
                                <td className="dt__td nw num" data-label="Life">{"10 yrs"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Cost" data-w2="">{"₹4,78,04,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October depreciation" data-w2="">{"₹3,78,449.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"Dr 6301 · Cr 1550"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Class" data-w2="" data-t="">{"Kitchen equipment"}</td>
                                <td className="dt__td nw num" data-label="Life">{"15 yrs"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Cost" data-w2="">{"₹33,10,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October depreciation" data-w2="">{"₹17,470.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"Dr 6301 · Cr 1550"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Class" data-w2="" data-t="">{"Computers"}</td>
                                <td className="dt__td nw num" data-label="Life">{"3 yrs"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Cost" data-w2="">{"₹15,50,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October depreciation" data-w2="">{"₹40,903.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"Dr 6301 · Cr 1550"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Class" data-w2="" data-t="">{"Vehicles"}</td>
                                <td className="dt__td nw num" data-label="Life">{"8 yrs"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Cost" data-w2="">{"₹25,60,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October depreciation" data-w2="">{"₹25,333.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"Dr 6301 · Cr 1550"}</td>
                              </tr>
                              <tr className="dl-total">
                                <td className="dt__td" colSpan="2">
                                  <b>{"Companies Act – October 2026"}</b>
                                </td>
                                <td className="dt__td dt__td--right nw num" data-label="Cost" data-w2="" data-t="">{"₹58,03,97,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October depreciation" data-w2="">{"₹13,10,150.00"}</td>
                                <td className="dt__td" data-e="" />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <details className="gl-more">
                        <summary>
                          <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#list" />
                          </svg>
                          {"Preview by asset – 32 assets"}
                        </summary>
                        <div className="pgw">
                          <div className="s-scroll">
                            <table className="dt__table gl-ltab" data-code="AC-P01-asset" data-nosort="" data-mc="">
                              <caption className="sr-only">{"Depreciation preview by asset"}</caption>
                              <thead>
                                <tr>
                                  <th scope="col">{"Asset"}</th>
                                  <th scope="col">{"Name"}</th>
                                  <th scope="col">{"Class"}</th>
                                  <th scope="col" className="dt__th--right">{"October"}</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1001"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Hotel building and civil works"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Building"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹6,41,250.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1101"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Transformer 1000 kVA"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹9,289.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1102"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Main LT panel 2500 A"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹9,975.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1104"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"DG set 2 – 320 kVA"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹8,603.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1120"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"VRV outdoor bank A (floors 1–3)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹30,611.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1121"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"VRV outdoor bank B (floors 4–5)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹20,583.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1122"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"AHU – lobby"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹4,539.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1130"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Domestic transfer pump 1"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹976.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1135"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Heat pump water heater"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹11,611.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1140"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Lift 1 (guest)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹15,464.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1141"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Lift 2 (guest)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹16,150.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1142"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Lift 3 (service)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹16,836.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1150"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Fire pump set (main + jockey)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹9,711.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1151"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Fire alarm panel"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹6,756.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1160"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Sewage treatment plant 120 KLD"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹18,894.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1161"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Water treatment plant and softener"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹7,494.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1180"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Washer extractor 25 kg"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹4,961.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1183"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Tumble dryer 35 kg"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹3,589.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1240"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"UPS 60 kVA – front office and IT"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹5,172.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1301"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Split AC 2 TR – Ayurvedic Centre"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹359.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-0861"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"DG set 3 (old) – 125 kVA"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Plant and machinery"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹5,172.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1170"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Cold room – kitchen (2 chambers)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Kitchen equipment"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹7,706.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1235"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Combi oven Rational iCombi Pro"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Kitchen equipment"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹9,764.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1190"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Guest room TVs (92)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Furniture and fixtures"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹34,517.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1191"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Guest room door locks (92)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Furniture and fixtures"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹35,546.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1192"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"Guest room safes (92)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Furniture and fixtures"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹8,740.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1200"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Guest room furniture (92 rooms)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Furniture and fixtures"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹2,18,500.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1210"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Restaurant and bar furniture"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Furniture and fixtures"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹50,667.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1215"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Banquet furniture – Periyar and Meenachil"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Furniture and fixtures"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹30,479.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1250"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name" data-w2="">{"PMS and POS servers"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Computers"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹16,889.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1251"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Front desk and outlet terminals (14)"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Computers"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹24,014.00"}</td>
                                </tr>
                                <tr>
                                  <td className="dt__td nw" data-label="Asset" data-t="">
                                    <b className="num">{"FA-1260"}</b>
                                  </td>
                                  <td className="dt__td" data-label="Name">{"Toyota Innova Crysta – airport car"}</td>
                                  <td className="dt__td nw" data-label="Class" data-w2="">{"Vehicles"}</td>
                                  <td className="dt__td dt__td--right nw num" data-label="October" data-w2="">{"₹25,333.00"}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </details>
                    </div>
                    <div className="gl-bk-it">
                      <div className="pgw">
                        <div className="s-scroll">
                          <table className="dt__table gl-ltab" data-code="AC-P01-it" data-nosort="" data-mc="">
                            <caption className="sr-only">{"Depreciation preview by block – Income Tax"}</caption>
                            <thead>
                              <tr>
                                <th scope="col">{"Block"}</th>
                                <th scope="col">{"Rate"}</th>
                                <th scope="col" className="dt__th--right">{"Opening WDV 01-04-2026"}</th>
                                <th scope="col" className="dt__th--right">{"October share"}</th>
                                <th scope="col">{"Posting"}</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="dt__td" data-label="Block" data-w2="" data-t="">{"Building"}</td>
                                <td className="dt__td nw num" data-label="Rate" data-w2="">{"10 % WDV"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Opening WDV 01-04-2026" data-w2="">{"₹29,76,50,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October share" data-w2="">{"₹24,80,417.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"tax book only"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Block" data-w2="" data-t="">{"Plant and machinery"}</td>
                                <td className="dt__td nw num" data-label="Rate" data-w2="">{"15 % WDV"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Opening WDV 01-04-2026" data-w2="">{"₹2,28,14,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October share" data-w2="">{"₹2,85,175.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"tax book only"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Block" data-w2="" data-t="">{"Furniture and fixtures"}</td>
                                <td className="dt__td nw num" data-label="Rate" data-w2="">{"10 % WDV"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Opening WDV 01-04-2026" data-w2="">{"₹1,42,12,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October share" data-w2="">{"₹1,18,433.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"tax book only"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Block" data-w2="" data-t="">{"Kitchen equipment"}</td>
                                <td className="dt__td nw num" data-label="Rate" data-w2="">{"15 % WDV"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Opening WDV 01-04-2026" data-w2="">{"₹19,12,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October share" data-w2="">{"₹23,900.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"tax book only"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Block" data-w2="" data-t="">{"Computers"}</td>
                                <td className="dt__td nw num" data-label="Rate" data-w2="">{"40 % WDV"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Opening WDV 01-04-2026" data-w2="">{"₹7,02,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October share" data-w2="">{"₹23,400.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"tax book only"}</td>
                              </tr>
                              <tr>
                                <td className="dt__td" data-label="Block" data-w2="" data-t="">{"Vehicles"}</td>
                                <td className="dt__td nw num" data-label="Rate" data-w2="">{"15 % WDV"}</td>
                                <td className="dt__td dt__td--right nw num" data-label="Opening WDV 01-04-2026" data-w2="">{"₹13,88,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October share" data-w2="">{"₹17,350.00"}</td>
                                <td className="dt__td nw" data-label="Posting" data-w2="">{"tax book only"}</td>
                              </tr>
                              <tr className="dl-total">
                                <td className="dt__td" colSpan="2">
                                  <b>{"Income Tax – October 2026 (1/12 of the year)"}</b>
                                </td>
                                <td className="dt__td dt__td--right nw num" data-label="Opening WDV 01-04-2026" data-w2="" data-t="">{"₹33,86,78,000.00"}</td>
                                <td className="dt__td dt__td--right nw num gl-b" data-label="October share" data-w2="">{"₹29,48,675.00"}</td>
                                <td className="dt__td" data-e="" />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="gl-note">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#info" />
                        </svg>
                        {"The income-tax book is kept for the tax computation only and is never posted to the ledgers (BR-07)."}
                      </p>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <span className="fd-spacer">{"Posts one journal: Dr 6301 Depreciation by department, Cr 1550 Accumulated depreciation · ₹13,10,150.00"}</span>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#check" />
                      </svg>
                      {"Post depreciation"}
                    </button>
                  </div>
                </form>
              </div>
              <details className="hk-sys" data-code="AC-X01">
                <summary>
                  <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#cog" />
                  </svg>
                  {"System – what runs automatically on this screen"}
                </summary>
                <ul>
                  <li data-code="AC-X01">
                    <b>{"AC-X01 · Posting engine"}</b>
                    {" – Posts the depreciation journal of AC-P01 and the disposal journals (gain or loss to 6301)."}
                  </li>
                  <li data-code="AC-X05">
                    <b>{"AC-X05 · Period lock guard"}</b>
                    {" – Depreciation can only be run for an open month."}
                  </li>
                </ul>
              </details>
              <div className="fd-toast" id="t-dep-posted" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Depreciation for October 2026 posted – ₹13,10,150.00"}
                  <small>{"Journal AJ/26-27/01560: Dr 6301 Depreciation by department, Cr 1550 Accumulated depreciation. The month-close check ‘Depreciation run’ is now done (AC-10). Written to the audit log with the user, time and the old and new values."}</small>
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
                  {"Asset added to the register"}
                  <small>{"It depreciates from the put-to-use month by its class (ACS-05). Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-link-saved" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#link" />
                </svg>
                <div className="fd-toast__text">
                  {"Engineering asset link saved"}
                  <small>{"The asset now shows its engineering record (MT-08). Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1001" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1001 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Hotel building and civil works. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1101" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1101 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Transformer 1000 kVA. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1102" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1102 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Main LT panel 2500 A. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1104" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1104 disposal recorded – waiting for the Financial Controller"}
                  <small>{"DG set 2 – 320 kVA. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1120" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1120 disposal recorded – waiting for the Financial Controller"}
                  <small>{"VRV outdoor bank A (floors 1–3). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1121" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1121 disposal recorded – waiting for the Financial Controller"}
                  <small>{"VRV outdoor bank B (floors 4–5). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1122" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1122 disposal recorded – waiting for the Financial Controller"}
                  <small>{"AHU – lobby. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1130" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1130 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Domestic transfer pump 1. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1135" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1135 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Heat pump water heater. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1140" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1140 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Lift 1 (guest). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1141" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1141 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Lift 2 (guest). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1142" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1142 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Lift 3 (service). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1150" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1150 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Fire pump set (main + jockey). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1151" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1151 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Fire alarm panel. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1160" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1160 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Sewage treatment plant 120 KLD. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1161" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1161 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Water treatment plant and softener. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1180" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1180 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Washer extractor 25 kg. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1183" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1183 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Tumble dryer 35 kg. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1240" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1240 disposal recorded – waiting for the Financial Controller"}
                  <small>{"UPS 60 kVA – front office and IT. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1301" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1301 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Split AC 2 TR – Ayurvedic Centre. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-0861" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-0861 disposal recorded – waiting for the Financial Controller"}
                  <small>{"DG set 3 (old) – 125 kVA. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1170" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1170 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Cold room – kitchen (2 chambers). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1235" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1235 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Combi oven Rational iCombi Pro. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1190" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1190 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Guest room TVs (92). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1191" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1191 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Guest room door locks (92). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1192" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1192 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Guest room safes (92). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1200" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1200 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Guest room furniture (92 rooms). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1210" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1210 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Restaurant and bar furniture. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1215" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1215 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Banquet furniture – Periyar and Meenachil. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1250" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1250 disposal recorded – waiting for the Financial Controller"}
                  <small>{"PMS and POS servers. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1251" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1251 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Front desk and outlet terminals (14). The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="t-disposed-fa-1260" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#arrow-left-right" />
                </svg>
                <div className="fd-toast__text">
                  {"FA-1260 disposal recorded – waiting for the Financial Controller"}
                  <small>{"Toyota Innova Crysta – airport car. The journal with the gain or loss posts on approval. Written to the audit log with the user, time and the old and new values."}</small>
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
